function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');

}
function getTextElementValueByID(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
function setTextElementValueByID(elementId, value){
    const element = document.getElementById(elementId);
    element. innerText = value;
}
function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomAlphabet = Math.random() * 25;
    const index = Math.round(randomAlphabet);

    const alphabet = alphabets[index];
    return alphabet;
    
}
function getTextElementOntheBoard(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}