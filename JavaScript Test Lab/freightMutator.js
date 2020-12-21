function mutate(string_array){
    var final_array = [];
    for (var i=0; i<string_array.length; i++) {
        final_array.push(string_array[i].toUpperCase());
    }
    return final_array;

}