
angular.module("cutregram").controller("DetallePostCtrl", function($scope,Post){
    $scope.post=Post.data;

    //Volvemos atras en el historico del navegador
    $scope.volver= function(){
      history.back()  ;
    };
});