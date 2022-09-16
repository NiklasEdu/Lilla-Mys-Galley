document.querySelectorAll('.image-container img').forEach(image => {
  image.onclick = () => {
    document.querySelector('.popup-image').style.display = 'block';
    document.querySelector('.popup-image img').src = image.getAttribute('src');
  }
});

document.querySelector('.popup-image span').onclick = () => {
  document.querySelector('.popup-image').style.display = 'none';
}

//  document.querySelectorAll('.popup-image i').forEach(image => {
//    image.onclick = () => {
//      document.querySelector('.popup-image-title-comment-rating').style.display = 'block';
//      document.querySelector('.popup-image img').src = image.getAttribute('src');
//    }
//  });

 document.querySelector('.popup-image i').onclick = () => {
    document.querySelector('.popup-image-title-comment-rating').style.display = 'block';
    document.querySelector('.popup-image').style.display = 'none';
 }

 document.querySelector('.popup-image-title-comment-rating .fa.fa-edit').onclick = () => {
  document.querySelector('.popup-edit-attribute').style.display = 'block';

  
}
