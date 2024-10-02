function somar() {
    var nomedopais = document.getElementById("nomedopais").value;
    var medalhasdeouro = parseFloat(document.getElementById("medalhasdeouro").value);
    var medalhasdeprata = parseFloat(document.getElementById("medalhasdeprata").value);
    var medalhasdebronze = parseFloat(document.getElementById("medalhasdebronze").value);
    var result = document.querySelector("#result");
    var medalhas = medalhasdebronze + medalhasdeprata + medalhasdeouro;
    document.getElementById('result').innerHTML = 'result' + result;
  
      result.innerHTML = `
      <p>País: ${nomedopais}</p>
      <p>Medalhas: ${medalhas}</p>
      `;
  }