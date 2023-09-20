// navigation for mobile display

const hamburger = document.querySelector('#hamburger');
const closeBtn = document.querySelector('#close-nav');
const mobileNav = document.querySelector('#mobile-nav');
const blur = document.querySelector('.blur');

hamburger.addEventListener('click', () => {
    mobileNav.style.display = 'block';
    hamburger.style.display = 'none';
    closeBtn.style.display = 'block';
    blur.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    mobileNav.style.display = 'none';
    closeBtn.style.display = 'none';
    hamburger.style.display = 'block';
    blur.style.display = 'none';
})


// bookmark

const bookmarkBtn = document.getElementById('bookmark-btn');
bookmarkBtn.addEventListener('click', e => {
    bookmarkBtn.classList.toggle('booked');

    if(bookmarkBtn.classList.contains('booked')) {
        bookmarkBtn.lastElementChild.innerText = 'Bookmarked';
    } else {
        bookmarkBtn.lastElementChild.innerText = 'Bookmark';
    }
   

})




// trigger donation popup

const bpBtn = document.getElementById('back-project');
const bpPopup = document.querySelector('.back-project-popup');
const closepopupBtn = document.getElementById('close-popup');


bpBtn.addEventListener('click', () => {
    bpPopup.style.display = 'block';
    blur.style.display = 'block';

});

closepopupBtn.addEventListener('click', () => {
    bpPopup.style.display = 'none';
    blur.style.display = 'none';
})


// add check mark to a pledge tab

const pledgeTab = document.querySelectorAll('#pledge');
const checkBox = document.querySelectorAll('#check-box');


pledgeTab.forEach((pledge) => {

    pledge.addEventListener('click', e => {

        if(e.target.matches('#check-box') ) {
            pledge.classList.add('active');
        } else if(e.target.classList.contains('check-circle')) {
            pledge.classList.remove('active');
        }
        

        const enterPledge = document.querySelectorAll('.enter-pledge');
        enterPledge.forEach((ep) => {
            if(ep.parentElement.classList.contains('active')) {
                ep.classList.add('enter');
            } else {
                ep.classList.remove('enter');
            }
            
        })

    })


})


// thank you message popup

const cnt = document.querySelectorAll('#cnt');
const backProject = document.querySelector('.back-project-popup')

cnt.forEach((btn) => [
    btn.addEventListener('click', e => {
        const successMsg = document.querySelector('.success');

        successMsg.style.display = 'flex';

        blur.style.display = 'block';
        backProject.style.display = 'none';
    })
]) 



   
// close success popup

const gotIt = document.getElementById('got-it');
const success = document.querySelector('.success');

gotIt.addEventListener('click', e => {
    success.style.display = 'none';
    blur.style.display = 'none';
})


