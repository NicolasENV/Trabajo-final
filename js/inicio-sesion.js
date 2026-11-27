document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-login");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const mensajeEstado = document.getElementById("mensaje-estado");

    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        mensajeEstado.className = "mensaje-estado";

        if (!emailValido) {
            mensajeEstado.textContent = "Por favor, ingresa un correo electrónico válido.";
            mensajeEstado.classList.add("error");
            emailInput.focus();
            return;
        }

        if (password.length < 6) {
            mensajeEstado.textContent = "La contraseña debe tener al menos 6 caracteres.";
            mensajeEstado.classList.add("error");
            passwordInput.focus();
            return;
        }

        mensajeEstado.textContent = `¡Bienvenido/a de nuevo, ${email}!`;
        mensajeEstado.classList.add("exito");
        window.location.href = "index.html";
    });
});
