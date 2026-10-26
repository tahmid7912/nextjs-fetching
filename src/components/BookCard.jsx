import Link from 'next/link'
import React from 'react'

function BookCard({ book }) {

    const { title, author, description, price } = book

  return (
    <div className="card  bg-base-100 w-96 shadow-sm">
  <figure>
   
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
    <Link href={`/books/${book.id}`}>
          <button className="btn btn-primary">Show Details</button>
</Link>

    </div>
  </div>
</div>
  )
}

export default BookCard