var ImgScreen = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg'];



fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(dados => {
        console.log(dados)
    })    
    .catch(err => console.err(err));

