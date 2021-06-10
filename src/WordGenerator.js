import faker from 'faker';

const WordGenerator = () => {
    let RandomWordsArray = new Array(10);
    for (let i=0; i<10; i++) {
        RandomWordsArray[i] = faker.random.word();
    };
    const RandomWords = RandomWordsArray.join(" ")
    return (
        RandomWords
    );
}

export { WordGenerator };