document.addEventListener('DOMContentLoaded', function() {
    var input1 = document.getElementById('nome');
    var input2 = document.getElementById('telefone');
    var input3 = document.getElementById('email');
    var textarea = document.getElementById('mensagem');
    var botao = document.getElementById('btnEnviar');

    botao.disabled = true;

    function verificarCampos() {
      if(input1.value.trim() !== '' && input2.value.trim() !== '' && 
         input3.value.trim() !== '' && textarea.value.trim() !== '') {
        botao.disabled = false;
      } else {
        botao.disabled = true;
      }
    }

    input1.addEventListener('keyup', verificarCampos);
    input2.addEventListener('keyup', verificarCampos);
    input3.addEventListener('keyup', verificarCampos);
    textarea.addEventListener('keyup', verificarCampos);
  });

  function popup(){
    alert("Mensagem enviada!!!")
  }