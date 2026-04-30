// ✅ কী কী কাজ করবে

// ইনপুট string না হলে → "Invalid"

// খালি string হলে → "Invalid"

// সবচেয়ে লম্বা শব্দ বের করবে
// (একাধিক হলে প্রথমটি)

// পুরো text-এ space বাদ দিয়ে মোট character গণনা করবে

// শেষে একটি object রিটার্ন করবে



/*function signature/sample */
function  analyzeText(str) {
    // console.log(str);

    if(typeof str !== "string" || str.length === 0){
        
        return "Invalid";
    }

    const words = str.split(" ");

    let longestWord = [];
    for(let word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }

    const tokenCount = str.split(" ").join("").length;

    return{
        longwords: longestWord,
        token: tokenCount
    };

    
}

text = analyzeText("I am an honest person");
console.log(text);
