








function chamaApi(){

fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(dados => {
        console.log(dados);
        
        document.getElementById('show').innerHTML = `<p>${dados.value}</p>`;
        localStorage.push("joke",  JSON.stringify (dados.value));
        
        document.getElementById('lastJoke').innerHTML = `<p>${JSON.parse(localStorage.getItem("joke"))}</p>` ;

        
        
    })    
    .catch(err => console.err(err));

   
}


