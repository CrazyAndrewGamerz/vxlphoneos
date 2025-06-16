// 🕒 Tijd
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  document.getElementById('time').textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();

// 🔋 Batterijstatus
navigator.getBattery().then(battery => {
  function updateBattery() {
    document.getElementById('battery').textContent = Math.round(battery.level * 100) + '%';
  }
  battery.addEventListener('levelchange', updateBattery);
  updateBattery();
});

// 📶 Netwerkstatus
function updateConnection() {
  const status = navigator.onLine ? 'Online' : 'Offline';
  document.getElementById('connection').textContent = status;
}
window.addEventListener('online', updateConnection);
window.addEventListener('offline', updateConnection);
updateConnection();

// 📸 Camera openen
function openCamera() {
  const video = document.getElementById('camera');
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      video.srcObject = stream;
    })
    .catch(err => {
      alert('Camera error: ' + err.message);
    });
}