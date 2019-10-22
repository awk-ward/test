var url = 'https://my-json-server.typicode.com/awk-ward/test/db';

fetch(url)
  .then(function (response) {
    response.json().then(function (json) {
      categories = json.categories;
      products = json.products;
      initialize();
  });
});

function initialize() {
  var tabName = document.querySelectorAll('.widget__label');
  var productsName = document.querySelectorAll('.content__name');

  products.sort(function (current, next) {
    return current.categoryId - next.categoryId;
  });
  
  tabName.forEach(function (item, i) {
    item.textContent = categories[i].categoryName;
  });

  productsName.forEach(function (item, i) {
    item.textContent = products[i].productName;
  });
}