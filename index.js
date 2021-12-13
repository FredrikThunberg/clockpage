// dom elements

const time = document.getElementById("time"),
greeting = document.getElementById("greeting"),
name = document.getElementById("name"),
focus = document.getElementById("focus");

// show time funktion
function showTime(){
    let today = new Date(), // hämtar vilken tid det är
    hour = today.getHours(),// tar timmar från new date
    min = today.getMinutes(), // tar minuter från new date
    sec = today.getSeconds(); // tar sekunder från new date

    // set am or pm
    // const amPm = hour >= 12 ? "PM" : "AM"; //sant eller falskt..
    
    //12timmar format
    // hour = hour % 12 || 12;

    //output time
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
 
    setTimeout(showTime, 1000); //intervall 
}

function addZero(n){
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//set background + greeting
function setBgGreet(){
    let today = new Date(),//hämtar tid 
    hour = today.getHours();//hämtar timmar från new Date

    if(hour < 12){
        document.body.style.backgroundImage = "url(https://eskipaper.com/images/morning-wallpaper-12.jpg)"; // om tiden är mindre än 12 så showa denna background
        greeting.textContent = "God Morgon"; // och säg detta i id greeting
    } else if (hour < 18){
        document.body.style.backgroundImage = "url(https://wallpaper.dog/large/10881197.jpg)"; // om tiden är mindre än 18 så showa denna background
        greeting.textContent = "God Eftermiddag"; // och säg detta i id greeting
    } else {
        document.body.style.backgroundImage = "url(https://i.pinimg.com/originals/16/7b/c3/167bc3a8c01cb412a54a90ca0a478e33.jpg)"; // annars så showa denna background
        greeting.textContent = "God Kväll"; // och säg detta i id greeting
    }
}

//get name
function getName(){
    //kollar om locakstorage inte har ett item kallad name
    if(localStorage.getItem("name") === null){ 
        //vi tar name element och adderar textcontent
        name.textContent = "[Enter Name]";
    } else {
        // om det är ngt satt så är det lika med det som är satt i locakstorage
        name.textContent = localStorage.getItem("name");
    }
}

function setName(e){
    //om event är en keypress
    if(e.type === "keypress"){
        //ser till att enter är tryckt... 13 är nr för enter
        if(e.wich == 13 || e.keyCode == 13){
            localStorage.setItem("name", e.target.innerText);
            name.blur();// gör så att när enter är tryckt, så hoppar den inte till en ny rad utan går ur focus
        }
    } else {
        //store i locakstorage setItem.. sätt name, vi sparar det som är skrivet 
        //i name med e.target och få text värdet med innerText
        localStorage.setItem("name", e.target.innerText);
    }
}

function getFocus(){
    //kollar om locakstorage inte har ett item kallad focus
    if(localStorage.getItem("focus") === null){ 
        //vi tar focus element och adderar textcontent
        focus.textContent = "[Enter something]";
    } else { 
        // om det är ngt satt så är det lika med det som är satt i locakstorage
        focus.textContent = localStorage.getItem("focus");
    }
}

//set focus
function setFocus(e){
    //om event är en keypress
    if(e.type === "keypress"){
        //ser till att enter är tryckt... 13 är nr för enter
        if(e.wich == 13 || e.keyCode == 13){
            localStorage.setItem("focus", e.target.innerText);
            focus.blur();// gör så att när enter är tryckt, så hoppar den inte till en ny rad utan går ur focus
        }
    } else {
        //store i locakstorage setItem.. sätt name, vi sparar det som är skrivet 
        //i name med e.target och få text värdet med innerText
        localStorage.setItem("focus", e.target.innerText);
    }
}

//när user trycker enter så, uppdateras det opch tar bort det som stod innan
name.addEventListener("keypress",  setName);
name.addEventListener("blur",  setName);
focus.addEventListener("keypress",  setFocus);
focus.addEventListener("blur",  setFocus);

//run //call
showTime();
setBgGreet();
getName();
getFocus();