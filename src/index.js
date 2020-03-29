import React from "react";
import ReactDOM from "react-dom";

import axios from "axios";

const rootElement = document.getElementById("root");

function Reddit() {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
          axios.get(`https://www.reddit.com/r/GradSchool.json`).then(res => {
                  const newPosts = res.data.data.children.map(obj => obj.data);

                  setPosts(newPosts);
                });
        }, []);

    return (
          <div>
            <h1>/r/GradSchool</h1>
            <ul>
              {posts.map(post => (
                          <li key={post.id}>
                            <a href={post.url}>{post.title}</a>
                          </li>
                        ))}
            </ul>
          </div>
        );
}

ReactDOM.render(<Reddit />, rootElement);
