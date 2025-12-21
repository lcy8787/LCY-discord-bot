// main.js - LCY Discord Bot 網站互動腳本
function switchPage(pageId) {
    // 隱藏所有頁面區塊
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    // 移除所有導覽按鈕的 active 樣式
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    // 顯示目標頁面
    document.getElementById(pageId).classList.add('active');
    // 為當前按鈕添加 active 樣式
    const activeBtn = Array.from(buttons).find(btn => 
        btn.textContent.includes(
            pageId === 'home' ? '首頁' : 
            pageId === 'tos' ? '服務條款' : '隱私政策'
        )
    );
    if (activeBtn) activeBtn.classList.add('active');
    // 滾動到頂部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.onload = function() {
    const hash = window.location.hash.substring(1);
    if (hash === 'tos' || hash === 'privacy') {
        switchPage(hash);
    } else {
        switchPage('home');
    }
}
