class Materializer{
    constructor(single_string){
        this.target=single_string;
        this.activated=false;
    }
    activate(){
        this.activated=true;
    }
    materialize(){
        if (this.activated==true) {
            return this.target;
        }else{
            return undefined;
        }
    }
}