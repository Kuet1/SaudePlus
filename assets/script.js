
const header = document.querySelector("header");
const botaoMenu = document.querySelector(".menu-toggle");
const linksMenu = document.querySelectorAll("#menu-principal a");
const modalDialog = document.querySelector("#modal-confirmacao");
const botaoFecharModal = document.querySelector(".fechar-modal");
const contactForm = document.querySelector(".contact-form");
const heroButton = document.querySelector(".hero-button");

function abrirMenu(){
    header.classList.add("menu-aberto");
    botaoMenu.setAttribute("aria-expanded", "true");
    botaoMenu.setAttribute("aria-label", "Fechar menu");
}

function fecharMenu(){
    header.classList.remove("menu-aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", "Abrir Menu");
}

function menuEstaAberto(){
    return header.classList.contains("menu-aberto");
}

botaoMenu.addEventListener("click", () => {
    if (menuEstaAberto()){
        fecharMenu();
    } else {
        abrirMenu();
    }
});

linksMenu.forEach((link) => {
    link.addEventListener("click", fecharMenu);
})

document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && menuEstaAberto()) {
        fecharMenu();
        botaoMenu.focus();
    }
})

document.addEventListener("click", (evento) => {
    if (menuEstaAberto() && !header.contains(evento.target)){
        fecharMenu();
    }
});

const telaDesktop = window.matchMedia("(min-width: 768px)");

telaDesktop.addEventListener("change", (evento) => {
    if (evento.matches) {
        fecharMenu();
    }
})

botaoFecharModal.addEventListener("click", () =>
{
    modalDialog.close();
})

contactForm.addEventListener("submit", (evento) =>
{
    evento.preventDefault();

    modalDialog.showModal();

    contactForm.reset();
})

heroButton.addEventListener("click", (evento) => {
    evento.preventDefault();

    modalDialog.showModal();
})