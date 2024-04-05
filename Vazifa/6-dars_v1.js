let students = [
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
]


//  3-masala...
// for (let student of students) {
//     if (!student.tolov) {
//       console.log(student.firstName + " " + student.lastName + ": Siz darsga kira olmaysiz uzur!");
//     }
//   }








// 4-masala... 
// for (let student of students) {
//     let Grade = student.ortachaBahosi;
//     let message = '';

//     if (Grade >= 0 && Grade <= 59.9) {
//       message = 'Muvaffaqiyatsiz (qayta o\'qish)';
//     } else if (Grade >= 60 && Grade <= 100) {
//       message = 'Muvaffaqiyatli';
//     } else {
//       message = 'Noto\'g\'ri baho qiymati';
//     }
//     console.log(student.firstName + ' ' + student.lastName + ': ' + message);
//   }







// 5-masala... 
// for (let student of students) {
//     let lesson = student.darsQoldirish;
//     let message = '';
//     if (lesson >= 30) {
//         message = 'Bonus balldan mahrum etildiz';
//     } else if (lesson >= 0 && lesson < 30) {
//         message = 'Ball sizniki';
//     } else {
//         message = 'Noto\'g\'ri ball qiymati';
//     }
//     console.log(student.firstName + ' ' + student.lastName + ': ' + message);
// }






//6-masala...

// for (var i = 0; i < students.length; i++) {
//     var student = students[i];
//     var vazifaFoizi = (student.BajarilmaganVazifalar / student.darsQoldirish) * 100;
  
//     if (vazifaFoizi > 30) {
//       console.log(student.firstName + " " + student.lastName + " - Uyga vazifa uchun berilgan bonus baldan mahrum etildiz!");
//     }
//     else{
//         console.log(student.firstName + " " + student.lastName + ": Bal sizniki");
//     }
//   }






// 7-masala...
// for (let student of students) {
//     let qatnashish  = (student.darsQoldirish / 100) * 100;
//     let topshiriq  = (student.BajarilmaganVazifalar / 100) * 100;

//     if (qatnashish  > 50 || topshiriq  > 60) {
//       console.log(student.firstName + ' ' + student.lastName + ': Siz o\'quvchi imtihon topshirish huquqidan mahrum qilindiz va siz imtihondan yiqilgan hisoblanasiz!');
//     }
//   }



