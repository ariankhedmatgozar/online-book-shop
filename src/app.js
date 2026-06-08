let date = new Date();
date.setDate(date.getDate());

// Raw Data

const accounts = [
  {
    name: "arian khedmatgozar",
    pin: "arian",
    found: 200,
    buyedBooks: [
      {
        name: "Atomic Habits",
        pages: "2/200",
        readPercentage: "2.5%",
        price: 19,
      },
    ],
    shoppingCart: [
      {
        name: "Elon Musk",
        quantity: 1,
        price: 39,
      },
    ],
    lastLogin: date,
  },
  {
    name: "makan khormaii",
    pin: "makan",
    found: 100,
    buyedBooks: [],
    lastLogin: date,
  },
];

const allBooks = [
  {
    name: "Atomic Habits",
    quantity: 5,
    price: 19,
  },
  {
    name: "Power of Habits",
    quantity: 10,
    price: 9,
  },
  {
    name: "Deep Work",
    quantity: 3,
    price: 29,
  },
  {
    name: "Elon Musk",
    quantity: 0,
    price: 39,
  },
  {
    name: "Charismatic",
    quantity: 4,
    price: 19,
  },
];

// Dom elements
const shoppingCartBookCnt = document.querySelector(
  ".shopping-cart-books-container",
);
const booksContainer = document.querySelector(".books-container");
const loginUsername = document.querySelector(".login-username");
const loginPassword = document.querySelector(".login-password");

// Buttons
const addToCartBtn = document.querySelector(".add-to-cart_btn");
const buyBtn = document.querySelector(".btn-buy");
const loginButton = document.querySelector(".login-button");

// Current user

let currentUser = accounts[0];

// Display UI

const displayBooks = function (books) {
  books.forEach((book, i) => {
    const html = `<div
              class="text-[0.5rem] bg-[#FFCA75] px-4 py-3 rounded-md ${i === 0 ? "mb-6" : "mb-8"} shadow-md font-semibold"
            >
              <div class="grid grid-cols-4 items-center">
                <p
                  class="min-w-0 w-full justify-self-center overflow-hidden whitespace-nowrap text-ellipsis"
                >
                  ${book.name}
                </p>
                <p class="justify-self-center ${book.quantity > 0 ? "" : "text-[#ff1c2b]"}">${book.quantity}</p>
                <p class="justify-self-center ${book.quantity > 0 ? "" : "text-[#ff1c2b]"}">${book.price}$</p>
                <button
                  class="bg-[#F9FF54] border px-5 py-2 rounded-md cursor-pointer hover:bg-[#e8ed4e] active:bg-[#f8fc68] transition-all add-to-cart_btn"
                >
                  add
                </button>
              </div>
            </div>`;
    booksContainer.insertAdjacentHTML("afterend", html);
  });
};

const displayShoppingCart = function (user) {
  user.shoppingCart.forEach((item, i) => {
    const html = `<div
                class="text-[0.5rem] bg-[#FFCA75] px-4 py-3 rounded-md mb-8 shadow-md font-semibold"
              >
                <div class="grid grid-cols-4 items-center">
                  <p
                    class="min-w-0 w-full justify-self-center overflow-hidden whitespace-nowrap text-ellipsis"
                  >
                    ${item.name}
                  </p>
                  <p class="justify-self-center">${item.quantity}</p>
                  <p class="justify-self-center">${item.price}$</p>
                  <button
                    class="bg-[#F9FF54] border px-5 py-2 rounded-md cursor-pointer hover:bg-[#e8ed4e] active:bg-[#f8fc68] transition-all remove-from-cart_btn"
                  >
                    Remove
                  </button>
                </div>
              </div>`;
    shoppingCartBookCnt.insertAdjacentHTML("afterend", html);
  });
};
displayBooks(allBooks);
displayShoppingCart(currentUser);

// Event Handlers

const removeFromCartBtn = document.querySelector(".remove-from-cart_btn");
removeFromCartBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const cartBook =
    removeFromCartBtn.parentElement.firstElementChild.textContent.trim();
  currentUser.shoppingCart.forEach((book) => {
    if (book.name === cartBook) {
      currentUser.shoppingCart.splice(book, 1);
    }
  });
  displayShoppingCart(currentUser);
});
