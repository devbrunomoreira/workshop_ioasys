const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});



var recursiveAsyncReadLine = function () {
    rl.question('Sair? (Y/N) ', function (answer) {
      if (answer == 'Y' || answer == 'y') 
        return rl.close(); 
        rl.question('Digiteo o primeiro numero: ', (num1) => {

            rl.question('Digite o operador: ', (op) =>{
                
                rl.question('Digite o segundo número: ', (num2) => {
                    if( op != '+' && op != '-' && op != '*' && op != '/'){
                        console.log('operador inválido');
                        return recursiveAsyncReadLine();
                    }
                    const NUMERIC_REGEXP = /[-]{0,1}[\d]*[\.]{0,1}[\d]+/g;
        
                    if(!num1.match(NUMERIC_REGEXP)){
                        console.log('primeiro número invalido');
                        
                        return recursiveAsyncReadLine();
                    }
                    if(!num2.match(NUMERIC_REGEXP)){
                        console.log('segundo número invalido');
                        
                        return recursiveAsyncReadLine();
                    }
                    
                    if(op === '+'){
                        let soma = parseFloat(num1) + parseFloat(num2);
                        console.log('Soma é ', soma);
                    }
                    else if(op === '-'){
                        let sub = parseFloat(num1) - parseFloat(num2);
                        console.log('Subtração é ', sub);
                    }    
                    else if(op === '*'){
                        let mult = parseFloat(num1) * parseFloat(num2);
                        console.log('Multiplicação é ', mult);
                    }else if(op === '/'){
                        let div = parseFloat(num1) / parseFloat(num2);
                        console.log('Divisão é ', div);
                    }
                    return recursiveAsyncReadLine();
        
                });
            } );
        
        });
        
          
      
      recursiveAsyncReadLine(); 
    });
  };
  
  recursiveAsyncReadLine();

