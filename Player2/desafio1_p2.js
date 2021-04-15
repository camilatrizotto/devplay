function desafio(){

    desafio=prompt("O CSS serve para: 1- Estilizar nossa página 2- Dar dinamicidade à nossa página?")
    
        if (desafio == 1){
    
            document.write ("<h1>Gente, você é um gênio dos códigos!</h1><p>Bora pra mais um desafio?</h1><p> Agora vamos segui nosso caminho.</p><p><strong>O desafio 2 te espera!!!</strong></p><p><a href = '../Player2/desafio2_p2.html'>Próximo desafio</a></p>");
        }
        
        if ( desafio == 2){
            document.write("<h1> Ih, campeão. É Game Over!</h1><p>Mas, estamos aqui pra te ajudar. Vamos estudar juntos?</p><p><a href='../index.html'>Recomeçar</a></p>")
        }

     
    
    }
    



desafio(); 

