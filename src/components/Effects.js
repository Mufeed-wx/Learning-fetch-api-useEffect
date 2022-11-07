import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Effects = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts.splice(0, 10)))
    }, [])
    return (
        <div>
            <h1 className='bg-info text-white'>FETCH API</h1>
            {posts.map((data) =>
                <div key={data.id}>
                    <h1 className='bg-dark text-white'>{data.title}</h1>
                    <p className='text-danger'>{data.body}</p>
                </div>
            )}
        </div>
    )
}

export default Effects