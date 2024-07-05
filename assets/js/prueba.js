$(document).ready(function () {
 
    // 1. Seleccionar las etiquetas "img".
    $("img");
    // 2. Seleccionar los elementos con id="imagen".
    $("#imagen");
    // 3. Seleccionar los elementos con clase="centrado".
    $(".centrado");
    //    4. Seleccionar los elementos con id="imagen" con clase="centrado" y que son
    //    etiqueta "img".
    $("img#imagen.centrado");
    //    5. Seleccionar las etiquetas "a" con clase="encabezado" dentro de una etiqueta
    //    "p".
    $("p a.encabezado");
    //    6. Seleccionar los elementos con id="imagen" o clase ="centrado".
    $("#imagen, .centrado");
    // 7. Seleccionar todos los elementos.
    $("*");
    // 8. Seleccionar los elementos con el atributo href.
    $("[href]");
    // 9. Seleccionar todos los input de tipo text.
    $("input[type='text']")
    // 10. Un evento que al hacer click en un párrafo, imprime por consola “click”.
    $("p").click(
        function(){
            console.log("Click");
        }
    )
    // 11. Modifica el precio del texto para que imprima $100.000:
    // <li class="vacaciones">
    // <h2>La Serena, Chile</h2>
    // <span class="valor">$120.000</span>
    // </li>
    $(".vacaciones .valor").text('$100.00');
    // 12. Al código anterior, ponle color amarillo de fondo a todos los elementos de la
    // clase “vacaciones”
    $(".vacaciones").css({
        "background" : "yellow"
    });
});