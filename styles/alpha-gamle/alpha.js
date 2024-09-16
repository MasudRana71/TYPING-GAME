


document.addEventListener('keyup', handleKeyboardPress);
function handleKeyboardPress(event){
    const playerPressed =event.key;
    if(playerPressed==='Escape'){
        gameOver();
    }
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();


    if( playerPressed === expectedAlphabet){
        const currentScore = getTextElementValueByID('current-score');
        const newScore = currentScore + 1;
        setTextElementValueByID('current-score', newScore);
        removeBackgroundColorById(playerPressed);
        continueGame();
    }
    else{
        const currentLife = getTextElementValueByID('current-life');
        const newLife = currentLife - 1;
        setTextElementValueByID('current-life', newLife);
        if(newLife===0){
            gameOver();
        }
    }
}
function continueGame(){
    const alphabet = getRandomAlphabet();
    setBackgroundColorById(alphabet);
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;


    setBackgroundColorById(alphabet);

}

function play(){
    hideElementById('home-screen');
    hideElementById('total-score');
    showElementById('play-ground');

    setTextElementValueByID('current-life', 5)
    setTextElementValueByID('current-score', 0)


    continueGame();
}
function gameOver(){
    hideElementById('play-ground');
    showElementById('total-score');

    const lastScore = getTextElementValueByID('current-score');
    setTextElementValueByID('last-score', lastScore);
    const removeAlphabet = getTextElementOntheBoard('current-alphabet');
    removeBackgroundColorById(removeAlphabet);
}