//LIGTHBOX
// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
    
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

//SAVE AND EDIT BUTTON 1
const paragraphEdit1 = document.getElementById("edit1");
const paragraphDesc1 = document.getElementById("editDesc1");
const edit_button1 = document.getElementById("edit-button1");
const end_button1 = document.getElementById("end-editing1");

edit_button1.addEventListener("click", function() {
  paragraphEdit1.contentEditable = true;
  paragraphDesc1.contentEditable = true;
  paragraphEdit1.style.backgroundColor = "grey";
  paragraphDesc1.style.backgroundColor = "grey";
} );

end_button1.addEventListener("click", function() {
  paragraphEdit1.contentEditable = false;
  paragraphDesc1.contentEditable = false;
  paragraphEdit1.style.backgroundColor = "black";
  paragraphDesc1.style.backgroundColor = "black";
} )

//SAVE AND EDIT BUTTON 2
const paragraphEdit2 = document.getElementById("edit2");
const paragraphDesc2 = document.getElementById("editDesc2");
const edit_button2 = document.getElementById("edit-button2");
const end_button2 = document.getElementById("end-editing2");

edit_button2.addEventListener("click", function() {
  paragraphEdit2.contentEditable = true;
  paragraphDesc2.contentEditable = true;
  paragraphEdit2.style.backgroundColor = "grey";
  paragraphDesc2.style.backgroundColor = "grey";
} );

end_button2.addEventListener("click", function() {
  paragraphEdit2.contentEditable = false;
  paragraphDesc2.contentEditable = false;
  paragraphEdit2.style.backgroundColor = "black";
  paragraphDesc2.style.backgroundColor = "black";
} )

//SAVE AND EDIT BUTTON 3
const paragraphEdit3 = document.getElementById("edit3");
const paragraphDesc3 = document.getElementById("editDesc3");
const edit_button3 = document.getElementById("edit-button3");
const end_button3 = document.getElementById("end-editing3");

edit_button3.addEventListener("click", function() {
  paragraphEdit3.contentEditable = true;
  paragraphDesc3.contentEditable = true;
  paragraphEdit3.style.backgroundColor = "grey";
  paragraphDesc3.style.backgroundColor = "grey";
} );

end_button3.addEventListener("click", function() {
  paragraphEdit3.contentEditable = false;
  paragraphDesc3.contentEditable = false;
  paragraphEdit3.style.backgroundColor = "black";
  paragraphDesc3.style.backgroundColor = "black";
} )

//SAVE AND EDIT BUTTON 4
const paragraphEdit4 = document.getElementById("edit4");
const paragraphDesc4 = document.getElementById("editDesc4");
const edit_button4 = document.getElementById("edit-button4");
const end_button4 = document.getElementById("end-editing4");

edit_button4.addEventListener("click", function() {
  paragraphEdit4.contentEditable = true;
  paragraphDesc4.contentEditable = true;
  paragraphEdit4.style.backgroundColor = "grey";
  paragraphDesc4.style.backgroundColor = "grey";
} );

end_button4.addEventListener("click", function() {
  paragraphEdit4.contentEditable = false;
  paragraphDesc4.contentEditable = false;
  paragraphEdit4.style.backgroundColor = "black";
  paragraphDesc4.style.backgroundColor = "black";
} )

//SAVE AND EDIT BUTTON 5
const paragraphEdit5 = document.getElementById("edit5");
const paragraphDesc5 = document.getElementById("editDesc5");
const edit_button5 = document.getElementById("edit-button5");
const end_button5 = document.getElementById("end-editing5");

edit_button5.addEventListener("click", function() {
  paragraphEdit5.contentEditable = true;
  paragraphDesc5.contentEditable = true;
  paragraphEdit5.style.backgroundColor = "grey";
  paragraphDesc5.style.backgroundColor = "grey";
} );

end_button5.addEventListener("click", function() {
  paragraphEdit5.contentEditable = false;
  paragraphDesc5.contentEditable = false;
  paragraphEdit5.style.backgroundColor = "black";
  paragraphDesc5.style.backgroundColor = "black";
} )

//SAVE AND EDIT BUTTON 6
const paragraphEdit6 = document.getElementById("edit6");
const paragraphDesc6 = document.getElementById("editDesc6");
const edit_button6 = document.getElementById("edit-button6");
const end_button6 = document.getElementById("end-editing6");

edit_button6.addEventListener("click", function() {
  paragraphEdit6.contentEditable = true;
  paragraphDesc6.contentEditable = true;
  paragraphEdit6.style.backgroundColor = "grey";
  paragraphDesc6.style.backgroundColor = "grey";
} );

end_button6.addEventListener("click", function() {
  paragraphEdit6.contentEditable = false;
  paragraphDesc6.contentEditable = false;
  paragraphEdit6.style.backgroundColor = "black";
  paragraphDesc6.style.backgroundColor = "black";
} )

/* TRYING TO FIX TITLE AND DESCIPTION FOR THE MODAL */


/* UPLOAD IMAGES BUTTON  */
