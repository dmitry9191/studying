'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // Tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    hideTabContent();
    showTabContent();

    function hideTabContent() {
        tabsContent.forEach((item) => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach((item) => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(item = 0) {
        tabsContent[item].classList.add('show', 'fade');
        tabsContent[item].classList.remove('hide');
        tabs[item].classList.add('tabheader__item_active');
    }

    tabsParent.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('tabheader__item')) {
            tabs.forEach((item, index) => {
                if (e.target === item) {
                    hideTabContent();
                    showTabContent(index);
                }
            });
        }
    });

    // Timer

    const deadline = '2021-03-01';

    setTimer(deadline, '.timer');

    function getTimeDifference(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(total / (1000 * 3600 * 24)),
              hours = Math.floor(total / (1000 * 3600) % 24),
              minutes = Math.floor((total / 1000 / 60) % 60),
              seconds =  Math.floor((total / 1000) % 60);
        
        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setTimer(endtime, selector) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeDifference(endtime);

            days.textContent = getZero(t.days);
            hours.textContent = getZero(t.hours);
            minutes.textContent = getZero(t.minutes);
            seconds.textContent = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }   
        }
    }

    // Modal

    const btnTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          btnClose = document.querySelector('[data-close]');

    btnTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            toggler('hidden');
        });
    });

    btnClose.addEventListener('click', () => {
        toggler('');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            toggler('');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            toggler('');
        }
    });

    const modalTimerId = setTimeout(toggler, 5000, 'hidden');

    window.addEventListener('scroll', showModalByScroll);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            toggler('hidden');
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    function toggler(overflowValue) {
        modal.classList.toggle('show');
        document.body.style.overflow = overflowValue;
        clearInterval(modalTimerId);
    }

    // Menu

    class MenuItem {
        
        constructor(img, alt, subtitle, description, cost, parent) {
            this.img = img;
            this.subtitle = subtitle;
            this.description = description;
            this.cost = cost;
            this.alt = alt;
            this.transfer = 79;
            this.parent = document.querySelector(parent); 
            this.changeToRUB();
        }

        changeToRUB() {
            this.cost *= this.transfer;
        }

        render() {
            const elem = document.createElement('div');
            elem.innerHTML = `
                <div class="menu__item">
                    <img src=${this.img} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.subtitle}</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.cost}</span> руб/день</div>
                    </div>
                </div>
            `;
            this.parent.append(elem);
        }

    }

    new MenuItem(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей',
        50,
        ".menu .container"
    ).render();

});