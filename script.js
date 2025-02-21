// Navbar dropdown
const navbar = document.getElementById('navbar');
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

function closeNavbarOnClickOutside(event) {
    // Check if the click was outside the navbar or dropdown
    if (!navbar.contains(event.target) && !dropdown.contains(event.target)) {
        dropdownContent.style.display = 'none';
    }
}
document.addEventListener('click', closeNavbarOnClickOutside);
const dropdownButton = dropdown.querySelector('.dropbtn');
dropdownButton.addEventListener('click', function (event) {
    event.stopPropagation();

    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
});

// Navbar change active site
document.addEventListener('DOMContentLoaded', (event) => {
    const currentLocation = location.href
    const menuItem = document.querySelectorAll('.navbar .nav-right li a')
    console.log(menuItem)
    menuItem.forEach(item => {
        item.classList.remove('active')
        if (item.href == currentLocation) {
            item.classList.add('active')
        }
    })
})

// Contact form
if (location.href == 'contact.html') {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Thank you for reaching out! I will contact you soon.');
            document.getElementById('contact-form').reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
}


// Work script

