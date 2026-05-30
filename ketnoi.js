/**
 * CẤU HÌNH GIAO DIỆN & KẾT NỐI HỆ THỐNG WEB APP
 * Hệ thống: Sổ Kiểm Tra Nội Bộ (SKT)
 * Tác giả: Hoàng Ngọc Lâm
 */
const SKT_GAS_URL = "https://script.google.com/macros/s/AKfycbys_v4n0ZrCV0ZnW98QHmHGtynI8V4cbeEHCz51y3XnYr3QBOfPoXBM7YPI8nhNrxEyIw/exec";
const SKT_LOGO_URL = "https://i.ibb.co/8Df1xXsN/Logo-nguyen-du.png";

const SKT_TEN_TRUONG = "Trường Tiểu học Nguyễn Du";
const SKT_TEN_TRUONG_UP = "TRƯỜNG Tiểu học Nguyễn Du";
const SKT_TEN_PM = "Sổ Kiểm Tra Nội Bộ";
const SKT_TEN_PM_UP = "SỔ KIỂM TRA NỘI BỘ";
const SKT_TEN_PM_DAY_DU = "PHẦN MỀM KIỂM TRA NỘI BỘ";
const SKT_PHIEN_BAN = "V3.1.2026";
const SKT_TAC_GIA = "Hoàng Ngọc Lâm";
const SKT_TAC_GIA_UP = "HOÀNG NGỌC LÂM";

// MÃ CLIENT ID CỦA GOOGLE ĐĂNG NHẬP
const SKT_GOOGLE_CLIENT_ID = "407480994586-m6fpq6sfcc90qqj9k08rsmi1lge6br94.apps.googleusercontent.com";

/* ========================================================================= */
/* KHỞI TẠO CẤU TRÚC HEADER TỰ ĐỘNG TỪ FILE JS                               */
/* ========================================================================= */
(function() {
    var metaCharset = document.createElement('meta');
    metaCharset.setAttribute('charset', 'utf-8');
    document.head.appendChild(metaCharset);

    document.title = SKT_TEN_PM + " - " + SKT_TEN_TRUONG;

    var linkIcon = document.createElement('link');
    linkIcon.rel = 'icon';
    linkIcon.href = SKT_LOGO_URL;
    document.head.appendChild(linkIcon);
})();
