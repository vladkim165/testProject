// обьект с данными слайдера

const promoWindows = [
  {
    title: 'Закажи 2 пиццы – 3-я в подарок',
    subtitle: 'При заказе 2-х больших пицц – средняя пицца в подарок',
    image: 'images/pizzas-image.jpg'
  },
  {
    title: 'Напиток в подарок',
    subtitle: 'Скидка на заказ от 3 000 рублей + напиток в подарок',
    image: 'images/soda.jpg'
  },
  {
    title: '25% при первом заказе',
    subtitle: 'Скидка новым клиентам!',
    image: 'images/eating-people.jpg'
  }
]

const firstPromoButton = document.querySelector('.promo__progress-button_first')
const secondPromoButton = document.querySelector('.promo__progress-button_second')
const thirdPromoButton = document.querySelector('.promo__progress-button_third')
const mainPromoCard = document.querySelector('.promo-card_main')
const promoImage = mainPromoCard.querySelector('.promo-card__image')
const promoTitle = mainPromoCard.querySelector('.promo-card__title')
const promoText = mainPromoCard.querySelector('.section-text')
const progressButtons = document.querySelectorAll('.promo__progress-button')


// функция изменения текста и картинки слайдера

const setEventsOnPromoButton = (button, obj, value) => {
  button.addEventListener('click', () => {
    promoImage.src = obj[value].image;
    promoTitle.textContent = obj[value].title;
    promoText.textContent = obj[value].subtitle;
    progressButtons.forEach(button => {
      button.classList.remove('promo__progress-button_active')
    })
    button.classList.toggle('promo__progress-button_active')
  })
}

setEventsOnPromoButton(firstPromoButton, promoWindows, 0)
setEventsOnPromoButton(secondPromoButton, promoWindows, 1)
setEventsOnPromoButton(thirdPromoButton, promoWindows, 2)

const button = document.querySelector('.header__menu-button')
const menu = document.querySelector('.menu')
const closeButton = menu.querySelector('.menu__close-button')

closeButton.addEventListener('click', () => {
  menu.classList.remove('menu_active')
})

button.addEventListener('click', () => {
  menu.classList.toggle('menu_active')
})


// объект с данными пицц
const pizzas = [
  {
    name: 'Итальянская',
    description: 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
    priceS: '499',
    priceM: '699',
    priceL: '899',
    image: 'images/size_m.png',
    type: 'spicy',
    typeimg: 'images/pizzas-spicy.svg'
  },
  {
    name: 'Маргарита',
    description: 'Тесто со шпинатом, молодой сыр и колбаски, много колбасок',
    priceS: '499',
    priceM: '599',
    priceL: '699',
    image: 'images/size_m.png',
    type: 'cheesy',
    typeimg: 'images/pizzas-cheesy.svg'
  },
  {
    name: 'Барбекю',
    description: 'Цыплёнок (маленький кура), оливки, моцарелла, соус барбекю',
    priceS: '499',
    priceM: '699',
    priceL: '899',
    image: 'images/size_m.png',
    type: 'meat',
    typeimg: 'images/pizzas-meat.svg'
  },
  {
    name: 'Вегетарианская',
    description: 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
    priceS: '349',
    priceM: '549',
    priceL: '749',
    image: 'images/size_m.png',
    type: 'vegan',
    typeimg: 'images/pizzas-vegan.svg'
  },
  {
    name: 'Мясная',
    description: 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
    priceS: '699',
    priceM: '899',
    priceL: '1099',
    image: 'images/size_m.png',
    type: 'meat',
    typeimg: 'images/pizzas-meat.svg'
  },
  {
    name: 'Овощная',
    description: 'Тесто со шпинатом, молодой сыр и колбаски, много колбасок',
    priceS: '399',
    priceM: '499',
    priceL: '599',
    image: 'images/size_m.png',
    type: 'vegan',
    typeimg: 'images/pizzas-vegan.svg'
  },
  {
    name: 'Римская',
    description: 'Цыплёнок (маленький кура), оливки, моцарелла, соус барбекю',
    priceS: '599',
    priceM: '699',
    priceL: '799',
    image: 'images/size_m.png',
    type: 'meat',
    typeimg: 'images/pizzas-meat.svg'
  },
  {
    name: 'С грибами',
    description: 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
    priceS: '799',
    priceM: '899',
    priceL: '999',
    image: 'images/size_m.png',
    type: 'spicy',
    typeimg: 'images/pizzas-spicy.svg'
  },
  {
    name: 'Сырная',
    description: 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
    priceS: '599',
    priceM: '699',
    priceL: '799',
    image: 'images/size_m.png',
    type: 'cheesy',
    typeimg: 'images/pizzas-cheesy.svg'
  },
  {
    name: 'Четыре сыра',
    description: 'Тесто со шпинатом, молодой сыр и колбаски, много колбасок',
    priceS: '599',
    priceM: '659',
    priceL: '899',
    image: 'images/size_m.png',
    type: 'cheesy',
    typeimg: 'images/pizzas-cheesy.svg'
  },
  {
    name: 'Пепперони Фреш с томатами',
    description: 'Цыплёнок (маленький кура), оливки, моцарелла, соус барбекю',
    priceS: '499',
    priceM: '699',
    priceL: '899',
    image: 'images/size_m.png',
    type: 'spicy',
    typeimg: 'images/pizzas-spicy.svg'
  },
  {
    name: 'Ветчина и сыр',
    description: 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
    priceS: '599',
    priceM: '699',
    priceL: '799',
    image: 'images/size_m.png',
    type: 'meat',
    typeimg: 'images/pizzas-meat.svg'
  }
]

const list = document.querySelector('.elements-list')
const template = document.querySelector('.card-template')

// Добавляем пиццы в контейнер

const setTemplate = (data) => {
  const newCard = template.content.cloneNode(true)
  const cardName = newCard.querySelector('.element__title')
  const cardDescription = newCard.querySelector('.element__description')
  const cardPrice = newCard.querySelector('.element__price-number')
  const cardType = newCard.querySelector('.element__type-image')

  cardName.textContent = data.name;
  cardDescription.textContent = data.description;
  cardPrice.textContent = data.priceM;
  cardType.src = data.typeimg;
  list.prepend(newCard)
}

pizzas.forEach(item => {
  setTemplate(item)
})

//кнопки сортировок

const all = document.getElementById('all')
const spicy = document.getElementById('spicy')
const meat = document.getElementById('meat')
const cheesy = document.getElementById('cheesy')
const vegan = document.getElementById('vegan')

const setEventsOnSortButton = (button, value) => {
  button.addEventListener('click', () => {
    list.innerHTML = '';
    pizzas.forEach(item => {
      if (item.type === value) {
        setTemplate(item)
      }
    })
  })
}

//добавляем обработчики кнопкам сортировки пицц
all.addEventListener('click', () => {
  list.innerHTML = '';
  pizzas.forEach(item => {
    setTemplate(item)
  })
})

setEventsOnSortButton(spicy, 'spicy')
setEventsOnSortButton(meat, 'meat')
setEventsOnSortButton(cheesy, 'cheesy')
setEventsOnSortButton(vegan, 'vegan')
