
document.getElementById('post-btn').addEventListener('click', function () {
    let post = document.createElement('p')
    post.innerText = document.getElementById('post-input').value
    document.getElementById('posts').appendChild(post)
    document.getElementById('post-input').value = ""

})
document.getElementById('dlt-btn').addEventListener('click', function () {
    let childNode = document.getElementById('posts').childNodes
    document.getElementById('posts').removeChild(childNode[childNode.length - 1])
})

