function searchProducts() {
    // Lấy giá trị nhập liệu từ người dùng
    var searchQuery = document.getElementById("searchInput").value;

    // Tìm kiếm sản phẩm trong cơ sở dữ liệu
    var searchResult = yourSearchFunction(searchQuery); // Thay yourSearchFunction bằng hàm tìm kiếm sản phẩm thực tế

    // Hiển thị kết quả tìm kiếm
    displaySearchResult(searchResult); // Hãy viết hàm displaySearchResult để hiển thị kết quả tìm kiếm
}

function displaySearchResult(result) {
    // Hiển thị kết quả tìm kiếm tại đây
}
