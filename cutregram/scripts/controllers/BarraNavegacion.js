
//Controlador de la barra de navegacion

angular.module("cutregram").controller("BarraNavegacionCtrl", function($scope,$route){
    //comprobamos si la ruta navegada es /todos
    $scope.rutaEsTodos = function(){

      return $route.current && $route.current.$$route.originalPath === "/todos";
    };

    //comprobamos si la ruta navegada es /mios
    $scope.rutaEsMio = function () {
      return $route.current && $route.current.$$route.originalPath ==="/mios"
    };
});