const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');
const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');

cat_btn.addEventListener('click', getRandomCat)
dog_btn.addEventListener('click', getRandomDog)




function getRandomCat() {
            fetch('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1')
                .then(res => res.json())
                .then(data => {
                    cat_result.innerHTML = `<img src="${data[0].url}"/>`
                })
                .catch(error => console.error('Error fetching cat:', error));
        }



function getRandomDog() {
            dog_result.innerHTML = '';
            const img = document.createElement('img');
            img.src = 'https://random.dog/14df227c-0861-4a5e-8d39-401239b9a3f1.png';
            dog_result.appendChild(img);
        }