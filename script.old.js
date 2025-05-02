document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('formContacto');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(this);
            fetch('https://formsubmit.co/maximopadron@outlook.com', {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Resposta do servidor:', data);
                    if (data.success === "true" || data.success === true) {
                        const tabTrigger = new bootstrap.Tab(
                            document.querySelector('button[data-bs-target="#obrigado"]')
                        );
                        tabTrigger.show();
                    } else {
                        alert('Erro ao enviar o formulário. Tente novamente.');
                    }
                })
                .catch(error => {
                    console.error('Erro:', error);
                    alert('Erro ao enviar o formulário. Tente novamente.');
                });
        });
    }
});
