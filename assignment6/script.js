document.addEventListener('DOMContentLoaded', function() {
    fetch('clue.json')
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('content');

            data.forEach(item => {
                const section = document.createElement('section');

                section.innerHTML = `
                    <h2>${item.title}</h2> 
                    <img src="${item.imageUrl}" alt="${item.altText}" style="width:100%;max-width:300px;">
                    <p><strong>Release Year: ${item.year}</strong></p>
                    <p><strong>Owned: ${item.owned}</strong></p>
                    <p>${item.text}</p> <a href = "${item.buyLink}" target = "_blank"><br>Buy Here</a></p>
                `;
                contentDiv.appendChild(section);
            });
        })
        .catch(error => console.error('Error loading the data:', error));
});