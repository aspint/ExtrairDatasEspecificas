// var readline = require('readline');

// var leitor = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout

// })

// leitor.question("Qual a ultima data?\n", function(answer) {
//     var resp = answer;
//     console.log("\nSua resposta '" + resp + "' foi grava com sucesso numa variável inútil");
//     leitor.close();
// });
var fs = require('fs');
var dateNow = new Date("2021-03-01T00:59:16.750Z");
//dateNow.setHours(dateNow.getHours()-3)

var dayTrade = ["DOMINGO", "SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA","SABADO"]
// for(i=0;i<2;i++ ){
//     console.log("imprimiu");
//     dateNow.setDate(dateNow.getDate()+31)
//     console.log(dateNow);
// }

for(;dateNow < new Date("2021-12-31T23:59:16.750Z");dateNow.setDate(dateNow.getDate()+1) ){
     console.log("imprimiu");
     if (dateNow.getDay()== 0 || dateNow.getDay()==3 ){
        
        if(dateNow.getDay()==0) {
            var i = dateNow.getDay()
        }else {
            var i = dateNow.getDay()-1
        }

        for(; i < 3 ; i++){
            var temp = fs.readFileSync("./teste.txt");
            fs.writeFileSync("./teste.txt",temp+"\n"+dateNow.getDate()+"/"+dateNow.getMonth()+"/"+dateNow.getFullYear()+`      `+date(dateNow.getDay()))
        }
     }
     console.log(dateNow);
 }

 function date(day){
     return dayTrade[day];
 }