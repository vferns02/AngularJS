
//Controlador encargado de la lógica correspondiente con vista de colecciones de mis posts.
angular.module("cutregram").controller("MisPostsCtrl",function($scope,Posts,Backend){

    $scope.posts = Posts.data;

    //sumamos un me gusta la post
    $scope.meGusta = function(post) {
        Backend.sumarMeGusta(post.id).then(
            function (respuesta) {
                post.likes++;
            }
        );

    };
    //Sumamos un no me gusta al post
    $scope.noMeGusta = function(post){
        Backend.sumarNoMeGusta(post.id).then(
            function(respuesta){
                post.dislike++;
            }
        );
    };
});