// Имитация получения JSON с сервера
const url = 'https://my-json-server.typicode.com/awk-ward/test/db';
let categories;
let products;
fetch(url)
  .then(function (response) {
    response.json().then(function (json) {
      categories = json.categories;
      products = json.products;
      initialize(); // Вызов функции, создающей виджет
  });
});

function initialize() {
  const widget = document.querySelector('.widget');

  // Создание табов
  const amountTabs = categories.length; // Количество табов и секций зависит от количества категорий в JSON (одна категория = один таб)
  for (let i = 0; i < amountTabs; i++) {
    const inputTab = makeElement('input', 'widget__input');
    const labelTab = makeElement('label', 'widget__label');

    inputTab.type = 'radio';
    inputTab.name = 'tabs';
    inputTab.id = `tab${i + 1}`;

    labelTab.setAttribute('for', `tab${i + 1}`);


    widget.appendChild(inputTab);
    widget.appendChild(labelTab);
  }
  // Добавляем первому табу атрибут checked
  const activeTab = document.querySelector('.widget__input');
  activeTab.checked = 'true';

  // Создание секций для карточек
  for (let i = 0; i < amountTabs; i++) {
    const widgetContent = makeElement('section', 'widget__content');

    widgetContent.id = `content${i + 1}`;
    // Создание карточек товара в каждой секции
    const amountCards = 5;
    for (let j = 0; j < amountCards; j++) {
      const div = makeElement('div', 'content__card');
      const pic = makeElement('img', 'content__picture');
      const description = makeElement('p', 'content__name');

      pic.src = 'http://rrstatic.retailrocket.net/test_task/tovar.jpg';
      widgetContent.appendChild(div);
      div.appendChild(pic);
      div.appendChild(description);
    }
    widget.appendChild(widgetContent);
  }

  const productsName = document.querySelectorAll('.content__name');
  const tabName = document.querySelectorAll('.widget__label');
  // Сортировка элементов массива products
  products.sort(function (current, next) {
    return current.categoryId - next.categoryId;
  });

  // Добавляем названия табов в разметку
  tabName.forEach(function (item, i) {
    item.textContent = categories[i].categoryName;
  });
  // Добавляем название товара в разметку
  productsName.forEach(function (item, i) {
    item.textContent = products[i].productName;
  });
}

// Функция создания элементов верстки
function makeElement(tagName, className, ...classNames) {
  const element = document.createElement(tagName);
  element.classList.add(className, ...classNames);
  return element;
}