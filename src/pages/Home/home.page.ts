import './home.style.scss';

export const Home = () => {
  const homeElement = document.querySelector('.page--home');
  if (homeElement == null) {
    return;
  }

  const homeClickHandler = (e: Event) => {
    console.log(e.target);
  };

  homeElement.addEventListener('click', (e) => homeClickHandler(e));
};
