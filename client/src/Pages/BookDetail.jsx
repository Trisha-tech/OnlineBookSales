import React from 'react'

function BookDetail({data}) {
    const render = data.map(val => {
        return (<div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-opacity duration-500 hover:bg-zinc-300">
            <h3 className="text-xl font-bold mb-2">{val.subject}</h3>
            <p className="text-gray-600">{val.title}</p>
          </div>)
    })
  return (
    <>
      {render}
    </>
  )
}

export default BookDetail