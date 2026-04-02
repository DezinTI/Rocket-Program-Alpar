const apiKey = "1485d2151698eedc84d5cc5ab38d3c9d";
const lang = "pt_br";
const units = 'metric'
const app = angular.module("weatherApp", []);

app.controller("weatherController", function ($scope, $http) {
    $scope.cityName = "";
    $scope.city = "";
    $scope.cardActive = false;
    $scope.temperature = "";
    $scope.feelsLike = "";
    $scope.minTemperature = "";
    $scope.maxTemperature = "";
    $scope.humidity = "";
    $scope.windVelocity = "";
    $scope.windOrientation = "";
    $scope.iconUrl = "";

    $scope.callApi = async() => {
        const city = $scope.city || localStorage.getItem("city") ||'são paulo';
        const response = await $http.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`
        );
        const { data } = response;
        const icon = data.weather[0].icon;

        console.log(data);
        $scope.iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
        $scope.temperature = Math.round(data.main.temp);
        $scope.maxTemperature = Math.round(data.main.temp_max);
        $scope.minTemperature = Math.round(data.main.temp_min);
        $scope.feelsLike = Math.round(data.main.feels_like);
        $scope.humidity = data.main.humidity.toLocaleString();
        $scope.windOrientation = data.wind.deg;
        $scope.cardActive = true;
        $scope.cityName = data.name;
        localStorage.setItem("city", data.name);
        $scope.$apply();

    };

    $scope.callApi();
});