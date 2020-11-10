// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".
// En la primera lista tendréis que hacer lo siguiente:
//    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.
//    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)
//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!

window.addEventListener("load", onLoad);

function onLoad() {
  console.log("hi");
  //funcion1 de lista1
  fun1List1();
}

//anade las clases en a los elementos span
function fun1List1() {
  //salimos hasta la etiqueta "ul"
  let spanSelcted = document.querySelector(".selected");
  let elementoPadre = spanSelcted.parentElement.parentElement;
  let nodeList = elementoPadre.childNodes;
  console.log(nodeList); //mustar la lista "ul" que posee una lista de etiquetas "il"
  console.log("*************************************");

  let contador = 1;
  for (var i = 0; i < nodeList.length; i++) {
    if (nodeList[i] instanceof HTMLLIElement) {
      let il = nodeList[i].children;
      //antes de ser modificado
      console.log(il[0]);
      il[0].classList.add("element-" + contador);
      console.log(il[0]);
      console.log("");
      contador++;
    }
  }
  console.log("*************************************");
}
