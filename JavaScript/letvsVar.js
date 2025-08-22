// Closure - Variable of outer function/block is always accessible by Inner Block/Function
// Inner function can access variable of outer function

// 1. Scope
// 2. Lexical Scope
// 3. Block Scope
// 4. Let and Var


function getData() {
    let userDetails = {
        name: "Mayank",
        age: 10
    }

    var counter = 10;

    for(let i = 0; i< counter; i++) {
        console.log(counter);
    }

    if(userDetails.name == "Mayank") {
        let designation = "Director";
        userDetails.designation = designation;
    }

    function otherFunction() {
        let otherData = "shsahdgja";

        // Concept of Closure
        console.log(userDetails)
        console.log(otherData)

        addedFunction()


        function inneInnerFunction() {
            var iidata = 10
            console.log(otherData)
            console.log(userDetails)

            function inneInnerInnerFunction() {
                console.log(otherData)
                console.log(userDetails)
                console.log(iidata)
            }

            inneInnerInnerFunction()
        }

        inneInnerFunction()
    }

    function addedFunction() {
        alert("Hi")
    }

    otherFunction();

}

getData();

