
const urlSrc = '..\\server\\json\\resultat.json';
const urlGetPost = 'http://localhost:3000/resultat';

let chilIdLive = this.chilidLive;
let parentIdLive = this.parentIdLive;


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

        

        let iplusg = i + "G";
        let parentLog = document.getElementById(iplusg);

        

        parentLog.getElementsByClassName("resultatRate")[0].innerHTML = divRes;

    }

}











