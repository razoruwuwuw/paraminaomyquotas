const quotas = document.querySelector('.citas');
const button = document.querySelector('button')

const mensajesDeAmor = [
    "Eres el sueño que nunca quiero despertar. 💕",
    "Cada día contigo es un regalo para mi corazón. 🎁❤️",
    "Amarte es mi destino favorito. 🌟💖",
    "Tu sonrisa ilumina hasta mis días más oscuros. 🌞💛",
    "Eres mi luz en la oscuridad, Jessie. ✨🌙",
    "No necesito nada más, solo tenerte a mi lado, mi niña. 🥰💘",
    "Naomy, contigo siento que el mundo es perfecto. 🌎❤️",
    "Me haces tan feliz que no puedo dejar de sonreír. 😊💖",
    "Eres mi razón de ser y mi fuerza para seguir. 💪💞",
    "Cada momento contigo es mágico, mi niña. ✨💗",
    "Amar a Jessie es lo más fácil que he hecho en mi vida. 💌💖",
    "Naomy, eres mi hogar y mi refugio. 🏡💓",
    "No hay un lugar en el mundo donde prefiera estar que a tu lado. 🌍❤️",
    "Eres mi universo entero, Jessie. 🌌💘",
    "Naomy, tu amor es mi mayor bendición. 🙏💕",
    "Tu voz es mi melodía favorita, mi niña. 🎶💖",
    "Eres mi persona favorita en el mundo, Jessie. 🌎💝",
    "Cada vez que te miro, me enamoro más. 💖😘",
    "No hay un día en el que no piense en cuánto te amo, Naomy. 🥰💕",
    "Mi niña hermosa, gracias por hacerme tan feliz. 🌸💖",
    "Eres la razón por la que creo en el amor verdadero, Jessie. 💘✨",
    "Naomy, contigo todo es mejor. ❤️🌟",
    "Mi amor por ti crece más con cada segundo que pasa. 🕒💞",
    "Eres la princesa de mis sueños, mi niña. 👸💓",
    "Jessie, no hay palabras que puedan describir cuánto te amo. 🥺💖",
    "Gracias por ser mi apoyo y mi inspiración, Naomy. 💪💕",
    "Mi corazón late solo por ti, mi niña hermosa. 💓❤️",
    "Eres mi presente, mi futuro y mi todo. 🥰💘",
    "Tu amor es mi mayor tesoro, Jessie. 💎💕",
    "Naomy, contigo soy la mejor versión de mí mismo. 🌟💝",
    "No puedo esperar para pasar toda mi vida contigo, mi niña. 🕰️💖",
    "Eres mi primer pensamiento al despertar y el último al dormir. 💤💕",
    "Jessie, cada día contigo es una nueva aventura. 🌈❤️",
    "Te amo más de lo que las palabras pueden expresar, Naomy. 🌹🌹",
    "Eres mi alegría, mi paz y mi amor eterno, mi niña hermosa. 🕊️💖"
  ];
  


  button.addEventListener('click', () =>{

    const mensajeAleatorio = mensajesDeAmor[Math.floor(Math.random() * mensajesDeAmor.length)];

    quotas.textContent = mensajeAleatorio;

    
    musica.play(); // Reproducir
  })