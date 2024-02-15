// Array con oggetti

const posts = [
    {
        id: 1,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "./img/post-1.png",
        author: {
            name: "Bart Simpson",
            image: "./img/profile-1.png"
        },
        likes: 80,
        created: "2021-06-25"
    },
    {
        id: 2,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "./img/post-2.png",
        author: {
            name: "Disco Stu",
            image: "./img/profile-2.png"
        },
        likes: 120,
        created: "2021-09-03"
    },
    {
        id: 3,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "./img/post-3.png",
        author: {
            name: "Nonno Simpson",
            image: "./img/profile-3.png"
        },
        likes: 78,
        created: "2021-05-15"
    },
    {
        id: 4,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "./img/post-4.png",
        author: {
            name: "Homer Simpson",
            image: null
        },
        likes: 56,
        created: "2021-04-03"
    },
    {
        id: 5,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "./img/post-5.png",
        author: {
            name: "Uomo dei Fumetti",
            image: "./img/profile-5.png"
        },
        likes: 95,
        created: "2021-03-05"
    }
];

// Creo costante per contenitore HTML
const containerElement = document.getElementById("container");

posts.forEach(currentElement => {

    containerElement.innerHTML += 
    `   <div class="post">
            <div class="post-header">
                <div class="post-meta">                    
                    <div class="post-meta-icon">
                        <img class="profile-pic" src="${currentElement.author.image}" alt="${currentElement.author.name}">                    
                    </div>
                    <div class="post-meta-data">
                        <div class="post-meta-author">${currentElement.author.name}</div>
                        <div class="post-meta-time">${currentElement.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post-text">${currentElement.content}</div>
            <div class="post-image">
                <img src="${currentElement.media}" alt="">
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
                        Piace a <b id="like-counter-1" class="js-likes-counter">${currentElement.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `
});