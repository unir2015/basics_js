/////////////////Задание 1
// Описание задачи: Из объекта post, который задан в константе, выведите значения с
// комментариями в консоль.


const num = {
  keys1: 1,
  keys2: 2,
  keys3: 3,
  keys4: 4,
  keys5: 5,
  keys6: 6,
  keys7: 7
}

for (let key in num) {
  if (num[key] >= 3) {
    console.log(num[key]);
  }
}


console.log('///////////////');
/////////////////Задание 2
// Описание задачи: Из объекта post, который задан в константе, выведите значения с
// комментариями в консоль.



const post = {
  author: "John",
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2,
      },
    },
    {
      userId: 5,
      userName: "Jane",
      text: "lorem ipsum 2",
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};


console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);




console.log('///////////////');
/////////////////Задание 3
// Уменьшение цены на 15% с использованием forEach



const products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

products.forEach(product => {
  product.price *= 0.85;
});


console.log(products);





console.log('///////////////');
/////////////////Задание 3

// Выведите в консоль массив продуктов, у которых есть хотя бы одна
// фотография, используя метод filter.
// 2. Отсортируйте массив products по цене в порядке возрастания и выведите
// отсортированный массив в консоль.





const prod = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

const prodPhotos = prod.filter(item => item.photos
  && item.photos.length > 0);
console.log(prodPhotos);


const sortProd = prod.slice().sort((a, b) => a.price -
b.price);
console.log(sortProd);





























































