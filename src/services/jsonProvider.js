export function jsonProvider() {
  return fetch('http://encuentro.test/api/books')
    .then(response => response.json())
    .then(data => {
      let books = data;
      return books;
    })

}