const listElement=document.querySelector('.list');
    const listTwo = document.createElement('li');
    listTwo.innerText='Two';
    listTwo.classList.add('color');
    
    const listThree = document.createElement('li');
    listThree.innerText='Three';
    listThree.classList.add('color');

    const listFour = document.createElement('li');
    listFour.innerText='Four';
    listFour.classList.add('color');

    const listFive = document.createElement('li');
    listFive.innerText='Five';
    listFive.classList.add('color');
    
listElement.appendChild(listTwo);
listElement.appendChild(listThree);
listElement.appendChild(listFour);
listElement.appendChild(listFive);