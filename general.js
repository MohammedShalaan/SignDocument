

function sign(pdfPath) {
    var spwaner = require('child_process').spawn

    var pythonSignPorcess = spwaner('python', pdfPath)

}