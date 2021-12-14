/**
 * Bài 1: In các số chẵn lẽ từ 0 - 100 
 * khoi1:
 * cho sẵn tối da = 100
 * 
 * khối 2:
 * b1 tạo biến đệm 
 * chuỗi lê (contentL)
 * chuỗi chẵn (contentC)
 * 
 * b2 tạo vong lặp 
 * bắt đầu từ i và cho i++ đến 100
 * khi i%2==0, ta đc số chẵn
 * ngược lại, ta đc số lẽ
 * 
 * 
 *b3: suất ra màn hình 
 * 
 * khoi 3: 
 * clicl => 👉Số chẵn: 0 2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50 52 54 56 58 60 62 64 66 68 70 72 74 76 78 80 82 84 86 88 90 92 94 96 98
👉Số lẻ: 1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49 51 53 55 57 59 61 63 65 67 69 71 73 75 77 79 81 83 85 87 89 91 93 95 97 99
 * 
 * 
 */

document.getElementById("btnTimSo").onclick = function () {
    var contentL = "";
    var contentC = "";
    //dùng for
    // for(var i =0;i<100;i++){
    // if (i % 2 == 0) contentC += i + " ";
    // else contentL += i + " ";
    // }

    // dùng while 
    var i = 0;
    while (i < 100) {
        {
            if (i % 2 == 0) contentC += i + " ";
            else contentL += i + " ";
        }
        i++;
    }


    document.getElementById("txtTimSo").innerHTML = "👉Số chẵn: " + contentC + "<br>👉Số lẻ: " + contentL;
}

/**
 * Baif2 : Đếm số chia hết cho 3
 * 
 * khoi1:
 * cho sẵn tối da = 1000
 * 
 * Khoi 2: 
 * b1tạo biến đệm 
 * số lần đếm (count)
 * 
 * b2: tạo vòng lặp
 * bắt đầu từ i và cho i++ đến 1000
 * Khi i chia hết cho 3, ta tăng count lên 1
 * 
 * b3: suất kết quả
 * 
 * Khối 3: 
 * khi click =>👉 Số chia hết cho 3 nhỏ hơn 1000: 334 số
 */

document.getElementById("btnDemSo").onclick = function () {
    var count = 0;
    //dùng for
    // for(var i =0;i<1000;i++)
    // if(i%3==0) count++;

    //dùng while
    var i = 0;
    while (i < 1000) {
        if (i % 3 == 0) count++;
        i++;
    }
    document.getElementById("txtDemSo").innerHTML = "👉 Số chia hết cho 3 nhỏ hơn 1000: " + count + " số";
}

/**
 * Bài 3: TÌm só nguyên dương nhỏ nhất
 * 
 * khối 1:
 * 
 * khối 2:
 * b1: tạo biếm đệm
 * sum
 * 
 * tạo vong lặp sum if(sum<10000) (dừng và đc kết quả đầu tiên) 
 *
 * 
 * 
 * Khối 3: 
 * click button =>👉Số nguyên dương nhỏ nhất: 141
 * 
 */

document.getElementById("btnTimSoNDNN").onclick = function () {
    var sum = 0;
    var n = 0;
    while (sum < 10000) {
        n++;
        sum += n;
        // console.log(n+" "+ sum);
    }

    document.getElementById("txtTimSoNDNN").innerHTML = "👉Số nguyên dương nhỏ nhất: " + n
}
/**
 * Bài 4: Tính Tổng khi nhập x và n 
 * 
 * khối 1: 
 * nhập x (x)
 * nhập n (n)
 * 
 * khối 2:
 * 
 * b1: Tạo biến  đệm 
 * tong (sum)
 * 
 * b2: tạo vòng lặp
 * 
 * khi i<n => i++ ;  sum += Math.pow(x, i);
 * 
 * b3: suat ra man hinh 
 * 
 * khối 3: 
 * nhập x =2; n =2 =>> 👉Tổng: 6
 * 
 */

document.getElementById("btnSum").onclick = function () {
    var x = Number(document.getElementById("inpX").value);
    var n = Number(document.getElementById("inpN").value);
    var sum = 0;
    var i = 0;
    while (i < n) {
        i++;
        sum += Math.pow(x, i);

    }

    document.getElementById("txtSum").innerHTML = "👉Tổng: " + sum;
}


/**
 * Bài 5: Tính Giai Thừa
 * 
 * khối 1 : 
 * nhập n (n)
 * 
 * khối 2: 
 * b1: tọa biến đệm
 * multi
 * i
 * 
 * b2: tạo vòng lặp
 *  khi i< n thì lặp
 * i++;
        multi *=i;
 * Khối 3: 

    Khi n = 4 =>> 👉Giai thừa: 24
 */

document.getElementById("btnGiaiThua").onclick = function () {
    var n = Number(document.getElementById("inpNumN").value);
    var multi = 1;
    var i = 0;
    while (i < n) {
        i++;
        multi *= i;
    }
    document.getElementById("txtGiaiThua").innerHTML = "👉Giai thừa: " + multi;
}

/**
 * bài 6 Tạo thẻ Div
 * 
 * khoi 1:
 * 
 * khối 2:
 * b1: tạo biến  đệm
 * content
 * 
 * b2 tạo vòng lặp
 * cho i chạy từ 1 đến 10, khi i chia hết cho 2 =>content +="<div class='bg-danger text-white p-2'>Div chẵn</div>" ;
 * nguoi lại 
 * content +="<div class='bg-primary text-white  p-2'>Div lẻ </div>";
 * 
 * b3 suat ket qua
 * content
 * 
 * khối 3:
 * khi click =>
 * 👉
Div lẻ (blue)
Div chẵn (red)
Div lẻ
Div chẵn
Div lẻ
Div chẵn
Div lẻ
Div chẵn
Div lẻ
Div chẵn
 */

document.getElementById("btnTaoDiv").onclick = function () {
    var content = "";
    for (var i = 1; i <= 10; i++){
        if(i%2==0)
        content +="<div class='bg-danger text-white p-2'>Div chẵn</div>" ;
        else
        content +="<div class='bg-primary text-white  p-2'>Div lẻ </div>";
    }
    document.getElementById("txtTaoDiv").innerHTML = content;

}


/**
 * Bài 7: In các số nguyên tố
 * 
 * khối 1: 
 * nhập n (n)
 * 
 * khối 2:
 * b1: tạo biến đệm 
 * content
 * i, j , count
 * 
 * b2: tạo vòng lặp
 * 
 * ở đây dùng 2 vòng lặp:
 * 
 * vlap 1 chạy i từ 1 đến n
 * vlap tạo j chay từ 1 đên i, khi i%j => count ++, kết thúc vong lặp, khi count<2, ta lấy i vào biến content
 * 
 * b3: suát ra man hinh
 * content
 * 
 * Khối 3:
 * nhập n=13 => 👉 2 3 5 7 11 13
 *
 */

document.getElementById("btnInNt").onclick = function () {
    var content ="";
    var i = 1;
    var n = Number(document.getElementById("inpInNT").value);
    while(i<n){
        i++;
        var count = 0;
        var j = 0;
        while(j<i){
            j++;
            if(i%j==0) count++;    
        }
        if(count<=2) content+=i+" ";
    }
    document.getElementById("txtInNT").innerHTML ="👉 " +content;
}


