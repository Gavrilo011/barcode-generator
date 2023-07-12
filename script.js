
function go(){
  
  var value = document.getElementById("usr").value;
  JsBarcode("#barcode", value);
}

downloadBarCode =function (el){
  var canvas = document.getElementById("barcode");
  var image = canvas.toDataURL("image/jpg");
  el.href = image;
};