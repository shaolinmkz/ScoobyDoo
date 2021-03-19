let display = document.getElementById("display");
let button = document.getElementById("clickBtn");
//let strText = document.getElementById("strText");


const scoobyDoo = () => {
    const testedVowel = testVowel();
    const newArray = testedVowel; 
    const initialPush = [], finalPush = [];               
    const vowels = ["a", "e", "i", "o", "u"];               
    let i, j, k, elements;          

    for (i = 0; i < newArray.length; i++) {             
        for (j = 0; j < newArray[i].length; j++) {      
            if (initialPush[i]) {                           
                break;                                       
            }                                             
            for (k = 0; k < vowels.length; k++) {           
                if (newArray[i].charAt(j) === vowels[k]) {    
                    initialPush.push(newArray[i].slice(j, newArray[i].length)); 
                    break;                                      
                }
            }
        }
    }                                                   

    for (elements in initialPush) {
        finalPush.push("r".concat(initialPush[elements]));           
    }
    display.innerHTML = "";
    let paragraph = document.createElement("p");    
    let textNode = document.createTextNode(finalPush.join(" "));
    paragraph.appendChild(textNode);

    return display.appendChild(paragraph);
}

const testVowel = () => {
    let check = (strText.value).toLowerCase().split(" ")
    let ch, vow, tempArray = [];
    const vowels = ["a", "e", "i", "o", "u"];
    for (ch = 0; ch < check.length; ch++) {
        for (vow = 0; vow < vowels.length; vow++) {
            if (check[ch].includes(vowels[vow])) {
                tempArray.push(check[ch]);
                break;
            }
        }
    }
    return tempArray;
}

button.onclick = function () {
    scoobyDoo(); 
}
//strText.oninput = function () {
//    scoobyDoo();
//}
