// Rolagem automática de scroll

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.scroll-links a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 60, // Ajusta a posição do cabeçalho fixo
                behavior: 'smooth' // Comportamento suave da rolagem
            });
        });
    });
});




// Menu


 // Seleciona o ícone do menu e a barra lateral
 const menuIcon = document.getElementById('menu-icon');
 const sidebarMenu = document.getElementById('sidebar-menu');
 
 // Alterna a visibilidade da barra lateral ao clicar no ícone do menu
 menuIcon.addEventListener('click', function() {
     sidebarMenu.classList.toggle('show'); // Mostra ou oculta a barra lateral
 });
 
 // Fecha a barra lateral ao clicar em um link e faz o scroll suave até a seção
 const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
 
 sidebarLinks.forEach(link => {
     link.addEventListener('click', function(event) {
         event.preventDefault(); // Previne o comportamento padrão do link
         const targetId = this.getAttribute('href'); // Obtém o ID da seção
         const targetSection = document.querySelector(targetId); // Seleciona a seção
 
         // Fecha a barra lateral
         sidebarMenu.classList.remove('show');
 
         // Faz o scroll suave até a seção correspondente
         window.scrollTo({
             top: targetSection.offsetTop - 60, // Ajusta o scroll para compensar o header fixo
             behavior: 'smooth'
         });
     });
 });





// Energia solar calculated

function calcularEconomia() {
    // Captura os valores inseridos pelo usuário
    var consumo = parseFloat(document.getElementById("consumo").value);
    var valorKwh = parseFloat(document.getElementById("valorKwh").value);
    var percentual = parseFloat(document.getElementById("percentual").value) / 100;

    // Verifica se os valores estão preenchidos corretamente
    if (isNaN(consumo) || isNaN(valorKwh) || isNaN(percentual)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Calcula a economia mensal
    var economia = consumo * valorKwh * percentual;

    // Exibe o resultado na página
    document.getElementById("resultado").innerHTML = "Economia Mensal Estimada: R$ " + economia.toFixed(2);
}




