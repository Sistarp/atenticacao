document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário padrão

        const link = document.getElementById('link').value;
        const senha = document.getElementById('senha').value;

        // Verifica as credenciais (substitua pelos seus próprios dados)
        if (verificarCredenciais(link, senha)) {
            window.location.href = 'https://www.sistarp.hipershops.com.br';
        } else {
            alert('Acesso negado. Verifique suas credenciais.');
        }
    });
});

function verificarCredenciais(link, senha) {
    const linkCapitalizado = link.charAt(0).toUpperCase() + link.slice(1);
    const linksSenhasValidos = {
        'Andre': '258461@ndrE',
        'Ricardo': 'Sistarp720',
        // Adicione mais pares de link-senha conforme necessário
    };

    // Verifica se o link e a senha correspondem aos pares válidos
    if (linkCapitalizado in linksSenhasValidos && linksSenhasValidos[linkCapitalizado] === senha) {
        return true; // Credenciais válidas
    } else {
        return false; // Credenciais inválidas
    }
}