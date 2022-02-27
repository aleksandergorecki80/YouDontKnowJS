function Publication(title, author, pubDate) {
  const publicAPI = {
    print() {
      console.log(`
                Title: ${title}.
                Author: ${author}.
                Date of publishing: ${pubDate}.
            `);
    },
  };
  return publicAPI;
}

function Book(bookDetails) {
  const pub = Publication(
    bookDetails.title,
    bookDetails.author,
    bookDetails.pubDate
  );
  const publicAPI = {
    print() {
      pub.print();
      console.log(`
                Publisher: ${bookDetails.publisher}
                ISBN: ${bookDetails.ISBN}
            `);
    },
  };
  return publicAPI;
}

function BlogPost(title, author, pubDate, URL) {
  const pub = Publication(title, author, pubDate);
  const publicAPI = {
    print() {
      pub.print();
      console.log(`For getting a blob click on this link: ${URL}`);
    },
  };
  return publicAPI;
}

const publication = Publication('Pan Tadeusz', 'Adam Mickiewicz', '12.05.1980');
publication.print();

const book = Book({
  title: 'Thorgal: Władca gór',
  author: 'Rosiński - Van Hamme',
  pubDate: '01.10.1980',
  publisher: 'Cinebook',
  ISBN: '158-848480',
});
book.print();

const blogPost = BlogPost(
  'Music is everywhere',
  'Dawid',
  'Febuary 27, 2022',
  'https://musiciseverywhere.com'
);
blogPost.print();
