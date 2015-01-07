function rgb2hex(red, green, blue) {
  var rgb = blue | (green << 8) | (red << 16);
  return '#' + (0x1000000 + rgb).toString(16).slice(1)
}

//init
function init_colorwheel(){
  var cw = Raphael.colorwheel($(".colorwheel")[0],150);
  cw.input($("#color")[0]);

  cw.onchange(function(arg){
    console.log(arg)
    $("#r").val(Math.round(arg.r))
    $("#g").val(Math.round(arg.g))
    $("#b").val(Math.round(arg.b))
  })

  //rgb trigger
  $(".rgb").change( 
    function() {
      var r = $("#r").val()
      var g = $("#g").val()
      var b = $("#b").val()
      var hex = rgb2hex(r,g,b)
      cw.color(hex)
 }) 
}


window.onload = function() {
  init_colorwheel()
}
