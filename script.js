function toggleMenu() {

 const sidebar = document
  .getElementById('sidebar');

 const menuIcon = document
  .querySelector('.menu-icon');

 const closeIcon = document
  .querySelector('.close-icon');



 sidebar.classList.toggle(
  'active');



 // Alterner entre l'icône hamburger et l'icône de fermeture

 if (sidebar.classList.contains(
   'active')) {

  menuIcon.style.display = 'none';

  closeIcon.style.display =
   'block';

 } else {

  menuIcon.style.display =
   'block';

  closeIcon.style.display =
   'none';

 }

}
