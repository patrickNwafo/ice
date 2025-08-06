let search = document.querySelector('.Search-box');

document.querySelector('#Search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => { 
    menu.classList.toggle('active');
    search.classList.remove('active');
}
// Hide Menu and Search Box on Scroll
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}

// Header
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});


let cars = [
    {
        id: '1',
        name: 'Dodge Challenger',
        img: './image/IMG-20240829-WA0010.jpg',
        link: '/dodgechallengerSXT.html'
    },
    {
        id: '2',
        name: 'GLE53',
        img: './image/IMG-20240829-WA0011.jpg',
        link: '/GLE53.html'
    },
    {
        id: '3',
        name: 'BMW 2-series',
        img: './image/IMG-20240829-WA0012.jpg',
        link: '/BMW2-SERIES.html'
    },
    {
        id: '4',
        name: 'E53 AMG',
        img: './image/IMG-20240829-WA0013.jpg',
        link: '/E43AMGupgradedE53.html'
    },
    {
        id: '5',
        name: 'GT53 AMG',
        img: './image/IMG-20240829-WA0014.jpg',
        link: '/GT53AMG.html'
    },
    {
        id: '6',
        name: 'E400 Coupe',
        img: './image/E400Coupe.jpg',
        link: '/E400COUPE.html'
    },
    {
        id: '7',
        name: 'Honda Accord',
        img: './image/hondaaccord.jpg',
        link: '/HONDA.html'
    },
    {
        id: '8',
        name: 'BMW X6',
        img: './image/bmwx6.jpg',
        link: '/BMWX6.html'
    },
    {
        id: '9',
        name: 'CLA250',
        img: './image/cla250.jpg',
        link: '/CLA250.html'
    },
    {
        id: '10',
        name: 'GLE63s AMG',
        img: './image/GLE63S.jpg',
        link: '/GLE63S.html'
    },
    {
        id: '11',
        name: 'G63',
        img: './image/G63.jpg',
        link: '/G63.html'
    },
    {
        id: '12',
        name: 'LEXUS is250',
        img: './image/LEXUSIS250.jpg',
        link: '/LEXUSIS350.html'
    },
    {
        id: '13',
        name: 'TOYOTA COROLLA XSE',
        img: './image/toyotaxse.jpg',
        link: '/TOYOTACOROLLAXSE.html'
    },
    {
        id: '14',
        name: 'BENZ C300',
        img: './image/c300.jpg',
        link: '/C300.html'
    },
    {
        id: '15',
        name: 'HYUNDAI ELANTRA',
        img: './image/hyundai.jpg',
        link: 'HYUNDAI.html'
    },
    {
        id: '16',
        name: 'GLB250',
        img: './image/glb250.jpg',
        link: '/GLB.html'
    },
    {
        id: '17',
        name: 'ES350',
        img: './image/es350.jpg',
        link: '/ES350.html'
    },
    {
        id: '18',
        name: 'PEUGEOT 5008',
        img: './image/peugoet.jpg',
        link: '/PEUGEOT.html'
    },
    {
        id: '19',
        name: 'BMW 535i',
        img: './image/bmw535.jpg',
        link: '/BMW535i.html'
    },
    {
        id: '20',
        name: 'Roll Royce',
        img: './image/rollroyce.jpg',
        link: '/ROLLROYCE.html'
    },
    {
        id: '21',
        name: 'GLK 350',
        img: './image/glk350.jpg',
        link: '/GLK.html'
    },
    {
        id: '22',
        name: 'DODGE CHARGER SRT',
        img: './image/dogdecharger.jpg',
        link: '/DODGECHARGER.html'
    },
    {
        id: '23',
        name: 'LEXUS RX350',
        img: './image/rx350.jpg',
        link: '/LEXUSRX.html'
    },
    {
        id: '24',
        name: 'LAND CRUISER',
        img: './image/landcruiser.jpg',
        link: '/LANDCRUISER.html'
    },
    {
        id: '25',
        name: 'FORTUNER',
        img: './image/toyotafortuner.jpg',
        link: '/FORTUNER.html'
    },
    {
        id: '26',
        name: 'HONDA ACCORD',
        img: './image/HONDA2.jpg',
        link: '/HONDAACCORD2.html'
    },
    {
        id: '27',
        name: 'LEXUS LX570',
        img: './image/lexuslx570.jpg',
        link: '/LEXUSLX570.html'
    },
    {
        id: '28',
        name: 'ML 350',
        img: './image/ML350.jpg',
        link: '/ML350.html'
    },
    {
        id: '29',
        name: 'RANGE ROVER VELAR',
        img: './image/RANGEROVER.jpg',
        link: '/RANGEROVER.html'
    },
    {
        id: '30',
        name: 'BMW M850i',
        img: './image/M850I.jpg',
        link: '/BMWM850I.html'
    },
    {
        id: '31',
        name: 'E550',
        img: './image/E550.jpg',
        link: '/E550.html'
    },
    {
        id: '32',
        name: 'BMW X6 40i',
        img: './image/X640I.jpg',
        link: '/BMWX640i.html'
    },
    {
        id: '33',
        name: 'TOYOTA CAMRY SE',
        img: './image/TOYOTACAMRY.jpg',
        link: '/TOYOTACOROLLASE.html'
    },
    {
        id: '34',
        name: 'GLE 450',
        img: './image/GLE450.jpg',
        link: '/GLE450.html'
    },
    {
        id: '35',
        name: 'NISSAN 350-Z COUPE',
        img: './image/NISSAN.jpg',
        link: '/NISSAN.html'
    },
    {
        id: '36',
        name: 'CHEVROLET CAMERO',
        img: './image/CAMERO.jpg',
        link: '/CHEVOLET.html'
    },
    {
        id: '37',
        name: 'C300',
        img: './image/C3002013.jpg',
        link: '/C300-2.html'
    },
    {
        id: '38',
        name: 'EQS 450+',
        img: './image/EQS450.jpg',
        link: '/EQS.html'
    },
    {
        id: '39',
        name: 'TACOMA',
        img: './image/TACOMA.jpg',
        link: '/TACOMA.html'
    },
    {
        id: '40',
        name: 'E350',
        img: './image/E350.jpg',
        link: '/E350.html'
    },
    {
        id: '41',
        name: 'TOYOTA CAMRY SE',
        img: './image/CAMRYSE.jpg',
        link: '/CAMRYSE.html'
    },
    {
        id: '42',
        name: 'BMW X7 M50i',
        img: './image/X7M50.jpg',
        link: '/BMWX7.html'
    },
    {
        id: '43',
        name: 'AUDI TTS',
        img: './image/AUDI.jpg',
        link: '/AUDI.html'
    },
    {
        id: '44',
        name: 'TOYOTA PRADO',
        img: './image/PRADO.jpg',
        link: '/PRADO.html'
    },
    {
        id: '45',
        name: 'CLS 450',
        img: './image/CLS450.jpg',
        link: '/CLS450.html'
    },
    {
        id: '46',
        name: 'HILUX',
        img: './image/HILUX.jpg',
        link: '/HILUX.html'
    },
    {
        id: '47',
        name: 'DODGE CHARGER SCATPACK',
        img: './image/SCATPACK.jpg',
        link: '/SCATPACK.html'
    },
    {
        id: '48',
        name: 'FORD EXPLORER',
        img: './image/FORD.jpg',
        link: '/FORD.html'
    },
    {
        id: '49',
        name: 'VENZA XLE HYBRID',
        img: './image/VENZA.jpg',
        link: '/VENZA.html'
    },
    {
        id: '50',
        name: 'GLE 43',
        img: './image/GLE43.jpg',
        link: '/GLE43.html'
    },
    {
        id: '51',
        name: 'DODGE CHALLENGER',
        img: './image/CHALLENGER.jpg',
        link: '/CHALLENGER.html'
    },
    {
        id: '52',
        name: 'CHEVROLET CAMARO',
        img: './image/camero2.jpg',
        link: '/CHEVROLET.html'
    },
]

window.addEventListener('DOMContentLoaded', () => {
    const carContainer = document.getElementById('cars');
    console.log('Car container found:', carContainer);
    
    if (!carContainer) {
        console.error('Car container not found!');
        return;
    }
    
    let carsItems = cars.map(car => {
        return `<div class="box">
               <a href=${car.link}>
              <img src=${car.img} alt="" />
              <h2>${car.name}</h2>
              </a>
            </div>`
    })
    carsItems = carsItems.join('')
    carContainer.innerHTML = carsItems
    console.log('Cars loaded:', cars.length);
    
})
