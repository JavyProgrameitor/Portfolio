document.addEventListener('DOMContentLoaded', () => {
  let cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
   
      let positionX = window.innerWidth;
      let positionY = window.innerHeight;

   
      let moveX = (e.clientX / positionX - 0.5) * 50; 
      let moveY = (e.clientY / positionY - 0.5) * 50; 

     
      card.style.transform = `rotateY(${moveX}deg) rotateX(${moveY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      // Reset the rotation on mouseleave
      card.style.transform = '';
    });
  });
});
