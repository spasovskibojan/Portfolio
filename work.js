document.addEventListener('DOMContentLoaded', (event)=>{
    const currentLocation = location.href
    const menuItem = document.querySelectorAll('.navbar .nav-right li a')
    menuItem.forEach(item =>{
        item.classList.remove('active')
        if(item.href==currentLocation){
            item.classList.add('active')
            console.log(item.href + '   ACTIVE')
        }
        console.log(item.href + '   DONE')
        console.log(currentLocation)
    })

})