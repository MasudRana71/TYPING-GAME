function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#facc15]');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');

}
function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomAlphabet = Math.random() * 25;
    const index = Math.round(randomAlphabet);

    const alphabet = alphabets[index];
    console.log( index, alphabet);
    return alphabet;
    
}