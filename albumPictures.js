// function enlargeImg(){
//     // var theImage = document.getElementsByClassName("content");
//     var theImage = document.getElementsById(["img1"]);
//     theImage.width = theImage.width * 2;
//     theImage.height = theImage.height * 2;
//   };

//    enlargeImg();

var modal = document.getElementById("gallery-item1");

var img = document.getElementById("img1");

var span = document.getElementsByClassName("close")[0];

img.onclick = function() {
    // modal.style.display = "block";
    img.style.display = "block";
    img.src = this.src;
    
  }

span.onclick = function() {
modal.style.display = "none";
}

// window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }