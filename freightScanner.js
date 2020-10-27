function scan(string_array){
    var occurance= 0;
    for (var i=0; i<string_array.length; i++) {
        if (string_array[i].match("contraband")) occurance++;
    }
    return occurance;
}