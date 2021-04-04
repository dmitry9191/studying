function tabs(tabsSel, tabsContentSel, tabsParentSel, activeClass) {

    // Tabs

    const tabs = document.querySelectorAll(tabsSel),
          tabsContent = document.querySelectorAll(tabsContentSel),
          tabsParent = document.querySelector(tabsParentSel);

    hideTabContent();
    showTabContent();

    function hideTabContent() {
        tabsContent.forEach((item) => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach((item) => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(item = 0) {
        tabsContent[item].classList.add('show', 'fade');
        tabsContent[item].classList.remove('hide');
        tabs[item].classList.add(activeClass);
    }

    tabsParent.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains(tabsSel.slice(1))) {
            tabs.forEach((item, index) => {
                if (e.target === item) {
                    hideTabContent();
                    showTabContent(index);
                }
            });
        }
    });
}

export default tabs;
