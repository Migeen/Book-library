const myLibrary =[];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.show = function(){
        console.log(this.title);
    }
}

const obj = new Book ('JkRowling','Migeen',20,'yes');

function addBookToLibrary(){

}

const plus = document.querySelector('#plus');
const close = document.querySelector('#close');
const modal = document.querySelector('.modal');

plus.addEventListener('click',function(){
    modal.classList.add('open-modal');
});

close.addEventListener('click',function(){
    modal.classList.remove('open-modal');
});




