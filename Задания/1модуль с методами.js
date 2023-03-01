function ucFirst(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}   


function correctSpaces(str){ //Добавить для скобок и тире
    let punctuationMarks = ['.', ',', ':', ';', '!', '?'];
    for (let j = 0; j < punctuationMarks.length; j++){
        str = str.replaceAll(punctuationMarks[j], punctuationMarks[j]+" ");
        
    }
    for (let i = 0; i< (str.length/4); i++){
        str = str.replaceAll('  ', ' ');
    }
    str = str.replaceAll('. . .', '...');
    str = str.trim();
    return str;
}

function wordCount(str){ //Добавить удаление тире
    str = correctSpaces(str);
    let wordMas = str.split(' ');
    return wordMas.length;
}


function sameWords(str){
    str = str.toLowerCase();
    let punctuationMarks = ['.', ',', ':', ';', '!', '?'];
    for (let j = 0; j < punctuationMarks.length; j++){
        str = str.replaceAll(punctuationMarks[j], "");
        
    }
    let wordMas = str.split(' ');
    let resultStr = '';
    let counter;
    for (let i = 0; i < str.length; i++){
        counter = 1;
        for (let j = i+1; j < str.length; j++){
        
            if (wordMas[i] === wordMas[j]){
                ++counter;
                wordMas[j] = undefined;
            }
        }
        if (wordMas[i] !== undefined){
        resultStr += `${wordMas[i]} - ${counter} \n`
        }
    }
    return resultStr;
}
let strk = "Текст текст текст в котором слово текст несколько раз встречается и слово тоже";
console.log(sameWords(strk));
