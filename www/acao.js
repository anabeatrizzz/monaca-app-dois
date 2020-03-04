$(function(){
  /*var soma = 0;
  var subtracao = 0
  var divisao = 0;
  var multiplicacao = 0;
  var textoOp = "";*/
  var texto = "";
  var p = 0;
  var op = 0;
  var s = 0;
  $(".numero, .operador").click(function(){
    $("#caixaTexto").attr("value", $(this).text())
    texto += $(this).text()
    $("#caixaTexto").attr("value", texto)

    var p = Number(texto.substring(0, 1))
    var op = Number(texto.substring(1, 2))
    var s = Number(texto.substring(2, 3))
    $("#caixaTexto").attr("value", eval(`${p} ${op} ${s}`))
    //alert(texto)
    /*soma += Number($(this).text())
    alert(soma)*/
  })

  /*$("#igual").click(function(){
    $("#caixaTexto").attr("value", eval())
  })
  $(".operador").click(function(){
    $("#caixaTexto").attr("value", $(this).text())
    textoOp += $(this).text()
    $("#caixaTexto").attr("value", textoOp)
  })*/
})