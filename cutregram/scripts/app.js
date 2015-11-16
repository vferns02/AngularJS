//Definicion de la aplicacion
angular.module("cutregram",["ngRoute","angular-loading-bar","ui.bootstrap"]);

//En fase de config, inyectamos $httpProvider para configurar las cabeceras por defecto de los distintos
//metodos HTTP del servicio $http, q usamos para pedir los datos al servido
angular.module("cutregram").config(function(BackendProvider,Properties){

   BackendProvider.establecerApiKey(Properties.apiKey);
   BackendProvider.habilitarPeticionesCors();
   BackendProvider.establecerUrlBackend(Properties.backendUrl);



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
           Posts: ["Backend",function(Backend){
              return Backend.obtenerTodosLosPosts();
           }]  //Aqui estamos en fase de run
       }
    });


    //Defino la ruta de "Mis posts"
    $routeProvider.when("/mios",{
       controller: "MisPostsCtrl" ,
       templateUrl:"views/MyPosts.html",
        //en "resolve" establecemos todas aquellas dependencias que tenga el controlador.
        //Tenemos que usar la anotacion de array en linea.
       resolve:{
           Posts:["Backend", function(Backend){
              return Backend.obtenerMisPosts();
           }]
       }
    });

    //Definir la ruta de DetallePost
    $routeProvider.when("/detalle/:idPost",{
        controller:"DetallePostCtrl",
        templateUrl:"views/DetallePost.html" ,
        resolve:{
            Post:["Backend","$route", function(Backend,$route){

                return Backend.obtenerPost($route.current.params.idPost);
            }]

        }
    });

    //Configuramos una ruta por defecto
    $routeProvider.otherwise({
        redirectTo:"/todos"
    });
});