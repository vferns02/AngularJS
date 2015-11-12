//Definicion de la aplicacion
angular.module("cutregram",[]);


angular.module("cutregram").config(function($httpProvider){

    //Configuramos el servicio $http para que envie la cabecera necesaria.
    // configurar http para que todas las peticiones qu hacems a traves de ese servicio metan la cabecera api-key
    $httpProvider.defaults.headers.common = {
        "X-Cutregram-Api-Key":"e196f8ae74494e1d9f4635274dcb0a7a"
    };

    //Configuramos las cabeceras por defecto para evitar problemas de CORS. (cruce de dominios)
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};

});