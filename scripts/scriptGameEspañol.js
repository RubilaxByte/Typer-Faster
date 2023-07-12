let timeSpan = document.getElementById("timeSpan");
let scoreSpan = document.getElementById("score");
let endGame = document.getElementById("end-game-container");
let gameDiv = document.getElementById("game");
let scoreContainer = document.getElementById("scoreContainer");
let timeContainer = document.getElementById("timeContainer");
let card = document.getElementById("card");
let labelInput = document.getElementById("labelInput");
let buttonReset = document.getElementById("btnReset");
let dificultadDificil = document.getElementById("dificil");
 //---------buttons idioma y dificultad--------
let buttonIdioma = document.getElementById("buttonIdioma");
let buttonDificultad = document.getElementById("buttonDificultad");
let linkEspañol = document.getElementById("español");
let linkIngles = document.getElementById("ingles");
let linkFrances = document.getElementById("frances");
let linkFacil = document.getElementById("facil");
let linkIntermedio = document.getElementById("intermedio");
let linkDificil = document.getElementById("dificil");
let divVacioIdioma = document.getElementById("idiomaDom")
let divVacioDificultad = document.getElementById("dificultadDom")
let buttonsContainer = document.getElementById("buttonsContainer");
let divButtonIdioma = document.getElementById("divButtonIdioma");
let divButtonDificultad = document.getElementById("divButtonDificultad");


let time = 8;
let score = 0;




//capturo en una variable el h1 donde va la palabra aleatoria
let imprimePalabraAleatoria = document.querySelector("#randomWord");

//capturo variable input referenciado de tipo "text"
let input = document.getElementById("text");



//array con las palabras
let wordsEspañol = [
    "casa",
    "perro",
    "gato",
    "árbol",
    "manzana",
    "flor",
    "azul",
    "blanco",
    "verde",
    "rojo",
    "silla",
    "mesa",
    "hoja",
    "agua",
    "sol",
    "luz",
    "pan",
    "torta",
    "amigo",
    "fiesta",
    "feliz",
    "grande",
    "hoy",
    "ayer",
    "noche",
    "aire",
    "dulce",
    "amor",
    "paz",
    "huevo",
    "leche",
    "nube",
    "playa",
    "campo",
    "dulce",
    "bello",
    "mar",
    "rio",
    "nieve",
    "flaco",
    "flota",
    "volar",
    "abrir",
    "cerrar",
    "correr",
    "gris",
    "largo",
    "fiel",
    "miedo",
    "ruido",
    "salud",
    "tiempo",
    "vista",
    "llave",
    "lleno",
    "huevo",
    "miel",
    "plato",
    "rico",
    "hacer",
    "leer",
    "arte",
    "arte",
    "piso",
    "arte",
    "luz",
    "cuerpo",
    "papel",
    "alma",
    "dar",
    "ser",
    "estar",
    "vivir",
    "fluir",
    "fuego",
    "verbo",
    "puro",
    "salir"
];

let wordsEspañolDificil = [
    "coche",
    "jardín",
    "escribir",
    "montaña",
    "computadora",
    "restaurante",
    "parque",
    "cantar",
    "comida",
    "teléfono",
    "avión",
    "programa",
    "bicicleta",
    "biblioteca",
    "estudiar",
    "alumno",
    "viajar",
    "teclado",
    "teatro",
    "artista",
    "ciudad",
    "cámara",
    "tomate",
    "invierno",
    "ejemplo",
    "valiente",
    "mañana",
    "ciencia",
    "cantante",
    "calcetín",
    "naranja",
    "guitarra",
    "helado",
    "fútbol",
    "gafas",
    "teléfono",
    "dormir",
    "corazón",
    "bolígrafo",
    "espacio",
    "estrella",
    "cantante",
    "dibujar",
    "maestro",
    "país",
    "sistema",
    "playa",
    "correr",
    "abogado",
    "pantalón",
    "mercado",
    "pintura",
    "palabra",
    "aventura",
    "respirar",
    "reloj",
    "paraguas",
    "dorado",
    "camiseta",
    "sandía",
    "fruta",
    "chocolate",
    "chimenea",
    "piscina",
    "música",
    "edificio",
    "comer",
    "océano",
    "almohada",
    "globo",
    "escuela",
    "mesa",
    "pintar",
    "recoger",
    "caminar",
    "bosque",
    "guitarra"
];

let wordsFrancesFacil = [
    "mot",
    "demain",
    "père",
    "mère",
    "chat",
    "chien",
    "jeune",
    "gens",
    "très",
    "vingt",
    "treize",
    "robe",
    "amour",
    "bonjour",
    "coucou",
    "joli",
    "argent",
    "deux",
    "jaune",
    "vert",
    "bleu",
    "blanc",
    "rouge",
    "parler",
    "manger",
    "étudier",
    "hôpital",
    "rire",
    "sourire",
    "pluie",
    "étude",
    "lourd",
    "gros",
    "bien",
    "neige",
    "climat",
    "chaleur",
    "chaud",
    "froid",
    "rose",
    "violet",
    "lune",
    "soleil",
    "étoile",
    "nuage",
    "orage",
    "orange",
    "table",
    "soupe",
    "dîner",
    "haine",
    "cheval",
    "lapin",
    "vouloir",
    "savoir",
    "devoir",
    "pouvoir",
    "futur",
    "présent",
    "classe",
    "cours",
    "course",
    "faire",
    "lire",
    "livre",
    "conte",
    "roman",
    "rue",
    "roue",
    "noir",
    "bière",
    "vin",
    "eau",
    "été",
    "hiver",
    "printemps",
    "temps",
    "repas",
    "automne",
    "degré",
    "bref",
    "arriver",
    "sortir",
    "entrer"
  ];

  let wordsFrancesDificil = [
    "voiture",
    "jardin",
    "écrire",
    "montagne",
    "ordinateur",
    "restaurant",
    "parc",
    "chanter",
    "nourriture",
    "téléphone",
    "avion",
    "programme",
    "vélo",
    "bibliothèque",
    "étudier",
    "étudiant",
    "voyager",
    "clavier",
    "théâtre",
    "artiste",
    "ville",
    "caméra",
    "tomate",
    "hiver",
    "exemple",
    "courageux",
    "matin",
    "science",
    "chanteur",
    "chaussette",
    "orange",
    "guitare",
    "glace",
    "football",
    "lunettes",
    "téléphone",
    "dormir",
    "cœur",
    "stylo",
    "espace",
    "étoile",
    "chanteur",
    "dessiner",
    "maître",
    "pays",
    "système",
    "plage",
    "courir",
    "avocat",
    "pantalon",
    "marché",
    "peinture",
    "mot",
    "aventure",
    "respirer",
    "montre",
    "parapluie",
    "doré",
    "chemise",
    "pastèque",
    "fruit",
    "chocolat",
    "cheminée",
    "piscine",
    "musique",
    "bâtiment",
    "manger",
    "océan",
    "oreiller",
    "ballon",
    "école",
    "table",
    "peindre",
    "ramasser",
    "marcher",
    "forêt",
    "guitare"
  ];

  let wordsInglesFacil = [
    "apple",
  "table",
  "chair",
  "green",
  "house",
  "mouse",
  "bread",
  "water",
  "music",
  "happy",
  "hello",
  "world",
  "cloud",
  "sun",
  "smile",
  "paper",
  "pencil",
  "book",
  "study",
  "learn",
  "beach",
  "knife",
  "knife",
  "light",
  "round",
  "write",
  "black",
  "white",
  "yellow",
  "orange",
  "grape",
  "grape",
  "juice",
  "fruit",
  "party",
  "movie",
  "speak",
  "quick",
  "clock",
  "train",
  "car",
  "plane",
  "sugar",
  "honey",
  "green",
  "brown",
  "child",
  "sweet",
  "young",
  "night",
  "shirt",
  "smoke",
  "peace",
  "space",
  "radio",
  "heart",
  "dance",
  "color",
  "world",
  "watch",
  "paint",
  "storm",
  "river",
  "ocean",
  "beard",
  "grass",
  "cloud",
  "tiger",
  "zebra",
  "giraffe",
  "elephant",
  "monkey",
  "snake",
  "bird",
  "horse",
  "sheep",
  "dream",
  "magic",
  "brave",
  "lucky",
  "swim",
  "jump",
  "music",
  "sound",
  "speak",
  "write",
  "space"
  ];

  let wordsInglesDificil = [
    "banana",
    "guitar",
    "flower",
    "orange",
    "purple",
    "bottle",
    "planet",
    "coffee",
    "friend",
    "summer",
    "school",
    "camera",
    "cookie",
    "soccer",
    "piano",
    "turtle",
    "dragon",
    "dancer",
    "rocket",
    "butter",
    "forest",
    "sunset",
    "silver",
    "church",
    "turkey",
    "donkey",
    "beaver",
    "sword",
    "cookie",
    "rabbit",
    "breeze",
    "shadow",
    "river",
    "bridge",
    "jungle",
    "meadow",
    "paddle",
    "voyage",
    "whistle",
    "mountain",
    "garden",
    "sunrise",
    "parrot",
    "sapphire",
    "tiger",
    "panther",
    "giraffe",
    "elephant",
    "zeppelin",
    "bicycle",
    "penguin",
    "freedom",
    "captain",
    "sunbeam",
    "whisper",
    "treasure",
    "sundown",
    "crimson",
    "rainbow",
    "blossom",
    "journey",
    "emerald",
    "mermaid",
    "seagull"
  ];



//evento click y DOM en los buttons
linkEspañol.addEventListener("click", agregarEspañol);
function agregarEspañol() {
    buttonIdioma.textContent = linkEspañol.textContent;
    divButtonIdioma.classList.remove("btn-group");
    divButtonIdioma.classList.remove("dropdown-center");
    buttonIdioma.classList.remove("dropdown-toggle");
    buttonIdioma.classList.remove("btn-outline-light");
    buttonIdioma.classList.add("btn-warning");
    buttonIdioma.style.fontWeight = "700";
    buttonIdioma.style.pointerEvents = "none";
};

linkIngles.addEventListener("click", agregarIngles);
function agregarIngles() {
    buttonIdioma.textContent = linkIngles.textContent;
    divButtonIdioma.classList.remove("btn-group");
    divButtonIdioma.classList.remove("dropdown-center");
    buttonIdioma.classList.remove("dropdown-toggle");
    buttonIdioma.classList.remove("btn-outline-light");
    buttonIdioma.classList.add("btn-light");
    buttonIdioma.style.fontWeight = "700";
    buttonIdioma.style.pointerEvents = "none";
   
}
linkFrances.addEventListener("click", agregarFrances);
function agregarFrances() {
    buttonIdioma.textContent = linkFrances.textContent;
    divButtonIdioma.classList.remove("btn-group");
    divButtonIdioma.classList.remove("dropdown-center");
    buttonIdioma.classList.remove("dropdown-toggle");
    buttonIdioma.classList.remove("btn-outline-light");
    buttonIdioma.classList.add("btn-primary");
    buttonIdioma.style.fontWeight = "700";
    buttonIdioma.style.pointerEvents = "none";
  
}


linkFacil.addEventListener("click", agregarFacil);
function agregarFacil() {
    buttonDificultad.textContent = linkFacil.textContent;
    divButtonDificultad.classList.remove("btn-group");
    divButtonDificultad.classList.remove("dropdown-center");
    buttonDificultad.classList.remove("dropdown-toggle");
    buttonDificultad.classList.remove("btn-outline-light");
    buttonDificultad.classList.add("btn-success");
    buttonDificultad.style.fontWeight = "700";
    buttonDificultad.style.pointerEvents = "none";
  
};



linkDificil.addEventListener("click", agregarDificil);
function agregarDificil() {
    buttonDificultad.textContent = linkDificil.textContent;
    divButtonDificultad.classList.remove("btn-group");
    divButtonDificultad.classList.remove("dropdown-center");
    buttonDificultad.classList.remove("dropdown-toggle");
    buttonDificultad.classList.remove("btn-outline-light");
    buttonDificultad.classList.add("btn-danger");
    buttonDificultad.style.fontWeight = "700";
    buttonDificultad.style.pointerEvents = "none";
   
};






//creo una function que devuelve una palabra aleatoria

//Español facil--------------
function randomWordsEspañol() {

    //indice aleatorio dentro del rango del array
let indiceAleatorio = Math.floor(Math.random() * wordsEspañol.length);

   //Obtengo la palabra aleatoria utilizando el índice generado
let palabra = wordsEspañol[indiceAleatorio];
return palabra;
};

//Español dificl----------------
function randomWordsEspañolDificil() {

    //indice aleatorio dentro del rango del array
let indiceAleatorio = Math.floor(Math.random() * wordsEspañolDificil.length);

   //Obtengo la palabra aleatoria utilizando el índice generado
let palabra = wordsEspañolDificil[indiceAleatorio];
return palabra;
};


//Frances facil--------------
function randomWordsFrancesFacil() {

    //indice aleatorio dentro del rango del array
let indiceAleatorio = Math.floor(Math.random() * wordsFrancesFacil.length);

   //Obtengo la palabra aleatoria utilizando el índice generado
let palabra = wordsFrancesFacil[indiceAleatorio];
return palabra;
};

//Frances dificil-----------
function randomWordsFrancesDificil() {

    //indice aleatorio dentro del rango del array
let indiceAleatorio = Math.floor(Math.random() * wordsFrancesDificil.length);

   //Obtengo la palabra aleatoria utilizando el índice generado
let palabra = wordsFrancesDificil[indiceAleatorio];
return palabra;
};


//Ingles facil
function randomWordsInglesFacil() {

    //indice aleatorio dentro del rango del array
let indiceAleatorio = Math.floor(Math.random() * wordsInglesFacil.length);

   //Obtengo la palabra aleatoria utilizando el índice generado
let palabra = wordsInglesFacil[indiceAleatorio];
return palabra;
};

//Español dificl----------------
function randomWordsInglesDificil() {

    //indice aleatorio dentro del rango del array
let indiceAleatorio = Math.floor(Math.random() * wordsInglesDificil.length);

   //Obtengo la palabra aleatoria utilizando el índice generado
let palabra = wordsInglesDificil[indiceAleatorio];
return palabra;
};



//creo una function que va a agregar la palabra aleatoria en el html


//-------ESPAÑOL--------------
function agregarPalabraEspañol() {
    imprimePalabraAleatoria.textContent = randomWordsEspañol();
    imprimePalabraAleatoria.style.color = "#3fd97f"
    imprimePalabraAleatoria.style.fontSize = "75px"
    imprimePalabraAleatoria.style.fontWeight = "700"
    ////////////dificil//////////////////
    
    //evento
    input.addEventListener("input", compararInput);
};

function compararInput() {
    if (input.value === imprimePalabraAleatoria.textContent) {
        input.value = "";
        udpateScore();
        time += 4;
        agregarPalabraEspañol();

        // Reproducir el sonido
        let audio = new Audio("sounds/correct.mp3");
        audio.play();
    }
        
};

function agregarPalabraEspañolDificil() {
    imprimePalabraAleatoria.textContent = randomWordsEspañolDificil();
    imprimePalabraAleatoria.style.color = "#3fd97f"
    imprimePalabraAleatoria.style.fontSize = "75px"
    imprimePalabraAleatoria.style.fontWeight = "700"
    //evento
    input.addEventListener("input", compararInputDificil);
};


function compararInputDificil() {
    if (input.value === imprimePalabraAleatoria.textContent) {
        input.value = "";
        udpateScore();
        time += 2;
        agregarPalabraEspañolDificil();

        // Reproducir el sonido
        let audio = new Audio("sounds/correct.mp3");
        audio.play();
    }
        
};

//-------FRANCES--------------

function agregarPalabraFrancesFacil() {
    imprimePalabraAleatoria.textContent = randomWordsFrancesFacil();
    imprimePalabraAleatoria.style.color = "#3fd97f"
    imprimePalabraAleatoria.style.fontSize = "75px"
    imprimePalabraAleatoria.style.fontWeight = "700"
    //evento
    input.addEventListener("input", compararInputFrancesFacil);
};


function compararInputFrancesFacil() {
    if (input.value === imprimePalabraAleatoria.textContent) {
        input.value = "";
        udpateScore();
        time += 4;
        agregarPalabraFrancesFacil();

        // Reproducir el sonido
        let audio = new Audio("sounds/correct.mp3");
        audio.play();
    }
        
};


function agregarPalabraFrancesDificil() {
    imprimePalabraAleatoria.textContent = randomWordsFrancesDificil();
    imprimePalabraAleatoria.style.color = "#3fd97f"
    imprimePalabraAleatoria.style.fontSize = "75px"
    imprimePalabraAleatoria.style.fontWeight = "700"
    //evento
    input.addEventListener("input", compararInputFrancesDificil);
};


function compararInputFrancesDificil() {
    if (input.value === imprimePalabraAleatoria.textContent) {
        input.value = "";
        udpateScore();
        time += 2;
        agregarPalabraFrancesDificil();

        // Reproducir el sonido
        let audio = new Audio("sounds/correct.mp3");
        audio.play();
    }
        
};

//-------------INGLES-----------------------
function agregarPalabraInglesFacil() {
    imprimePalabraAleatoria.textContent = randomWordsInglesFacil();
    imprimePalabraAleatoria.style.color = "#3fd97f"
    imprimePalabraAleatoria.style.fontSize = "75px"
    imprimePalabraAleatoria.style.fontWeight = "700"
    //evento
    input.addEventListener("input", compararInputInglesFacil);
};


function compararInputInglesFacil() {
    if (input.value === imprimePalabraAleatoria.textContent) {
        input.value = "";
        udpateScore();
        time += 4;
        agregarPalabraInglesFacil();

        // Reproducir el sonido
        let audio = new Audio("sounds/correct.mp3");
        audio.play();
    }
        
};


function agregarPalabraInglesDificil() {
    imprimePalabraAleatoria.textContent = randomWordsInglesDificil();
    imprimePalabraAleatoria.style.color = "#3fd97f"
    imprimePalabraAleatoria.style.fontSize = "75px"
    imprimePalabraAleatoria.style.fontWeight = "700"
    //evento
    input.addEventListener("input", compararInputInlgesDificil);
};


function compararInputInlgesDificil() {
    if (input.value === imprimePalabraAleatoria.textContent) {
        input.value = "";
        udpateScore();
        time += 2;
        agregarPalabraInglesDificil();

        // Reproducir el sonido
        let audio = new Audio("sounds/correct.mp3");
        audio.play();
    }
        
};



//restar time

input.addEventListener("click", iniciarConteo);

function iniciarConteo() {
    // Se muestra la palabra
    imprimePalabraAleatoria.style.visibility = "visible";
    // saco la visibilidad del labelInput
    labelInput.style.visibility = "hidden";
    //saco la visibilidad de los buttons
    buttonsContainer.style.visibility = "hidden";
    // Inicia el intervalo para actualizar el tiempo restante
    let timeInterval = setInterval(actualizarTiempo, 1000); 
      // Elimina el evento de clic para evitar iniciar múltiples intervalos
    input.removeEventListener("click", iniciarConteo);
    function actualizarTiempo() {
        timeSpan.textContent = time-- + "s";
        if (time ===-1) {
            clearInterval(timeInterval)
            gameDiv.style.display = "none";
            gameOver();
        }
    }; 
}







//function udpateScore 

function udpateScore() {
    score += 10;
      
};
 

//function gameOver

function gameOver() {

    // Reproducir el sonido
    let audio = new Audio("sounds/final.mp3");
    audio.play();
    
    let timeDom = document.createElement("h3");
    scoreContainer.appendChild(timeDom);
    timeDom.textContent = "Se acabo el tiempo!!"
    timeDom.style.color = "white";
    timeDom.style.fontSize = "28px";
    let scoreDom = document.createElement("h3");
    scoreContainer.appendChild(scoreDom);
    scoreDom.textContent = `Tu puntaje es: ${score}`; 
    scoreDom.style.color = "white"; 
    scoreDom.style.marginTop = "50px"; 
    scoreDom.style.fontSize = "35px";
    if (score <= 100) {
    let puntajeBajo = document.createElement("h3");
    scoreContainer.appendChild(puntajeBajo);
    puntajeBajo.textContent = "Puntaje bajo. ¡Podrias mejorar!"
    puntajeBajo.style.color = "#FE5F55";
    puntajeBajo.style.marginBottom = "50px";
    puntajeBajo.style.fontWeight = "700";
    puntajeBajo.style.fontSize = "28px"
    puntajeBajo.style.marginTop = "15px";
    } else if (score > 100 && score <= 200) {
    let puntajeMedio = document.createElement("h3");
    scoreContainer.appendChild(puntajeMedio);
    puntajeMedio.textContent = "Estuviste bien. ¡Seguí así!"
    puntajeMedio.style.color = "#7DCE82";
    puntajeMedio.style.marginBottom = "50px";
    puntajeMedio.style.fontWeight = "700";
    puntajeMedio.style.fontSize = "28px"
    puntajeMedio.style.marginTop = "15px";
    } else if (score > 200) {
    let puntajeAlto = document.createElement("h3");
    scoreContainer.appendChild(puntajeAlto);
    puntajeAlto.textContent = "Tu puntaje es muy alto...¡FELICITACIONES!..."
    puntajeAlto.style.color = "#00FFF5";
    puntajeAlto.style.marginBottom = "50px";
    puntajeAlto.style.fontWeight = "700";
    puntajeAlto.style.fontSize = "28px"
    puntajeAlto.style.marginTop = "15px";
    }
};




/* agregarPalabraEspañol(); */

imprimePalabraAleatoria.style.visibility = "hidden";


//button reset
buttonReset.addEventListener("click", () => {location.reload()} );


// hacer aparecer el texto que indica donde empezar a jugar

 function visibilidadLabelInput() {
    labelInput.style.removeProperty("visibility");

 }

 
//function visibilidad de input y time container
function visibilidadInputTime() {
    timeContainer.style.removeProperty("visibility");
    text.style.removeProperty("visibility");
}
 
// Crea un MutationObserver para observar cambios en el elemento
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      // Verifica si el textContent coincide con un valor específico
      if (buttonIdioma.textContent === 'Español' && buttonDificultad.textContent === 'Fácil') {
        // Ejecuta la función cuando coincide
        visibilidadLabelInput();
        agregarPalabraEspañol();
        visibilidadInputTime();
      } else if (buttonIdioma.textContent === 'Español' && buttonDificultad.textContent === 'Difícil') {
        visibilidadLabelInput();
        agregarPalabraEspañolDificil();
        visibilidadInputTime();
      } else if (buttonIdioma.textContent === 'Francés' && buttonDificultad.textContent === 'Fácil') {
        visibilidadLabelInput();
        agregarPalabraFrancesFacil();
        visibilidadInputTime();
      } else if (buttonIdioma.textContent === 'Francés' && buttonDificultad.textContent === 'Difícil') {
        visibilidadLabelInput();
        agregarPalabraFrancesDificil();
        visibilidadInputTime();
      } else if (buttonIdioma.textContent === 'Inglés' && buttonDificultad.textContent === 'Fácil') {
        visibilidadLabelInput();
        agregarPalabraInglesFacil();
        visibilidadInputTime();
      } else if (buttonIdioma.textContent === 'Inglés' && buttonDificultad.textContent === 'Difícil') {
        visibilidadLabelInput();
        agregarPalabraInglesDificil();
        visibilidadInputTime();
      }

    });
  });
  
  // Configura el MutationObserver para observar cambios en el textContent
  observer.observe(buttonIdioma, { subtree: true, characterData: true, childList: true });
  observer.observe(buttonDificultad, { subtree: true, characterData: true, childList: true });















