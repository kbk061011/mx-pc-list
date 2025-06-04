
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        sidebar.classList.toggle('active');
    });

    // 모든 메뉴의 클릭 이벤트
    const hasSubmenuItems = document.querySelectorAll('.has-submenu');
    hasSubmenuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const submenu = this.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
            }
        });
    });

    // 앨범 타이틀 클릭 이벤트
    const albumTitles = document.querySelectorAll('.album-title');
    albumTitles.forEach(title => {
        title.addEventListener('click', () => {
            const items = title.nextElementSibling;
            if (items) {
                items.classList.toggle('active');
            }
        });
    });
});
