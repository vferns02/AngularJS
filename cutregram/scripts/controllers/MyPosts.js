
//Controlador encargado de la lógica correspondiente con vista de colecciones de mis posts.
angular.module("cutregram").controller("MisPostsCtrl",function($scope,Posts,Backend){

    $scope.posts = Posts.data;

    //Redirigir el navegador al detalle del post indicado.
    $scope.navegar = function(idPost){
        //TODO:Navegar.
        alert("Navegar al post " + idPost);

    };
});