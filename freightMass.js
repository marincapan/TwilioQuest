function calculateMass (string_array){
    var sum = 0;
    for (var i=0; i<string_array.length; i++) {
        sum=sum+string_array[i].length;
    }
    return sum;
}