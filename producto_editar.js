console.log(location.search) // lee los argumentos pasados a este formulario
var id=location.search.substr(4)
console.log(id)
const { createApp } = Vue
createApp({
data() {
return {
id:0,
nombre:"",
imagen:"",
apellido:"",
edad:0,
url:'http://daniesc.pythonanywhere.com/productos/'+id,
}
},
methods: {
fetchData(url) {
fetch(url)
.then(response => response.json())
.then(data => {

console.log(data)
this.id=data.id
this.nombre = data.nombre;
this.imagen=data.imagen
this.apellido=data.apellido
this.edad=data.edad
this.turno=data.turno
})
.catch(err => {
console.error(err);
this.error=true
})
},
modificar() {
let producto = {
nombre:this.nombre,
apellido: this.apellido,
edad: this.edad,
turno: this.turno,
imagen:this.imagen
}
var options = {
body: JSON.stringify(producto),
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
alert("Registro modificado")
window.location.href = "/home/dani/Downloads/TFI/nuevo/templates/productos.html";
})
.catch(err => {
console.error(err);
alert("Error al modificar")
})
}
},
created() {
this.fetchData(this.url)
},
}).mount('#app')
