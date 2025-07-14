import axios from 'axios'
import React, { use, useEffect, useState } from 'react'

const Viewall = () => {
    const [todo, ctodo] = useState(
        {
            "todos": [],
            "total": 254,
            "skip": 0,
            "limit": 30
        }
    )
    const fetchData=()=>{
        axios.get("https://dummyjson.com/todos").then(
            (req)=>{
                ctodo({todos:req.data.todos})
            }
        ).catch()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {
                                todo.todos.map(
                                    (value, index) => {
                                        return (
                                            <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h6 class="card-subtitle mb-2 text-body-secondary">{value.id}</h6>
                                                        <h5 class="card-title">{value.todo}</h5>
                                                        <p class="card-text">Completed: {value.completed ? 'YES' : 'NO'}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                )

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall