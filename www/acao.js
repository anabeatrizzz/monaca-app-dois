$(function(){
  var texto = "";
  $(".numero, .operador").click(function(){
    texto += $(this).text()
    $("#caixaTexto").attr("value", texto)
  })
  $("#igual").click(function(){
    var caixaTexto = $("#caixaTexto").attr("value")
    $("#caixaTexto").attr("value", eval(caixaTexto))
  })
  $("#apagar").click(function(){
    $("#caixaTexto").attr("value", "")
    texto = ""
  })
})
