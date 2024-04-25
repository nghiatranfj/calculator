// Hàm hiển thị số hoặc toán tử được nhấn vào ô kết quả
function hienThi(val) { 
    document.getElementById("ketQua").value += val;
} 

// Hàm xử lý sự kiện khi nhấn phím trên bàn phím
function xuLySuKien(event) { 
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3' 
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7' 
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-' 
        || event.key == '*' || event.key == '/') 
        document.getElementById("ketQua").value += event.key; 
} 

// Bắt sự kiện nhấn phím "Enter" để tính toán kết quả
var mayTinh = document.getElementById("mayTinh"); 
mayTinh.onkeyup = function (event) { 
    if (event.keyCode === 13) { 
        tinh(); 
    } 
} 

// Hàm tính toán giá trị và hiển thị kết quả
function tinh() { 
    let x = document.getElementById("ketQua").value;
    let y = eval(x);
    document.getElementById("ketQua").value = y;
} 

// Hàm xóa màn hình 
function xoa() { 
    document.getElementById("ketQua").value = ""; 
} 
