( ()=> {
  const activeTopMenu = document.querySelector('#menu');
  const topMenu = document.querySelector('.top_nav--menu');
  const mainTitle = document.querySelector('.title-subtitle');

  activeTopMenu.onclick  = (event) =>  {
    event.preventDefault();
    topMenu.classList.toggle('responsive');
    mainTitle.classList.toggle('responsive-title');
  }
})(); 