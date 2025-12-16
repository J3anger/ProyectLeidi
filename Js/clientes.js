const track = document.querySelector('.clientes-hero-track');
const slides = Array.from(document.querySelectorAll('.hero-slide'));

const nameEl = document.getElementById('review-name');
const textEl = document.getElementById('review-text');
const roleEl = document.getElementById('review-role');
const starsEl = document.getElementById('review-stars');
const avatarEl = document.getElementById('review-avatar');

const data = [
  {
    name: "ANTONIO G",
    role: "— Gerente de La Mordida",
    text: "“El cambio fue radical, no solo vendemos más, sino que ahora tenemos una voz de marca clara.”",
    avatar: "Img/avatar1.png",
    rating: 5
  },
  {
    name: "CARLA M",
    role: "— Coordinadora Académica (NSG)",
    text: "“La campaña 360° nos dio orden, identidad y resultados. Se sintió un antes y un después.”",
    avatar: "Img/avatar2.png",
    rating: 5
  },
  {
    name: "MATEO R",
    role: "— Co-fundador (GO Gummies)",
    text: "“El empaque y la identidad quedaron listos para escalar. La marca ahora se ve moderna y coherente.”",
    avatar: "Img/avatar3.png",
    rating: 4
  },
  {
    name: "PAOLA C",
    role: "— Directora Comercial",
    text: "“Nos ayudaron a definir mensaje, tono y diseño. Hoy nuestra comunicación se entiende en segundos.”",
    avatar: "Img/avatar4.png",
    rating: 5
  },
  {
    name: "JOSÉ L",
    role: "— Administrador",
    text: "“La estrategia fue clara y ejecutable. Mejoramos presencia digital y confianza en clientes.”",
    avatar: "Img/avatar5.png",
    rating: 4
  },
  {
    name: "VALERIA S",
    role: "— Emprendedora",
    text: "“El branding se siente premium. Las piezas gráficas elevan muchísimo el valor percibido.”",
    avatar: "Img/avatar6.png",
    rating: 5
  },
  {
    name: "RICARDO P",
    role: "— Dueño de negocio",
    text: "“Me encantó el proceso: ordenado, creativo y estratégico. Se nota el análisis detrás.”",
    avatar: "Img/avatar7.png",
    rating: 4
  },
];

let i = 0;

function renderStars(rating){
  starsEl.innerHTML = "";
  for(let s = 1; s <= 5; s++){
    const span = document.createElement("span");
    span.className = "star" + (s <= rating ? " filled" : "");
    starsEl.appendChild(span);
  }
}

function setReview(idx){
  nameEl.textContent = data[idx].name;
  roleEl.textContent = data[idx].role;
  avatarEl.src = data[idx].avatar;

  // texto con comillas (mantiene el <span>)
  textEl.childNodes[0].textContent = data[idx].text + " ";
  renderStars(data[idx].rating);
}

function show(index){
  i = (index + slides.length) % slides.length;
  track.style.transform = `translateX(-${i * 100}%)`;
  setReview(i);
}

// auto cambio
setInterval(() => show(i + 1), 6000);

// init
show(0);
