var lista = [1,"Juanita",true];

function tiposEnArray(list){
    var listaTipos = [];
    for(var i=0;i<list.length;i++){
        listaTipos += (typeof(list[i])+",");
    }
    return listaTipos;
}
console.log(tiposEnArray(lista));
