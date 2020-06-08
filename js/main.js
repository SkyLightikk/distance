const menuBtn = document.querySelector('.m-menu');

menuBtn.onclick = (event) => {
  const sidebar = document.querySelector('.menu-sidebar');
  if (sidebar) {
    sidebar.classList.toggle('active');
  }
}