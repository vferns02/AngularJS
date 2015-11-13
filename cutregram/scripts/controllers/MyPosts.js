
//Controlador encargado de la lógica correspondiente con vista de colecciones de mis posts.
angular.module("cutregram").controller("MisPostsCtrl",function($scope,$http){



    //Hacemos la peticion de mis posts al servidor
    $http.get("http://cutregram-sp.appspot.com/api/1/posts/me").then(

        //La peticion al servidor fue correcta
        function(respuesta){
            $scope.posts = respuesta.data;
        },

        //Ocurrio algo malo al ir al servidor
        function(error){
        }
    );

});