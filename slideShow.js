'using strict'

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//     if (n > x.length) {
//     slideIndex = 1
//     }
//     if (n < 1) {
//     slideIndex = x.length
//     }
//     for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//     }
//     x[slideIndex-1].style.display = "block";  
// }


// let index = 0;

// const colors = ['box-shadow: 0 0 16px #333', '0 0 16px rgb(0, 238, 255)'];

// const changeColor = document.querySelectorAll('.image-btn').forEach(image => {
//     image.onclick = () => {
        
//         changeColor.addEventListener('click', function onClick(){
//             changeColor.style.boxShadow = colors[index];

//             index = index >= colors.length - 1 ? 0 : index + 1;
//         })
//     }
//   });

//   function changeColor(element, color){
//     element.style.boxShadow = color;
//   }









// const btn = document.querySelectorAll('.image-btn');

// let index = 0;

// const colors = ['box-shadow: 0 0 16px #333', 'box-shadow: 0 0 16px rgb(0, 238, 255)'];

// btn.addEventListener('click', function onClick() {
//  btn.style.boxShadow = colors[index];
//  index = index >= colors.length - 1 ? 0 : index + 1;
// });


// function changeColor(element, color) {
//      element.style.boxShadow = color; 
// }

// const btn = document.querySelectorAll('.image-btn');

// const marked = 'box-shadow: 0 0 16px rgb(0, 238, 255)';

// const deafault = 'box-shadow: 0 0 16px #333';

// function changeColor(){
//     btn.addEventListener('click', function onClick() {
//         if(btn.style.boxShadow === deafault) {
//             btn.style.boxShadow = marked;
//         } else if(btn.style.boxShadow === marked) {
//             btn.style.boxShadow = deafault;
//         }
//     })
// }

// const btns = document.querySelectorAll('.image-btn');

// let index = 0;

// const colors = ['box-shadow: 0 0 16px rgb(0, 238, 255)', 'box-shadow: 0 0 16px #333'];

// for (const btn of btns){

// btn.addEventListener('click', function onClick() {
//   btn.style.boxShadow = colors[index];

//   index = index >= colors.length - 1 ? 0 : index + 1;
// });

// }





// const btn = document.querySelector('#1');

// let index = 0;

// const colors = ['box-shadow: 0 0 16px rgb(0, 238, 255)', 'box-shadow: 0 0 16px #333'];


// btn.addEventListener('click', function onClick() {
//   btn.style.boxShadow = colors[index];

//   index = index >= colors.length - 1 ? 0 : index + 1;
// });



// function changeColor() {
//     document.querySelectorAll('.image-btn').style.boxShadow = '0 0 16px rgb(0, 238, 255)';
// }

// const white = '0 0 16px #333';
// const blue = '0 0 16px rgb(0, 238, 255)';
// const markedButton = 'image-btn-marked';

// document.addEventListener('DOMContentLoaded', function() {
//     const btns = document.querySelectorAll('.image-btn');
  
//     for (let btn of btns) {
//       btn.addEventListener('click', (btn) => {
//         btn.target.style.boxShadow = blue;
//         btn.target.className = markedButton;
//         console.log(btn.target.style.boxShadow);
//         console.log(btn.target.className);
      
//       })
//     }
//   });

// document.addEventListener('DOMContentLoaded', function() {
//     const btns = document.querySelectorAll('.image-btn .mySlides');
  
//     for (let btn of btns) {
//       btn.addEventListener('click', (btn) => {


//         let color = btn.target.style.boxShadow;
//         btn.target.style.boxShadow = (color === blue) ? white : blue;

//         btn.target.className = markedImage;

//         console.log(btn.target.style.boxShadow);
//         console.log(btn.target.className);

//       })
//     }
//   });


const white = '0 0 16px #333';
// const empty = '';
const blue = '0 0 16px rgb(0, 238, 255)';
const markedImage = 'image-marked';
const unmarkedImage = 'mySlides';
const marked = document.querySelectorAll('.image-btn');

for(let mark of marked) {
    mark.addEventListener('click', (mark) => {
      // let color = mark.setAttribute('style', blue)
        let color = mark.target.style.boxShadow;
      //  let color = mark.target.getAttribute('style')
        mark.target.style.boxShadow = (color === blue) ? white : blue;

        
      // if(color === blue){
      //   color = white;
      // }
      // if(color === white){
      //   color = blue;
      // }
      //  mark.target.setAttribute('style', 'box-shadow : 0 0 16px rgb(0, 238, 255)')
      // console.log(color);
      // mark.setAttribute('style', (color === blue) ? white : blue);

      let selected = mark.target.className;
      mark.target.className = (selected === markedImage) ? unmarkedImage : markedImage;
      console.log(selected);

      // const m = document.querySelectorAll(markedImage);
      //   m.forEach(element => {
      //     element.style.boxShadow = (element.style.boxShadow === blue) ? white : blue;
      //   });

    })
}



let slideIndex = 0;
let markedImgs = null;
function slideShow(){

markedImgs = document.querySelectorAll('.image-marked');
const hideImgs = document.querySelector('.image-container');
  hideImgs.style.display = 'none';
  // const close = document.querySelector('.image-container span');
  // close.style.display = 'block';

  addSlideShow(markedImgs);
  
  playSlideShow();
  
  // if(document.querySelector('.slide-show-container').getAttribute('style') === "block"){
  // const close = document.querySelector('.container');
  // close.addEventListener('click', () => {
  // document.querySelector('.slide-show-container').style.display = 'none';
  // document.querySelector('.image-container').style.display = 'block';
  // }  
  // )};
}



function addSlideShow(markedImg) {
  let counter = 1;
  //  if(markedImg.length <= 1){
  //    alert('Please select more than 1 image!')
  //  }
  for (i = 0; i < markedImg.length; i++) {
    let slideShowImg = document.createElement('img');
    slideShowImg.setAttribute('id', counter);
    slideShowImg.src = markedImg[i].getAttribute('src');
    // slideShowImg.setAttribute('height', '300px');
    // slideShowImg.setAttribute('width', '600px');
    // slideShowImg.setAttribute('margin-left', 'auto');
    // slideShowImg.setAttribute('margin-right', 'auto');
    // slideShowImg.setAttribute('margin-top', '200px');
    // slideShowImg.setAttribute('display', 'none');
    document.querySelector('.slide-show-container').appendChild(slideShowImg);
    slideShowImg.style.display = 'none';
    counter++;
  }
}

function playSlideShow() {

  const imgs = document.querySelectorAll('.slide-show-container img');
  document.querySelector('.slide-show-container span').style.display = 'block';
  // const close = document.querySelector('.container span');

   imgs.forEach(img => {
      img.setAttribute('style', 'display : none')
    // img.style.display = 'none';
  })

  // slideIndex++;
  // document.querySelector('.slide-show-container').style.display = 'none';
  if (slideIndex >= imgs.length) {
    slideIndex = 0;
  }
  // imgs[slideIndex - 1].style.display = "block";
  imgs[slideIndex++].setAttribute('style', 'display : block; height : 400px; width : 900px; margin-left : auto; margin-right : auto; border-radius : 100px; box-shadow : 0 0 16px rgb(0, 238, 255)');
  // close.setAttribute('style', 'display : block; color : white; font-size : 50px; float : right; cursor : pointer;')
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
  
}
// function slideShowPlay(){
//   slideIndex ++;
//   // document.querySelector('.slide-show-container').style.display = 'none';
//   if (slideIndex > markedImg.length) {
//     slideIndex = 1
//   }
//   // markedImg[slideIndex - 1].style.display = "block";
//   markedImg[slideIndex - 1].setAttribute('display', 'block');
//   setTimeout(slideShow, 2000);
// }





// const images = document.querySelectorAll(markedButton); 

// let i = 0;

// setInterval(function slideShow(){ 
//   if(i == 0) {
//     images[i].style.display = 'block';
//   } else if(i == images.length ) {
//     images[i - 1].style.display = 'none';
//     images[0].style.display = 'block';
//     i = 0;
//   } else {
//     images[i - 1].style.display = 'none';
//     images[i].style.display = 'block';
//   }

//   i++;

// }, 2000);







// const images = document.querySelectorAll(markedButton);
// var imageNumber = 0;
// var imageLength = images.length - 1;

// function slideShow(x){
//   imageNumber += x;
//   if(imageNumber > imageLength){
//     imageNumber = 0;
//   }
//   if(imageNumber < 0){
//     imageNumber = imageLength;
//   }
//   document.querySelector(markedButton).src = images[imageNumber];

//   setTimeout(slideShow(0), 2000);

// }


// var imageIndex = 0;

// function carousel() {

//   var i;
//   var markedImages = document.querySelectorAll(".image-btn-marked");
//   var imageContainer = document.querySelector('.image-container');
// //   var imageBtns = document.querySelectorAll('.image-btn');
// //   console.log(imageBtns)


// //   for (i = 0; i < imageBtns.length; i++) {
// //     imageBtns.style.display = "none";
// //   }
    


//     //   console.log(imageBtns);
// //   imageBtns.target.style.display = 'none';
// //   markedImages.target.style.width = '500px';
// //   markedImages.target.style.height = '500px';
// //   console.log(markedImages)
//   for (i = 0; i < markedImages.length; i++) {
//     // markedImages[i].style.display = "block";
//     // const newDiv = document.createElement("div");
//     // document.body.appendChild(newDiv);
//     // newDiv.display = 'block';
//     // imageContainer.display = 'none';
//     // const newImg = document.createElement('img');
//     // document.body.appendChild(newImg);


//     markedImages[i].style.display = "none";
//     markedImages[i].style.width = '1200px';
//     markedImages[i].style.height = '500px';

//     // markedImages[i].style.marginLeft = 'auto';
//     // markedImages[i].style.marginRight = 'auto';
//     // markedImages[i].style.;
//   }
//   imageIndex++;
//   if (imageIndex > markedImages.length) {
//     imageIndex = 1
//   }
//   markedImages[imageIndex - 1].style.display = "block";  
//   setTimeout(carousel, 2000);
// }


// function slideShow(){
// var hideDiv = document.querySelector('.image-container');
// hideDiv.style.display = 'block';
// var markedImages = document.querySelectorAll(".image-btn-marked");
//     for (i = 0; i < markedImages.length; i++) {
//     var slideShow = document.createElement('img').setAttribute(markedImages[i].style.display = 'block', '');
//     document.div.appendChild(slideShow); 
// }
// }  
   













// const btn = document.getElementById('image-btn');

// btn.addEventListener('click', function onClick() {
//   btn.style.boxShadow = '0 0 16px #00ffec';
// //   btn.style.color = 'blue';
// });








