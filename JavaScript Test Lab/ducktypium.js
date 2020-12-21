class Ducktypium{
    constructor(crystal_color){
        if (crystal_color==="red" || crystal_color==="blue" || crystal_color==="yellow") {
           this.color = crystal_color;
        }else{
            alert('Color must be red, yellow, or blue!');
        }
        this.calibrationSequence = [];
    }
    refract(second_crystal_color){
        if (second_crystal_color==="red" || second_crystal_color==="blue" || second_crystal_color==="yellow") {
            this.second_crystal_color = second_crystal_color;
            if (this.second_crystal_color === this.color){
                return(this.color);
            }else if (this.second_crystal_color == "red"){
                if (this.color == "blue"){
                    return("purple");
                }else{
                    return("orange");
                }
            }else if (this.second_crystal_color == "blue"){
                if (this.color == "red"){
                    return("purple");
                }else{
                    return("green");
                }
            }else if (this.second_crystal_color == "yellow"){
                if (this.color == "blue"){
                    return("green");
                }else{
                    return("orange");
                }
            }
        }else{
            alert('Color must be red, yellow, or blue!');
        }

        
        
    }
    calibrate(number_array){
        number_array=number_array.sort();
        this.calibrationSequence = this.number_array=number_array.map(function(item) {
            return item*3;
          });
        
    }
}