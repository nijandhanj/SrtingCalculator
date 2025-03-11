export function add(numbers) {
    if (!numbers) return 0;


    let delimiter = /,|\n/; 
    
    const customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
    if (customDelimiterMatch) {
        delimiter = new RegExp(customDelimiterMatch[1]); 
        numbers = numbers.replace(/^\/\/(.+)\n/, ""); 
    }

    const numArray = numbers.split(delimiter).map(Number);

    if (numArray.some(isNaN)) {
        throw new Error(`Invalid number: ${numbers}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}
