

burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navlist = document.querySelector('.nav-list')


burger.addEvenListener( 'click', ()=>{

rightnav.classlist.toggle('v-class-resp');
navbar.classlist.toggle('h-nav-resp');
navlist.classlist.toggle('v-class-resp');

})





