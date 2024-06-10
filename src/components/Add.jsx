import React, { useState } from 'react'
import Navbar from './Navbar'

const Add= () => {
    const[book,changeBook]=useState(
        {
            "title":"",
            "id":"",
            "author":"",
            "pubyear":""
        }
    )
    const InputHandler=(event)=>{
        changeBook({...book,[event.target.name]:event.target.value})

    }
    const readValue=()=>{
        console.log(book)
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Book Name</label>
                            <input type="text" className="form-control"name='title' value={book.name} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Book id</label>
                            <input type="text" className="form-control" name='id' value={book.id} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Author</label>
                            <input type="text" className="form-control" name='author' value={book.author} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Published Year</label>
                            <input type="text" className="form-control"  name='pubyear' value={book.pubyear} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Add New Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add