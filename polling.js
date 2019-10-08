let req = new XMLHttpRequest();
const info = document.querySelector('.info');
const hrefPoll = document.querySelector('.hrefPoll');

Cat.onclick = () => {
    req.open('POST', 'https://sf-pyw.mosyag.in/sse/vote/cats');
    req.send()

    req.onload = function() {
        if (req.status != 200) {
            alert(`Ошибка ${req.status}: ${req.statusText}`);
        } else {
            info.textContent = 'Голос за кошек учтен';
            hrefPoll.href = 'result.html';
        }
    };
}

Dog.onclick = () => {
    req.open('POST', 'https://sf-pyw.mosyag.in/sse/vote/dogs');
    req.send()

    req.onload = function() {
        if (req.status != 200) {
            alert(`Ошибка ${req.status}: ${req.statusText}`);
        } else { 
            info.textContent = 'Голос за собак учтен';
            hrefPoll.href = 'result.html';
        }
    };
}

Parrot.onclick = () => {
    req.open('POST', 'https://sf-pyw.mosyag.in/sse/vote/parrots');
    req.send()

    req.onload = function() {
        if (req.status != 200) {
            alert(`Ошибка ${req.status}: ${req.statusText}`);
        } else { 
            info.textContent = 'Голос за попугаев учтен';
            hrefPoll.href = 'result.html';
        }
    };
}

