const messages = [
  "Ngô Thị Trang Anh", "Phạm Hoàng Anh", "Lê Nguyễn Hoàng Bảo Ân", "Huỳnh Tuấn Bảo", "Lê Duy Cường",
  "Lê Phan Hoàng Diệu", "Nguyễn Nhật Duy", "Trần Thanh Duy", "Nguyễn Ngô Lý Kim Dương", "Trần Hà Giang",
  "Nguyễn Ngọc Như Hà", "Nguyễn Thanh Ngọc Hân", "Lê Thị Yến Khoa", "Lê Trần Anh Khoa", "Nguyễn Cao Phúc Lộc",
  "Triệu Lộc", "Bùi Minh Luân", "Phạm Võ Ngọc Mai", "Huỳnh Bảo Ngân", "Phan Thị Tuyết Ngân",
  "Nguyễn Thị Diễm Ngọc", "Đặng Mai Phong Nhã", "Võ Trọng Nhân", "Lê Mai Tuyết Nhi", "Võ Thị Cẩm Nhung",
  "Nguyễn Thị Thu Oanh", "Dương Quang Phúc", "Huỳnh Thị Hồng Phượng", "Cao Yến Quyên", "Đặng Ngọc Như Quỳnh",
  "Lưu Thúy Quỳnh", "Phan Lê Như Quỳnh", "Lê Thị Ngân Tâm", "Đoàn Minh Tân", "Lê Trương Minh Thắng",
  "Trần Huỳnh Anh Thư", "Hữu Đức Tín", "Đoàn Ngọc Huyền Trân", "Lê Thị Huyền Trân", "Nguyễn Hồng Bảo Vy",
  "Nguyễn Tường Vy", "Phạm Kim Vy"
];

const wishes = [
  "Cảm ơn thầy cô vì tất cả!",
  "Biết ơn từng bài giảng, từng lời dạy!",
  "Em sẽ không quên những giờ học của thầy cô!",
  "Thầy cô – người hùng thầm lặng!",
  "Một đời nhớ ơn, một đời trân trọng.",
  "Tạm biệt, nhưng không quên!",
  "Mái trường còn đó, tụi em đã lớn rồi!",
  "Chia xa – nhưng tình cảm còn mãi!",
  "Thanh xuân gói gọn trong ba chữ: thầy – cô – lớp!",
  "Sẽ nhớ nhiều lắm…",
  "Cô giảng, em hiểu… nhưng bài kiểm tra thì không!",
  "Thầy ơi, lần sau cho đề dễ hơn nha!",
  "Cảm ơn cô đã 'gồng mình' vì tụi em!",
  "Lớp quậy… nhưng thương thầy cô thiệt!",
  "Đi học vì thầy cô, chứ không phải vì điểm!"
];

const icons = [
  "❤️", "⭐", "🌟", "✨", "🎉", "🎈", "💖", "🪐", "🚀", "🌠", "💫", "🧡", "💙", "💚", "💛", "💜",
  "🎵", "🎶", "🎓", "📚", "📝", "🌸", "🌻", "🌼", "🍀", "🍎", "🍉", "🦋", "🕊️", "🧸", "🎂", "🥇", "🏆"
];

const colors = [
  "#ffb3ba", "#bae1ff", "#baffc9", "#ffffba", "#ffdfba", "#e2baff", "#ffbaed"
];

const colorBase = ["#ff69b4", "#fff", "#2196f3"]; // hồng, trắng, xanh
let currentColorIndex = 0;

// Định kỳ đổi màu bắt đầu cho đồng bộ
setInterval(() => {
  currentColorIndex = (currentColorIndex + 1) % colorBase.length;
}, 3000); // đổi màu mỗi 3 giây

function getCurrentColorVariant() {
  // Lấy thứ tự màu dựa trên currentColorIndex
  return [
    colorBase[currentColorIndex],
    colorBase[(currentColorIndex + 1) % colorBase.length],
    colorBase[(currentColorIndex + 2) % colorBase.length]
  ];
}

function randomZ() {
  // Phân bố chữ ở nhiều lớp sâu, từ gần (0) đến xa (-1000px)
  return Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1);
}

function depthCue(z) {
  // Chữ càng xa thì càng nhỏ và càng mờ
  const scale = 1 - Math.abs(z) / 1600;
  const opacity = 0.95 - Math.abs(z) / 1800;
  return { scale: Math.max(0.4, scale), opacity: Math.max(0.3, opacity) };
}

function createFallingMessage(text) {
  const msg = document.createElement('div');
  msg.className = 'falling-message';
  msg.textContent = text;
  msg.style.fontSize = (2 + Math.random() * 1.5) + 'em';
  // Tăng khoảng cách ngang: chỉ xuất hiện từ 10vw đến 80vw
  msg.style.left = (10 + Math.random() * 70) + 'vw';
  const z = randomZ();
  const { scale, opacity } = depthCue(z);
  msg.style.setProperty('--z', `${z}px`);
  msg.style.setProperty('--scale', scale);
  msg.style.opacity = opacity;

  const colors = getCurrentColorVariant();
  msg.style.setProperty('--color1', colors[0]);
  msg.style.setProperty('--color2', colors[1]);
  msg.style.setProperty('--color3', colors[2]);

  document.getElementById('messages-container').appendChild(msg);
  setTimeout(() => msg.remove(), 4000);
}

function createFallingIcon() {
  const icon = document.createElement('div');
  icon.className = 'falling-icon';
  icon.textContent = icons[Math.floor(Math.random() * icons.length)];
  icon.style.left = Math.random() * 95 + 'vw';
  icon.style.fontSize = (1.2 + Math.random() * 2.2) + 'em';
  icon.style.animationDuration = (2 + Math.random() * 3) + 's';
  const z = randomZ();
  const { scale, opacity } = depthCue(z);
  icon.style.transform = `translateZ(${z}px) scale(${scale})`;
  icon.style.opacity = opacity;
  document.getElementById('icons-container').appendChild(icon);
  setTimeout(() => icon.remove(), 4000);
}

// Tăng số lượng chữ rơi
setInterval(() => {
  for (let i = 0; i < 3; i++) { // giảm số lượng mỗi lần để thưa hơn nữa
    const rand = Math.random();
    if (rand < 0.15) { // giảm tần suất icon
      createFallingIcon();
    } else if (rand < 0.7) {
      createFallingMessage(messages[Math.floor(Math.random() * messages.length)]);
    } else {
      createFallingMessage(wishes[Math.floor(Math.random() * wishes.length)]);
    }
  }
}, 120); // giảm interval xuống 120ms

// Background star effect
const canvas = document.getElementById('star-bg');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createStars() {
  stars = [];
  for (let i = 0; i < 100; i++) { // giảm còn 100 sao
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 800 + 200,
      o: Math.random() * 0.7 + 0.3,
      r: Math.random() * 1.2 + 0.3
    });
  }
}
createStars();

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let star of stars) {
    ctx.save();
    ctx.globalAlpha = star.o;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
    ctx.fillStyle = "#fff";
    ctx.shadowColor = "#fff";
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.restore();

    // Move stars to create a flying effect
    star.y += (2.5 - star.z / 500);
    star.x += (0.2 - star.z / 2000);

    if (star.y > canvas.height || star.x > canvas.width || star.x < 0) {
      star.x = Math.random() * canvas.width;
      star.y = 0;
      star.z = Math.random() * 800 + 200;
    }
  }
  requestAnimationFrame(drawStars);
}
drawStars();