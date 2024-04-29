document.getElementById('ageModal').style.display = 'block';

function checkAge() {
    var age = document.getElementById('ageInput').value;
    if (age >= 18) {
        // Se idade for maior ou igual a 18, fecha o modal
        document.getElementById('ageModal').style.display = 'none';
    } else {
        // Se idade for menor que 18, redireciona para outra página
        window.location.href = "http://example.com"; // Altere para o URL desejado
    }
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    document.getElementById('ageModal').style.display = "none";
}
