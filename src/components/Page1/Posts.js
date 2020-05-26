import React from "react";
import {NavLink} from "react-router-dom";

const Posts=({posts})=>{
    return(
        <div>
            <ul className='list-group mb-6'>
                {posts.map(posts => (
                <li key={posts.id}  className="list-group-item">
                    <p>{posts.Title}</p>
                    <p>{posts.desc}</p>
                    <NavLink to="/Page2">{posts.link}</NavLink>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Posts;