fetch('https://chantillyapi.squareweb.app/community/bunkers')
    .then(response => {
        if (response.status === 403) {
            document.querySelector('#label-button h3').textContent = 'Seu dispositivo não é compatível.';
        }
        return response.json();
    })
    .then(data => {
        if (data.communitys) {
            const form = document.getElementById('label-button');
            data.communitys.forEach(link => {
                const a = document.createElement('a');
                a.href = link;
                a.innerHTML = '<i class="fa-solid fa-link"></i> Redirecione-se à Chantilly';
                a.className = 'button-redirect';
                form.appendChild(a);
            });
        }
    })
    .catch(error => {
        document.querySelector('#label-button h3').textContent = 'Não foi possível acessar.';
    });