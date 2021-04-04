function slider({arrowNext, 
                arrowPrev,
                container,
                slide,
                totalCounter,
                currentCounter,
                wrapper,
                field
                }) {
    // Slider
          
    const slidesWrapper = document.querySelector(wrapper),
          sliderNext = document.querySelector(arrowNext),
          sliderPrev = document.querySelector(arrowPrev),
          currentSlide = document.querySelector(currentCounter),
          totalSlides = document.querySelector(totalCounter),
          slides = slidesWrapper.querySelectorAll(slide),
          slidesField = slidesWrapper.querySelector(field),
          width = window.getComputedStyle(slidesWrapper).width,
          slider = document.querySelector(container); 

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

}

export default slider;
