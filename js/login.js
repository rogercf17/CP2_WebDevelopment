 // Função para exibir a janela de login
 function showLoginPopup() {
    document.getElementById("loginPopup").style.display = "block";
  }

  // Função para verificar as credenciais do usuário e redirecionar
  function loginUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar as credenciais do usuário (lógica simples de if-else)
    if (username === "admin" && password === "12345") {
      alert("Login efetuado com sucesso!");
      window.location.href = "../pages/produtos.html"; // Redirecionar para a página principal
      return false; // Evitar que o formulário seja enviado
    } else {
      alert("Usuário ou senha incorretos. Tente novamente.");
      return false; // Evitar que o formulário seja enviado
    }
  }