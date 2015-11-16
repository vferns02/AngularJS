
//Filtro que escribe una firma dados un usuario y una fecha
angular.module("cutregram").filter("Firma", function ($filter){

    //Los filtros siempre retornas funciones
    //Ademas, siempre tienen almens un parametro que es el dato de entrada
    return function(autor,fecha){
        return "Publicado por " + autor + " en " + $filter("date")(fecha,"medium");

    };
});