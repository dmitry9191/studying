function cards() {
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

}

export default cards;
