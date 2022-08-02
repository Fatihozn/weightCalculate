const planets = ["earth","jupiter","mars","mercury","venus","saturn","uranus","neptune","moon","pluto"]

const select = document.getElementById("selectbox")
const input = document.getElementById("input")
const btn = document.getElementById("btn")
const div = document.getElementById("foto")
const img = document.getElementById("img")
const h1 = document.getElementById("text")

for(let i = 0 ;i< planets.length ; i++){
let opt = document.createElement("option")
opt.value = planets[i]
opt.textContent=planets[i]
select.options.add(opt)
}
const gezegenBilgileri = {
   earth : {
      src : "images/earth.png",
      g: 1
   },
   jupiter: {
      src : "images/jupiter.png",
      g: 2.64
   },
   mars: {
      src : "images/mars.png",
      g: 0.38
   },
   mercury: {
      src : "images/mercury.png",
      g: 0.37
   },
   venus: {
      src : "images/venus.png",
      g: 0.88
   },
   saturn: {
      src : "images/saturn.png",
      g: 1.15
   },
   uranus: {
      src : "images/uranus.png",
      g: 0.92
   },
   neptune: {
      src : "images/neptune.png",
      g: 1.12
   },
   moon: {
      src : "images/moon.png",
      g: 0.16
   },
   pluto: {
      src : "images/pluto.png",
      g: 0.06
   },
}

function add(){
    
    const gezengenAdi = select.value;

    const gezegenBilgisi = gezegenBilgileri[gezengenAdi];// dinamik olarak kullanabilmek için [] parantez içine yazılır
   // yani gezegenbilgileri.earth yerine dinamik olarak yukarıdaki kullanıldı
    if(!gezegenBilgisi) return;

    const gezegenYercekimi = gezegenBilgisi.g * input.value;

    const gezegenResmi = gezegenBilgisi.src;

    img.src = gezegenResmi;

    h1.innerHTML = gezegenYercekimi + 'N';
}

