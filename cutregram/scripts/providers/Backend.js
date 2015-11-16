
angular.module("cutregram").provider("Backend", function ($httpProvider) {

   var urlBackend = "";
    return {

        //Con esta funcion establecemos el ApiKey dek Banckend.
        establecerApiKey :function (valor){
            $httpProvider.defaults.headers.common = {
                "X-Cutregram-Api-Key":valor
            };

        },

        //con esta funcion habilitamos el cruce de dominio en las peticiones
        habilitarPeticionesCors: function() {
            $httpProvider.defaults.headers.post = {};
            $httpProvider.defaults.headers.put = {};
            $httpProvider.defaults.headers.patch = {};

        },

        establecerUrlBackend: function(valor){
        urlBackend= valor;

        },

        //Habilitamos el factory que se inyectara en fase run
        $get:["$http",function($http){
            return {
                //Obtenemos todos los posts
                obtenerTodosLosPosts: function(){
                    return $http.get(urlBackend + "/posts",{
                        cache:true
                    });
                },

                  //Obtenemos los posts del usuario en ssion

                obtenerMisPosts : function(){
                     return $http.get(urlBackend + "/posts/me",{
                        cache:true
                     });
                 },

                //Sumamos un megusta al post indicado
                sumarMeGusta: function(idPost){
                    return $http.post(urlBackend + "/posts/" + idPost + "/like" );
                },

                //sumamos un nomegusta al post indicado

                sumarNoMeGusta:function(idPost){
                    return $http.post(urlBackend + "/posts/" + idPost + "/dislike");
                }
            };

        }]
    };


});