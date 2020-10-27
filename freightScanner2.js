function scan(string_array){
    var index_array = [];
    for (var i=0; i<string_array.length; i++) {
        if (string_array[i].match("contraband")) index_array.push(i);
    }
    return index_array;
}