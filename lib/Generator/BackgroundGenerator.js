export default class BackgroundGenerator {
    constructor(randomGenerator) {
        this.randomGenerator = randomGenerator;
    }

    generateBackground(characters = 10000) {
        let string = '';

        while (characters > 0) {
            string += this.randomGenerator.getRandomArbitrary(0, 1);
            characters--;
        }
        
        return string;
    }
}
