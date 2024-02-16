// Array con oggetti

const posts = [
    {
        id: 1,
        content: "Non so perché l'ho fatto, non so perché mi sono divertito, e non so perché lo farò di nuovo.",
        media: "./img/post-1.png",
        author: {
            name: "Bart Simpson",
            image: "./img/profile-1.png"
        },
        likes: 452,
        created: "2021-06-25"
    },
    {
        id: 2,
        content: "Lo sai mantenere un segreto? Io odio la disco. Non parlo d'altro da così tempo che ormai mi annoio da solo. Capisci? Sta diventando sempre più faticoso... .",
        media: "./img/post-2.png",
        author: {
            name: "Disco Stu",
            image: "./img/profile-2.png"
        },
        likes: 834,
        created: "2021-09-03"
    },
    {
        id: 3,
        content: "Il mio Homer non è un comunista. Sarà pure un bugiardo, un maiale, un idiota, un comunista. Ma vi assicuro che non è una pornostar.",
        media: "./img/post-3.png",
        author: {
            name: "Nonno Simpson",
            image: "./img/profile-3.png"
        },
        likes: 950,
        created: "2021-05-15"
    },
    {
        id: 4,
        content: "Figliolo, quando si partecipa ad un evento sportivo l'importante non è vincere o perdere, ma quanto ti ubriachi!",
        media: "./img/post-4.png",
        author: {
            name: "Homer Simpson",
            image: null
        },
        likes: 678,
        created: "2021-04-03"
    },
    {
        id: 5,
        content: "L'episodio di ieri sera di Grattachecca e Fichetto è stato senza dubbio il peggiore che abbia mai visto. Per questo pochi minuti dopo ho espresso a tutto il mondo il mio disgusto via internet.",
        media: "./img/post-5.png",
        author: {
            name: "Uomo dei Fumetti",
            image: "./img/profile-5.png"
        },
        likes: 3,
        created: "2021-03-05"
    }
];



// Bonus - modifica data 
posts.forEach(post => {
    const parts = post.created.split("-");
    post.created = `${parts[2]}/${parts[1]}/${parts[0]}`;
});



// Creo costante per contenitore HTML
const containerElement = document.getElementById("container");

posts.forEach(currentElement => {

    containerElement.innerHTML += 
    `   <div class="post">
            <div class="post-header">
                <div class="post-meta">                    
                    <div class="post-meta-icon">
                        ${missingImage(currentElement)}                
                    </div>
                    <div class="post-meta-data">
                        <div class="post-meta-author">${currentElement.author.name}</div>
                        <div class="post-meta-time">${currentElement.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post-text">${currentElement.content}</div>
            <div class="post-image">
                <img src="${currentElement.media}" alt="Post Paesaggio">
            </div>
            <div class="post-footer">
                <div class="likes js-likes">
                    <div class="likes-cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${currentElement.id}">
                            <i class="like-button-icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button-label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes-counter">
                        Piace a <b id="like-counter-${currentElement.id}" class="js-likes-counter">${currentElement.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `
});

// Bonus - modifica se immagine mancante 
function missingImage(currentElement) {

    if (currentElement.author.image != null) {

        return `<img class="profile-pic" src="${currentElement.author.image}" alt="${currentElement.author.name}"></img>`;

    } else {

        // salvo il nome dell'autore
        const authorName = currentElement.author.name;

        // divido la stringa in due parole
        const authorNameWords = authorName.split(" ");
        
        // mi salvo una stringa vuota per le iniziali
        let initials = "";
        
        // per ogni parola aggiungo alla stringa le iniziali
        authorNameWords.forEach(currentWord => {

            initials += currentWord[0];

        })

        // le restituisco in pagina, dove ho chiamato la mia funzione
        return `
            <div class="profile-pic-default">
                <span>
                    ${initials}
                </span>
            </div>
        `;

    }

};


// Dichiaro un array che contiene i bottoni
const ButtonElements = document.querySelectorAll(".like-button");

// Itero su ciascun elemento e applico il comportamento al click
ButtonElements.forEach(function(currentButton) {

    // Evento al click per ogni bottone
    currentButton.addEventListener("click", function(event) {

        // Prevengo il comportamento predefinito
        event.preventDefault();

        // Aggiungo stile al pulsante
        currentButton.style.backgroundColor = "#0D2F47";
        currentButton.style.color = "white";

        // Ottengo l'ID del post
        const postId = currentButton.getAttribute("data-postid"); 

        // Ottengo il contatore dei mi piace
        const likeCounter = document.getElementById(`like-counter-${postId}`);


        if (likeCounter) {
            // Ottengo il numero attuale di mi piace
            let currentLikes = Number(likeCounter.textContent); 

            // Incremento il numero di mi piace
            currentLikes++; 

            // Aggiorno il contatore
            likeCounter.textContent = currentLikes; 
        }
        

    });

});