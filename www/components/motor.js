function calcularconsumo() {
    var placa = document.getElementById('placa').value;
    var horas = document.getElementById('horas').value;
    var format = document.getElementById('format').value;
    
    if (placa === '' || horas === '' || format === '') {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (horas > 3) {
        alert("O limite máximo de horas é 3.");
        return;
    }

    if(format == "subcompacto") {
        document.getElementById('nome').textContent = +"R$" + horas * 3.50;
    }
    else if(format == "compacto") {
        document.getElementById('nome').textContent = "R$" + horas * 4;
    }
    else if(format == "hatch") {
        document.getElementById('nome').textContent = "R$" + horas * 4.50;
    }
    else if(format == "sedan") {
        document.getElementById('nome').textContent = "R$" + horas * 5;
    }
    else if(format == "suv") {
        document.getElementById('nome').textContent = "R$" + horas * 6;
    }
    else if(format == "pick") {
        document.getElementById('nome').textContent = "R$" + horas * 7;
    }
}


function novacompra() {
    document.getElementById('placa').value="";
    document.getElementById('format').selectedIndex = 0;
    document.getElementById('horas').value="";
    document.getElementById('nome').textContent = "RESULTADO";


    alert("Os dados foram limpos");
}