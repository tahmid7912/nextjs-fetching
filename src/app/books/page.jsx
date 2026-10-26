import BookCard from '@/components/BookCard'
import React from 'react'

async function Bookspage() {

const res = await fetch('http://localhost:3004/books',{cache: "no-store"})
const books = await res.json()

  return (
    <div>
        <h2>
    Bookspage : {books.length}  
        </h2>

        <div className="grid grid-cols-3 gap-4">
    {
        books.map(book => <BookCard key={book.id} book={book} />)
    }

        </div>
        </div>
  )
}

export default Bookspage