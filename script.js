// Get all the nav items
const navItems = document.querySelectorAll('.navbar-nav .nav-item');

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    navItems.forEach((item) => {
      item.classList.remove('active');
    });

    navItem.classList.add('active');
  });
});


  document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    window.location.href = 'end.html';
  });