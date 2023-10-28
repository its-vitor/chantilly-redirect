function checkAndRedirect() {
    var inputLink = document.getElementById('link-input').value;
    if (inputLink.includes("aminoapps.com")) {
        window.location.href = inputLink;
    } else {
        alert("O seu link de perfil não é válido.");
    }
}