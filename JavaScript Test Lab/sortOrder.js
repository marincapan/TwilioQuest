if (process.argv[2].toLocaleLowerCase() < process.argv[3].toLocaleLowerCase()){
    console.log(-1);
}else if (process.argv[2].toLocaleLowerCase() > process.argv[3].toLocaleLowerCase()){
    console.log(1);
}else{
    console.log(0);
}
