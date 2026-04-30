// ✅ কী কী যাচাই করা হচ্ছে

// ইনপুট object না হলে → "Invalid"

// right + wrong + skip === 100 না হলে → "Invalid"

// স্কোরিং:

//       right → +1

//       wrong → -0.5

//       skip → 0

// ফাইনাল স্কোর Math.round() দিয়ে রাউন্ড করা


/*function signature/sample */
function finalScore (omr) {
    // console.log(omr);

    const { right, wrong, skip } = omr;
    if(typeof omr !== "object" || omr === null || Array.isArray(omr)){
        return "Invalid";
    }
    
    if(
        typeof right !== "number" || 
        typeof wrong !== "number" || 
        typeof skip !== "number"
    ){
        return "Invalid";
    }

    if(right + wrong + skip !== 100){
        return "Invalid";
    }

    let score = right * 1 + wrong * (-0.5) + skip * 0;

    return Math.round(score);

}

totalScore = finalScore({"right":67,"wrong":23,"skip":10});
console.log(totalScore);