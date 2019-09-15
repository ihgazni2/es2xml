var { Curl } = require('node-libcurl');

var curl = new Curl();

curl.setOpt('URL', 'https://www.baidu.com');
curl.setOpt('FOLLOWLOCATION', true);


function* gen() {
       let nv = yield req();
       console.log(nv)
}

var it = gen();

function req() {
    curl.on('end', function (statusCode, data, headers) {
        it.next(headers)
    });
    curl.perform();
}



