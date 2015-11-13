//Definicion de la aplicacion
angular.module("cutregram",["ngRoute"]);

//En fase de config, inyectamos $httpProvider para configurar las cabeceras por defecto de los distintos
//metodos HTTP del servicio $http, q usamos para pedir los datos al servido
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

//En fase de config inyectamos $routeProvider para configurar las rutas de la app.

angular.module("cutregram").config(function($routeProvider){

    //Voy a definir la ruta de "Todos los Posts"
    $routeProvider.when("/todos",{
       controller:"PostCollectionCtrl",
       templateUrl:"views/PostCollection.html",
        //en "resolve" establecemos todas aquellas dependencias que tenga el controlador.
        //Tenemos que usar la anotacion de array en linea.
       resolve:{                          //Lo que hay en el resolve se ejecuta antes de la navegacion
           Posts: ["$http",function($http){
               return $http.get("http://cutregram-sp.appspot.com/api/1/posts");
           }]
       }
    });


    //Defino la ruta de "Mis posts"
    $routeProvider.when("/mios",{
       controller: "MisPostsCtrl" ,
       templateUrl:"views/MyPosts.html",
        //en "resolve" establecemos todas aquellas dependencias que tenga el controlador.
        //Tenemos que usar la anotacion de array en linea.
       resolve:{
           Posts:["$http", function($http){
               return  $http.get("http://cutregram-sp.appspot.com/api/1/posts/me");
           }]
       }
    });

    //Configuramos una ruta por defecto
    $routeProvider.otherwise({
        redirectTo:"/todos"
    });
});