$('.tab-list').each(function(){ // Find lists of tabs
    var $this = $(this); // dòng này có nghĩa là $this = $(".tab-list") -> chỉ dùng để lưu giữ lại giá trị của .tab-list
    var $tab = $this.find('li.active'); // Đặt tên biến jquery cho cái tab đang mang class active (khi mở web lên thì mặc định là nó đang là tab Description)
    var $link = $tab.find('a'); // Lấy anchor của các tab đang có class = "active"
    var $panel = $($link.attr('href')); // Lấy propery hypertext references của tab đang có class "active" (nội dung của tab)


$this.on('click','.tab-control', function(e){ // Khi click vào 1 tab khác
    e.preventDefault(); // Nếu không được thực hiện 1 cách rõ ràng, thì cũng giống như return false -> tức là không làm gì cả (dòng này thêm zo chỉ để ngăn chặn lỗi ngoài ý muốn nên tôi k giải thích thêm đc)
    var $link = $(this); // Lưu trữ lại cái link hiện tại
    id = this.hash; // Lấy ra giá trị href của element a mình vừa click vào


if (id && !$link.is('active')) { // Nếu thay đổi tab hay có thể hiểu -> Nếu tab hiện tại vừa mất class active)
    $panel.removeClass('active'); // Xóa bỏ class active của href hiện tại (nội dung của tab)
    $tab.removeClass('active'); // Xóa bỏ class active của tab hiện tại

$panel = $(id).addClass('active'); // Làm cho cái nội dung tab mình vừa click vào có class 'active'
$tab = $link.parent().addClass('active'); // Thêm class active vào thằng cha (tức là thằng a (element a) )
}
})
})