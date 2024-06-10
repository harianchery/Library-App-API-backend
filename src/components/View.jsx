import React, { useState } from 'react'
import Navbar from './Navbar'

const View = () => {
    const [book, changeBook] = useState(
        [
            {"title":"Rad",
            "id": "iyuui",
            "author":"fg",
            "pubyear":"jiil"}
    ]
    )
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Book Id</th>
                                    <th scope="col">Book Title</th>
                                    <th scope="col">Book Author</th>
                                    <th scope="col">Published year</th>
                                </tr>
                            </thead>
                            {
                                book.map(
                                    (value,index)=>{
                                        return <tbody>
                                        <tr>
                                            <td scope="row">{value.id}</td>
                                            <td>{value.name}</td>
                                            <td>{value.author}</td>
                                            <td>{value.pubyear}</td>
                                        </tr>
                                        
                                    </tbody>
                                    }
                                )
                            }
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default View