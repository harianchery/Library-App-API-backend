import React, { useState } from 'react'
import Navbar from './Navbar'

const Delete = () => {
    const[book,changeBook]=useState(
        {
            "id":""
        }

    )
    const InputHandler=(event)=>{
        changeBook({...book,[event.target.name]:event.target.value})

    }
    const  readValue=()=>{{
        console.log(book)}
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Book Id</label>
                        <input type="text" className="form-control"name='id' value={book.id} onChange={InputHandler} />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-danger"onClick={readValue} >Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delete