const notaDeEntrega = [2 , 4 , 6, 8, 10];

for (let i = 0; i < 6; i++){
    if (notaDeEntrega[i] < 7){
        console.log(`Tu nota es ${notaDeEntrega[i]} Desaprobaste!`);
        document.write(`Tu nota es ${notaDeEntrega[i]} Desaprobaste!`);
        } else{
            console.log(`Tu nota es ${notaDeEntrega[i]} Aprobaste!`);
            document.write(`Tu nota es ${notaDeEntrega[i]} Aprobaste!`);
        }
}