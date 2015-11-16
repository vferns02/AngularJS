
angular.module("cutregram").controller("DetallePostCtrl", function($scope,Post,Backend){
    $scope.post=Post.data;

    //Volvemos atras en el historico del navegador
    $scope.volver= function(){
      history.back()  ;
    };

    //Enviamos al servidor un nuevo comentario
    $scope.enviarComentario = function(){

        var comentario={
            text:$scope.comentario
        };

        //enviamos el comentario al servidor
        Backend.enviarComentario($scope.post.id,comentario).then(

            //si ha ido bien
            function(respuesta){
                //añadimos el coemntario creado en la coleccion del post.Nos ahorramos ir de nuevo a por el post.
                $scope.post.comments.unshift(comentario)
            },
            function (error) {
                //TODO: mostrar el error
            }
        );


    };

});