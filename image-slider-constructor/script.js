document.getElementById('login').addEventListener('click', function () {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    if (username == 'zubayer, shona valobashi' && password == 'zubayer ashona kiss koro') {
        window.location.href = 'index.html'
    }
    else {
        document.getElementById('username').ariaPlaceholder = 'mair khaba, ja bolsi tai lekho'
        document.getElementById('password').ariaPlaceholder = 'mair khaba, ja bolsi tai lekho'
    }
})


document.getElementById('slider').style.display = 'none'
document.getElementById('search-btn').addEventListener('click', function () {
    document.getElementById('search-result').innerHTML = ``
    const searchKeyword = document.getElementById('search-keyword').value
    const KEY = '26120190-f11d7a164657ebcc2dd8a2bdc'
    fetch(`https://pixabay.com/api/?key=${KEY}&q=${searchKeyword}&image_type=all&per_page=200`)
        .then(res => res.json())
        .then(data => {
            data.hits.forEach(obj => {
                const div = document.createElement('div');
                div.innerHTML = `
                <div style="height: 150px">
                    <img src=${obj.webformatURL} style="width: 100%; height: 100%">
                </div>
                `
                document.getElementById('search-result').appendChild(div)
            });
        })
})
const sliderImages = []
document.getElementById('search-result').addEventListener('click', function (event) {
    event.target.style.border = "2px solid black"
    sliderImages.push(event.target.getAttribute('src'))
})
document.getElementById('create-slider').addEventListener('click', function () {
    document.getElementById('slider').style.display = 'block'
    let index = 0;
    const timeId = setInterval(() => {
        if (index >= sliderImages.length) {
            index = 0;
        }
        document.getElementById('slider-image').setAttribute('src', sliderImages[index])
        index++;
    }, 2000);
    document.getElementById('clear-slider').addEventListener('click', function () {
        clearInterval(timeId)
        document.getElementById('slider').style.display = 'none'
    })
})

