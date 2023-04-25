/* Index */

function count_down(obj) {
            var element = document.getElementById('count');
             
            element.innerHTML = 50 - obj.value.length;
             
            if (50 - obj.value.length < 0) {
                element.style.color = '#ff0000';

            } else {
                element.style.color = '#46ff0a';
            }
        }
        
/* Collapsible buttons */

// toggle collapse of items in info section

$(document).ready(function() {
      function toggleContent(content) {
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      }
  
      // collapse all open content
      function collapseAllOpenContent() {
       const colls = document.getElementsByClassName('collapsible');
        for (const coll of colls) {
          if (coll.classList.contains('btnactive')) {
            coll.classList.remove('btnactive');
            toggleContent(coll.nextElementSibling);
          }
        }
      }
  
      const colls = document.getElementsByClassName('collapsible');
      for (const coll of colls) {
        coll.addEventListener('click', function() {
          if (!this.classList.contains('btnactive')) {
            collapseAllOpenContent();
          }
          this.classList.toggle('btnactive');
          toggleContent(this.nextElementSibling);
        });
      }
        });
        
/* FORM */

function validar(){
  var nombre = document.getElementById("name").value;
  var apellido = document.getElementById("lastname").value;
  var correo = document.getElementById("email").value;
  var telefono = document.getElementById("cellphone").value;
  var mensaje = document.getElementById("message").value;

  error.style.padding = "10px";

  var texto;
  if(name.length < 1){
    texto = "Es necesario que coloque su nombre.";
    document.getElementById("error").innerHTML = texto;
    return false;
  }
  if(lastname.length < 1){
    texto = "Es necesario que coloque su apellido.";
    document.getElementById("error").innerHTML = texto;
    return false;
  }
   if(email.length < 1){
    texto = "Es necesario que coloque su correo electrónico.";
    document.getElementById("error").innerHTML = texto;
    return false;
  }
  if(email.indexOf("@") == -1){
    texto = "Es necesario que coloque un correo electrónico válido.";
    document.getElementById("error").innerHTML = texto;
    return false;
  }
  if(cellphone.length < 1){
    texto = "Es necesario que coloque su número de teléfono.";
    document.getElementById("error").innerHTML = texto;
    return false;
  }
  if(cellphone.length > 15){
    texto = "Es necesario que coloque un número de teléfono válido.";
    document.getElementById("error").innerHTML = texto;
    return false;
  }
  if(message.length < 1){
    texto = "Es necesario que coloque un mensaje.";
    document.getElementById("error").innerHTML = texto;
    return false;
  }
  if(message.length > 50){
    texto = "El mensaje debe tener como máximo 50 caracteres.";
    document.getElementById("error").innerHTML = texto;
    return false;
  }
  alert('Su mensaje ha sido enviado con éxito.'+ ' Le daremos una respuesta en las próximas horas, ' + nombre +'!');
  return true;
}

function validate(){
  var name = document.getElementById("name").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var cellphone = document.getElementById("cellphone").value;
  var message = document.getElementById("message").value;
  
  error.style.padding = "10px";

  var text;
   if(name.length < 1){
    text = "You need to put your name.";
    document.getElementById("error").innerHTML = text;
    return false;
  }
  if(lastname.length < 1){
    text = "You need to put your lastname.";
    document.getElementById("error").innerHTML = text;
    return false;
  }
  if(email.length < 1){
    text = "You need to put your email.";
    document.getElementById("error").innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1){
    text = "You need to put a valid email.";
    document.getElementById("error").innerHTML = text;
    return false;
  }
  if(cellphone.length < 1){
    text = "You need to put your cellphone number.";
    document.getElementById("error").innerHTML = text;
    return false;
  }
  if(cellphone.length > 15){
    text = "You need to put a valid cellphone number.";
    document.getElementById("error").innerHTML = text;
    return false;
  }

  if(message.length < 1){
    text = "You need to put a message.";
    document.getElementById("error").innerHTML = text;
    return false;
  }
  if(message.length > 50){
    text = "The message cannot be more than 50 words.";
    document.getElementById("error").innerHTML = text;
    return false;
  }
  alert('Your message has been sent successfully.'+ ' We will give you an answer in the next few hours, ' + name +'!');
  return true;
}



function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* RECAPTCHA */

window.onload = function() {
    var $recaptcha = document.querySelector('#g-recaptcha-response');

    if($recaptcha) {
        $recaptcha.setAttribute("required", "required");
    }
};

function table() {
        var cactus = document.getElementById("cactus");
        var op1 = document.getElementById("op1");
        var op2 = document.getElementById("op2");
        var op3 = document.getElementById("op3");
        var op4 = document.getElementById("op4");
        op1.style.display = cactus.value == "1" ? "block" : "none";
        op2.style.display = cactus.value == "2" ? "block" : "none";
        op3.style.display = cactus.value == "3" ? "block" : "none";
        op4.style.display = cactus.value == "4" ? "block" : "none";
                  }

/* ZOOM */

function imageZoom(imgID, resultID) {
  var img, lens, result, cx, cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);
  /*create lens:*/
  lens = document.createElement("DIV");
  lens.setAttribute("class", "img-zoom-lens");
  /*insert lens:*/
  img.parentElement.insertBefore(lens, img);
  /*calculate the ratio between result DIV and lens:*/
  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;
  /*set background properties for the result DIV:*/
  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
  /*execute a function when someone moves the cursor over the image, or the lens:*/
  lens.addEventListener("mousemove", moveLens);
  img.addEventListener("mousemove", moveLens);
  /*and also for touch screens:*/
  lens.addEventListener("touchmove", moveLens);
  img.addEventListener("touchmove", moveLens);
  function moveLens(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image:*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    /*calculate the position of the lens:*/
    x = pos.x - (lens.offsetWidth/2);
    y = pos.y - (lens.offsetHeight/2);
    /*prevent the lens from being positioned outside the image:*/
    if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
    if (x < 0) {x = 0;}
    if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
    if (y < 0) {y = 0;}
    /*set the position of the lens:*/
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    /*display what the lens "sees":*/
    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}