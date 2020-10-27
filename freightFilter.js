function scanAndFilter(string_array, random_string){
    var final_array = [];
    for (var i=0; i<string_array.length; i++) {
        if (string_array[i].match(random_string)){
            continue;
        }else{
            final_array.push(string_array[i]);
        }
    }
    return final_array;
}