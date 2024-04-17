
class Paskal {
    static a(n) {
        let array = [1];
        for (let i = 0; i < n; i++) {
            const b = []
            b.push(1);
            for (let j = 0; j < i; j++) {
                b.push(array[j - 1] + array[i])
                
            }
            console.log(b);
        }
    }
}
console.log(Paskal.a(5));