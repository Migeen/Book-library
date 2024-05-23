const plus = document.querySelector('#plus');
const close = document.querySelector('#close');
const modal = document.querySelector('.modal');
const container  =document.querySelector('.container');
const saveBtn = document.querySelector('#save');

const myLibrary =[
    {
        title:'The Ouja',
        author:'lalala',
        no_of_pages:267,
        read:'read'
    },
    {
        title:'python programming',
        author:'migeen magar',
        no_of_pages:500,
        read:'unread'
    }
];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    container.innerHTML='';
    for(const x of myLibrary){
        const div = document.createElement('div');
        div.classList.add('book');
        const title = document.createElement('p');
        title.innerHTML = x.title;
        title.classList.add('title');
        const author = document.createElement('p');
        author.classList.add('author');
        author.innerHTML = x.author;
        const noOfPages = document.createElement('p');
        noOfPages.innerHTML=x.no_of_pages;
        noOfPages.classList.add('pages');
        const read  = document.createElement('button');
        read.textContent=x.read;
        read.classList.add('read');
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(noOfPages);
        div.appendChild(read);
        container.appendChild(div);
    }
}

addBookToLibrary();

plus.addEventListener('click',function(){
    modal.classList.add('open-modal');
});

close.addEventListener('click',function(){
    modal.classList.remove('open-modal');
});

saveBtn.addEventListener('click',function(){
    const inputTitle = document.querySelector('#title').value;
    const inputAuthor = document.querySelector('#author').value;
    const inputPages = document.querySelector('#pages').value;
    const inputRead = document.querySelector('#read').checked ? 'read' : 'unread';    

    const newBook = new Book(inputTitle,inputAuthor,inputPages,inputRead); 
    myLibrary.push(newBook);
    addBookToLibrary();
    modal.classList.remove('open-modal');

});



for(a of myLibrary){
    console.log(a.title);
};






