onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const restrictedArea = document.querySelector(".restricted-area");
  
  // Hàm tính khoảng cách giữa vị trí hiện tại và nút "Không"
  function getDistance(x1, y1, x2, y2) {
      return Math.hypot(x1 - x2, y1 - y2);
  }
  
  // Hàm xử lý logic di chuyển nút "Không" khi cần
  function moveNoButton(mouseX, mouseY) {
      const btnRect = noBtn.getBoundingClientRect();
      const areaRect = restrictedArea.getBoundingClientRect();
      
      const btnX = btnRect.left + btnRect.width / 2;
      const btnY = btnRect.top + btnRect.height / 2;
  
      const distance = getDistance(mouseX, mouseY, btnX, btnY);
  
      // Nếu khoảng cách giữa chuột/touch và nút "Không" nhỏ hơn 100px thì nút sẽ di chuyển
      if (distance < 100) {
          const maxX = areaRect.width - noBtn.offsetWidth;
          const maxY = areaRect.height - noBtn.offsetHeight;
  
          const randomX = Math.random() * maxX;
          const randomY = Math.random() * maxY;
  
          // Di chuyển nút "Không" từ từ đến vị trí mới
          setTimeout(() => {
              noBtn.style.left = randomX + "px";
              noBtn.style.top = randomY + "px";
          }, 30);  // Độ trễ để tạo cảm giác mượt mà
      }
  }
  
  // Sự kiện mousemove cho máy tính
  document.addEventListener("mousemove", function(event) {
      moveNoButton(event.clientX, event.clientY);
  });
  
  // Sự kiện touchmove cho thiết bị di động
  document.addEventListener("touchmove", function(event) {
      const touch = event.touches[0]; // Lấy vị trí cảm ứng đầu tiên
      moveNoButton(touch.clientX, touch.clientY);
  });
  
  // Khi nhấn nút "Có", chuyển hướng sang trang index.html
  yesBtn.addEventListener("click", function() {
      window.location.href = "index.html";
  });
  
  