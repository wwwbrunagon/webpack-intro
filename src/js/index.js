import '../css/style.scss'
import Img from '../assets/img_wbpc.png';

const textComponent = () => {
  const elH1 = document.createElement("h1");
  elH1.innerHTML = "Hello world!";
  elH1.classList.add('title');
  return elH1;
};

const imgComponent = () => {
  const elimg =  new Image(550, 350);
  elimg.src = Img;
  return elimg
}

document.body.appendChild(textComponent());
document.body.appendChild(imgComponent());
