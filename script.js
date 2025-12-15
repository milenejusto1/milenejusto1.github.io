// Referência ao formulário de contato
const form = document.getElementById("formContato");

// Referência ao campo de telefone
const telefoneInput = document.getElementById("telefone");


// === MÁSCARA DINÂMICA PARA O CAMPO TELEFONE ===

/*
 A máscara de telefone é aplicada em tempo real conforme o usuário digita.
 Seu objetivo é:
 - Impedir a entrada de letras ou caracteres inválidos
 - Garantir que apenas números sejam aceitos
 - Formatar automaticamente o número no padrão brasileiro
   (DD) 99999-9999, incluindo o DDD entre parênteses

 Esse processo melhora a usabilidade, evita erros de digitação
 e garante padronização dos dados enviados pelo formulário.
*/
telefoneInput.addEventListener("input", function () {
    let valor = telefoneInput.value;

    // Remove qualquer caractere que não seja número
    // Isso garante que letras, símbolos ou espaços extras não sejam aceitos
    valor = valor.replace(/\D/g, "");

    // Após digitar os dois primeiros números,
    // eles são considerados o DDD e recebem os parênteses
    if (valor.length > 2) {
        valor = "(" + valor.substring(0, 2) + ") " + valor.substring(2);
    }

    // Quando o número atinge o tamanho correto,
    // o hífen é inserido automaticamente no padrão brasileiro
    if (valor.length > 10) {
        valor = valor.substring(0, 10) + "-" + valor.substring(10, 14);
    }

    // Atualiza o valor do campo já formatado
    telefoneInput.value = valor;
});


// === ENVIO E VALIDAÇÃO DO FORMULÁRIO ===

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio automático da página

    const email = document.getElementById("email").value.trim();
    const telefone = telefoneInput.value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verifica se todos os campos foram preenchidos
    if (email === "" || telefone === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Validação do formato do e-mail usando expressão regular
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
        alert("Digite um e-mail válido. Ex: usuario@dominio.com");
        return;
    }

    // Verifica se o telefone contém DDD e número completo
    if (telefone.length < 14) {
        alert("Digite um telefone válido com DDD.");
        return;
    }

    // Simulação de envio bem-sucedido
    alert("Mensagem enviada com sucesso!");
    form.reset(); // Limpa o formulário após o envio
});


// === BOTÃO DE TEMA CLARO / ESCURO ===
const btnTema = document.getElementById("btnTema");
const emojiTema = document.querySelector(".emoji-tema");

// Alterna entre tema claro e escuro ao clicar no botão
btnTema.addEventListener("click", () => {
    document.body.classList.toggle("tema-escuro");

    // Troca o emoji conforme o tema ativo
    if (document.body.classList.contains("tema-escuro")) {
        emojiTema.textContent = "🌙";
    } else {
        emojiTema.textContent = "☀️";
    }
});
