const images = [
	"Agartha.png",
	"Apocrypha.png",
	"Babylonia.png",
	"Camelot.png",
	"E Pluribus.png",
	"Fuyuki.png",
	"Götterdämmerung 2.png",
	"Halloween2017Map1.png",
	"Okeanos.png",
	"Orleans.png",
	"Salem.png",
	"Septem.png",
	"Shimosa.png",
	"Shinjuku.png",
	"Yuga Kshetra 1.png",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
