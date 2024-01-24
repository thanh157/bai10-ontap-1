var fullName = document.getElementById('fullName');
var sex = document.getElementsByName('sex'); // Lưu ý: getElementById không áp dụng với nút radio có cùng name
var phoneNumber = document.getElementById('phoneNumber');
var email = document.getElementById('email');
var passWord = document.getElementById('password');
var confirmPassword = document.getElementById('confirmPassword');

var errorName = document.getElementById('errorName');
var errorSex = document.getElementById('errorSex');
var errorEmail = document.getElementById('errorEmail');
var errorPhone = document.getElementById('errorPhone');
var errorPassword = document.getElementById('errorPassword');
var errorConfirmPassword = document.getElementById('errorConfirmPassword');

function checkName() {
    // alert(sex.length); // Xem có bao nhiêu nút radio
    // alert(sex[0].checked); // Xem nút radio thứ nhất xem có đang chọn hay không?
    // return;
    
    if (fullName.value.trim() === '') {
        showError(fullName, errorName, "Yêu cầu nhập họ tên!");
    } else if (fullName.value.length < 8) {
        showError(fullName, errorName, "Yêu cầu nhập họ tên có độ dài lớn hơn 8 kí tự!");
    } else {
        showError(fullName, errorName, "");
    }
}

function checkSex() {
    var isSexSelected = false;
    for (var i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            isSexSelected = true;
            break;
        }
    }
    if (!isSexSelected) {
        errorSex.innerText = "Vui lòng chọn giới tính";
        errorSex.style.color = "red";
        errorSex.style.width = "300px";
        errorSex.style.textAlign = "center";
    } else {
        errorSex.innerText = "";
    }
}

function checkEmail() {
    if (email.value.trim() === '') {
        showError(email, errorEmail, "Yêu cầu email");
    } else {
        showError(email, errorEmail, "");
    }
}

function checkPhone() {
    if (phoneNumber.value.trim() === '') {
        showError(phoneNumber, errorPhone, "Yêu cầu nhập số điện thoại");
    } else {
        showError(phoneNumber, errorPhone, "");
    }
}

function checkPassword() {
    if (passWord.value.trim() === '') {
        showError(passWord, errorPassword, "Yêu cầu nhập mật khẩu");
    } else if (confirmPassword.value.trim() === '') {
        showError(confirmPassword, errorConfirmPassword, "Yêu cầu nhập lại mật khẩu");
    } else {
        showError(passWord, errorPassword, "");
        showError(confirmPassword, errorConfirmPassword, "");
    }
}

function showError(element, error, errorMessage) {
    if (errorMessage) {
        element.style.border = "1px solid red";
        error.innerText = errorMessage;
        error.style.color = "red";
        error.style.width = "300px";
        error.style.textAlign = "center";
    } else {
        // Nếu errorMessage là rỗng, ẩn error message
        element.style.border = "1px solid #ccc"; // Đặt lại biên để ẩn viền đỏ
        error.innerText = "";
    }
}

function checkForm() {
    // Kiểm tra tất cả điều kiện
    checkName();
    checkSex();
    checkEmail();
    checkPhone();
    checkPassword();

    // Kiểm tra xem có lỗi hay không
    if (
        !errorName.innerText &&
        !errorSex.innerText &&
        !errorEmail.innerText &&
        !errorPhone.innerText &&
        !errorPassword.innerText
    ) {
        // Nếu không có lỗi, cho phép submit
        return true;
    } else {
        // Nếu có lỗi, ngăn chặn sự kiện submit
        return false;
    }
}