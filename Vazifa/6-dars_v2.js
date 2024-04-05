let students = {
    Abduvohid: {
        firstName: "Abduvohid",
        lastName: "Abdurahimov",
        age: 19,
        markaz: "Najot Ta'lim",
        tolov: true,
        ortachaBahosi: 95,
        darsQoldirish: 10,
        BajarilmaganVazifalar: 20,
        mahorati: ["python", "c lang"]
    },
    Otabek: {
        firstName: "Otabek",
        lastName: "Xushvaqtov",
        age: 19,
        markaz: "Najot Ta'lim",
        tolov: true,
        ortachaBahosi: 80,
        darsQoldirish: 35,
        BajarilmaganVazifalar: 23,
        mahorati: ["python", "c lang"]
    },
    Mushtariy: {
        firstName: "Mushtariy",
        lastName: "Yusupova",
        age: 30,
        markaz: "Najot Ta'lim",
        tolov: true,
        ortachaBahosi: 90,
        darsQoldirish: 22,
        BajarilmaganVazifalar: 12,
        mahorati: ["python", "c lang"]
    },
    Abdulaziz: {
        firstName: "Abdulaziz",
        lastName: "Akmalov",
        age: 20,
        markaz: "Najot Ta'lim",
        tolov: true,
        ortachaBahosi: 89,
        darsQoldirish: 42,
        BajarilmaganVazifalar: 11,
        mahorati: ["python", "c lang"]
    },
    Izzatulloh: {
        firstName: "Izzatulloh",
        lastName: ".......",
        age: 17,
        markaz: "Najot Ta'lim",
        tolov: true,
        ortachaBahosi: 69,
        darsQoldirish: 27,
        BajarilmaganVazifalar: 35,
        mahorati: ["python", "c lang"]
    },
    Rasulov: {
        firstName: "......",
        lastName: "Rasulov",
        age: 20,
        markaz: "Najot Ta'lim",
        tolov: true,
        ortachaBahosi: 77,
        darsQoldirish: 19,
        BajarilmaganVazifalar: 0,
        mahorati: ["python", "c lang"]
    },
    Xusan: {
        firstName: "Xusan",
        lastName: "Murodov",
        age: 28,
        markaz: "Najot Ta'lim",
        tolov: true,
        ortachaBahosi: 86,
        darsQoldirish: 70,
        BajarilmaganVazifalar: 31,
        mahorati: ["python", "c lang"]
    },
    Rustam: {
        firstName: "Rustam",
        lastName: "........",
        age: 25,
        markaz: "Najot Ta'lim",
        tolov: true,
        ortachaBahosi: 77,
        darsQoldirish: 31,
        BajarilmaganVazifalar: 28,
        mahorati: ["python", "c lang"]
    },
    Asilbek: {
        firstName: "Asilbek",
        lastName: "Rahimov",
        age: 19,
        markaz: "Najot Ta'lim",
        tolov: true,
        ortachaBahosi: 90,
        darsQoldirish: 18,
        BajarilmaganVazifalar: 0,
        mahorati: ["python", "c lang"]
    },
    Shaxlo: {
        firstName: "Shaxlo",
        lastName: "Qodirova",
        age: 23,
        markaz: "Najot Ta'lim",
        tolov: false,
        ortachaBahosi: 40,
        darsQoldirish: 54,
        BajarilmaganVazifalar: 44,
        mahorati: ["python", "c lang"]
    },
    Shavkat: {
        firstName: "Shavkat",
        lastName: "Raxmat",
        age: 19,
        markaz: "Najot Ta'lim",
        tolov: true,
        ortachaBahosi: 95,
        darsQoldirish: 0,
        BajarilmaganVazifalar: 10,
        mahorati: ["python", "c lang"]
    },
    Zuhriddin: {
        firstName: "Zuhriddin",
        lastName: "........",
        age: 23,
        markaz: "Najot Ta'lim",
        tolov: true,
        ortachaBahosi: 69,
        darsQoldirish: 40,
        BajarilmaganVazifalar: 20,
        mahorati: ["python", "c lang"]
    },
    Umidjon: {
        firstName: "Umidjon",
        lastName: "Izzatullayev",
        age: 18,
        markaz: "Najot Ta'lim",
        tolov: true,
        ortachaBahosi: 95,
        darsQoldirish: 70,
        BajarilmaganVazifalar: 30,
        mahorati: ["python", "c lang"]
    },
    Xusniddin: {
        firstName: "Xusniddin",
        lastName: "G'aniyev",
        age: 21,
        markaz: "Najot Ta'lim",
        tolov: true,
        ortachaBahosi: 99,
        darsQoldirish: 19,
        BajarilmaganVazifalar: 0,
        mahorati: ["python", "c lang"]
    },
    Saidahmad: {
        firstName: "Saidahmad",
        lastName: "Abdullayev",
        age: 23,
        markaz: "Najot Ta'lim",
        tolov: false,
        ortachaBahosi: 44,
        darsQoldirish: 10,
        BajarilmaganVazifalar: 0,
        mahorati: ["python", "c lang"]
    }
}




// 3-masala...
// for (let student in students) {
//     if (!students[student].tolov) {
//         console.log(students[student].firstName + " " + students[student].lastName + ":" + " Siz darsga kira olmaysiz uzur!");
//     }
// }





//  4-masala...
// for (let student in students) {
//     let score = students[student].ortachaBahosi;

//     if (score >= 0 && score <= 59.9) {
//         console.log(students[student].firstName + " " + students[student].lastName + ": Muvaffaqiyatsiz (qayta o'qish).");
//     } else if (score >= 60 && score <= 100) {
//         console.log(students[student].firstName + " " + students[student].lastName + ": Muvaffaqiyatli.");
//     }
// }








//    5-masala...
// for (let student in students) {
//     let lesson = students[student].darsQoldirish;

//     if (lesson <= 30 && lesson >= 0) {
//         console.log(students[student].firstName + " " + students[student].lastName + ": Bonus ball sizniki");

//     } else {
//         console.log(students[student].firstName + " " + students[student].lastName + ": Bonus balldan mahrum etildiz");
//     }
// }




//  6-masala...

// for (let student in students) {
//     let task = students[student].BajarilmaganVazifalar;

//     if (task <= 30 && task >= 0) {
//         console.log(students[student].firstName + " " + students[student].lastName + ": Bonus ball sizniki");

//     } else {
//         console.log(students[student].firstName + " " + students[student].lastName + ": Uyga vazifa uchun berilgan bonus baldan mahrum etildiz");
//     }
// }









//  7-masala...
// for (let student in students) {
//     let lesson = students[student].darsQoldirish;
//     let task = students[student].BajarilmaganVazifalar;

//     if (task >= 60 || lesson >= 50 ) {
//         console.log(students[student].firstName + " " + students[student].lastName + ": OLG'A");

//     } else {
//         console.log("Siz--> " + students[student].firstName + " " + students[student].lastName+ "imtihon topshirish huquqidan mahrum qilindiz va siz imtihondan yiqilgan hisoblanasiz!");
//     }
// }