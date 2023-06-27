let speech = new SpeechSynthesisUtterance()
let vozes = []
let vozSelector = document.querySelector("select")

function listarVozes() {
  vozes = speechSynthesis.getVoices();

  vozes.forEach( (voz, i)=>{
     vozSelector.options[i] = new Option(voz.name, i)
  })

  }


let botaoFalar = document.querySelector("button")
botaoFalar.addEventListener("click" , ()=>{
  speech.text = document.querySelector("textarea").value
   window.speechSynthesis.speak(speech)
})



speechSynthesis.onvoiceschanged = () => {
  listarVozes();
};


vozSelector.addEventListener("change" , ()=>{
  speech.voice = vozes[vozSelector.value]
})