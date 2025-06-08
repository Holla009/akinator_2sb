function goNextQ(currentId, nextId){
    document.getElementById(currentId).style.display = 'none';
    document.getElementById(nextId).style.display = 'block'
}

document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('intro').style.display ='none';
    document.getElementById('quiz').style.display = 'block';
});

let array =[];
for(i=0;i<=15;i++){
    array[i]=0;
}

//QUESTION 1
//question1 a1
document.getElementById('q1a1').addEventListener('click', () => {
    goNextQ('question1', 'question2');
    array[2]++;
    array[3]++;
    array[9]++;
})
//question1 a2
document.getElementById('q1a2').addEventListener('click', () => {
    goNextQ('question1', 'question2');
    array[6]++;
    array[11]++;
    array[13]++;
    array[14]++;
})
//question1 a3
document.getElementById('q1a3').addEventListener('click', () => {
    goNextQ('question1', 'question2');
    array[0]++;
    array[4]++;
    array[7]++;
})
//question1 a4
document.getElementById('q1a4').addEventListener('click', () => {
    goNextQ('question1', 'question2');
    array[1]++;
    array[4]++;
    array[7]++;
    array[12]++;
})
//question1 a5
document.getElementById('q1a5').addEventListener('click', () => {
    goNextQ('question1', 'question2');
    array[5]++;
    array[8]++;
    array[10]++;
})

//QUESTION 2
//question2 a1
document.getElementById('q2a1').addEventListener('click', () => {
    goNextQ('question2', 'question3');
    array[1]++;
    array[4]++;
    array[6]++;
    array[10]++;
    array[11]++;
    array[12]++;
    array[13]++;
})
//question2 a2
document.getElementById('q2a2').addEventListener('click', () => {
    goNextQ('question2', 'question3');
    array[9]++;
})
//question2 a3
document.getElementById('q2a3').addEventListener('click', () => {
    goNextQ('question2', 'question3');
    array[0]++;
    array[7]++;
})
//question2 a4
document.getElementById('q2a4').addEventListener('click', () => {
    goNextQ('question2', 'question3');
    array[5]++;
    array[8]++;
})
//question2 a5
document.getElementById('q2a5').addEventListener('click', () => {
    goNextQ('question2', 'question3');
    array[2]++;
    array[3]++;
    array[14]++;
})

//QUESTION 3
//question3 a1
document.getElementById('q3a1').addEventListener('click', () => {
    goNextQ('question3', 'question4');
    array[5]++;
    array[11]++;
})
//question3 a2
document.getElementById('q3a2').addEventListener('click', () => {
    goNextQ('question3', 'question4');
    array[1]++;
    array[2]++;
    array[12]++;
})
//question3 a3
document.getElementById('q3a3').addEventListener('click', () => {
    goNextQ('question3', 'question4');
    array[0]++;
    array[10]++;
})
//question3 a4
document.getElementById('q3a4').addEventListener('click', () => {
    goNextQ('question3', 'question4');
    array[5]++;
    array[9]++;
    array[13]++;
    array[14]++;
})
//question3 a5
document.getElementById('q3a5').addEventListener('click', () => {
    goNextQ('question3', 'question4');
    array[3]++;
    array[4]++;
    array[7]++;
    array[0]++;
})
//question3 a6
document.getElementById('q3a6').addEventListener('click', () => {
    goNextQ('question3', 'question4');
    array[6]++;
    array[8]++;
})

//QUESTION 4
//question4 a1
document.getElementById('q4a1').addEventListener('click', () => {
    goNextQ('question4', 'question5');
    array[3]++;
})
//question4 a2
document.getElementById('q4a2').addEventListener('click', () => {
    goNextQ('question4', 'question5');
    array[6]++;
    array[11]++;
    array[13]++;
})
//question4 a3
document.getElementById('q4a3').addEventListener('click', () => {
    goNextQ('question4', 'question5');
    array[0]++;
    array[4]++;
})
//question4 a4
document.getElementById('q4a4').addEventListener('click', () => {
    goNextQ('question4', 'question5');
    array[0]++;
    array[8]++;
    array[10]++;
})
//question4 a5
document.getElementById('q4a5').addEventListener('click', () => {
    goNextQ('question4', 'question5');
    array[1]++;
    array[2]++;
    array[7]++;
    array[12]++;
})
//question4 a6
document.getElementById('q4a6').addEventListener('click', () => {
    goNextQ('question4', 'question5');
    array[4]++;
    array[9]++;
    array[13]++;
    array[14]++;
})

function bubblesort(arr){

    let n = array.length;
    let swapped;

    do{
        swapped = false;

        for(let i = 0; i< n-1; i++){
            if(arr[i] > arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1],arr[i]];
            }
        }
        n--;
    }while (swapped)
        return arr;
}

function cpy(arr) {
    let n = array.length;
    let arr2 =[];
    for(let i=0; i<n; i++){
        arr2[i]=arr[i];
    }
    return arr2;
}


function updateDiv(){
    const div = document.getElementById("chi");

    let maxIndex = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[maxIndex]) {
            maxIndex = i;
        }
    }

    let topScoreCount = array.filter(v => v === array[maxIndex]).length;

    if (topScoreCount > 1) {
        div.textContent = "C'è stato un incidente di percorso, quindi nel dubbio dirò San Gerry";
        return;
    }

    const results = [
        "Giorgia is it you? Ne sono piuttosto positive",
        "Chiara. Ave o Maria!",
        "Chi può essere se non Alice? Ave o Maria!",
        "O sei me, o le cose non hanno funzionato molto bene",
        "Ed è proprio la Sofia Boschini.",
        "Is it you, Giorgio the divah?",
        "Sparisci. Torna a mangiare la bresaola Eliogabalo Senior",
        "Valentin, Valenten, Valentain, Valentrenord sei proprio tu!!!",
        "E chi se non la Ceci",
        "Perchè proprio Giacomo? Ti insulterei ma tanto lo fai già da solo",
        "Direi che sei proprio Alida",
        "Leonards, in arte Yamal. Sei proprio tu.",
        "Proprio Mrs Robby. Ave o Maria!",
        "Caro Francesco Rossi. Smettila di fottermi l'ombrello o ti buco le ruote della bici",
        "Ciao Francesco Vaghi. Ora che è estate non puoi più fottermi l'ombrello :p"
    ];

    div.textContent = results[maxIndex];
}


//RISULTATO
document.getElementById('risultato').addEventListener('click', () => {
    document.getElementById('question5').style.display ='none';
    document.getElementById('result').style.display = 'block';
    updateDiv();
});
