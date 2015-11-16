
//Controlador encargado de la lógica correspondiente con vista de colecciones de posts.
angular.module("cutregram").controller("PostCollectionCtrl",function($scope,Posts,$location){

    //Almacenamos en local la coleccion de post completa para que n se muestren tods directamnte
    var posts= Posts.data;

    //Establecemos las propiedades del paginador
    $scope.paginador = {

        //Cambiamos de pagina
        cambioDePagina:function(){
            //Obtenemos el primer y ultimo elemento de la pagina a mostrar
            var primero = ($scope.paginador.paginaActual - 1)* $scope.paginador.elementosPorPagina;
            var ultimo = primero + $scope.paginador.elementosPorPagina;

            //Establecemos en al vista la pagina seleccionada
            $scope.posts = posts.slice(primero , ultimo);
        },

        //Pagina actual
        paginaActual:1,

        //total de elementos (post)
        totalElementos:posts.length,

        //elementos por pagina
        elementosPorPagina: 5
    };
    //forzadmos el cambio de pagina para que traiga la 1º pagina al inicio
    $scope.paginador.cambioDePagina();

    //Redirigir el navegador al detalle del post indicado.
    $scope.navegar = function(idPost){
       $location.path("/detalle/"+ idPost);

    };
});

        //Las entidades post vienen representadas por el siguiente JSON.
    //Solo las propiedades "text","iamge_url" y "coords" pueden enviarse en un alta;
    //El resto se informan en servidor de manera transparente
    /*
     {
     "id":1,
     "text":"lorem ipsum",
     "image_url":"http://imagen",
     "likes":0,
     "dislike":0
     "author": "user1",
     "coords" {
        "latitude":0.5,
        "longitude":-0.5
     }
     }
     */

    //Hacemos la peticion de posts al servidor
    /*
    $http.get("http://cutregram-sp.appspot.com/api/1/posts").then(

        //La peticion al servidor fue correcta
        function(respuesta){
            $scope.posts = respuesta.data;
        },

        //Ocurrio algo malo al ir al servidor
        function(error){
        }
    );

    $http.post("http://cutregram-sp.appspot.com/api/1/posts",{
       //"text":"que poco qeda",
        //"image_url":"data:image/jpeg;base64,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"
    });
    */
