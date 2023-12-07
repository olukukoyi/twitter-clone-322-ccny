import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./Feedbar.css";

const Feedbar = () => {
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [image, setImage] = useState(null);
  const [post, setPosts] = useState([]);
  const [feed, setFeed] = useState();

  const userId = Cookies.get("userid");

  const fetchFeed = async () => {
    const res = await fetch("http://localhost:8001/posts");
    const { posts } = await res.json();
    console.log(posts);

    if (res.status === 200) {
      setFeed(posts);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8001/posts/createPost", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newPostTitle,
        body: newPostContent,
        userId,
      }),
    });

    const newPost = await res.json();

    console.log(newPost);

    setNewPostTitle("");
    setNewPostContent("");
    setImage(null);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="feed">
      <header className="feed-header">
        <h2>Home</h2>
      </header>
      <div className="new-post-form">
        <form
          onSubmit={(e) => {
            handlePostSubmit(e);
          }}
        >
          <input
            type="text"
            placeholder="Title"
            value={newPostTitle}
            onChange={(e) => setNewPostTitle(e.target.value)}
          />
          <textarea
            placeholder="What's happening?"
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
          />

          <div className="new-post-icons">
            {/* <label className="image-upload">
                            <input type="file" accept="image/*" onChange={handleImageChange} />
                            <ImageIcon fontSize="medium" />
                        </label> */}
            <button type="submit">Post</button>
          </div>
        </form>
      </div>
      {/* <div className='posts-display'>
                {posts.map(post => (
                    <div key={post.id} className="post-item">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div> */}
    </div>
  );
};

export default Feedbar;
