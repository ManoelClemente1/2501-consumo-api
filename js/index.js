








function chamaApi(){

fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(dados => {
        console.log(dados);
        
        document.getElementById('show').innerHTML += '<div>{dados.icon_url}</div>';
    })    
    .catch(err => console.err(err));

   
}
