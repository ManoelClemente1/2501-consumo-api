
var ChuckImg = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg']
var imgClick = 0


function chamaApi(){

fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(dados => {
        console.log(dados);
        

        document.getElementById('mensagens-aleatorias').innerHTML = `<p>${dados.value}</p>`;

        if (imgClick === 7) imgClick = -1;
        imgClick ++;
        const img = ChuckImg[imgClick];
        console.log("img", img)
        document.getElementById('imagem-aleatoria').innerHTML = `<img src="img/${img}" alt="Imagem do Chuck Norris">`;
        
        
    })  
    .catch(err => console.err(err));

   
}


