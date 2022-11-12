


let VitX = 0;
let VitO = 0;
var vez = "X";
let t = 0;

    matrizR = [
        [],
        [],
        [],
    ]
    
    let e = 2;
    
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            matrizR[i][j] = e;
            e++;
            };
        };



//console.log(`Vitorias X = ${VitX} e Vitorias O = ${VitO}`)

const currentPlayer = document.querySelector(".vez");

function init() {
 

  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${vez}`;

  document.querySelectorAll(".linha .coluna").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
  });
}

init();

function newMove(e) {
  const index = e.target.getAttribute("id");
  console.log(index)
  
  //verificando e setando o indice da matriz como 0 para X ou 1 para O 

        for(let i = 0; i < 3; i++){
                    for(let j = 0; j < 3; j++){
                        
                        if(matrizR[i][j] != 0 && matrizR[i][j] != 1 && matrizR[i][j] == index && vez == "X"){
                            matrizR[i][j] == 0;
                              e.target.innerHTML = vez;
                              
                              vez = "O"
                        }
         
        
                };
            }; 
        

     setTimeout(() => {



    let resultado = 0;    
    currentPlayer.innerHTML = `JOGADOR DA VEZ: ${vez}`;

    //while para que o computador jogueate achar um numero valido
   
    while(resultado != 1){

        let indexcomp = Math.floor(Math.random() * 10);

        for(let i = 0; i < 3; i++){
                    for(let j = 0; j < 3; j++){
                        
                        if(matrizR[i][j] != 0 && matrizR[i][j] != 1 && matrizR[i][j] == indexcomp && vez == "O"){
                            matrizR[i][j] == 1;

                            //aqui ele precisa pegar a div com o memso indice do indexcomp

                              const n = document.getElementById(`${indexcomp}`);


                              n.innerHTML = "dsds";
                             

                              resultado = 1;  
                              vez = "X"
                          
                        }
                    };
        
                };  };
        }, "2000")
        


      //imprimindo a tabela
        


        //imprimindo a tabela verificando se ha vencedor
        for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    
                    if(matrizR[i][0] == 0 && matrizR[i][1] == 0 && matrizR[i][2] == 0 || matrizR[0][j] == 0 && matrizR[1][j] == 0 && matrizR[2][j] == 0 || matrizR[0][0] == 0 && matrizR[1][1] == 0 && matrizR[2][2] == 0 || matrizR[2][0] == 0 && matrizR[1][1] == 0 && matrizR[0][2] == 0 ){
                        t = 1;
                    }

                    };
                };

        
         //imprimindo a tabela verificando se ha vencedor bolinha
        for(let i = 0; i < 3; i++){
                    for(let j = 0; j < 3; j++){
                        
                        if(matrizR[i][0] == 1 && matrizR[i][1] == 1 && matrizR[i][2] == 1 || matrizR[0][j] == 1 && matrizR[1][j] == 1 && matrizR[2][j] == 1 || matrizR[0][0] == 1 && matrizR[1][1] == 1 && matrizR[2][2] == 1 || matrizR[2][0] == 1 && matrizR[1][1] == 1 && matrizR[0][2] == 1){
                            t = 2;
                        }
        
                };
            };    

        //velha
        let addmais = 0;
        for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    
                    if(matrizR[i][j] == 1 || matrizR[i][j] == 0 ){
                        addmais++;
                    }
    
            };
        };   
        if(addmais == 9){
            t = 3;
        }


        //resultados
        if(t == 1){
            console.log(`vence o X`)
            
            VitX++;
        }     
        else if(t == 2){
            console.log(`vence o O`)
           
            VitO++;
        }
        else if(t == 3){
            console.log(`deu velha`)
           
        }
        else{
            console.log("segue o jogo")
        }
           
}



