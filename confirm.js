document.getElementById('confirm').addEventListener('click', function () {
    const response = confirm("let's go to saint martin with me")
    if (response) {
        document.getElementById('cancel').innerText = ''
        document.getElementById('ok').innerText = 'ok cholooooo😘'
    }
    else if (response == false) {
        document.getElementById('ok').innerText = ''
        document.getElementById('cancel').innerText = 'mair khaba😡'
    }

})