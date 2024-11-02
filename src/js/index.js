document.addEventListener('DOMContentLoaded', () => {
    let cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      card.addEventListener('mouseover', (e) => {
        let positionX = window.innerWidth;
        let positionY = window.innerHeight;
  
        card.style.transform = `rotateY(${(e.clientX / positionX - 0.8) * 25}deg) rotateX(${(e.clientY / positionY - 0.8) * 25}deg) scale(0.9)`;
      });
  
      card.addEventListener('mouseout', () => {
        card.style.transform = ''; 
      });
    });
  });
  