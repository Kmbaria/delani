
function functionName() {
  var answr=document.getElementById("george").value;
  alert(answr+" we have receive your message.Thank you!!!");
}
$(document).ready(function(){
  $("#img1").click(function(){
    $("#img1").toggle();
    $("#dev1").toggle();
  })
  $("#dev1").click(function(){
    $("#dev1").toggle();
    $("#img1").toggle();
  })
  $("#img2").click(function(){
    $("#img2").toggle();
    $("#dev2").toggle();
  })
  $("#dev2").click(function(){
    $("#dev2").toggle();
    $("#img2").toggle();
  })
  $("#img3").click(function(){
    $("#img3").toggle();
    $("#dev3").toggle();
  })
  $("#dev3").click(function(){
    $("#dev3").toggle();
    $("#img3").toggle();
  })
})
