
angular.module("cutregram").controller("PostCollectionCtrl",function($scope,$http){
//e196f8ae74494e1d9f4635274dcb0a7a
    //Hacemos la peticion de posts al servidor
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
       "text":"viti manda"
    });




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

});