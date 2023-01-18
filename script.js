const booksGrid = document.querySelector(".books-grid");
const newBook = document.querySelector(".new-book");
const deleteButtons = document.querySelectorAll(".delete");

let myLibrary = [];

const createBookCard = function (book) {
  const bookCard = document.createElement("div");
  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const read = document.createElement("p");
  const readStatus = document.createElement("p");
  const deleteButton = document.createElement("button");
  const readButton = document.createElement("button");

  deleteButton.classList.add(`${myLibrary.length}`);
  deleteButton.classList.add(`delete`);
  deleteButton.innerHTML = "Delete";

  readButton.classList.add(`read`);
  readButton.classList.add(`${myLibrary.length}`);
  readButton.innerHTML = "Read";

  bookCard.classList.add(`book-card`);
  bookCard.classList.add(`card-${myLibrary.length}`);
  title.innerHTML = `Title: ${book.title}`;
  author.innerHTML = `Author: ${book.author}`;
  pages.innerHTML = `Pages: ${book.pages}`;
  read.innerHTML = `Read:`;
  if (book.read === true) {
    readStatus.innerHTML = "Yes";
    readStatus.classList.add("read-yes");
  } else if (book.read === false) {
    readStatus.innerHTML = "No";
    readStatus.classList.add("read-no");
  }

  myLibrary.push(book);
  console.log(myLibrary);
  console.log(myLibrary.length - 1);

  deleteButton.addEventListener("click", function () {
    document.querySelector(`.card-${this.classList[0]}`).remove();
  });

  readButton.addEventListener("click", function () {
    let a = this.parentElement.childNodes[4];
    if (a.innerHTML === "No") {
      myLibrary[this.classList[1]].read = true;
      a.innerHTML = "Yes";
      a.classList.add("read-yes");
      a.classList.remove("read-no");
    } else {
      myLibrary[this.classList[1]].read = false;
      a.innerHTML = "No";
      a.classList.remove("read-yes");
      a.classList.add("read-no");
    }
  });

  booksGrid.appendChild(bookCard);
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(read);
  bookCard.appendChild(readStatus);
  bookCard.appendChild(deleteButton);
  bookCard.appendChild(readButton);
};

newBook.addEventListener("click", function () {
  const newBookWindow = document.createElement("div");
  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");

  const titleInput = document.createElement("textarea");
  const authorInput = document.createElement("textarea");
  const pagesInput = document.createElement("textarea");

  const read = document.createElement("p");
  const readCheckbox = document.createElement("input");

  const button = document.createElement("button");

  newBookWindow.classList.add("book-window");

  title.innerHTML = `Title:`;
  author.innerHTML = `Author:`;
  pages.innerHTML = `Pages:`;
  read.innerHTML = `Read:`;

  readCheckbox.type = "checkbox";

  button.innerHTML = "CREATE";

  newBookWindow.appendChild(author);
  newBookWindow.appendChild(authorInput);
  newBookWindow.appendChild(title);
  newBookWindow.appendChild(titleInput);
  newBookWindow.appendChild(pages);
  newBookWindow.appendChild(pagesInput);
  newBookWindow.appendChild(read);
  newBookWindow.appendChild(readCheckbox);
  newBookWindow.appendChild(button);

  document.body.appendChild(newBookWindow);

  button.addEventListener("click", function () {
    if (
      titleInput.value !== "" &&
      authorInput.value !== "" &&
      pagesInput.value !== ""
    ) {
      const book = {
        title: titleInput.value,
        author: authorInput.value,
        pages: pagesInput.value,
        read: readCheckbox.checked,
      };
      createBookCard(book);
      newBookWindow.remove();
    }
  });
});
