const magic = {
    length(data) {
        return data.length;
    },
    toUpperCase(str) {
        return str.split('').map(char => char.toUpperCase()).join('');
    },
    repeat(data, n) {
        return data.repeat(n);
    },
    count(str) {
        const countMap = {};
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            if (countMap[char]) {
                countMap[char]++;
            } else {
                countMap[char] = 1;
            }
        }
        return countMap;
    }
};
const result20 = magic.length("Hello, World!");
console.log(result20);
const result30 = magic.toUpperCase("Hello");
console.log(result30);
const result40 = magic.repeat("Hello", 3);
console.log(result40);
const result50 = magic.count("hello world");
console.log(result50);

// bonusli misolni bazi joylarida kamchiliklar bor maxsimalni 