//      1-masala... # Ba'zi bir misollarda google va ChatGPT dan ma'lumot(yordam) olgan joylarim mavjud.


class DateCounter {
    static countSundays(startYear, endYear) {
        let sundays = 0;
        for (let year = startYear; year <= endYear; year++) {
            for (let month = 0; month < 12; month++) {
                const date = new Date(year, month, 1);
                if (date.getDay() === 0) {
                    sundays++;
                }
            }
        }
        return sundays;
    }
}

const startYear = 2000;
const endYear = 2050;
const sundaysCount = DateCounter.countSundays(startYear, endYear);
console.log(`2000-yildan 2050-yilgacha ${sundaysCount} marta 1 yanvar yakshanba kuni bo'ladi.`);










//    3-masala...   # Bu yo'lini internetdan ko'rdim


function lastday(year, month) {
    const date = new Date(year, month + 1, 0);
    return date.getDate();
}
console.log(lastday(2014, 0));




//      3-masala... # 2-usul...


function lastday(year, month) {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 1 && isLeapYear(year)) {
        return 29;
    }
    return daysInMonth[month];
}

function isLeapYear(year) {
    if (year % 4 !== 0) {
        return false;
    } else if (year % 100 !== 0) {
        return true;
    } else if (year % 400 !== 0) {
        return false;
    } else {
        return true;
    }
}
console.log(lastday(2014, 0));








//      5-masala...




class WordCounter {
    constructor() {
        this.wordCount = new Map();
        this.invalidChars = new Set(['.', ',', '?', '!', ':', ';']); // so'zdagi manashu belgilarni olib tashlash uchun
    }
    countWords(str) {
        const words = str.toLowerCase().split(/\s+/);  //    \s => Oradagi bo'sh joyni aniqlab berarkan.

        for (let word of words) {
            word = this.removeInvalidChars(word);

            if (word) {
                if (this.wordCount.has(word)) {  //   .has true yoki false qaytarish vazifasini bajaradi.
                    this.wordCount.set(word, this.wordCount.get(word) + 1);
                } else {
                    this.wordCount.set(word, 1);
                }
            }
        }
        return this.wordCount;
    }
    removeInvalidChars(word) {
        for (let char of this.invalidChars) {
            word = word.replace(char, '');
        }
        return word;
    }
}
const str1 = "Lorem, ipsum dolor sit lorem dolor.";
const wordCounter = new WordCounter();
const wordCount1 = wordCounter.countWords(str1);
console.log(wordCount1);











//     6-masala...


class ArrayDifference {
    constructor(arr1, arr2) {
        this.arr1 = arr1;
        this.arr2 = arr2;
    }
    findUniqueElements() {
        const mergedArray = [...this.arr1, ...this.flatten(this.arr2)];
        const uniqueArray = Array.from(new Set(mergedArray));
        return uniqueArray.map(String);
    }
    flatten(arr) {
        return arr.reduce((flat, item) => {
            if (Array.isArray(item)) {
                return flat.concat(this.flatten(item));
            }
            return flat.concat(item);
        }, []);
    }
}
const difference1 = new ArrayDifference([1, 2, 3], [100, 2, 1, 10]);
console.log(difference1.findUniqueElements());

const difference2 = new ArrayDifference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]);
console.log(difference2.findUniqueElements());







//       7-masala...



function move(arr, fromIndex, toIndex) {
    if (fromIndex < 0) {
        fromIndex = arr.length + fromIndex;
    }
    if (toIndex < 0) {
        toIndex = arr.length + toIndex;
    }
    if (fromIndex >= arr.length || toIndex >= arr.length || fromIndex < 0 || toIndex < 0) {
        throw new Error('Invalid index');
    }
    const element = arr.splice(fromIndex, 1)[0];
    arr.splice(toIndex, 0, element);
    return arr;
}

console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], -1, -2));









//     8-masala...


class UniqueValuesFinder {
    findUniqueValues(arr) {
        const uniqueValues = [];
        for (let i = 0; i < arr.length; i++) {
            if (!uniqueValues.includes(arr[i])) {
                uniqueValues.push(arr[i]);
            }
        }
        return uniqueValues;
    }
}
const testCases = [
    [1, 2, 2, 3, 4, 4, 5],
    [1, 2, 3, 4, 5],
    [1, -2, -2, 3, 4, -5, -6, -5]
];

const uniqueValuesFinder = new UniqueValuesFinder();
const results = [];

for (let i = 0; i < testCases.length; i++) {
    const uniqueValues = uniqueValuesFinder.findUniqueValues(testCases[i]);
    results.push(uniqueValues);
}
console.log(results);








//    9-masala...



function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

function runDelayedCode() {
    return delay(3000)
        .then(() => {         //  .then promiseni yakunlanganini bildiradi
            console.log('3 sekunddan keyin ishlaydi');
        });
}

runDelayedCode();







//    10-masala...


class Book {
    constructor(nomi, muallifi, nashriyoti) {
        this.nomi = nomi;
        this.muallifi = muallifi;
        this.nashriyoti = nashriyoti;
    }
}
class Author {
    constructor(ismi, tugilganYili, kitoblari) {
        this.ismi = ismi;
        this.tugilganYili = tugilganYili;
        this.kitoblari = kitoblari;
    }
}
class Library {
    constructor() {
        this.kitoblar = [];
    }
    kitobQoshish(kitob) {
        this.kitoblar.push(kitob);
    }
    kitobOlibTashlash(nomi) {
        const indeks = this.kitoblar.findIndex(kitob => kitob.nomi === nomi);
        if (indeks !== -1) {
            this.kitoblar.splice(indeks, 1);
        }
    }
}

const kitob1 = new Book("Kitob nomi 1", "Muallif nomi 1", "Nashriyoti nomi 1");
const kitob2 = new Book("Kitob nomi 2", "Muallif nomi 2", "Nashriyoti nomi 2");

const muallif1 = new Author("Muallif ismi 1", "Tug'ilgan yili 1", ["Kitob nomi 3", "Kitob nomi 4"]);
const muallif2 = new Author("Muallif ismi 2", "Tug'ilgan yili 2", ["Kitob nomi 5", "Kitob nomi 6"]);

const kutubxona = new Library();
kutubxona.kitobQoshish(kitob1);
kutubxona.kitobQoshish(kitob2);
kutubxona.kitobOlibTashlash("Kitob nomi 1");

console.log(kutubxona.kitoblar);









//   11-masala...


class Event {
    constructor(name, location, startDate, endDate) {
        this.name = name;
        this.location = location;
        this.startDate = startDate;
        this.endDate = endDate;
        this.participants = [];
    }
}
class Participant {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.registeredEvents = [];
    }
}
class Conference extends Event {
    constructor(name, location, startDate, endDate, topic, speakers) {
        super(name, location, startDate, endDate);
        this.topic = topic;
        this.speakers = speakers;
    }
}
class Workshop extends Event {
    constructor(name, location, startDate, endDate, materials) {
        super(name, location, startDate, endDate);
        this.materials = materials;
    }
}
class EventManager {
    constructor() {
        this.events = [];
    }
    addEvent(event) {
        this.events.push(event);
    }
    registerParticipant(eventId, participant) {
        const event = this.findEventById(eventId);
        if (event) {
            event.participants.push(participant);
            participant.registeredEvents.push(event);
        } else {
            console.log("Tadbir topilmadi.");
        }
    }
    findEventById(eventId) {
        return this.events.find(event => event.id === eventId);
    }
    listAllEvents() {
        this.events.forEach(event => {
            console.log(`Tadbir nomi: ${event.name}`);
            console.log(`Joylashuvi: ${event.location}`);
            console.log(`Boshlanish sanasi: ${event.startDate}`);
            console.log(`Tugash sanasi: ${event.endDate}`);
            console.log("Qatnashchilar:");
            event.participants.forEach(participant => {
                console.log(`- ${participant.name} (${participant.email})`);
            });
            console.log("--------------------------------------");
        });
    }
}
const conference1 = new Conference("Konferentsiya 1", "Toshkent", "2024-05-01", "2024-05-03", "Ilmiy mavzu 1", ["Speaker 1", "Speaker 2"]);
const workshop1 = new Workshop("Mashg'ulot 1", "Toshkent", "2024-06-01", "2024-06-02", "Materiallar 1");
const eventManager = new EventManager();

eventManager.addEvent(conference1);
eventManager.addEvent(workshop1);

const participant1 = new Participant(1, "Ism 1", "ism1@example.com");
const participant2 = new Participant(2, "Ism 2", "ism2@example.com");

eventManager.registerParticipant(conference1.id, participant1);
eventManager.registerParticipant(conference1.id, participant2);
eventManager.registerParticipant(workshop1.id, participant2);

eventManager.listAllEvents();