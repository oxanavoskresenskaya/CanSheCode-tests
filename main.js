document.addEventListener('keydown', function(e){
    if (e.key==='o') {
    document.body.style.backgroundColor='red';
    }else if (e.key==='x') {
        document.body.style.backgroundColor='blue';
    }else if (e.key==='a') {
        document.body.style.backgroundColor='purple';
    }else if (e.key==='n') {
        document.body.style.backgroundColor='green';
    }else {
        document.body.style.backgroundColor='white';
    }
})