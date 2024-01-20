var currentSlide = 0;
var imgSlide = document.getElementsByClassName("img");

// hiển thị hình ảnh
function amimationSlide() {
    currentSlide++;
    showSlide();
}

function showSlide() {
    if (currentSlide < 0) {
        currentSlide = imgSlide.length - 1;
    }
    if (currentSlide >= imgSlide.length) {
        currentSlide = 0;
    }

    // // Ẩn tất cả các hình ảnh
    for (var i = 0; i < imgSlide.length; i++) {
        imgSlide[i].style.display = "none";
    }

    // // Hiển thị hình ảnh tương ứng với currentSlide
    imgSlide[currentSlide].style.display = "block";
}

// nhấp vào một trong các nút liên quan đến hình vuông
function elementSlide(n) {
    clearInterval(intervalId); // Xóa interval khi chọn ảnh từ ô vuông
    currentSlide = n;
    showSlide();
}

function prevSlide() {
    currentSlide--;
    showSlide();
}

function nextSlide() {
    currentSlide++;
    showSlide();
}

// time
var intervalId = setInterval(amimationSlide, 10000);

document.getElementById('slide-img').addEventListener('mouseover', function () {
    document.getElementById('prev').style.display = "block";
    document.getElementById('next').style.display = "block";
    clearInterval(intervalId);
});

document.getElementById('slide-img').addEventListener('mouseout', function () {
    document.getElementById('prev').style.display = "none";
    document.getElementById('next').style.display = "none";
    intervalId = setInterval(amimationSlide, 10000);
});
