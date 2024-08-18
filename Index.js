// Array de mensajes personalizados
const messages = [
    "Compra un pollo broster",
    "Juega ajedrez",
    "Revisar UTP class inglés",
    "Ve una serie pero no te termines en un día mrd",
    "Te acuerdas que la novia de Yimy casi le deja jajaja",
    "Recuerda el momento cuando Jampiero le lanzara a la pared el padre de Sasha jajaja",
    "Mejora la app, agrégale cosas ya tú ve",
    "¿En qué se parece un cura a un árbol de Navidad? Que los dos tienen bolas de adorno",
    "Mandale mensaje a alguien",
    "voltea atras",
    "Si te mueves eres gey espera 5 segundos "
];
// Array de colores de fondo
const colors = ["#f0f0f0", "#ffdd59", "#ff4757", "#1e90ff", "#2ecc71", "#8e44ad"];

// Array de sonidos
const sounds = ["sound1", "sound2", "sound3", "sound4", "sound5", "sound6", "sound7", "sound8", "sound9", "sound10"];
// Variable para almacenar el sonido actualmente en reproducción
let currentSound = null;

// Función para mostrar un mensaje aleatorio
function showRandomMessage() {
    // Selecciona un mensaje aleatorio
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    // Muestra el mensaje dentro del círculo
    document.getElementById('circle').innerText = randomMessage;
}

// Función para reproducir un sonido aleatorio
function playRandomSound() {
    // Detiene el sonido actual si está reproduciéndose
    if (currentSound) {
        document.getElementById(currentSound).pause();
        document.getElementById(currentSound).currentTime = 0;
    }

    // Selecciona un sonido aleatorio
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    // Reproduce el sonido aleatorio
    const audioElement = document.getElementById(randomSound);
    audioElement.play();

    // Actualiza la variable del sonido actual
    currentSound = randomSound;
}

// Evento al tocar el círculo
document.getElementById('circle').addEventListener('click', function () {
    showRandomMessage();

    // Verifica si el sonido está activado
    if (document.getElementById('soundToggle').checked) {
        playRandomSound();
    }
});

// Evento al hacer clic en el botón para cambiar el fondo
document.getElementById('colorButton').addEventListener('click', function () {
    // Selecciona un color de fondo aleatorio
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // Cambia el color de fondo de la página
    document.body.style.backgroundColor = randomColor;
});

// Evento al hacer clic en el botón para agregar un mensaje
document.getElementById('addMessageButton').addEventListener('click', function () {
    // Obtiene el valor del campo de entrada
    const newMessage = document.getElementById('messageInput').value.trim();

    // Agrega el nuevo mensaje si no está vacío
    if (newMessage) {
        messages.push(newMessage);
        document.getElementById('messageInput').value = ''; // Limpia el campo de entrada
        // Opcional: Muestra inmediatamente el nuevo mensaje para verificar
        showRandomMessage();
    } else {
        alert('Por favor, escribe un mensaje.');
    }
});