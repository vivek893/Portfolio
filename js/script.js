/* =================Menu icon on screen===========*/

// const sections=document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allsection = document.querySelectorAll('.main-content');

function pageTransition() {
    // button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            // Remove active class from all buttons
            document.querySelectorAll('.active-btn').forEach(btn => {
                btn.classList.remove('active-btn');
            });

            // Add active class to the clicked button
            this.classList.add('active-btn');

            // Make the home button green if it is clicked
            if (this.classList.contains('home')) {
                document.querySelector('.home i').style.color = 'var(--text-color)';
            } else {
                // Reset the color of the home button to white
                document.querySelector('.home i').style.color = '#ffffff';
            }
        });
    }
}




pageTransition();




/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {


    /*==================== sticky navbar ====================*/

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
};


/*==================== scroll reveal ====================*/


/*==================== typed js ====================*/

