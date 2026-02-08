// ✅ কী কী করা হচ্ছে

//     ইনপুট Array না হলে → "Invalid"

//     Array-এর ভেতর "ha" আর "na" গোনা

//     রেজাল্ট:

//         "ha" > "na" → true

//         "ha" === "na" → "equal"

//         "ha" < "na" → false




/*function signature/sample */
function gonoVote(array) {
    // console.log(array);

    if(!Array.isArray(array)){
        // console.log(array);
        return "Invalid";
    }

    let haTotal = 0;
    let naTotal = 0;

    for(let arr of array){
        if(arr === "ha"){
            haTotal++;
        }
        else if(arr === "na"){
            naTotal++;
        }
    }


    if(haTotal > naTotal){
        return true;
    }
    else if(haTotal === naTotal){
        return "equal";
    }
    else{
        return false;
    }

}

const Majority = gonoVote(["ha","ha","ha","na"]);
console.log(Majority);