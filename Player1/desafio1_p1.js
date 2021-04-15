function desafio(){

    desafio=prompt("Você é um expert em java script! Qual a tag pra linkar o seu programa no html? 1- <a></a> 2- <script></script>")
    
        if (desafio == 2){
    
            document.write ("<h1>Gente, você é um gênio dos códigos!</h1><p>Bora pra mais um desafio?</h1><p> Agora vamos segui nosso caminho.</p><p><strong>O desafio 2 te espera!!!</strong></p><p><a href = '../Player1/desafio2_p1.html'>Próximo desafio</a></p>");
        }
        
        if ( desafio == 1){
            document.write("<h1> Ih, campeão. É Game Over!</h1><p>Mas, estamos aqui pra te ajudar. Vamos estudar juntos?</p><p><a href='../index.html'>Recomeçar</a></p>")
        }

     
    
    }
    



desafio(); 

