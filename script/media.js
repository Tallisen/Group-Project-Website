
//for å skjule opplastningskjemaet til man trykker på submit sample
function hideContent() {
var loadup = document.getElementById('form');

var displaySetting = loadup.style.display;

  if (displaySetting == 'grid'){
      loadup.style.display = 'none';
  } else {
      loadup.style.display = 'grid';
  }
};

//skjuler submit sample knappen når den trykkes på
function hideBtn() { 

var submitBtn = document.getElementById('ulBtn');

var btnDisplay = submitBtn.style.display;
  if(btnDisplay == 'none'){
    submitBtn.style.display = 'grid';
  } else{
    submitBtn.style.display = 'none';
  }
}


//viser upload knappen når funksjonen kjøres av submit sample knappen
function showSubmitBtn() { 

  var submitBtn = document.getElementById('btn');
  
  var btnDisplay = submitBtn.style.display;
    if(btnDisplay == 'grid'){
      submitBtn.style.display = 'none';
    } else{
      submitBtn.style.display = 'grid';
    }
  }

//skjuler upload knappen når den blir trykket på
function hideSubmitBtn() { 

  var submitBtn = document.getElementById('btn');
  
  var btnDisplay = submitBtn.style.display;
    if(btnDisplay == 'none'){
      submitBtn.style.display = 'grid';
    } else{
      submitBtn.style.display = 'none';
    }
  }

//tilbakestiller skjemaet
function reset(){
  document.getElementById("field1").value = null;
}

//henter verdiene som blir satt inn i skjemaet
const getValuesFromInputs = () =>{
  const profileName = document.querySelector('#field1').value;
  const profileImg = document.querySelector('#field2').files[0];
  const profileAud = document.querySelector('#field3').files[0];

  document.querySelector('form').style.display = 'none';

  return [profileName, profileImg, profileAud];

}


//gjør verdiene om til en URL som kan leses og vises i nettleseren
const convertInputValues = () => {
   const [profileName, profileImg, profileAud] = getValuesFromInputs();
 
   const profileImgURL = URL.createObjectURL(profileImg);
   const profileAudURL = URL.createObjectURL(profileAud);
 
   return[profileAudURL, profileImgURL, profileName ]
 }

//lager elementet med verdiene fra convertInputValues
 const addInputToProfile = () => {

   const [profileAudURL, profileImgURL, profileName ]  = convertInputValues();
   
   var parentDiv = document.createElement('div');
   parentDiv.className = "sample-container";
 
   var childDiv = document.createElement('div');
   childDiv.className = "profile cover";
 
   var imgElement = document.createElement('img');
   imgElement.className = "coverimg";
   imgElement.setAttribute('src', profileImgURL);

 
   var titleElement = document.createElement('h2');
   var spanElement = document.createElement('span')
   spanElement.innerHTML = `${profileName}`;
 
   var figureElement = document.createElement('figure');
   figureElement.className = "align";
 
   var audElement = document.createElement('audio');
   audElement.className = "aud";
   audElement.id = "audio";
   audElement.setAttribute("controls", "controls");
   audElement.setAttribute('src', profileAudURL);
   
   //setter elementet som ble laget inn i siden
   childDiv.appendChild(imgElement);
   titleElement.appendChild(spanElement);
   childDiv.appendChild(titleElement);
   parentDiv.appendChild(childDiv);
   figureElement.appendChild(audElement);
   parentDiv.appendChild(figureElement);

   document.getElementById('audio-container').appendChild(parentDiv);

}

//forhåndsvisning av bilde funksjon
var loadImg = function(event) {
  var outputImg = document.getElementById('previewImg');
  var hideImg = outputImg.style.display;
  outputImg.src = URL.createObjectURL(event.target.files[0]);
  outputImg.onload = function() {
    URL.revokeObjectURL(outputImg.src)// free memory
    if (hideImg == 'grid'){
      outputImg.style.display = 'none';
    }else{
      outputImg.style.display = 'grid';
    }
  }
};

//forhåndsvisning av lyd funksjon
var loadAud = function(event) {
  var outputAud = document.getElementById('previewAud');
  var hideAud = outputAud.style.display;
  outputAud.src = URL.createObjectURL(event.target.files[0]);
  if (hideAud == 'grid'){
    outputAud.style.display = 'none';
  }else{
    outputAud.style.display = 'grid';
  }
  outputAud.onload = function() {
    URL.revokeObjectURL(outputAud.src)// free memory
  }
};


var hideImg = function() {
  var outputImg = document.getElementById('previewImg');
  var hideImg = outputImg.style.display;
    if (hideImg == 'none'){
      outputImg.style.display = 'grid';
    }else{
      outputImg.style.display = 'none';
    }
};

var hideAud = function() {
  var outputAud = document.getElementById('previewAud');
  var hideAud = outputAud.style.display;
  if (hideAud == 'none'){
    outputAud.style.display = 'grid';
  }else{
    outputAud.style.display = 'none';
  }
};

function showBtn() { 

  var submitBtn = document.getElementById('ulBtn');
  
  var btnDisplay = submitBtn.style.display;
  if(btnDisplay == 'none'){
    submitBtn.style.display = 'grid';
  } else{
    submitBtn.style.display = 'none';
  }
  }

//når man trykker på upload så kjøres disse funksjonene:
document.querySelector('#btn').addEventListener('click', (e) => {
  e.preventDefault();
  addInputToProfile();
  reset();
  hideImg();
  hideAud();
});

