//Semáforo
function trafficLight(onclick){
    if(onclick=='red'){
        document.getElementById('img_traffic_light').src="img/red_light.png";
    } else if(onclick=='yellow'){
        document.getElementById('img_traffic_light').src="img/yellow_light.png";
    } else if(onclick=='green'){
        document.getElementById('img_traffic_light').src="img/green_light.png";
    } else {
        document.getElementById('img_traffic_light').src="img/all_off_light.png";
    }
}

//CelsiusparaFahrenheit
function toFahrenheit() {
    const C = document.getElementById('inputCelcius').value;
    Number(C);
    const F = C*1.8+32;
    document.getElementById('inputFahrenheit').value=F;
}

//FahrenheitparaCelsius
function toCelcius() {
    const F = document.getElementById('inputFahrenheit').value;
    Number(F);
    const C = (F-32)/1.8;
    document.getElementById('inputCelcius').value=C;
}

//CalcularIMC
function imc() {
    const altura = document.getElementById('inputAltura').value;
    Number(altura);
    const peso = document.getElementById('inputPeso').value;
    Number(peso);
    const IMC = peso/(altura*altura);
    document.getElementById('inputIMC').value=IMC;
}

//TabelaCarros
