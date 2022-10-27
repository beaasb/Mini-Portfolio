const abas = document.querySelectorAll(".tab");

abas.forEach(tab => {
    tab.addEventListener("click", function () {

        if (tab.classList.contains("selected")) {
            return;
        }
        selecionarAba(tab)
        mostrarInformacoesAba(tab)
    })
})

function selecionarAba(tab){
    const abaSelecionada = document.querySelector(".tab.selected");
    abaSelecionada.classList.remove("selected");
    tab.classList.add("selected");
} 

function mostrarInformacoesAba(tab){
    const informacaoSelecionada = document.querySelector(".information.selected");
    informacaoSelecionada.classList.remove("selected");
    const idDoElementoDeInformacoesDaAba = `information-${tab.id}`
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba) 
    informacaoASerMostrada.classList.add("selected");
}

// PLAY PAUSE
const playPause = document.querySelector("#play-pause-butao");

const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause-butao');



playPauseBtn.addEventListener('click', function(){
	if (audio.paused) {
		audio.play();
		playPause.classList.remove("play");
		playPause.classList.add("pause");
	} else {
		audio.pause();
		playPause.classList.add("play");
		playPause.classList.remove("pause");
	}

})