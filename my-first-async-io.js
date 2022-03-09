var fs = require('fs')
fs.readFile(process.argv[2],'utf-8',(err,data)=>{
if (err){
console.log(err)
}else{
    var comp = data.toString().split('\n').length - 1
    console.log(comp)
}

})