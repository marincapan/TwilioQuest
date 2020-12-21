function addFirstToLast(arrayofstrings){
    if (arrayofstrings.length == 0){
        return "";
    } else {
        return arrayofstrings[0]+arrayofstrings[arrayofstrings.length-1];
    }
}