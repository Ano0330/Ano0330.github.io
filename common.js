document.addEventListener("DOMContentLoaded", function () {
    var dropdownItems = document.querySelectorAll('.nav-item.dropdown');

    dropdownItems.forEach(function (item) {
        var dropdownToggle = item.querySelector('.dropdown-toggle');
        var dropdownMenu = item.querySelector('.dropdown-menu');

        if (dropdownToggle && dropdownMenu) {
            item.addEventListener('mouseenter', function () {
                dropdownMenu.classList.add('show');
            });

            item.addEventListener('mouseleave', function (event) {
                if (!event.relatedTarget || !event.relatedTarget.closest('.dropdown-menu')) {
                    dropdownMenu.classList.remove('show');
                }
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var overlay = document.querySelector('.overlay');
    
    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        overlay.style.top = Math.min(100, scrollPosition) + '%'; // 計算色塊新的位置
    });
});
