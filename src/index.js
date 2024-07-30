const prompt = require('prompt-sync')({ sigint: true });

let library = [];

function Book(title, author, year) {
    this.title = title || "Desconhecido";
    this.author = author || "Desconhecido";
    this.year = year || "Desconhecido";
}

function showBook(book) {
    console.log(`Título = ${book.title} | Autor = ${book.author} | Ano = ${book.year}`);
}

function welcomeUser() {
    console.log("\n--------------------------------------------------");
    console.log("Bem vindo à Biblioteca! Escolha uma opção:");
    console.log("1 - Adicionar livro");
    console.log("2 - Listar todos os livros");
    console.log("3 - Buscar livro por título");
    console.log("4 - Remover livro por título");
    console.log("5 - Sair da biblioteca");
}

function addBook() {
    let bookName = prompt("Digite o título do livro: ");
    let authorName = prompt("Digite o nome do autor: ");
    let releaseYear = prompt("Digite o ano de lançamento: ");

    bookName = bookName.trim() === '' ? null : bookName;
    authorName = authorName.trim() === '' ? null : authorName;
    releaseYear = releaseYear.trim() === '' ? null : releaseYear;

    library.push(new Book(bookName, authorName, releaseYear));
}

function listAllBooks() {
    if (library.length === 0) {
        console.log('A biblioteca está vazia!');
    } else {
        library.forEach(book => showBook(book));
    }
}

function findBookByTitle() {
    let bookName = prompt("Digite o título do livro: ");
    let book = library.find((book) => {
        return book.title === bookName;
    });
    showBook(book);
}

function removeBookByTitle() {
    let bookName = prompt("Digite o título do livro: ");
    let newList = library.filter((book) => {
        return book.title !== bookName;
    });
    library = newList;
}

function exitLibrary() {
    console.log("\nObrigado por utilizar nossos serviços. Até a próxima!");
    process.exit(0);
}

function readNumber(value) {
    Int
}

let option = 0;
while(true) {
    welcomeUser();
    option = parseInt(prompt('Sua opção: '), 10);
    console.log(option);
    switch (option) {
        case 1:
            addBook();
            break;
        case 2:
            listAllBooks();
            break;
        case 3:
            findBookByTitle();
            break;
        case 4:
            removeBookByTitle();
            break;
        case 5:
            exitLibrary();
            break;
        default:
            console.log('\nOpção inválida. Tente novamente.');
            break;
    }
}