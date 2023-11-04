//fetch('https://api.jsonstorage.net/v1/json/6de0d0db-686a-4de7-ba57-23576847aacc/296a8f11-2aae-4b1a-b83c-d821e0e3f66b')
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
