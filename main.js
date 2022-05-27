const buttonClick=document.querySelector('btn');
buttonClick.addEventListener('click', function(){
    let userName = prompt('What is your name?');
});
alert(`Wellcome! ${userName}!`);