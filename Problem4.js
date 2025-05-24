function Dic(x) {
    let freqmap = new Map();

    for (let i = 0; i < x.length; i++) {
        let count = 0;

        for (let j = 0; j < x.length; j++) {
            if (x[i] !== 0 && x[j] % x[i] === 0) {
                count++;
            }
        }

        if (count > 0) {
            freqmap.set(x[i], count);
        }
    }

    return freqmap;
}
let y=[1,2,8,9,12,46,76,82,15,20,30];
console.log(Dic(y));