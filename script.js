const slider = document.querySelector('.slider');

function activatee(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}
document.addEventListener('click',activatee,false);

const projetoSlider = document.querySelector('.projetoSlider');

function activate(e) {
  const items = document.querySelectorAll('.projetoItem');
  e.target.matches('.projetoNext') && projetoSlider.append(items[0])
  e.target.matches('.projetoPrev') && projetoSlider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);

function init(e) {
  if (!e.target.closest('.projeto')) return;
  let hero = document.querySelector('div[data-pos="0"]');
  let target = e.target.parentElement;
  hero.addEventListener('click', function() {
    hero.classList.toggle('fullscreen');
  });
  [target.dataset.pos,hero.dataset.pos] = [hero.dataset.pos,target.dataset.pos];
}

window.addEventListener('click',init,false);