import faker from 'faker';

const WordGenerator = () => {
    let RandomWordsArray = new Array(10).fill(null);

    // for (let i=0; i<10; i++) {
    //     RandomWordsArray[i] = faker.random.word().toLowerCase();
    // };
    let i = 0;
    let word;
    let NumberCheck = ['0','1','2','3','4','5','6','7','8','9'];
    while (i<10) {
        word = faker.random.word().replace(/[^a-zA-Z]/g, " ");

        if (word.length < 9 && 
            !NumberCheck.includes(word.charAt(0)) && 
            !NumberCheck.includes(word.charAt(1))) {
                RandomWordsArray[i] = word.toLowerCase();
                i++;
        }
    }

    const RandomWords = RandomWordsArray.join(" ")

    return (
        RandomWords
    );
}

export { WordGenerator };