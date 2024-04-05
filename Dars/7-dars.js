// let students = {
//     Abduvohid: {
//         firstName: "Abduvohid",
//         lastName: "Abdurahimov",
//         age: 19,
//         markaz: "Najot Ta'lim",
//         tolov: true,
//         ortachaBahosi: 95,
//         darsQoldirish: 10,
//         BajarilmaganVazifalar: 20,
//         mahorati: ["python", "c lang"]
//     },
//     Otabek: {
//         firstName: "Otabek",
//         lastName: "Xushvaqtov",
//         age: 19,
//         markaz: "Najot Ta'lim",
//         tolov: true,
//         ortachaBahosi: 80,
//         darsQoldirish: 35,
//         BajarilmaganVazifalar: 23,
//         mahorati: ["python", "c lang"]
//     },
//     Mushtariy: {
//         firstName: "Mushtariy",
//         lastName: "Yusupova",
//         age: 30,
//         markaz: "Najot Ta'lim",
//         tolov: true,
//         ortachaBahosi: 9,
//         darsQoldirish: 22,
//         BajarilmaganVazifalar: 12,
//         mahorati: ["python", "c lang"]
//     },
//     Abdulaziz: {
//         firstName: "Abdulaziz",
//         lastName: "Akmalov",
//         age: 20,
//         markaz: "Najot Ta'lim",
//         tolov: true,
//         ortachaBahosi: 89,
//         darsQoldirish: 42,
//         BajarilmaganVazifalar: 11,
//         mahorati: ["python", "c lang"]
//     },
//     Izzatulloh: {
//         firstName: "Izzatulloh",
//         lastName: ".......",
//         age: 17,
//         markaz: "Najot Ta'lim",
//         tolov: true,
//         ortachaBahosi: 69,
//         darsQoldirish: 27,
//         BajarilmaganVazifalar: 35,
//         mahorati: ["python", "c lang"]
//     },
//     Rasulov: {
//         firstName: "......",
//         lastName: "Rasulov",
//         age: 20,
//         markaz: "Najot Ta'lim",
//         tolov: true,
//         ortachaBahosi: 77,
//         darsQoldirish: 19,
//         BajarilmaganVazifalar: 0,
//         mahorati: ["python", "c lang"]
//     },
//     Xusan: {
//         firstName: "Xusan",
//         lastName: "Murodov",
//         age: 28,
//         markaz: "Najot Ta'lim",
//         tolov: true,
//         ortachaBahosi: 86,
//         darsQoldirish: 70,
//         BajarilmaganVazifalar: 31,
//         mahorati: ["python", "c lang"]
//     },
//     Rustam: {
//         firstName: "Rustam",
//         lastName: "........",
//         age: 25,
//         markaz: "Najot Ta'lim",
//         tolov: true,
//         ortachaBahosi: 77,
//         darsQoldirish: 31,
//         BajarilmaganVazifalar: 28,
//         mahorati: ["python", "c lang"]
//     },
//     Asilbek: {
//         firstName: "Asilbek",
//         lastName: "Rahimov",
//         age: 19,
//         markaz: "Najot Ta'lim",
//         tolov: true,
//         ortachaBahosi: 90,
//         darsQoldirish: 18,
//         BajarilmaganVazifalar: 0,
//         mahorati: ["python", "c lang"]
//     },
//     Shaxlo: {
//         firstName: "Shaxlo",
//         lastName: "Qodirova",
//         age: 23,
//         markaz: "Najot Ta'lim",
//         tolov: false,
//         ortachaBahosi: 40,
//         darsQoldirish: 54,
//         BajarilmaganVazifalar: 44,
//         mahorati: ["python", "c lang"]
//     },
//     Shavkat: {
//         firstName: "Shavkat",
//         lastName: "Raxmat",
//         age: 19,
//         markaz: "Najot Ta'lim",
//         tolov: true,
//         ortachaBahosi: 95,
//         darsQoldirish: 0,
//         BajarilmaganVazifalar: 10,
//         mahorati: ["python", "c lang"]
//     },
//     Zuhriddin: {
//         firstName: "Zuhriddin",
//         lastName: "........",
//         age: 23,
//         markaz: "Najot Ta'lim",
//         tolov: true,
//         ortachaBahosi: 69,
//         darsQoldirish: 40,
//         BajarilmaganVazifalar: 20,
//         mahorati: ["python", "c lang"]
//     },
//     Umidjon: {
//         firstName: "Umidjon",
//         lastName: "Izzatullayev",
//         age: 18,
//         markaz: "Najot Ta'lim",
//         tolov: true,
//         ortachaBahosi: 95,
//         darsQoldirish: 70,
//         BajarilmaganVazifalar: 30,
//         mahorati: ["python", "c lang"]
//     },
//     Xusniddin: {
//         firstName: "Xusniddin",
//         lastName: "G'aniyev",
//         age: 21,
//         markaz: "Najot Ta'lim",
//         tolov: true,
//         ortachaBahosi: 99,
//         darsQoldirish: 19,
//         BajarilmaganVazifalar: 0,
//         mahorati: ["python", "c lang"],
//         baho: 60
//     },
//     Saidahmad: {
//         firstName: "Saidahmad",
//         lastName: "Abdullayev",
//         age: 23,
//         markaz: "Najot Ta'lim",
//         tolov: false,
//         ortachaBahosi: 44,
//         darsQoldirish: 10,
//         BajarilmaganVazifalar: 0,
//         mahorati: ["python", "c lang"],
//         baho: 12
//     }
// }





// for (let student in students) {
//     let ball = students[student].ortachaBahosi;
//     if (ball >= 0 && ball <= 20) {
//         console.log(students[student].firstName + ": Juda yomon");
//     } else if (ball >= 21 && ball <= 59) {
//         console.log(students[student].firstName + ": Qoniqarsiz");
//     }else if (ball >= 60 && ball <= 70) {
//         console.log(students[student].firstName + ": Qoniqarli");
//     }else if (ball >= 71 && ball <= 85) {
//         console.log(students[student].firstName + ": Yaxshi");
//     }else if (ball >= 86 && ball <= 94) {
//         console.log(students[student].firstName + ": A'lo");
//     }else if (ball >= 95 && ball <= 100) {
//         console.log(students[student].firstName + ": Vunderkind");
//     }else{
//         console.log("Ball (0 - 100)oraliqda emas!");
//     }
// }




// for (let key in students) {
//     const baho = students[key].baho
//     switch (true) {
//         case 0 <= baho && baho <= 20:
//             console.log("Juda yomom");
//             break;
//         default:
//             console.log("Yiqildiz");
//             break;
//     }
// }






// function arrey(arr) {
//     let sort;
//     for (let i = 0; i < arr.length; i++) {
//         for (let k = i + 1; k < arr.length; k++) {
//             if (arr[i] > arr[k]) {
//                 sort = arr[i];
//                 arr[i] = arr[k];
//                 arr[k] = sort;
//             }
//         }
//     }
//     return arr;
// }

// let arr = [1, 3, 4, 5, 6, 4, 9, 87, 5];
// console.log(arrey(arr));








function name(params) {
    let number = 0;
    for (let i = 1; i < array.length; i++) {
        let count = 0;
        for (let j = 2; j < array.length; j++) {


        }
    }
}




