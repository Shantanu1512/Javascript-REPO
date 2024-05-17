
function one(){
    let var1 = "var1 value"
    function two(){
        let var2 = "var2 value"
        // console.log(var1);
    }
    // console.log(var2);
    two()
}

one()


//++++++++++++++++++++++++++++++++++++++HOISTING+++++++++++++++++++++++++++++++++++++++


oneName() //function
function oneName(){
    console.log("One Name");
}

const twoName = function(){ //expression
    console.log("Two Name")
}
twoName()