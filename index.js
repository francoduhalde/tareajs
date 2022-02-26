let usuario=prompt('ingrese el usuario "franco"');
let password=prompt('ingrese la contraseña "franco"');

if (usuario=='franco'){
    if(password=='franco'){
        var suma='Bienvenidos a mi pagina';
        document.getElementById('resultado').innerHTML = suma;
        let num1=parseFloat(prompt('ingrese 1er numero'));
        let num2=parseFloat(prompt('ingrese 2do numero'));
        let num3=parseFloat(prompt('ingrese 3er numero'));
        if(num3<=num1 && num2<=num1){
            let mayor=num1;
            var resultado='El numero mayor es igual a: '+mayor;
            document.getElementById('numeromayor').innerHTML = resultado;
        }
        if(num1<=num2 && num3<=num2){
            let mayor=num2;
            var resultado='El numero mayor es igual a: '+mayor;
            document.getElementById('numeromayor').innerHTML = resultado;
        }
        if(num1<=num3 && num2<=num3){
            let mayor=num3;
            var resultado='El numero mayor es igual a: '+mayor;
            document.getElementById('numeromayor').innerHTML = resultado;
        };
        function iniciar() {
            document.getElementById('idmensaje').innerHTML = 'Hola mundoo';
        }
    }else{
        var suma='Contraseña incorrecta';
        document.getElementById('resultado').innerHTML = suma;
    }
}
else{
    var suma='Usuario incorrecto';
    document.getElementById('resultado').innerHTML = suma;
}


