

function sign(pdfPath) {

    var url = 'http://localhost:5000/lol?pdfPath='
    url = url.concat(pdfPath)

    fetch(url)
    

}


sign('lol')