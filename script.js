const template = document.querySelector('.card-template')
const newCard = template.content.cloneNode(true)
const newCard1 = template.content.cloneNode(true)
const newCard2 = template.content.cloneNode(true)
const newCard3 = template.content.cloneNode(true)
const newCard4 = template.content.cloneNode(true)
const newCard5 = template.content.cloneNode(true)
const newCard6 = template.content.cloneNode(true)
const newCard7 = template.content.cloneNode(true)
const newCard8 = template.content.cloneNode(true)
const newCard9 = template.content.cloneNode(true)
const newCard11 = template.content.cloneNode(true)
const newCard12 = template.content.cloneNode(true)
const list = document.querySelector('.elements-list')
list.prepend(newCard)
list.prepend(newCard1)
list.prepend(newCard2)
list.prepend(newCard3)
list.prepend(newCard4)
list.prepend(newCard5)
list.prepend(newCard6)
list.prepend(newCard7)
list.prepend(newCard8)
list.prepend(newCard9)
list.prepend(newCard11)
list.prepend(newCard12)

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
