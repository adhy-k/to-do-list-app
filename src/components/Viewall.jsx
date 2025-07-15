import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Viewall = () => {
    const [todo, changeTodo] = useState(
        {
            "todos": [],
            "total": 254,
            "skip": 0,
            "limit": 30
        }
    )
    const fetchData = () => {
        axios.get("https://dummyjson.com/todos").then(
            (req) => {
                changeTodo({ todos: req.data.todos })
            }
        ).catch()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div><div className="container-fluid">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        {
                            todo.todos.map(
                                (value, index) => {
                                    return (
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                            <div class="card h-100">
                                                <div class="card-header">
                                                    {value.id}. {value.todo}
                                                </div>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">{value.completed ? <p className='text-success'>Completed: Yes</p> : <p className='text-danger'>Completed: NO</p>}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default Viewall