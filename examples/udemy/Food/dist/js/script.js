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
          modal = document.querySelector('.modal');

    btnTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            openModal();
        });
    });

    const modalTimerId = setTimeout(openModal, 5000);

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal();
        }
    });
    
    window.addEventListener('scroll', showModalByScroll);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    // Menu

    class MenuCard {

        constructor(img, alt, title, description, price, parent, ...classes) {
            this.img = img;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.rate = 79;
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
/*

    const getResource = async (url) => {
        const res = await fetch(url);
        
        if (!res.ok) {
            throw new Error(`Could now fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };
    getResource('http://localhost:3000/menu')
        .then(data => data.forEach(({altimg, descr, img, price, title}) => {
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        }));
*/

    axios.get('http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({altimg, descr, img, price, title}) => {
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });

    // Forms

    const forms = document.querySelectorAll('form'),
          messages = {
              loading: 'Загрузка',
              success: 'Спасибо, мы Вам перезвоним!',
              failure: 'Кажется что-то пошло не так...'
          };

    forms.forEach(form => {
        bindPostData(form);
    });

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
            'Content-type': 'application/json'
            },
            body: data
        });

        return await res.json();

    };

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = 'img/form/spinner.svg';
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThankModal(messages.success);
                form.reset();
                statusMessage.remove();
            })
            .catch(() => {
                showThankModal(messages.failure);
                statusMessage.remove();
            })
            .finally(() => {
                form.reset();
            });

        });
    }

    function showThankModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thankModal = document.createElement('div');
        thankModal.classList.add('modal__dialog');
        thankModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close="">×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thankModal);

        setTimeout(() => {
            thankModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 5000);
    }

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));

    // Slider
          
    const slidesWrapper = document.querySelector('.offer__slider-wrapper'),
          sliderNext = document.querySelector('.offer__slider-next'),
          sliderPrev = document.querySelector('.offer__slider-prev'),
          currentSlide = document.querySelector('#current'),
          totalSlides = document.querySelector('#total'),
          slides = slidesWrapper.querySelectorAll('.offer__slide'),
          slidesField = slidesWrapper.querySelector('.offer__slider-inner'),
          width = window.getComputedStyle(slidesWrapper).width,
          slider = document.querySelector('.offer__slider'); 

    let slideIndex = 1;
    let offset = 0;
    
    if (slides.length < 10) {
        totalSlides.textContent = `0${slides.length}`;
        currentSlide.textContent = `0${slideIndex}`;
    } else {
        totalSlides.textContent = slides.length;
        currentSlide.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
          dots = [];
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        indicators.append(dot);
        
        if (i === 0) {
            dot.style.opacity = '1';
        }

        dots.push(dot);

    }


    sliderNext.addEventListener('click', () => {
        
        if (offset == removeStr(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += removeStr(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

       defineNumAndOpacity(slideIndex);

    });

    sliderPrev.addEventListener('click', () => {
        
        if (offset == 0) {
            offset = removeStr(width) * (slides.length - 1);
        } else {
            offset -= removeStr(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        defineNumAndOpacity(slideIndex);
        
    });
    
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            
            const slideTo = e.target.getAttribute('data-slide-to');
            
            slideIndex = slideTo;
            offset = removeStr(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            defineNumAndOpacity(slideTo);

        });
    });

    function defineNumAndOpacity(sourceOfNumber) {
        
        if (slides.length < 10) {
            currentSlide.textContent = `0${slideIndex}`;
        } else {
            currentSlide.textContent = slideIndex;
        }

        dots.forEach(dot => {
            dot.style.opacity = '.5';
        });

        dots[sourceOfNumber - 1].style.opacity = '1';

    }

    function removeStr(strValue) {
        return +strValue.replace(/\D/g, '');
    }

}); 