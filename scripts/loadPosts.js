//fetch('https://api.jsonstorage.net/v1/json/6de0d0db-686a-4de7-ba57-23576847aacc/8f743581-a823-4f57-b760-b741b4b6bdd2')
fetch('posts.json')
    .then(response => response.json())
    .then(data => {
        const posts = data.posts;
        const postitusedContainer = document.querySelector('.postitused');

        // Iterate through the posts and create HTML elements for each one
        posts.forEach(post => {
            const postitusDiv = document.createElement('div');
            postitusDiv.className = 'postitus';

            const postitusePeaDiv = document.createElement('div');
            postitusePeaDiv.className = 'postituse_pea';

            const profiilipiltImg = document.createElement('img');
            profiilipiltImg.className = 'profiilipilt';
            profiilipiltImg.src = post.author_image;

            const tekstSpan = document.createElement('span');
            tekstSpan.className = 'tekst';
            tekstSpan.textContent = post.metadata.timestamp_posted;

            postitusePeaDiv.appendChild(profiilipiltImg);
            postitusePeaDiv.appendChild(tekstSpan);


            const postituseSisuDiv = document.createElement('div');
            postituseSisuDiv.className = 'postituse_sisu';

            //Ma ei ole kindel kas siin taheti seda või teist varianti kus converitakse base64. Minu variant on
            //klassikalisem kus pilt laetakase mingisse andmebaasi (object storage)
            //ja link sellele laetakse andmebaasi
            if(post.image != null) {
                const postituseImg = document.createElement('img');
                postituseImg.className = "postituse_pilt";
                postituseImg.src = post.image
                postituseSisuDiv.appendChild(postituseImg)
            }

            const sisuTekstSpan = document.createElement('span');
            sisuTekstSpan.className = 'sisu_tekst';
            sisuTekstSpan.innerHTML = `<span>${post.content}</span><br />`;

            const likeNuppImg = document.createElement('img');
            likeNuppImg.className = 'like_nupp';
            likeNuppImg.src = '/img/3.png';

            postituseSisuDiv.appendChild(sisuTekstSpan);
            postituseSisuDiv.appendChild(likeNuppImg);

            postitusDiv.appendChild(postitusePeaDiv);
            postitusDiv.appendChild(postituseSisuDiv);

            postitusedContainer.appendChild(postitusDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching JSON data:', error);
    });
