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

    class MenuCard {

        constructor(img, alt, title, description, price, rate, parent, ...classes) {
            this.img = img;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.rate = rate;
            this.classes = classes;
            this.parent = document.querySelector(parent);
            this.converter();
        }

        converter() {
            this.price *= this.rate;
        }

        render() {
            const card = document.createElement('div');

            if (this.classes.length === 0) {
                this.classes = 'menu__item';
                card.classList.add(this.classes);
            } else {
                this.classes.forEach(className => card.classList.add(className));
            }
            card.innerHTML = `
                <img src=${this.img} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr"> ${this.description}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                </div>
            `;
            this.parent.append(card);
        }

    }

    new MenuCard(
        "img/tabs/vegy.jpg", 
        "vegy",
        `Меню "Фитнес"`,
        `Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов.
         Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!`,
         2,
         79,
         '.menu .container'
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню "Премиум"',
        `В меню “Премиум” мы используем не
         только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, 
         морепродукты, фрукты - ресторанное меню без похода в ресторан!`,
        3,
        79,
        '.menu .container'
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        `Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля,
         овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.`,
        1.5,
        79,
        '.menu .container'
    ).render();

    // Forms

    const forms = document.querySelectorAll('form'),
          messages = {
             load: 'Загрузка',
             success: 'Спасибо! Мы Вам перезвоним!',
             fail: 'Что-то пошло не так...'
          };

    forms.forEach(form => {
        postData(form);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = messages.load;
            form.append(statusMessage);

            const request = new XMLHttpRequest();
            
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json');

            const formData = new FormData(form);

            const object = {};
            formData.forEach(function(key, value) {
                object[key] = value;
            });

            const json = JSON.stringify(object);
            
            request.send(json);
            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    statusMessage.textContent = messages.success;
                    form.reset();
                    setTimeout(() => {
                        form.remove();
                    }, 2000);
                } else {
                    statusMessage.textContent = messages.fail;
                    statusMessage.textContent = messages.success;
                    form.reset();
                    setTimeout(() => {
                        form.remove();
                    }, 2000);
                }
            });
        });
    }

});