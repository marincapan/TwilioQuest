function calculatePower (number_array){
    var sum=0;
    for (var i=0; i<number_array.length; ++i){
        sum=sum+number_array[i]*2;
    }
    return sum;
}