$(document).ready(function () {
  $('#commentForm').submit(function (e) {
    e.preventDefault();

    // Lấy giá trị của các input
    const name = $('#name').val().trim();
    const comment = $('#comment').val().trim();

    if (name && comment) {
      // Tạo một div chứa bình luận mới
      const commentDiv = $(`
        <div class="border p-3 mb-5 rounded">
          <strong>${name}</strong>
          <p>${comment}</p>
        </div>
      `);

      // Thêm bình luận mới vào đầu danh sách bình luận
      $('#comments').prepend(commentDiv);

      // Xóa nội dung trong các ô input
      $('#name').val('');
      $('#comment').val('');
    } else {
      alert('Please fill out both fields before submitting.');
    }
  });
});