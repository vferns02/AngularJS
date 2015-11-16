
//Directiva que representa cada directiva en una coleccion de post

angular.module("cutregram").directive("elementoPost", function (Backend){
    return {
        //Con restric indicamos si usar la directiva como elemento(E) o como atributo(A)
        restrict: "AE",

        //Con template / templateUrl establecemos la vista de la directiva
        templateUrl:"views/ElementoPost.html",

        //Con scope establecemos la interfaz de comunicacion
        scope:{
            post: "=" //Con = establecemos enlace bidireccional.
        },
        //En el link establecemos la logica de la directiva y manipulamos el DOm en caso de necesitarlo
        link: function(scope){

            scope.meGusta = function() {
                Backend.sumarMeGusta(scope.post.id).then(
                    function () {
                        scope.post.likes++;
                    }
                );

            };

            scope.noMeGusta = function(){
                Backend.sumarNoMeGusta(scope.post.id).then(
                    function(){
                        scope.post.dislike++;
                    }
                );
            };
        }
    };
});