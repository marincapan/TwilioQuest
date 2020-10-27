if (process.argv[2]==0){
    console.log("alive");
}else if(process.argv[2]==1){
    console.log("flowering");
}else if(process.argv[2]==2){
    console.log("shedding");
}else if(process.argv[2]>=3){
    console.log("other");
}