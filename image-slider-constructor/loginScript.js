document.getElementById('login').addEventListener('click', function () {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    if (username == 'zubayer, shona valobashi' && password == 'zubayer ashona kiss koro') {
        window.location.href = 'index.html'
    }
    else {
        document.getElementById('username').value = ``
        document.getElementById('password').value = ``
        document.getElementById('username').setAttribute('placeholder', 'mair khaba, ja bolsi tai lekho')
        document.getElementById('password').setAttribute('placeholder', 'mair khaba, ja bolsi tai lekho')
    }
})