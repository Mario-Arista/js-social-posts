// Array con oggetti

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "./img/post-1.png",
        "author": {
            "name": "Bart Simpson",
            "image": "./img/profile-1.png"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "./img/post-2.png",
        "author": {
            "name": "Disco Stu",
            "image": "./img/profile-2.png"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "./img/post-3.png",
        "author": {
            "name": "Nonno Simpson",
            "image": "./img/profile-3.png"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "./img/post-4.png",
        "author": {
            "name": "Homer Simpson",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "./img/post-5.png",
        "author": {
            "name": "Uomo dei Fumetti",
            "image": "./img/profile-5.png"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// Creo costante per contenitore HTML
const containerElement = document.getElementById("container");

posts.forEach(Curentelement => {
    console.log(Curentelement);
});