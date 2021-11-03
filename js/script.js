const container = document.getElementById('mf-container');
const listNumbers = [];
const inizia = document.getElementById('inizia');
let difficolta = document.getElementById('difficolta');

inizia.addEventListener("click",function(){
  console.log(difficolta.value);
  container.innerHTML = "";
  let numeroCaselle = 0;
  if(difficolta.value == "facile"){
    numeroCaselle = 100;
    console.log("ho cliccato easy", numeroCaselle);
  } else if(difficolta.value == "medio"){
    numeroCaselle = 81;
    console.log("ho cliccato hard", numeroCaselle);
  } else {
    numeroCaselle = 49;
    console.log("ho cliccato crazy", numeroCaselle);
  }; 

  init(numeroCaselle);
})


  function createSquare(target){
    const sq = document.createElement('div');
    sq.classList.add("square");
    if(difficolta.value == "facile"){
      sq.classList.add("easy");
    } else if(difficolta.value == "medio"){
      sq.classList.add("hard");
    } else{
      sq.classList.add("crazy");
    }

    sq.addEventListener("click", clickCasella);

    target.append(sq);
    return sq;
  }

  function init(totaleCaselle){
    for(let i = 0; i < totaleCaselle; i++){
      const sq = createSquare(container);
      sq.innerHTML = i + 1;
    }

  }

  function clickCasella(event){
    console.log(event.target.innerText);
    this.classList.add("clicked");
  }
