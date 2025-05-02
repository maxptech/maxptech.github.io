document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('formContacto');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();  // DEVE estar exatamente assim!

            const formData = new FormData(this);
            fetch('https://formsubmit.co/ajax/maximopadron@outlook.com', {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success === true || data.success === "true") {
                        // Remova a classe ativa de todas as abas
                        document.querySelectorAll('.tab-pane').forEach(tab => {
                            tab.classList.remove('show', 'active');
                        });
                        // Exiba diretamente a aba de "Obrigado"
                        const obrigadoPane = document.getElementById('obrigado');
                        if (obrigadoPane) {
                            obrigadoPane.classList.add('show', 'active');
                        }
                    } else {
                        alert('Erro ao enviar formulário: ' + JSON.stringify(data));
                    }
                })
                .catch(error => {
                    console.error('Erro:', error);
                    alert('Erro ao enviar formulário: ' + error);
                });
        });
    }
});
document.querySelectorAll('#mainTab button[data-bs-target]').forEach(btn => {
    btn.addEventListener('click', () => {
        const obrigado = document.getElementById('obrigado');
        if (obrigado) {
            obrigado.classList.remove('show', 'active');
        }
    });
});