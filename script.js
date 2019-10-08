const cats_progress = document.querySelector('.progress-cats')

const dogs_progress = document.querySelector('.progress-dogs')

const parrots_progress = document.querySelector('.progress-parrots')

const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})

const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')

const ES = new EventSource(url, header)


ES.onerror = error => {
    ES.readyState ? (cats_progress.textContent = "Some error", cats_progress.style.cssText = `width: "" `) : null;
    ES.readyState ? (dogs_progress.textContent = "Some error", dogs_progress.style.cssText = `width: "" `) : null;
    ES.readyState ? (parrots_progress.textContent = "Some error", parrots_progress.style.cssText = `width: "" `) : null;
}

ES.onmessage = message => {
    vote_data = JSON.parse(message.data);
    sump = vote_data.cats + vote_data.dogs + vote_data.parrots;
    cats = (vote_data.cats*100)/sump;
    dogs = (vote_data.dogs*100)/sump;
    parrots = (vote_data.parrots*100)/sump;

    cats_progress.style.cssText = `width: ${cats}%;`
    cats_progress.textContent = `${vote_data.cats} голосов за кошек (${cats}%)`

    dogs_progress.style.cssText = `width: ${dogs}%;`
    dogs_progress.textContent = `${vote_data.dogs} голосов за собак (${dogs}%)`

    parrots_progress.style.cssText = `width: ${parrots}%;`
    parrots_progress.textContent = `${vote_data.parrots} голосов за попугаев (${parrots}%)`
}