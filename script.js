// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".
// En la primera lista tendréis que hacer lo siguiente:
//(HECHO)    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.

//(HECHO)    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)
//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!

window.addEventListener("load", onLoad);

function onLoad() {
  console.log("hi");
  //modificcacion 1 de la lista1
  modificacion1List1();
  //modificcacion 2 de la lista1
  modificacion2List1();
  //creacion de la lsita 2 con 3 botones y las clases corespondientes
  crearList2();
  //añadir atibuto "disabled" al ultimo botones
  desabilitaBtn5();
}

//anade las clases en a los elementos span
function modificacion1List1() {
  //salimos hasta la etiqueta "ul"
  let spanSelcted = document.querySelector(".selected");
  let elementoPadre = spanSelcted.parentElement.parentElement;
  let nodeList = elementoPadre.childNodes;
  // console.log(nodeList); //mustar la lista "ul" que posee una lista de etiquetas "il"
  // console.log("*************************************");

  let contador = 1;
  for (var i = 0; i < nodeList.length; i++) {
    if (nodeList[i] instanceof HTMLLIElement) {
      let il = nodeList[i].children;
      //antes de ser modificado
      //console.log(il[0]);
      il[0].classList.add("element-" + contador);
      //DESPUES DE MODIFICAR
      //console.log(il[0]);
      contador++;
    }
  }
  //console.log("*************************************");
}
//borra el ejemplo 2 y 4 de la lista 1
function modificacion2List1() {
  //salimos hasta la etiqueta "ul"
  let spanSelcted = document.querySelector(".selected");
  let elementoPadre = spanSelcted.parentElement.parentElement;
  let nodeList = elementoPadre.childNodes;
  // console.log(nodeList); //mustar la lista "ul" que posee una lista de etiquetas "il" completa
  nodeList[3].remove();
  nodeList[6].remove();
  // console.log(nodeList); //mustar la lista "ul" que posee una lista de etiquetas "il" una vez se ha eliminado los pares
}
// Crear lista2.
function crearList2() {
  //Nos ubicamos en la lista2
  let list2 = document.getElementById("list2");
  console.log(list2);

  //Creamos los botones con las clases correspondientes
  let button1 = document.createElement("BUTTON");
  button1.classList.add("element-1");
  button1.innerHTML = "texto ejemplo 1";

  let button3 = document.createElement("BUTTON");
  button3.classList.add("element-3");
  button3.innerHTML = "texto ejemplo 3";

  let button5 = document.createElement("BUTTON");
  button5.classList.add("element-5");
  button5.setAttribute("id", "btn5"); //añadimos un id que sera necesrio mas trade
  button5.innerHTML = "texto ejemplo 5";

  //Creamos li.
  let li1 = document.createElement("LI");
  let li3 = document.createElement("LI");
  let li5 = document.createElement("LI");

  //Agregamos los botones a las listas y las etiquetas "LI" a la etiqueta "UL"
  li1.appendChild(button1);
  list2.appendChild(li1);

  li3.appendChild(button3);
  list2.appendChild(li3);

  li5.appendChild(button5);
  list2.appendChild(li5);
}
//modifica el ultumo boton
function desabilitaBtn5() {
  //Nos ubicamos en la lista2
  let btn5 = (document.getElementById("btn5").disabled = true);
}
