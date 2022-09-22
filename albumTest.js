//LIGTHBOX
// Open the Modal

const urlSrc = '..\\server\\json\\resultat.json';
const urlGetPost = 'http://localhost:3000/resultat';

let chilIdLive = this.chilidLive;
let parentIdLive = this.parentIdLive;


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

end_button1.addEventListener("click", async function() {
  paragraphEdit1.contentEditable = false;
  paragraphDesc1.contentEditable = false;
  paragraphEdit1.style.backgroundColor = "black";
  paragraphDesc1.style.backgroundColor = "black";

  // UPDATES THE TITLE IN THE MODAL WHEN THE BUTTON IS PRESSED
let title1 = document.getElementById('mySlidesHeadline1').innerText = document.getElementById('edit1').innerText;
let description1 = document.getElementById('mySlidesDescription1').innerText = document.getElementById('editDesc1').innerText;

let resultat = await myFetch(urlSrc);

const idx = resultat.findIndex(item=>item.id === 1);

resultat[idx].title = title1;
resultat[idx].description = description1;

resultat = await myFetch(urlGetPost, 'POST', resultat);



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

end_button2.addEventListener("click", async function() {
  paragraphEdit2.contentEditable = false;
  paragraphDesc2.contentEditable = false;
  paragraphEdit2.style.backgroundColor = "black";
  paragraphDesc2.style.backgroundColor = "black";

  // UPDATES THE TITLE IN THE MODAL WHEN THE BUTTON IS PRESSED
  let title2 = document.getElementById('mySlidesHeadline2').innerText = document.getElementById('edit2').innerText;
let description2 = document.getElementById('mySlidesDescription2').innerText = document.getElementById('editDesc2').innerText;

let resultat = await myFetch(urlSrc);

const idx = resultat.findIndex(item=>item.id === 2);

resultat[idx].title = title2;
resultat[idx].description = description2;

resultat = await myFetch(urlGetPost, 'POST', resultat);



  

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

end_button3.addEventListener("click", async function() {
  paragraphEdit3.contentEditable = false;
  paragraphDesc3.contentEditable = false;
  paragraphEdit3.style.backgroundColor = "black";
  paragraphDesc3.style.backgroundColor = "black";

  // UPDATES THE TITLE IN THE MODAL WHEN THE BUTTON IS PRESSED
  let title3 = document.getElementById('mySlidesHeadline3').innerText = document.getElementById('edit3').innerText;
let description3 = document.getElementById('mySlidesDescription3').innerText = document.getElementById('editDesc3').innerText;

let resultat = await myFetch(urlSrc);

const idx = resultat.findIndex(item=>item.id === 3);

resultat[idx].title = title3;
resultat[idx].description = description3;

resultat = await myFetch(urlGetPost, 'POST', resultat);


  

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

end_button4.addEventListener("click", async function() {
  paragraphEdit4.contentEditable = false;
  paragraphDesc4.contentEditable = false;
  paragraphEdit4.style.backgroundColor = "black";
  paragraphDesc4.style.backgroundColor = "black";

  // UPDATES THE TITLE IN THE MODAL WHEN THE BUTTON IS PRESSED
let title4 = document.getElementById('mySlidesHeadline4').innerText = document.getElementById('edit4').innerText;
let description4 = document.getElementById('mySlidesDescription4').innerText = document.getElementById('editDesc4').innerText;

let resultat = await myFetch(urlSrc);

const idx = resultat.findIndex(item=>item.id === 4);

resultat[idx].title = title4;
resultat[idx].description = description4;

resultat = await myFetch(urlGetPost, 'POST', resultat);


  

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

end_button5.addEventListener("click", async function() {
  paragraphEdit5.contentEditable = false;
  paragraphDesc5.contentEditable = false;
  paragraphEdit5.style.backgroundColor = "black";
  paragraphDesc5.style.backgroundColor = "black";

  // UPDATES THE TITLE IN THE MODAL WHEN THE BUTTON IS PRESSED
  let title5 = document.getElementById('mySlidesHeadline5').innerText = document.getElementById('edit5').innerText;
let description5 = document.getElementById('mySlidesDescription5').innerText = document.getElementById('editDesc5').innerText;

let resultat = await myFetch(urlSrc);

const idx = resultat.findIndex(item=>item.id === 5);

resultat[idx].title = title5;
resultat[idx].description = description5;

resultat = await myFetch(urlGetPost, 'POST', resultat);


  

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

end_button6.addEventListener("click",async function() {
  paragraphEdit6.contentEditable = false;
  paragraphDesc6.contentEditable = false;
  paragraphEdit6.style.backgroundColor = "black";
  paragraphDesc6.style.backgroundColor = "black";

  // UPDATES THE TITLE IN THE MODAL WHEN THE BUTTON IS PRESSED
let title6 = document.getElementById('edit6').innerText = document.getElementById('mySlidesHeadline6').innerText;
let description6 = document.getElementById('editDesc6').innerText = document.getElementById('mySlidesDescription6').innerText;

let resultat = await myFetch(urlSrc);

const idx = resultat.findIndex(item=>item.id === 6);

resultat[idx].title = title6;
resultat[idx].description = description6;

resultat = await myFetch(urlGetPost, 'POST', resultat);


  

} )





async function clickfunction(childid, parentId)
{

var index = /[a-z]/i.exec(parentId).index;

let numberCH = childid.charAt(0);
let numberP = parentId.slice(0, index);


chilIdLive = numberCH;
parentIdLive = numberP;


}






async function buttonGiver(){
 

let resultat = await myFetch(urlSrc);

const idx = resultat.findIndex(item=>item.id === parseInt(parentIdLive));


let peopleRes = parseInt(resultat[idx].people) + 1;
let scoreRes =  parseInt(resultat[idx].score) + parseInt(chilIdLive);

resultat[idx].people = peopleRes;
resultat[idx].score = scoreRes;
resultat[idx].resultat = scoreRes/peopleRes;

resultat = await myFetch(urlGetPost, 'POST', resultat);


let divRes = resultat[idx].resultat;
let numDivRes = divRes % 1;

if (numDivRes != 0) {
    divRes = divRes.toFixed(1);
}


let parentPlusG = parentIdLive + "G";

const parentLog = document.getElementById(parentPlusG);


parentLog.getElementsByClassName("resultatRate")[0].innerHTML = divRes;


};



function printStars (divRes, i){
            

        let numDivRes = divRes % 1;
            
            let html = '';


            let iplusS = i + "S";

        
            
                for(var i = 1; i <= divRes ; i++) {
                    html+="<i class='fa fa-star'> </i>";
                }
                if (numDivRes != 0) {
                divRes = divRes.toFixed(1);
                divResPlus = divRes;
                if (divRes.indexOf('.') > -1){
                    html+="<i class='fa fa-star-half'> </i>";
                    i++;
                }
                }
                while(i <= 5) {
                    i++;
                }

            document.getElementById(iplusS).innerHTML = html;

}

async function myFetch(url, method = null, body = null) {
try {

    let res = await fetch(url, {
      method: method ?? 'GET',
      headers: { 'content-type': 'application/json' },
      body: body ? JSON.stringify(body) : null
    });

    if (res.ok) {

    let data = await res.json();
    return data;
    }
    else {

    }
  }
  catch (err) {

  }
}

window.onload = async function () {
let divResPlus;
   for(let i = 1; i > 0; i ++){
    let resultat = await myFetch(urlSrc)
        let idx = resultat.findIndex(item=>item.id === i);

        if (idx < 0){
            i = 0;
            break;
        }

        let divRes = resultat[idx].resultat;
        let numDivRes = divRes % 1;


        printStars(divRes, i);
        

        if (numDivRes != 0) {
            divRes = divRes.toFixed(1);
            divResPlus = divRes;

        }

        let editRes = resultat[idx].title;
        let editDescRes = resultat[idx].description;

        let iplusg = i + "G";
        let editplusi = "edit" + i;
        let editDescplusi = "editDesc" + i;
        let mySlidesHeadlineplusi = "mySlidesHeadline" + i;
        let mySlidesDescriptionplusi = "mySlidesDescription" + i;

        let parentLog = document.getElementById(iplusg);

        
        document.getElementById(editplusi).innerHTML = editRes;
        document.getElementById(editDescplusi).innerHTML = editDescRes;
        document.getElementById(mySlidesHeadlineplusi).innerHTML = editRes;
        document.getElementById(mySlidesDescriptionplusi).innerHTML = editDescRes;


        parentLog.getElementsByClassName("resultatRate")[0].innerHTML = divRes;

    }

}
