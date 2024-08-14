document.getElementById('contact-form').addEventListener('submit', function(event) {
    // event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message) {
        alert('Thank you for reaching out! I will contact you soon.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
document.addEventListener('DOMContentLoaded', (event)=>{
    const currentLocation = location.href
    const menuItem = document.querySelectorAll('.navbar .nav-right li a')
    menuItem.forEach(item =>{
        item.classList.remove('active')
        if(item.href==currentLocation){
            item.classList.add('active')
        }
    })

})