const request = require('request');

var num

var getNum = (num) => {
    var result;
    var options = {
        url: `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${num}`,
        json: true
        }; 
       return new Promise(function(resolve,reject) {
       request.get(options,result,function(err,resp,body){
           if(err){
               reject(err)
           } else{
               resolve(body);
           }
       })
    });
}

var getImage = (q) => {
    var result;
    var options = {
        url: `https://jsonplaceholder.typicode.com/photos`,
        json: true
    };
    return new Promise(function(resolve,rej) {
        request.get(options, result, function(err, resp, body) {
            if(err){
                reject(err)
            }else {
                resolve(body);
            }
        })
    })
}

module.exports = {
    getNum,
    getImage
}