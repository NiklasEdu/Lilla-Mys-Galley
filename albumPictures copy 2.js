
'use strict';

//ZOOM POPUP IMAGES
document.querySelectorAll('.image-container img').forEach(image => {
  image.onclick = () => {
    document.querySelector('.popup-image').style.display = 'block';
    document.querySelector('.popup-image img').src = image.getAttribute('srcset');
    document.querySelector('.big-container').setAttribute('style', 'overflow : hidden;')

  }
});

document.querySelector('.popup-image i').onclick = () => {
  // document.querySelectorAll('.image-container img').forEach(image => {
  //   document.querySelector('.popup-image-title-comment-rating img').src = image.getAttribute('src');
  // })
  document.querySelector('.popup-image-title-comment-rating img').src = document.querySelector('.popup-image img').getAttribute('src');
  document.querySelector('.popup-image-title-comment-rating').setAttribute('style', 'display: flex; align-content: flex-start; justify-content: center; align-items: baseline; flex-direction: column; flex-wrap: nowrap;')

  document.querySelector('.popup-image-title-comment-rating').style.display = 'block';
    document.querySelector('.popup-image').style.display = 'none';
  }


  
document.querySelector('.popup-image span').onclick = () => {
  document.querySelector('.popup-image').style.display = 'none';
  document.querySelector('.big-container').setAttribute('style', 'overflow : visble;')
}


document.querySelector('.popup-image-title-comment-rating span').onclick = () => {
  document.querySelector('.popup-image-title-comment-rating').style.display = 'none';
  document.querySelector('.popup-image').style.display = 'block';
}






//TITEL POPUP FORM
 document.querySelector('.popup-image-title-comment-rating #title').onclick = () => {
  document.querySelector('.popup-edit-title').style.display = 'block';
}

//CLOSE TITLE
document.querySelector('.popup-edit-title span').onclick = () => {
  document.querySelector('.popup-edit-title').style.display = 'none';
}

//COMMENT POPUP FORM

document.querySelector('.popup-image-title-comment-rating #comment').onclick = () => {
  document.querySelector('.popup-edit-comment').style.display = 'block';
} 

//CLOSE COMMENT
document.querySelector('.popup-edit-comment span').onclick = () => {
  document.querySelector('.popup-edit-comment').style.display = 'none';
}

//RATING POPUP FORM

 document.querySelector('.popup-image-title-comment-rating #rating').onclick = () => {
  document.querySelector('.popup-edit-rating').style.display = 'block';
}

//CLOSE RATING

document.querySelector('.popup-edit-rating span').onclick = () => {
  document.querySelector('.popup-edit-rating').style.display = 'none';
}
