document.addEventListener("DOMContentLoaded", function(){
    //declare variables
    const form = document.querySelector('#memeForm')
    let createdMemes = document.querySelector('.gallery')

    //add eventlistener for the click
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        //create li and add class
        let divMeme = document.createElement('div');
        divMeme.classList.add("meme")


        //gets, creates and stores image
        const urlInput = document.getElementById("imageURL").value;
        const img = document.createElement('img')
        src = urlInput
        img.src = src;
        

        // creates divs and append them to gallery div
        const topTextDiv = document.createElement('div');
        topTextDiv.classList.add("topText");
        topTextDiv.innerText = document.getElementById('textOnTop').value;

        const bottomTextDiv = document.createElement('div');
        bottomTextDiv.classList.add("bottomText");
        bottomTextDiv.innerText = document.getElementById('textOnBottom').value;


        let removeDiv = document.createElement('div');
        removeDiv.classList.add("remove");
        removeDiv.innerText = "X";
        

        createdMemes.appendChild(divMeme);
        divMeme.appendChild(img);
        divMeme.appendChild(topTextDiv);
        divMeme.appendChild(bottomTextDiv);
        divMeme.appendChild(removeDiv);

     form.reset();

    });

    //removes memes
    function remove(event){
        event.target.parentNode.remove();
    }

    createdMemes.addEventListener('click', remove, false);

});