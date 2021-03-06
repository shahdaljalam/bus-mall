'use strict'

let imagesArray = [
    'bag.jpg',
    'banana.jpg',
    'bathroom.jpg',
    'boots.jpg',
    'breakfast.jpg',
    'bubblegum.jpg',
    'chair.jpg',
    'cthulhu.jpg',
    'dog-duck.jpg',
    'dragon.jpg',
    'pen.jpg',
    'pet-sweep.jpg',
    'scissors.jpg',
    'shark.jpg',
    'sweep.png',
    'tauntaun.jpg',
    'unicorn.jpg',
    'water-can.jpg',
    'wine-glass.jpg',
    'usb.gif'
];



const imageSec = document.getElementById('imageSection');
const firstImage = document.getElementById('firstImage');
const secondimage = document.getElementById('secondImage');
const thirdimage = document.getElementById('thirdImage');
const viewResult = document.getElementById('viewResult');
const ContentsOfResult = document.getElementById('result');

let clickNumber = 0;
let firstImageIndex = 0;
let secondImageIndex = 0;
let thirdImageIndex = 0;
let attempt = 25;



function ImageFunc(name) {
    this.name = name;
    this.img = `./images/${this.name}`;
    this.shown = 0;
    this.clicks = 0;

    ImageFunc.all.push(this);
}

ImageFunc.all = []

for (let i = 0; i < imagesArray.length; i++) {
    new ImageFunc(imagesArray[i]);
}


function renderChart() {

    let showArray = [];
    for (let index = 0; index < ImageFunc.all.length; index++) {
        showArray.push(ImageFunc.all[index].clicks);
    }
    console.log(showArray)
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: imagesArray,
            datasets: [{
                label: '# of Votes',
                data: showArray,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                   
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                   
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function eventHandler(e) {
    console.log(e.target);
    console.log(e.target.id);
    if ((e.target.id === 'firstImage' || e.target.id === 'thirdImage' || e.target.id === 'secondImage') && clickNumber < attempt) {
        if (e.target.id === 'firstImage') {
            ImageFunc.all[firstImageIndex].clicks++;
            console.log(firstImageIndex);
        }
        if (e.target.id === 'secondImage') {
            ImageFunc.all[secondImageIndex].clicks++;
        }
        if (e.target.id === 'thirdImage') {
            ImageFunc.all[thirdImageIndex].clicks++;

        }
        clickNumber++;
        renderImg();
    } else {
        renderChart();
        //console.log(ImageFunc.all);
    }
}



function renderImg() {
    let firstIndex = RandomNumber(0, imagesArray.length - 1);
    let secondIndex;
    let thirdtIndex;

    do {
        firstIndex = RandomNumber(0, imagesArray.length - 1);
        secondIndex = RandomNumber(0, imagesArray.length - 1);
        thirdtIndex = RandomNumber(0, imagesArray.length - 1);
    } while (firstIndex === secondIndex || firstIndex === thirdtIndex || secondIndex === thirdtIndex);

    firstImageIndex = firstIndex;
    secondImageIndex = secondIndex;
    thirdImageIndex = thirdtIndex;

    firstImage.src = ImageFunc.all[firstIndex].img;
    secondimage.src = ImageFunc.all[secondIndex].img;
    thirdimage.src = ImageFunc.all[thirdtIndex].img;

    ImageFunc.all[firstIndex].shown++;
    ImageFunc.all[secondIndex].shown++;
    ImageFunc.all[thirdtIndex].shown++;
}


imageSec.addEventListener('click', eventHandler);
renderImg();


function RandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function ResultFunction(evt) {
    let ulElement = document.createElement('ul');
    ContentsOfResult.appendChild(ulElement);

    for (let i = 0; i < ImageFunc.all.length; i++) {
        let liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = `${ImageFunc.all[i].name} had a ${ImageFunc.all[i].clicks} votes, and was seen a ${ImageFunc.all[i].shown}.`;

    }
    viewResult.removeEventListener('click', ResultFunction);
}

viewResult.addEventListener('click', ResultFunction);

renderImg();


// 'use strict'

// let imagesArray = [
//     'bag.jpg',
//     'banana.jpg',
//     'bathroom.jpg',
//     'boots.jpg',
//     'breakfast.jpg',
//     'bubblegum.jpg',
//     'chair.jpg',
//     'cthulhu.jpg',
//     'dog-duck.jpg',
//     'dragon.jpg',
//     'pen.jpg',
//     'pet-sweep.jpg',
//     'scissors.jpg',
//     'shark.jpg',
//     'sweep.png',
//     'tauntaun.jpg',
//     'unicorn.jpg',
//     'water-can.jpg',
//     'wine-glass.jpg',
//     'usb.gif'
// ];



// const imageSec = document.getElementById('imageSection');
// const firstImage = document.getElementById('firstImage');
// const secondimage = document.getElementById('secondImage');
// const thirdimage = document.getElementById('thirdImage');
// const viewResult = document.getElementById('viewResult');
// const ContentsOfResult = document.getElementById('result');

// let clickNumber = 0;
// let firstImageIndex = 0;
// let secondImageIndex = 0;
// let thirdImageIndex = 0;
// let attempt = 25;



// function ImageFunc(name) {
//     this.name = name;
//     this.img = `./images/${this.name}`;
//     this.shown = 0;
//     this.clicks = 0;

//     ImageFunc.all.push(this);
// }

// ImageFunc.all = []

// for (let i = 0; i < imagesArray.length; i++) {
//     new ImageFunc(imagesArray[i]);
// }


// function eventHandler(e) {
//     console.log(e.target);
//     console.log(e.target.id);
//     if ((e.target.id === 'firstImage' || e.target.id === 'thirdImage' || e.target.id === 'secondImage') && clickNumber < attempt) {
//         if (e.target.id === 'firstImage') {
//             ImageFunc.all[firstImageIndex].clicks++;
//             console.log(firstImageIndex);
//         }
//         if (e.target.id === 'secondImage') {
//             ImageFunc.all[secondImageIndex].clicks++;
//         }
//         if (e.target.id === 'thirdImage') {
//             ImageFunc.all[thirdImageIndex].clicks++;

//         }
//         clickNumber++;
//         renderImg();
//     } else {

//         renderChart();
//     }
// }



// function renderImg() {
//     let firstIndex = RandomNumber(0, imagesArray.length - 1);
//     let secondIndex;
//     let thirdtIndex;

//     do {
//         firstIndex = RandomNumber(0, imagesArray.length - 1);
//     } while (firstIndex === secondIndex );

//     firstImage.src = ImageFunc.all[firstIndex].img;
//     secondimage.src = ImageFunc.all[secondIndex].img;
//     thirdimage.src = ImageFunc.all[thirdtIndex].img;

//     firstImageIndex = firstIndex;
//     secondImageIndex = secondIndex;
//     thirdImageIndex = thirdtIndex;

//     ImageFunc.all[firstIndex].shown++;
//     ImageFunc.all[secondIndex].shown++;
//     ImageFunc.all[thirdtIndex].shown++;
// }


// imageSec.addEventListener('click', eventHandler);
// renderImg();

// function RandomNumber(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
// }

// function renderChart(){
//     let clicks = [];
//     let names = [];
//     let shown = [];
//     for(let i = 0 ; i< imageSec.all.length; i++){
// clicks.push(imageSec.all[i].clicks);
// names.push(imageSec.all[i].name);
// shown.push(imageSec.all[i].shown);
//     }

//     let ctx = document.getElementById('mychart').getContext('2d');
//     let myChart = new Chart( ctx, {
//         type: 'bar',
//         data:{
//             labels: names,
//             datasets:[{
//                 label: '# of votes',
//                 data: clicks,
//                 backgroundColor:
//                 'rgba(255, 99, 132, 0.2)',
//                 borderColor:
//                 'rgba(255, 99, 132, 1)',
//                 borderWidth: 1,
//             }, {
//                 label: '# of shown',
//                 data: shown,
//                 backgroundColor:
//                 'rgba(255, 99, 132, 0.2)',
//                 borderColor:
//                 'rgba(255, 99, 132, 1)',
//                 borderWidth: 1,
//             }]
//         },
//         options: {
//             scales:{
//                 y: {
//                     beginAtZero: true
//                 }
//             }
//         }
//     });

// // function renderChart(){
// //     let click = [];
// //     let names = [];
// //     for(let i = 0 ; i < Image.all.length; i++){
// //         click.push(Image.all[i].click);
// //         names.push(Image.all[i].name)
// //     }
// //     let ctx = document.getElementById('myChart').getContext('2d');
// // let myChart = new Chart(ctx, {
// //     type: 'bar',
// //     data: {
// //         labels:names,
// //         datasets: [{
// //             label: '# of Votes',
// //             data: clicks,
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',

// //             borderWidth: 1
// //         }]
// //     },
// //     options: {
// //         scales: {
// //             y: {
// //                 beginAtZero: true
// //             }
// //         }
// //     }
// // });
// // myChart.destroy();
// // }




// function ResultFunction(evt){
//     let ulElement = document.createElement('ul');
//     ContentsOfResult.appendChild(ulElement);

//     for (let i = 0 ; i < ImageFunc.all.length ; i++){
//         let liElement = document.createElement('li');
//         ulElement.appendChild(liElement);
//         liElement.textContent = `${ImageFunc.all[i].name} had a ${ImageFunc.all[i].clicks} votes, and was seen a ${ImageFunc.all[i].shown}.`;

//     }

//     viewResult.removeEventListener('click', ResultFunction);
// }
//         renderImg();

// // viewResult.addEventListener('click', ResultFunction);


// // 
// // renderChart();
