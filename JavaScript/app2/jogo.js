
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?','')

if (nivel === 'normal') {
	criaMosquitoTempo = 1500
} else if (nivel === 'dificil') {
	criaMosquitoTempo = 1000
} else if (nivel === 'promaster') {
	criaMosquitoTempo = 750
}


function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {
	tempo--
	if (tempo < 0) {
		document.getElementById('myImg').src = "imagens/vitoria.png"
		resultado()
		clearInterval(cronometro)
		clearInterval(criaMosquito)
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
},1000)

function posicaoRandomica() {

	// remover o mosquito anterior (caso ele exista)
	if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		if (vidas > 3) {
			clearInterval(cronometro)
			clearInterval(criaMosquito)
			resultado()
			return false
		} else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
			vidas++
		}


	}

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY


	//criar o elemento html
	var mosquito = document.createElement('img')

	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function () {
		this.remove()
	}

	document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {
	// gera numero aleatorio entre 1 e 3
	var classe = 'mosquito' + (Math.floor(Math.random() * 3) + 1)
	return classe
}

function ladoAleatorio() {
	// gera numero aleatorio entre 1 e 2
	var lado = 'lado' + (Math.floor(Math.random() * 2) + 1)
	return lado
}

function resultado() {
	document.getElementById("myDiv").className = 'showImage'
}