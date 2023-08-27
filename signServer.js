var http = require('http'); // Import Node.js core module
const { url } = require('inspector');

var server = http.createServer(function (req, res) {   //create web server
    

    var param = new URLSearchParams(req.url.split('?')[1])


    var pdfPath = param.get('pdfPath')
    

    var url = req.url.split('?')[0]
    if(url == '/lol'){


        var spwaner = require('child_process').spawn

        var pythonSignPorcess = spwaner('python',['sign.py', pdfPath])

        pythonSignPorcess.stdout.on('data',(data) => {
            
            console.log(data.toString())
        })

        pythonSignPorcess.stderr.on('data',(data) => {
            
            console.log(data.toString())
        })

        console.log('server')
        
    }
        


});

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')