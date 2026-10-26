
export const generateStaticParams = async () =>{
    const res = await fetch('http://localhost:3004/books')
    const books = await res.json()

    return books.map(book => ({bookId: book.id}))


}



async function BookDetailsPage({params}) {
    const { bookId } = await params

    const res = await fetch(`http://localhost:3004/books/${bookId}`,)

    const { title, author, description, price } = await res.json()


  return (
    <div>
        <h2>
            BookDetailsPage: {bookId}
        </h2>
        <h3>Title: {title}</h3>
        <h3>Author: {author}</h3>
        <p>Description: {description}</p>
        <p>Price: ${price}</p>

    </div>
  )
}

export default BookDetailsPage