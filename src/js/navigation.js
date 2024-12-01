export default function navigation() {
    const mobileNav = document.querySelector('.mobile-nav');

    if(mobileNav) {
        mobileNav.addEventListener('click', () => {
            document.body.classList.toggle('active-nav');
        });
    }
}