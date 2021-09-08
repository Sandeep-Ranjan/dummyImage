function dummyImage() {
    let img = document.createElement('img');
    img.src = '';
    document.getElementById('body').appendChild(img);
}

module.exports.dummyImage = dummyImage;