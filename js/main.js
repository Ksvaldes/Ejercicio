let lista = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

let root = document.querySelector("#root");

// FUNCION AGREGAR AL DOM

function agregar_al_dom(){

    //USO DEL FOR

    // PARAMETROS EXISTENTES: CONTENIDO (PRIMERA OPCION) E INDICE (SEGUNDA OPCION)
    lista.forEach(function (contenido, indice){
        let div = document.createElement("Div");
        div.innerHTML = '<h1 class = "letra">'+ contenido + '</h1>';
    
        root.appendChild(div);
    });
}
agregar_al_dom();

//FUNCION ACTIVAR LETRAS

function activar_letra(){

    //APLICA A TODOS LOS ELEMENTOS CON LA CLASE DE LETRA ↓
    let las_cosas_del_dom = document.querySelectorAll(".letra");
    las_cosas_del_dom.forEach(function(){console.log("hola mundo")});
}

activar_letra();

