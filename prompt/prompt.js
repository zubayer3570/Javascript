document.getElementById('btn').addEventListener('click', function () {
    let promptInput = prompt('this is a prompt')
    document.getElementById('text').innerText = promptInput
})