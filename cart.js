var goods = [
  {
    name: "apple",
    picture: "images/apple.jpg",
    cost: 10,
    count: 23,
    identity: "apple"
  },

  {
    name: "peach",
    picture: "images/peach.jpg",
    cost: 10,
    count: 23,
    identity: "peach"
  },


  {
    name: "pear",
    picture: "images/pear.jpg",
    cost: 10,
    count: 23,
    identity: "pear"
  },


  {
    name: "melon",
    picture: "images/melon.jpg",
    cost: 10,
    count: 23,
    identity: "melon"
  },

  {
    name: "watermelon",
    picture: "images/watermelon.jpg",
    cost: 10,
    count: 23,
    identity: "watermelon"
  }
]

function goodsGenerating(goods) {
  let startDiv = `<div class="goods">`,
    endDiv = `</div>`,
    result = ``;

  for (var index = 0; index < goods.length; index++) {
    const item = goods[index];
    result += ` <div class="goods-item">
    <div class="goods-item-about">
      <div class="goods-item_name">${item.name}</div>
      <div class="goods-item_picture"><img src="${item.picture}"></div>
      <div class="goods-item_cost">
        <span class="goods-item_cost-title">Cost:</span><span class="goods-item_cost-price">${item.cost}</span>
      </div>
      <div class="goods-item_count-number">
        <span class="goods-item_count-title">Count:</span><span class="goods-item_count-number">${item.count}</span>
      </div>
    </div><!--goods-item-about-->
    <div class="goods-item-buy" data-identity="${item.identity}">
        <button class="plus">+</button>
        <button class="sum">0</button>
        <button class="minus" disabled="disabled">-</button>
        <button class="buy">Купить</button>
    </div><!--goods-item-buy-->
  </div><!--goods-item-->`
  };
  return `${startDiv}${result}${endDiv}`;
};
$("body").prepend(goodsGenerating(goods));

/*Plus*/

$('.plus').click(function (event) {
  let identity = $(this).parent().attr('data-identity');
  for (var index = 0; index < goods.length; index++) {
    const item = goods[index];


    if (item.identity === identity) {
      let currentSum = $(this).parent()
        .find('.sum')
        .text();
      minusIsDisabled = $(this).parent()
        .find('.minus')
        .attr('disabled');


      if (minusIsDisabled) {
        $(this).parent()
          .find('.minus')
          .removeAttr('disabled');
      };


      $(this).parent().prev().find('.goods-item_count-number').text(--item.count);
      $(this).parent().find('.sum').text(++currentSum);

      if (item.count === 0) {
        $(this).attr('disabled', '');
        console.log("Даного товара больше нет на складе!");
      }
      break
    }
  }
});

/*Minus*/

$('.minus').click(function (event) {
  let identity = $(this).parent().attr('data-identity');
  for (var index = 0; index < goods.length; index++) {
    const item = goods[index];


    if (item.identity === identity) {
      let currentSum = $(this).parent()
        .find('.sum')
        .text();
      plusIsDisabled = $(this).parent()
        .find('.plus')
        .attr('disabled');


      if (plusIsDisabled) {
        $(this).parent()
          .find('.plus')
          .removeAttr('disabled');
      };


      $(this).parent().prev().find('.goods-item_count-number').text(++item.count);
      $(this).parent().find('.sum').text(--currentSum);

      if (currentSum === 0) {
        $(this).attr('disabled', '');
        console.log("Вы вернули все товары на склад!");
      }
      else{
        $(this).removeAttr('disabled');
      }
      break
    }
  }
});


//basket

$('.basket_button').click(function(){
  $('.overlay').toggleClass("toggle-basket");
});

$('.close').click(function(){
  $('.overlay').toggleClass("toggle-basket");
});

$('.buy').on('click', function () {
  $(this).siblings('buy').trigger('click');

});