let width = 600
let height = 300


function drawFlower(x, y, d) {
	let r = d/2

	stroke("rgb(0,0,0)")
	strokeWeight(2)

	fill("rgb(255,165,0)")
	circle(x+r, y-r, d)
	circle(x-r, y-r, d)
	circle(x+r, y+r, d)
	circle(x-r, y+r, d)
	fill("rgb(255,51,0)")
	circle(x, y, d)
}

function setup () {
	createCanvas(width, height)
	background(0,255,51)

	let diameter = prompt("Inserisci il diametro ")
	let x = prompt("Inserisci il punto di origine sull'asse x ")
	let y = prompt("Inserisci il punto di origine sull'asse y ")

	for (let t=1; t<10; t=t+2) {
		for (let i=1; i<22; i=i+2) {
			drawFlower(i*diameter, t*diameter, diameter)
		}
	}
}