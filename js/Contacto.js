/* const form = document.querySelector('Form_contacto'); */
/* const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const mensaje = document.getElementById('mensaje');
const enviar = document.getElementsByClassName('Form_contacto')[0];  */

var enviar = document.getElementById('enviar')
enviar.addEventListener('click',function(e){
e.preventDefault()
var nombre = document.getElementById('nombre').value;
var email = document.getElementById('email').value;
var telefono = document.getElementById('telefono').value;
var mensaje = document.getElementById('mensaje').value;
var body = "Nombre:" + nombre + "<br/> email:" + email +  "<br/> telefono:" + 
    telefono + "<br/> mensaje:" + mensaje;

Email.send({
    Host : "smtp.gmail.com",
    Username : "arias0416@gmail.com",
    Password : "gaasavbdvgurklbv",
    To : 'arias0416@gmail.com',
    From :  email,
    Subject : mensaje,
    Body : body
}).then(
  message => alert("Mensaje enviado")
);
})
// 940AB43115432A1CC93BCFFFFD2F6FE07402 
//ncvrbqnoycimyjet
//gaasavbdvgurklbv(arias0416)//A39F3DFD2ABAA23EA6D1ACE16A5F149E167F
