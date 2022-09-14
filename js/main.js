// document.addEventListener("contextmenu", function (e) {
//     e.preventDefault();
//     //Prevent right click
// }, false);
// document.onkeydown = function (event) {
//     event = (event || window.event);
//     if (event.keyCode == 123) {
//         // Prevent F12 
//         return false;
//     } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
//         // Prevent Ctrl+Shift+I 
//         return false;
//     }
// }

// VALIDATION
const removeWhiteSpace = (value) => {
    return value.replace(/\s/g, '');
}
const hasValue = (value) => {
    if (removeWhiteSpace(value) === "") {
        // alert("Dữ liệu chưa được nhập!");
        return false;
    }

    return true;
}

const isNum = (value) => {

    if (isNaN(Number(removeWhiteSpace(value)))) {
        // alert("Dữ liệu phải là số!");
        return false;
    }
    return true;
}
const isInt = (value) => {
    value = Number(removeWhiteSpace(value));
    if (Number.isInteger(value)) {
        return true;
    }
    // alert("Dữ liệu phải là số nguyên!");
    return false;
}

const isPositive = (value) => {
    value = Number(removeWhiteSpace(value));
    if (value >= 0) {
        return true;
    }

    return false;
}

const dateIsValid = (dateString) => {
    var date = moment(dateString, 'DD.MM.YYYY');
    // console.log(date.isValid());
    if (date.isValid()) {
        return true;
    }
    return false;
}
/**
 * Bài tập: Sắp xếp số tăng dần 
 */
let sapXepTang = (...arrayNum) => {
    arrayNum.sort((a, b) => a - b);
    return arrayNum;
}
document.getElementById("sortNumber").onclick = function () {
    let a = document.getElementById("inputNum1").value;
    let b = document.getElementById("inputNum2").value;
    let c = document.getElementById("inputNum3").value;
    let kqsx = document.getElementById("txtSortNumber");

    let isValid = hasValue(a) && isNum(a) && isInt(a) && hasValue(b) && isNum(b) && isInt(b) && hasValue(c) && isNum(c) && isInt(c);

    if (isValid) {
        let arraySort = sapXepTang(Number(removeWhiteSpace(a)), Number(removeWhiteSpace(b)), Number(removeWhiteSpace(c)));
        kqsx.innerHTML = arraySort.join(",");
    } else {
        kqsx.innerHTML = "";
        // document.querySelector("#form1").reset();
        alert("Dữ liệu không hợp lệ");
    }


    // if (a > b) {
    //     if (b > c) {
    //         kqsx.innerHTML = c + " < " + b + " < " + a;
    //     } else if (a > c) {
    //         kqsx.innerHTML = b + " < " + c + " < " + a;
    //     } else {
    //         kqsx.innerHTML = b + " < " + a + " < " + c;
    //     }
    // } else if (b > c) {
    //     if (a > c) {
    //         kqsx.innerHTML = c + " < " + a + " < " + b;
    //     } else {
    //         kqsx.innerHTML = a + " < " + c + " < " + b;
    //     }
    // } else {
    //     kqsx.innerHTML = a + " < " + b + " < " + c;
    // }
}

/**
 * Bài tập: Chương trình "Chào hỏi" 
 */

document.getElementById("btnHello").onclick = function () {
    var user = document.getElementById("selUser").value;
    var txtChao = document.getElementById("txtHello");
    if (user == "B") {
        txtChao.innerHTML = "Xin chào Bố!";
    } else if (user == "M") {
        txtChao.innerHTML = "Xin chào Mẹ!";
    } else if (user == "A") {
        txtChao.innerHTML = "Xin chào Anh Trai!";
    } else if (user == "E") {
        txtChao.innerHTML = "Xin chào Em gái!";
    } else {
        txtChao.innerHTML = "Xin chào Người lạ ơi!";
    }
}

/**
 * Bài tập: Chương trình đếm số chẵn lẻ 
 */

document.getElementById("btnCount").onclick = function () {
    var num1 = document.getElementById("inputCount1").value;
    var num2 = document.getElementById("inputCount2").value;
    var num3 = document.getElementById("inputCount3").value;
    var count = 0;

    let isValid = hasValue(num1) && isNum(num1) && isInt(num1) && hasValue(num2) && isNum(num2) && isInt(num2) && hasValue(num3) && isNum(num3) && isInt(num3);

    if (isValid) {
        if (Number(removeWhiteSpace(num1)) % 2 == 0) {
            count++;
        }
        if (Number(removeWhiteSpace(num2)) % 2 == 0) {
            count++;
        }
        if (Number(removeWhiteSpace(num3)) % 2 == 0) {
            count++;
        }
        document.getElementById("txtCount").innerHTML = "Có " + count + " số chẵn," + (3 - count) + " số lẻ";
    } else {
        document.getElementById("txtCount").innerHTML = "";
        // document.querySelector("#form3").reset();
        alert("Dữ liệu không hợp lệ");
    }



}

/**
* Bài tập: Đoán hình tam giác 
*/

document.getElementById("btnEdge").onclick = function () {
    var c1 = document.getElementById("inputEdge1").value;
    var c2 = document.getElementById("inputEdge2").value;
    var c3 = document.getElementById("inputEdge3").value;
    var kqDoan = document.getElementById("txtEdge");

    let isValid = hasValue(c1) && isNum(c1) && isPositive(c1) && hasValue(c2) && isNum(c2) && isPositive(c2) && hasValue(c3) && isNum(c3) && isPositive(c3);

    if (isValid && (c1 + c2 > c3) && (c1 + c3 > c2) && (c2 + c3 > c1)) {
        var pow1 = Math.sqrt(Math.pow(c2, 2) + Math.pow(c3, 2));
        var pow2 = Math.sqrt(Math.pow(c1, 2) + Math.pow(c3, 2));
        var pow3 = Math.sqrt(Math.pow(c1, 2) + Math.pow(c2, 2));
        if (c1 == c2 && c2 == c3) {
            kqDoan.innerHTML = "Hình tam giác đều";
        } else if (c1 == c2 || c2 == c3 || c1 == c3) {

            kqDoan.innerHTML = "Hình tam giác cân";
        } else if (c1 == pow1 || c2 == pow2 || c3 == pow3) {
            kqDoan.innerHTML = "Hình tam giác vuông";
        } else {
            kqDoan.innerHTML = "Một loại tam giác khác";
        }
    } else {
        kqDoan.innerHTML = "";
        // document.querySelector("#form4").reset();
        alert("Dữ liệu không hợp lệ");
    }

}


/**
 * Tính ngày trước đó và ngày kế tiếp
 */

document.getElementById("btnTomorrow").onclick = function () {
    var day = document.getElementById("inputDay").value;
    var month = document.getElementById("inputMonth").value;
    var year = document.getElementById("inputYear").value;
    var dayInput = "";


    let isValid = hasValue(day) && isNum(day) && isPositive(day) && isInt(day)
        && hasValue(month) && isNum(month) && isPositive(month) && isInt(month)
        && hasValue(year) && isNum(year) && isPositive(year) && isInt(year) && dateIsValid(`${day}.${month}.${year}`);

    if (isValid) {
        dayInput = new Date(`${year}-${month}-${day}`);
        dayInput.setDate(dayInput.getDate() + 1);
        document.getElementById("txtDate").innerHTML = dayInput.toLocaleDateString('en-GB');
    } else {
        document.getElementById("txtDate").innerHTML = "";
        // document.querySelector("#form5").reset();
        alert("Dữ liệu không hợp lệ");
    }

}


document.getElementById("btnYesterday").onclick = function () {

    var day = document.getElementById("inputDay").value;
    var month = document.getElementById("inputMonth").value;
    var year = document.getElementById("inputYear").value;
    var dayInput = "";

    let isValid = hasValue(day) && isNum(day) && isPositive(day) && isInt(day)
        && hasValue(month) && isNum(month) && isPositive(month) && isInt(month)
        && hasValue(year) && isNum(year) && isPositive(year) && isInt(year) && dateIsValid(`${day}.${month}.${year}`);

    if (isValid) {
        dayInput = new Date(`${year}-${month}-${day}`);
        dayInput.setDate(dayInput.getDate() - 1);
        document.getElementById("txtDate").innerHTML = dayInput.toLocaleDateString('en-GB');
    } else {
        document.getElementById("txtDate").innerHTML = "";
        // document.querySelector("#form5").reset();
        alert("Dữ liệu không hợp lệ");
    }
    // switch (month) {
    //     case 1:
    //         if (day > 1 && day <= 31) {
    //             preDay = (day - 1) + "/" + month + "/" + year;
    //         } else if (day == 1) {
    //             preDay = 31 + "/" + 12 + "/" + (year - 1);
    //         } else {
    //             preDay = "Ngày không xác định";
    //         }
    //         break;
    //     case 2:
    //         if (day > 1 && day <= 28) {
    //             preDay = (day - 1) + "/" + month + "/" + year;
    //         } else if (day == 1) {
    //             preDay = 31 + "/" + (month - 1) + "/" + year;
    //         } else {
    //             preDay = "Ngày không xác định";
    //         }
    //         break;
    //     case 3:
    //         if (day > 1 && day < 31) {
    //             preDay = (day - 1) + "/" + month + "/" + year;
    //         } else if (day == 1) {
    //             preDay = + "/" + (month - 1) + "/" + year;
    //         } else {
    //             preDay = "Ngày không xác định";
    //         }
    //         break;
    //     case 5: case 7: case 8: case 10: case 12:
    //         if (day > 1 && day < 31) {
    //             preDay = (day - 1) + "/" + month + "/" + year;
    //         } else if (day == 1) {
    //             preDay = 30 + "/" + (month - 1) + "/" + year;
    //         } else {
    //             preDay = "Ngày không xác định";
    //         }
    //         break;
    //     case 4: case 6: case 9: case 11:
    //         if (day > 1 && day <= 30) {
    //             preDay = (day - 1) + "/" + month + "/" + year;
    //         } else if (day == 1) {
    //             preDay = 31 + "/" + (month - 1) + "/" + year;
    //         } else {
    //             preDay = "Ngày không xác định";
    //         }
    //         break;

    // }

    // document.getElementById("txtDate").innerHTML = preDay;
}

/**
 * Số ngày của tháng
 */

document.getElementById("btnCalcDay").onclick = function () {
    var month = document.getElementById("inputMonth2").value;
    var year = document.getElementById("inputYear2").value;
    var isLeapYear = false;
    var kq = 0;

    let isValid = hasValue(month) && isNum(month) && isPositive(month) && isInt(month)
        && hasValue(year) && isNum(year) && isPositive(year) && isInt(year);

    if (isValid && month >= 1 && month <= 12) {
        month = Number(month);
        year = Number(year);
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            isLeapYear = true;
        }

        switch (month) {
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                kq = 31;
                break;
            case 4: case 6: case 9: case 11:
                kq = 30;
                break;
            case 2:
                if (isLeapYear) {
                    kq = 29;
                } else {
                    kq = 28;
                }
                break;
            default:
                kq = 0;
        }

        document.getElementById("txtCalcDay").innerHTML = "Tháng " + month + " năm " + year + " có " + kq + " ngày";
    } else {
        document.getElementById("txtCalcDay").innerHTML = "";
        alert("Dữ liệu không hợp lệ");
    }
}

/**
 * Đọc số
 * 
 */

document.getElementById("btnReadInt").addEventListener("click", function () {
    var so = document.getElementById("inputReadInt").value;

    var tram = Math.floor(so / 100);
    var chuc = Math.floor(so % 100 / 10);
    var donVi = so % 100 % 10;
    var kqTram = "";
    var kqChuc = "";
    var kqDonVi = "";
    var kqAm = "";

    let isValid = hasValue(so) && isNum(so) && isInt(so);


    if (!isValid) {
        document.getElementById("txtReadInt").innerHTML = "";
        alert("Dữ liệu không hợp lệ")
        return;
    }

    switch (tram) {
        case 1:
            kqTram = "một trăm ";
            break;
        case 2:
            kqTram = "hai trăm ";
            break;
        case 3:
            kqTram = "ba trăm ";
            break;
        case 4:
            kqTram = "bốn trăm ";
            break;
        case 5:
            kqTram = "năm trăm ";
            break;
        case 6:
            kqTram = "sáu trăm ";
            break;
        case 7:
            kqTram = "bảy trăm ";
            break;
        case 8:
            kqTram = "tám trăm ";
            break;
        case 9:
            kqTram = "chín trăm ";
            break;
        default:
            alert("số hàng trăm không xác định được");
    }

    switch (chuc) {
        case 0:
            kqChuc = "lẻ ";
            break;
        case 1:
            kqChuc = "mười ";
            break;
        case 2:
            kqChuc = "hai mươi ";
            break;
        case 3:
            kqChuc = "ba mươi ";
            break;
        case 4:
            kqChuc = "bốn mươi ";
            break;
        case 5:
            kqChuc = "năm mươi ";
            break;
        case 6:
            kqChuc = "sáu mươi ";
            break;
        case 7:
            kqChuc = "bảy mươi ";
            break;
        case 8:
            kqChuc = "tám mươi ";
            break;
        case 9:
            kqChuc = "chín mươi ";
            break;
        default:
            alert("Số hàng chục không xác định được");
    }

    switch (donVi) {
        case 0:
            kqDonVi = "";
            break;
        case 1:
            kqDonVi = "một";
            break;
        case 2:
            kqDonVi = "hai";
            break;
        case 3:
            kqDonVi = "ba";
            break;
        case 4:
            kqDonVi = "bốn";
            break;
        case 5:
            kqDonVi = "năm";
            break;
        case 6:
            kqDonVi = "sáu";
            break;
        case 7:
            kqDonVi = "bảy";
            break;
        case 8:
            kqDonVi = "tám";
            break;
        case 9:
            kqDonVi = "chín";
            break;
        default:
            alert("Số hàng đơn vị không xác định được.");
    }

    if (donVi == 0 && chuc == 0) {
        kqChuc = "";
    }
    if (!isPositive(so)) {
        kqAm = "âm "
    }
    document.getElementById("txtReadInt").innerHTML = kqAm + kqTram + kqChuc + kqDonVi;
});

/**
 * Tính quãng đường
 */

document.getElementById("btnSearch").addEventListener("click", function () {
    var name1 = document.getElementById("inputName1").value;
    var x1 = document.getElementById("inputX1").value;
    var y1 = document.getElementById("inputY1").value;
    var name2 = document.getElementById("inputName2").value;
    var x2 = document.getElementById("inputX2").value;
    var y2 = document.getElementById("inputY2").value;
    var name3 = document.getElementById("inputName3").value;
    var x3 = document.getElementById("inputX3").value;
    var y3 = document.getElementById("inputY3").value;

    var x4 = document.getElementById("inputX4").value;
    var y4 = document.getElementById("inputY4").value;


    let isValid = hasValue(name1) && hasValue(name2) && hasValue(name3)
        && isPositive(x1) && isPositive(x2) && isPositive(x3) && isPositive(x4)
        && isPositive(y1) && isPositive(y2) && isPositive(y3) && isPositive(y4);


    if (!isValid) {
        document.getElementById("txtSearch").innerHTML = "";
        alert("Dữ liệu không hợp lệ")
        return;
    }



    var sv1 = Math.pow((x4 - x1), 2) + Math.pow((y4 - y1), 2);
    var d1 = Math.sqrt(sv1);
    console.log(d1);

    var sv2 = Math.pow((x4 - x2), 2) + Math.pow((y4 - y2), 2);
    var d2 = Math.sqrt(sv2);
    console.log(d2);

    var sv3 = Math.pow((x4 - x3), 2) + Math.pow((y4 - y3), 2);
    var d3 = Math.sqrt(sv3);
    console.log(d3);
    var kq = "";



    if (d1 > d2 && d1 > d3) {

        kq = name1;
    } else if (d2 > d1 && d2 > d3) {

        kq = name2;
    } else {

        kq = name3;
    }

    document.getElementById("txtSearch").innerHTML = "Sinh viên xa trường nhất: " + kq;
});