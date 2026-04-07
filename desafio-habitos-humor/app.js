(function () {
  'use strict';

  angular.module('habitosApp', []).controller('HabitosController', HabitosController);

  function HabitosController($filter, $timeout) {
    var vm = this;
    // Chave unica para persistir os dados no navegador.
    var storageKey = 'habitos_humor_records_v1';

    vm.moodLevels = [
      { value: 1, label: '1 - Muito triste', emoji: '😢' },
      { value: 2, label: '2 - Neutro', emoji: '😐' },
      { value: 3, label: '3 - Feliz', emoji: '🙂' },
      { value: 4, label: '4 - Muito feliz', emoji: '😄' }
    ];

    vm.form = createEmptyForm();
    vm.editingId = null;
    vm.habitName = '';
    vm.filters = {
      date: '',
      moodLevel: ''
    };

    vm.records = readStorage();
    vm.filteredRecords = [];
    vm.chartRows = [];
    vm.metrics = {
      totalRecords: 0,
      avgMood: 0,
      habitCompletion: 0,
      currentStreak: 0
    };

    vm.toast = {
      show: false,
      message: '',
      type: 'info'
    };

    vm.saveMood = saveMood;
    vm.addHabit = addHabit;
    vm.removeHabit = removeHabit;
    vm.getMoodEmoji = getMoodEmoji;
    vm.getMoodLabel = getMoodLabel;
    vm.deleteRecord = deleteRecord;
    vm.startEdit = startEdit;
    vm.cancelEdit = cancelEdit;
    vm.clearFilters = clearFilters;

    vm.applyFilters = applyFilters;

    init();

    function init() {
      applyFilters();
      updateMetrics();
    }

    function createEmptyForm() {
      return {
        date: toDateInput(new Date()),
        moodLevel: '',
        observation: '',
        habits: defaultHabits()
      };
    }

    function defaultHabits() {
      return [
        { name: 'Beber agua', done: false },
        { name: 'Exercicio', done: false },
        { name: 'Estudo', done: false },
        { name: 'Leitura', done: false },
        { name: 'Dormir cedo', done: false }
      ];
    }

    function addHabit() {
      var name = (vm.habitName || '').trim();
      if (!name) {
        showToast('Informe o nome do habito.', 'error');
        return;
      }

      vm.form.habits.push({ name: name, done: false });
      vm.habitName = '';
      showToast('Habito adicionado.');
    }

    function removeHabit(index) {
      vm.form.habits.splice(index, 1);
      showToast('Habito removido.');
    }

    function saveMood() {
      if (!vm.form.date || !vm.form.moodLevel) {
        showToast('Preencha data e nivel de humor.', 'error');
        return;
      }

      var existing = null;

      if (vm.editingId) {
        existing = vm.records.find(function (record) {
          return record.id === vm.editingId;
        });

        // Evita duas entradas com a mesma data.
        var duplicatedDate = vm.records.find(function (record) {
          return record.date === vm.form.date && record.id !== vm.editingId;
        });

        if (duplicatedDate) {
          showToast('Ja existe registro nessa data.', 'error');
          return;
        }
      } else {
        existing = vm.records.find(function (record) {
          return record.date === vm.form.date;
        });
      }

      var payload = {
        id: vm.editingId || (existing ? existing.id : createId()),
        date: vm.form.date,
        moodLevel: Number(vm.form.moodLevel),
        observation: (vm.form.observation || '').trim(),
        habits: vm.form.habits.map(function (habit) {
          return {
            name: habit.name,
            done: !!habit.done
          };
        })
      };

      if (existing) {
        var index = vm.records.findIndex(function (record) {
          return record.id === existing.id;
        });
        vm.records[index] = payload;
        showToast('Registro atualizado com sucesso.');
      } else {
        vm.records.push(payload);
        showToast('Registro salvo com sucesso.');
      }

      writeStorage(vm.records);
      vm.form = createEmptyForm();
      vm.editingId = null;
      applyFilters();
      updateMetrics();
    }

    function startEdit(id) {
      var record = vm.records.find(function (item) {
        return item.id === id;
      });

      if (!record) {
        return;
      }

      vm.editingId = record.id;
      // Copia simples para o form sem alterar o item original durante a edicao.
      vm.form = {
        date: record.date,
        moodLevel: record.moodLevel,
        observation: record.observation || '',
        habits: (record.habits || []).map(function (habit) {
          return { name: habit.name, done: !!habit.done };
        })
      };
      showToast('Registro carregado para edicao.');
    }

    function cancelEdit() {
      vm.editingId = null;
      vm.form = createEmptyForm();
      showToast('Edicao cancelada.');
    }

    function applyFilters() {
      vm.filteredRecords = vm.records
        .filter(function (record) {
          var dateOk = true;
          var moodOk = true;

          if (vm.filters.date) {
            dateOk = record.date === vm.filters.date;
          }

          if (vm.filters.moodLevel) {
            moodOk = Number(record.moodLevel) === Number(vm.filters.moodLevel);
          }

          return dateOk && moodOk;
        })
        .sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        });
    }

    function clearFilters() {
      vm.filters.date = '';
      vm.filters.moodLevel = '';
      applyFilters();
    }

    function updateMetrics() {
      vm.metrics.totalRecords = vm.records.length;

      if (!vm.records.length) {
        vm.metrics.avgMood = 0;
        vm.metrics.habitCompletion = 0;
        vm.metrics.currentStreak = 0;
        return;
      }

      var totalMood = vm.records.reduce(function (sum, record) {
        return sum + Number(record.moodLevel || 0);
      }, 0);
      vm.metrics.avgMood = totalMood / vm.records.length;

      var habitsDone = 0;
      var habitsTotal = 0;

      vm.records.forEach(function (record) {
        (record.habits || []).forEach(function (habit) {
          habitsTotal += 1;
          if (habit.done) {
            habitsDone += 1;
          }
        });
      });

      // Indicador geral de conclusao de habitos.
      vm.metrics.habitCompletion = habitsTotal ? Math.round((habitsDone / habitsTotal) * 100) : 0;
      vm.metrics.currentStreak = calculateStreak(vm.records);
      vm.chartRows = buildLast7Days(vm.records);
    }

    function buildLast7Days(records) {
      // Mapa por data para montar o grafico dos 7 dias rapidamente.
      var mapByDate = {};

      records.forEach(function (record) {
        mapByDate[record.date] = record;
      });

      var rows = [];
      for (var i = 6; i >= 0; i -= 1) {
        var day = new Date();
        day.setHours(0, 0, 0, 0);
        day.setDate(day.getDate() - i);

        var dateKey = toDateInput(day);
        var rec = mapByDate[dateKey];
        var moodLevel = rec ? Number(rec.moodLevel || 0) : 0;
        var habitPercent = 0;

        if (rec && rec.habits && rec.habits.length) {
          var done = rec.habits.filter(function (h) {
            return h.done;
          }).length;
          habitPercent = Math.round((done / rec.habits.length) * 100);
        }

        rows.push({
          dateKey: dateKey,
          label: $filter('date')(day, 'dd/MM'),
          moodLevel: moodLevel,
          moodPercent: Math.round((moodLevel / 4) * 100),
          habitPercent: habitPercent
        });
      }

      return rows;
    }

    function calculateStreak(records) {
      var dates = records
        .map(function (record) {
          return record.date;
        })
        .sort(function (a, b) {
          return new Date(b) - new Date(a);
        });

      if (!dates.length) {
        return 0;
      }

      var streak = 1;
      for (var i = 1; i < dates.length; i += 1) {
        var previous = new Date(dates[i - 1]);
        var current = new Date(dates[i]);
        var diffInDays = Math.round((previous - current) / 86400000);

        if (diffInDays === 1) {
          streak += 1;
        } else if (diffInDays === 0) {
          continue;
        } else {
          break;
        }
      }

      return streak;
    }

    function deleteRecord(id) {
      vm.records = vm.records.filter(function (record) {
        return record.id !== id;
      });

      if (vm.editingId === id) {
        vm.editingId = null;
        vm.form = createEmptyForm();
      }

      writeStorage(vm.records);
      applyFilters();
      updateMetrics();
      showToast('Registro excluido.');
    }

    function getMoodEmoji(levelValue) {
      var match = vm.moodLevels.find(function (level) {
        return Number(level.value) === Number(levelValue);
      });
      return match ? match.emoji : '❔';
    }

    function getMoodLabel(levelValue) {
      var match = vm.moodLevels.find(function (level) {
        return Number(level.value) === Number(levelValue);
      });
      return match ? match.label : 'Nao informado';
    }

    function createId() {
      return Date.now() + '_' + Math.random().toString(16).slice(2);
    }

    function readStorage() {
      try {
        var raw = localStorage.getItem(storageKey);
        return raw ? JSON.parse(raw) : [];
      } catch (error) {
        return [];
      }
    }

    function writeStorage(records) {
      localStorage.setItem(storageKey, JSON.stringify(records));
    }

    function showToast(message, type) {
      vm.toast.message = message;
      vm.toast.type = type || 'info';
      vm.toast.show = true;

      // Fecha automaticamente a notificacao.
      $timeout(function () {
        vm.toast.show = false;
      }, 2200);
    }

    function toDateInput(date) {
      return $filter('date')(date, 'yyyy-MM-dd');
    }
  }

  HabitosController.$inject = ['$filter', '$timeout'];
})();
