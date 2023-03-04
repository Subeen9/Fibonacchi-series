function fibonache(n){
    var sequence = [];
    if(n ===1){
        sequence =[0];
    }
    else if(n === 2){
        sequence = [0,1];
    }
    else{
        sequence = [0,1];

        for(var i =2 ; i<n; i++){
            sequence.push(sequence[sequence.length-2]+ sequence[sequence.length-1]);
        }
    }
    return sequence;
}
var result = fibonache(5);
console.log(result)