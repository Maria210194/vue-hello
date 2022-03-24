console.log('ciaooo');

/* Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Aggiungere alla pagina un’immagine, presa anch’essa da un data.*/

const app = new Vue(
    {
        el: '#container',
        data: {
            testo: 'Memento mori',
            source: 'img/memento_mori.png',
            classi: 'h1Style'

        }

    })