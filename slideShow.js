'using strict';

const white = '0 0 16px #333';
const blue = '0 0 16px rgb(0, 238, 255)';
const markedImage = 'image-marked';
const unmarkedImage = 'mySlides';
const marked = document.querySelectorAll('.image-btn');

for(let mark of marked) {
    mark.addEventListener('click', (mark) => {
        let color = mark.target.style.boxShadow;
        mark.target.style.boxShadow = (color === blue) ? white : blue;

      let selected = mark.target.className;
      mark.target.className = (selected === markedImage) ? unmarkedImage : markedImage;
      console.log(selected);
    })
}



let slideIndex = 0;
let markedImgs = null;
function slideShow(){

markedImgs = document.querySelectorAll('.image-marked');
const hideImgs = document.querySelector('.image-container');
  hideImgs.style.display = 'none';

  addSlideShow(markedImgs);
  
  playSlideShow();
}



function addSlideShow(markedImg) {
  let counter = 1;

  for (i = 0; i < markedImg.length; i++) {
    let slideShowImg = document.createElement('img');
    slideShowImg.setAttribute('id', counter);
    slideShowImg.src = markedImg[i].getAttribute('srcset');
    document.querySelector('.slide-show-container').appendChild(slideShowImg);
    slideShowImg.style.display = 'none';
    counter++;
  }
}

function playSlideShow() {

  const imgs = document.querySelectorAll('.slide-show-container img');
  document.querySelector('.slide-show-container span').style.display = 'block';

   imgs.forEach(img => {
      img.setAttribute('style', 'display : none')
  })

  if (slideIndex >= imgs.length) {
    slideIndex = 0;
  }
  imgs[slideIndex++].setAttribute('style', 'display : block; height : 400px; width : 900px; margin-left : auto; margin-right : auto; border-radius : 100px; box-shadow : 0 0 16px rgb(0, 238, 255)');
  setTimeout(playSlideShow, 2000);

}


function closeSlideShow() {
  document.querySelector('.slide-show-container span').addEventListener('click', () => {
    document.querySelector('.slide-show-container').setAttribute('style', 'display : none');
    document.querySelector('.image-container').setAttribute('style', 'display : block; display : flex; flex-wrap : wrap; justify-content : center;');
    document.querySelectorAll('.image-marked').forEach(img => {
      img.setAttribute('style', 'box-shadow : 0 0 16px #333');
      img.setAttribute('class', 'mySlides');
      document.querySelectorAll('.slide-show-container img').forEach( img => {
        img.remove();
      })
    });
  });
  clearTimeout(playSlideShow);
  
}
