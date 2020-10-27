class Ducktypium{
    constructor(crystal_color){
        if (crystal_color==="red" || crystal_color==="blue" || crystal_color==="yellow") {
            this.crystal_color = crystal_color;
        }else{
            console.error('Color must be red, yellow, or blue!');
        }
        this.calibrationSequence = [];
    }
    refract(second_crystal_color){
        if (second_crystal_color==="red" || second_crystal_color==="blue" || second_crystal_color==="yellow") {
            this.second_crystal_color = second_crystal_color;
            if (this.crystal_color == this.second_crystal_color){
                console.log(this.crystal_color);
            }else if (this.crystal_color == "red"){
                if (this.second_crystal_color == "blue"){
                    console.log("purple");
                }else{
                    console.log("orange");
                }
            }else if (this.crystal_color == "blue"){
                if (this.second_crystal_color == "red"){
                    console.log("purple");
                }else{
                    console.log("green");
                }
            }else if (this.crystal_color == "yellow"){
                if (this.second_crystal_color == "blue"){
                    console.log("green");
                }else{
                    console.log("orange");
                }
            }
        }else{
            console.error('Color must be red, yellow, or blue!');
        }

        
        
    }
    calibrate(number_array){
        number_array=number_array.sort();
        console.log(this.number_array=number_array.map(function(item) {
            return item*3;
          }));
        
    }
}