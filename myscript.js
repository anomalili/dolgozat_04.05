window.addEventListener("load",init);

function ID(elem){
    return document.getElementById(elem);
}

function $(elem){
    return document.querySelectorAll(elem);
}


/* var szamokTOMB = []; */

function init() {


    let btn = document.createElement("button");
    btn.innerHTML = "Click Me";
    document.body.appendChild(body);

/* for (let index = 0; index < 10; index++) {
    szamJegyek.innerHTML = <button id="1" onclick="szamraKatt">1</button>

    
}
 */


  const szamokJS = document.createElement('div');
    szamokJS.classList.add('szamok');

        const szamJegyek = document.createElement('button');
        szamJegyek.innerHTML = <button id="1" onclick="szamraKatt">1</button>
        szamJegyek.innerHTML = <button id="2"onclick="szamraKatt">2</button>
        szamJegyek.innerHTML = <button id="3"onclick="szamraKatt">3</button>
        szamJegyek.innerHTML = <button id="4"onclick="szamraKatt">4</button>
        szamJegyek.innerHTML = <button id="5"onclick="szamraKatt">5</button>
        szamJegyek.innerHTML = <button id="6"onclick="szamraKatt">6</button>
        szamJegyek.innerHTML = <button id="7"onclick="szamraKatt">7</button>
        szamJegyek.innerHTML = <button id="8"onclick="szamraKatt">8</button>
        szamJegyek.innerHTML = <button id="9"onclick="szamraKatt">9</button>
        szamJegyek.innerHTML = <button id="10" onclick="szamraKatt">10</button>

     szamokTOMB.push(szamJegyek); 
       button.appendChild(szamok);
   
szamJegyek.addEventListener("click", szamraKatt) 



    



}

function szamraKatt() {
var kiiras = event.target;
document.getElementById("1").innerHTML = "1";
}







function torolC (){



}