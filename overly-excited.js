// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
// function addExcitement (theWordArray) {

//     // Each time the for loop executes, you're going to add one more word to this string
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {
//         // Concatenate the new word onto buildMeUp
//         buildMeUp += theWordArray[i] + " "
//         // Print buildMeUp to the console
//         console.log(buildMeUp)
//     }

// }

// The learning objective of this exercise is to use the JavaScript if statement inside a loop to do one 
// operation when a certain conditions is true, and a different operation if that condition is false.
// function addExcitement (theWordArray) {
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {
//         /*
//             If the current value of `i` divided by 3 has no
//             remainder, add an exclamation point to the end of
//             the word and then concatenate it to `buildMeUp`.
        
//             Otherwise, just concatenate the word itself.
//          */
//         // Print buildMeUp to the console
//         if((i + 1) % 3 === 0){
//             buildMeUp += theWordArray[i] + "! "
//         }else {
//             buildMeUp += theWordArray[i] + " "
//         }
//         console.log(buildMeUp)
//     }
// }

// The learning objective of this exercise is to practice defining and using function arguments.

// Add a new argument to the function so that a developer can specify which character should be 
// displayed instead of it always being an exclamation point.

// function addExcitement (theWordArray) {
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {
//         /*
//             If the current value of `i` divided by 3 has no
//             remainder, add an exclamation point to the end of
//             the word and then concatenate it to `buildMeUp`.
        
//             Otherwise, just concatenate the word itself.
//             */
//         // Print buildMeUp to the console
//         if((i + 1) % 3 === 0){
//             buildMeUp += theWordArray[i] + "! "
//         }else {
//             buildMeUp += theWordArray[i] + " "
//         }
//         console.log(buildMeUp)
//     }
// }

// function addExcitement (theWordArray, symbol) {
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {
//         /*
//             If the current value of `i` divided by 3 has no
//             remainder, add an exclamation point to the end of
//             the word and then concatenate it to `buildMeUp`.
        
//             Otherwise, just concatenate the word itself.
//             */
//         // Print buildMeUp to the console
//         if((i + 1) % 3 === 0){
//             buildMeUp += theWordArray[i] + symbol + " "
//         }else {
//             buildMeUp += theWordArray[i] + " "
//         }
//         console.log(buildMeUp)
//     }
// }


// Add a new argument to the function so that a developer 
// can specify how many times the special character should be added.
// function addExcitement (theWordArray, symbol, multiplier) {
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {
//         /*
//             If the current value of `i` divided by 3 has no
//             remainder, add an exclamation point to the end of
//             the word and then concatenate it to `buildMeUp`.
        
//             Otherwise, just concatenate the word itself.
//             */
//         // Print buildMeUp to the console
//         if((i + 1) % 3 === 0){
//             buildMeUp += theWordArray[i] 
//             for(let i = 0; i < multiplier; i++){
//                 buildMeUp += symbol
//             }
//             buildMeUp += " "
//         }else {
//             buildMeUp += theWordArray[i] + " "
//         }
//         console.log(buildMeUp)
//     }
// }

const addExcitement = (theWordArray, symbol, multiplier)  => {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        /*
            If the current value of `i` divided by 3 has no
            remainder, add an exclamation point to the end of
            the word and then concatenate it to `buildMeUp`.
        
            Otherwise, just concatenate the word itself.
            */
        // Print buildMeUp to the console
        if((i + 1) % 3 === 0){
            buildMeUp += theWordArray[i] 
            for(let i = 0; i < multiplier; i++){
                buildMeUp += symbol
            }
            buildMeUp += " "
        }else {
            buildMeUp += theWordArray[i] + " "
        }
        console.log(buildMeUp)
    }
}

// Invoke the function and pass in the array
addExcitement(sentence, "?", 4);



