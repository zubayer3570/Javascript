document.getElementById('confirm').addEventListener('click', function () {
    const response = confirm("let's go to saint martin with me")
    if (response) {
        document.getElementById('ok').innerText = 'ok cholooooo😘'
    }
    else if (response == false) {
        document.getElementById('cancel').innerText = 'mair khaba😡'
    }

})