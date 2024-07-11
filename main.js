function setHoverEffect() {
    const navItems = document.querySelectorAll('.navi-bar .nav-item');
    let timeout, active;
    for (const navItem of navItems) {
        const subMenu = navItem.children[1];
        navItem.addEventListener('mouseenter', (evt) => {
            evt.stopPropagation();
            clearTimeout(timeout);
            if (active) {
                active.classList.remove('active');
            }
            active = subMenu;
            subMenu.classList.add('active');
        });
        navItem.addEventListener('mouseleave', (evt) => {
            evt.stopPropagation();
            timeout = setTimeout(() => {
                subMenu.classList.remove('active');
            }, 500);
        });
    }
}

window.onload = setHoverEffect;