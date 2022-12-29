function darkMode(){
    alert('Initiating DarkMode!');

    let headerOne = document.getElementsByTagName('h1');
    let headerTwo = document.getElementsByTagName('h2');
    let headerThree = document.getElementsByTagName('h3');
    let container = document.getElementById('selWrapper');
    let selBox = container.getElementsByTagName('div');
    let body = document.getElementsByTagName('body');
    let logo = document.getElementById('imageLogo');
    let motorcycle = document.getElementById('imageMotorcycle');
    let tricycle = document.getElementById('imageTricycle');
    let rickshaw = document.getElementById('imageRickshaw');
    let light = document.getElementById('bulb');

    dModeBgColor(body,'rgb(21,32,43)');//#1d2a35
    dModeColor(headerOne, 'white');
    dModeColor(headerTwo, 'white');
    dModeColor(headerThree, 'white');//rgb(21,32,43)
    dModeBgColor(selBox, '#38444d');//#38444d
    changeImage(logo,'images/logoDM.png');
    changeImage(motorcycle, 'images/motorcycleDM.png');
    changeImage(tricycle,'images/tricycleDM.png');
    changeImage(rickshaw,'images/rickshawDM.png');
    changeImage(light,'images/bulbOn.png');
}

//Recieves Tagname
function dModeColor(tag, color){

    for(let x=0;x<tag.length;x++){
        tag[x].style.color = color;
    }
}
function dModeBgColor(tag, color){ 
    for(let x=0;x<tag.length;x++){
        tag[x].style.background= color;
    }
}
//Recieves ID
function changeImage(element,source){
    element.src = source;
}