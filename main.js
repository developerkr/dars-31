let plus = document.querySelector('#plus')
let minus = document.querySelector('#minus')
let input = document.querySelector('#num')

plus.onclick = function() {
	input.value=parseInt(input.value)+1
}

minus.onclick = function() {
	input.value=parseInt(input.value)-1
}