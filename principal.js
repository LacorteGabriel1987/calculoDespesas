 function calculaDespesas(){
     let total = 0
     let despesas = document.getElementsByClassName('despesas')
      //Quando você usa a função getElementsByClassName, ela retorna uma 
      //lista, então eu faço um for sobre os elementos da lista e incremento 
      // o valor deles à varialvel "total", antes faço um typecasting nos 
      // dados de entrada. OBS: Pode causar um erro caso a entrada não possa ser 
       //convertida.
       for (var x = 0; x < 11; x++){
       total += parseFloat(despesas[x].value)|| 0
     }

        //depois faço um inner em h2 de id=total/
        document.getElementById('total').innerHTML = "Valor total das despesas R$ " + total
   }