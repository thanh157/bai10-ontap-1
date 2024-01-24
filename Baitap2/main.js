var fullName = document.getElementById('fullName');
var phoneNumber = document.getElementById('phoneNumber').value;
var email = document.getElementById('email').value;
var passWord = document.getElementById('password').value;
var confirmPassword = document.getElementById('confirmPassword').value;
var error = document.getElementById('error');
var errMessage ="";


function checkNameBlur(event) {
    if(fullName.value.length < 8 || fullName.value === null) {
        fullName.style.border="1px solid red";
        error.innerText = "Yêu cầu nhập đầy đủ họ tên";
        error.style.color = "red";
        error.style.width = "300px";
        error.style.textAlign = "center";
        document.querySelector('tr.text label[for="name"]').style.width = "250px";
        document.getElementById('fullName').style.width = "400px";
        // Thêm dòng này để đảm bảo rằng label cũng sẽ mở rộng kích thước
        document.querySelector('tr.text label[for="name"]').style.display = "block";
        document.querySelector('tr.text label[for="name"]').style.fontSize = "";
        document.getElementById('fullName').style.fontSize = "";
        event.preventDefault();
    }
}

