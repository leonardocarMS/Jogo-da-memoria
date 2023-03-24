document.addEventListener("DOMContentLoaded", () => {
    const cards = [
        {
            name:'Pokémon1',
            img:'imagens/Pokémon1.png',
        },
        {
            name:'Pokémon2',
            img:'imagens/Pokémon2.png',
        },
        {
            name:'Pokémon3',
            img:'imagens/Pokémon3.png',
        },
        {
            name:'Pokémon4',
            img:'imagens/Pokémon4.png',
        },
        {
            name:'Pokémon5',
            img:'imagens/Pokémon5.png',
        },
        {
            name:'Pokémon6',
            img:'imagens/Pokémon6.png',
        },
        {
            name:'Pokémon1',
            img:'imagens/Pokémon1.png',
        },
        {
            name:'Pokémon2',
            img:'imagens/Pokémon2.png',
        },
        {
            name:'Pokémon3',
            img:'imagens/Pokémon3.png',
        },
        {
            name:'Pokémon4',
            img:'imagens/Pokémon4.png',
        },
        {
            name:'Pokémon5',
            img:'imagens/Pokémon5.png',
        },
        {
            name:'Pokémon6',
            img:'imagens/Pokémon6.png',
        }
    ]
     //Embaralhar as cartas
  cards.sort(() => 0.5 - Math.random())

  //Carregando os elementos HTML no script
  const board = document.querySelector('.board')
  const resultView = document.querySelector('#result')
  let cardsChosen = [] //Cartas escolhidas
  let cardsChosenId = [] //id das cartas escolhidas
  let cardsWon = [] //cartas combinadas

  //Criaçao do quadro de cartas
  function createBoard() {
    for (let i = 0; i < cards.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'imagens/board.png')   //imagens 'board' carta Pokeboll
      card.setAttribute('data-id', i)   //para o usuario nao click na mesma carta duas vezes
      card.addEventListener('click', flipCard)    //função de virar a carta
      board.appendChild(card)
    }
  }

  //Checagem de combinações
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    //verificar se ta clicando na mesma imagem 
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'imagens/board.png')
      cards[optionTwoId].setAttribute('src', 'imagens/board.png')
      alert('Estar clicando na mesma imagem')
    }
    //combinacao para vericar se clicar em imagens diferentes
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('Você acertou uma combinação')
      cards[optionOneId].setAttribute('src', 'imagens/check.png')   //quando acertar as imagens, o card de check aparece
      cards[optionTwoId].setAttribute('src', 'imagens/check.png')   //quando acertar as imagens, o card de check aparece
      cards[optionOneId].removeEventListener('click', flipCard)   //remover o click no quadro, quando acertar as imagens iguais
      cards[optionTwoId].removeEventListener('click', flipCard)   //remover o click no quadro, quando acertar as imagens iguais
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'imagens/board.png')   //quando errar as imagens, o card de pokeboll aparece
      cards[optionTwoId].setAttribute('src', 'imagens/board.png')   //quando errar as imagens, o card de pokeboll aparece
      alert('Voce errou a combinação, TENTE NOVAMENTE')
    }
    cardsChosen = []
    cardsChosenId = []
    //mostrar placar
    resultView.textContent = 'Pares Encontrados: '+cardsWon.length
    if  (cardsWon.length === cards.length/2) {
      resultView.textContent = 'Parabéns, você entrontrou todos os POKÉMONS'
    }
  }

  //virar as cartas
  function flipCard() {
    let cardId = this.getAttribute('data-id')   //atributo id e jogando na variavel
    cardsChosen.push(cards[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cards[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
    
})
