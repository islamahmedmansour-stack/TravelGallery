// get Elements >>
let placeImages = document.getElementsByClassName("placeImage");
let fullScreen = document.getElementById("fullScreen");
let showImage = document.getElementById("showImage");
let leftIcon = document.getElementById("leftIcon");
let rightIcon = document.getElementById("rightIcon");
let closeIcon = document.getElementById("closeIcon");
let fullTitle = document.getElementById('fullTitle');
let description = document.getElementById("description");
// ================================== <<
// general variables >>
let currentPlace = '';
let descriptions = ["Snow-capped peaks pierce the clouds in the Swiss Alps, creating a breathtaking vista that captures nature's grandeur.","Tokyo's neon-lit streets come alive at night, showcasing the perfect blend of tradition and modernity.","Local delicacies tell stories of culture and tradition, each plate a canvas of flavors and history.","Dubai's futuristic skyline pushes the boundaries of architectural innovation and human ambition.","A solitary traveler finds peace watching the sun set over Bali's ancient temples.","African wildlife roams freely across the Serengeti, untamed and majestic in their natural habitat.","Petra's rose-colored ruins whisper tales of civilizations past, standing timeless in the desert landscape.","Crystal clear waters meet pristine white sands in the Maldives, creating the perfect tropical escape."];
// ================================== <<
// functions >>
// displayFullScreenFunction >>
function displayFullScreen() {
    fullScreen.classList.toggle("fullScreenDisplay");
}
// displayFullScreenFunction >>
function fillData(index) {
    showImage.src = placeImages[index].src;
    showImage.alt = placeImages[index].alt;
    fullTitle.innerHTML = placeImages[index].alt;
    description.innerHTML = descriptions[index];
}
// ================================== <<
// events >>
// click on image event >>
for (let i = 0; i < placeImages.length; i++) {
    placeImages[i].addEventListener('click', function (e) {
        displayFullScreen();    // open fullScreen
        showImage.src = e.target.src;
        showImage.alt = e.target.alt;
        fullTitle.innerHTML = e.target.alt;
        currentPlace = i;
    });
}
// ....
// click on close event >>
closeIcon.addEventListener('click', function () {
    displayFullScreen();  // close fullScreen
});
// ....
// click on right event >>
rightIcon.addEventListener('click', function () {
   if (currentPlace < (placeImages.length - 1)) {
        currentPlace++;
    } else {
        currentPlace = 0;
    }
    fillData(currentPlace);
});
// ....
// click on left event >>
leftIcon.addEventListener('click', function () {
    if (currentPlace == 0 ) {
        currentPlace = placeImages.length - 1;
    } else {
        currentPlace--;
    }
    fillData(currentPlace);
});
// ================================== <<
