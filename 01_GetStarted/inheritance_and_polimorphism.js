class Publication {
    constructor(title, author, pubDate){
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
    }
    print() {
        console.log(`
            Title: ${this.title}. By ${this.author}. 
            Published on: ${this.pubDate}.
        `);
    }
}


class Book extends Publication {
    constructor(bookDetails){
        super(bookDetails.title, bookDetails.author, bookDetails.pubDate);
        this.publisher = bookDetails.publisher;
        this.ISBN = bookDetails.ISBN;
    }
    print(){
        super.print();
        console.log(`
            Publisher: ${ this.publisher }.
            ISBN: ${ this.ISBN }.
        `)
    }
}

class BlogPost extends Publication {
    constructor(title, author, pubDate, URL){
        super(title, author, pubDate);
        this.URL = URL;
    }
    print(){
        super.print();
        console.log(`To get to block click: ${this.URL}`);
    }
}


const book = new Publication('Pan Tadeusz', 'Adam Mickiewicz', '12.05.1980');
book.print()

const thorhal = new Book({
    title: 'Thorgal: Władca gór', 
    author: 'Rosiński - Van Hamme', 
    pubDate: '01.10.1980',
    publisher: 'Unknown',
    ISBN: '158-848480'
});

thorhal.print()

const musicBlog = new BlogPost(
    'Music is everywhere',
    'Dawid',
    'Febuary 27, 2022',
    'https://musiciseverywhere.com'
);

musicBlog.print()