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

//SAVE AND EDIT BUTTON 
let paragraphEdit = this.paragraphEdit;
let paragraphDesc = this.paragraphDesc;
let end_button = this.end_button;
let index = this.intLiveNow;

function clickON(index){


    let editPlusint = "edit" + index;
    let editDescPlusint = "editDesc" + index;
    let end_editingPlusInt = "end-editing" + index;

    index = index;

    console.log(editPlusint);
    console.log(editDescPlusint);

paragraphEdit = document.getElementById(editPlusint);
paragraphDesc = document.getElementById(editDescPlusint);
end_button = document.getElementById(end_editingPlusInt);

console.log(end_button);

  paragraphEdit.contentEditable = true;
  paragraphDesc.contentEditable = true;
  paragraphEdit.style.backgroundColor = "grey";
  paragraphDesc.style.backgroundColor = "grey";
} ;

async function clickEnd(index) {
    
  paragraphEdit.contentEditable = false;
  paragraphDesc.contentEditable = false;
  paragraphEdit.style.backgroundColor = "black";
  paragraphDesc.style.backgroundColor = "black";

  // UPDATES THE TITLE IN THE MODAL WHEN THE BUTTON IS PRESSED

  let mySlidesHeadlinePlusInt = "mySlidesHeadline" + index;
  let editPlusint = "edit" + index;
  let mySlidesDescriptionPlusIndex = "mySlidesDescription" + index;
  let editDescPlusint = "editDesc" + index;

let title = document.getElementById(mySlidesHeadlinePlusInt).innerText = document.getElementById(editPlusint).innerText;
let description = document.getElementById(mySlidesDescriptionPlusIndex).innerText = document.getElementById(editDescPlusint).innerText;

let resultat = await myFetch(urlSrc);

const idx = resultat.findIndex(item=>item.id === index);

resultat[idx].title = title;
resultat[idx].description = description;

resultat = await myFetch(urlGetPost, 'POST', resultat);



} 

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

  // e.preventDefault();
}

async function onload(int) {


let divResPlus;
console.log(int)
   for(let i = int; i > 0; i ++){
    let resultat = await myFetch(urlSrc)
        let idx = resultat.findIndex(item=>item.id === i);


        console.log(idx);
        
        

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
