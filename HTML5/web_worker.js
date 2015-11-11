
//Tarea que se ejecuta en segundo plano

function countdown (start){

    //notificamos el numero al worker
      postMessage(start);

    //restamos 1 al contador
    start = start -1;

    //esperamos 2 segundos y llamamos de nuevo a la funcion
    setTimeout(function() {countdown(start)},2000);
};
//iniciamos la cuanta atras desde 10
countdown(10);