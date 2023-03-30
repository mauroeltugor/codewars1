//find books written by a selected author from an array
const books1 = [
  {title: "La metamorfosis", author: "Franz Kafka"},
  {title: "Cien años de soledad", author: "Gabriel García Márquez"},
  {title: "El gran Gatsby", author: "F. Scott Fitzgerald"},
  {title: "1984", author: "George Orwell"
}];
 
let book1;
 for (let i = 0; i < books.length; i+=1) {
   if (books[i].author === "Gabriel García Márquez") {
     book = books[i];
     break;
   }
 }
 
console.log(book);





const books = [
    {title: "La metamorfosis", author: "Franz Kafka"},
    {title: "Cien años de soledad", author: "Gabriel García Márquez"},
    {title: "El gran Gatsby", author: "F. Scott Fitzgerald"},
    {title: "1984", author: "George Orwell"
}];
  
const book = books.find((book) => book.title === "El gran Gatsby");
  
console.log(book);

  
  