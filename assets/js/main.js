let listaMiembros = [
    {
        nombre: "Juan Pérez",
        dni: 12312312,
        email: "juanperez@gmail.com",
        vencimiento: new Date(2020,09,10, 00,00)
    },
    {
        nombre: "Manjula Pérez",
        dni: 36936936,
        email: "manjulaperez@gmail.com",
        vencimiento: new Date(2020,09,10, 00,00)
    },
    {
        nombre: "Pablo Pérez",
        dni: 45645645,
        email: "pabloperez@gmail.com",
        vencimiento: new Date(2020,09,10, 00,00)
    },
    {
        nombre: "Cristina Pérez",
        dni: 789789789,
        email: "cristinaperez@gmail.com",
        vencimiento: new Date(2020,09,10, 00,00)
    },
    {
        nombre: "María Pérez",
        dni: 14714714,
        email: "mariaperez@gmail.com",
        vencimiento: new Date(2020,09,10, 00,00)
    }
    ];
let $box = document.querySelector("div");

let $formConsulta = document.querySelector("#formConsulta");
$formConsulta.addEventListener("submit",function(e){
    e.preventDefault();

    let nombreConsulta = $formConsulta.querySelector("#nombre").value;
    console.log(nombreConsulta);
    let hoy = new Date();
    console.log(hoy);
    let nombre = listaMiembros.find(function(integrante){
        return integrante.nombre == nombreConsulta;
    });
    console.log(nombre.vencimiento);
    if(nombre.vencimiento >= hoy){
        let mensaje = document.createElement("p");
        mensaje.innerHTML = "Te encuentras habilitado";
        $box.after(mensaje);
        console.log("estas habilitado");
    }else{
        let mensaje = document.createElement("p");
        mensaje.innerHTML = "Tienes vencida tu suscripcion";
        $box.after(mensaje);
        console.log("Tienes vencida tu suscripcion");
    }
    $formConsulta.reset();
});



let $formRegistro = document.querySelector("#formRegistro");
$formRegistro.addEventListener("submit",function(e){
    e.preventDefault();

    let $nombre = $formRegistro.querySelector("#nombre").value;
    let $dni = parseInt($formRegistro.querySelector("#dni").value);
    let $email = $formRegistro.querySelector("#email").value;
    let $fecha = $formRegistro.querySelector("#fecha").value;
    // let nuevoMiembro = {$nombre,$dni,$email,$fecha};

    function agregarMiembros(nombre, dni, email, fecha){
        this.nombre = nombre;
        this.dni = dni;
        this.email = email;
        this.vencimiento = fecha;
    }
    let nuevoMiembro = new agregarMiembros ($nombre,$dni,$email,$fecha);
    listaMiembros.push(nuevoMiembro);
    console.log(listaMiembros);
    $formRegistro.reset();
});