const WordGenerator = () => {
    const word = require("random-words");

    let RandomWordsArray = new Array(10);

    for (let i=0; i<10; i++) {
        RandomWordsArray[i] = word();
    }

    const RandomWords = RandomWordsArray.join(" ")

    return (
        RandomWords
    );
}

export { WordGenerator };