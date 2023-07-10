import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    error,
    isPending,
    data: blog,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();
  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      console.log("blog deleted");

      history.push("/");
      // history.go(1)
    });
  };

  return (
    <div className="blog-details">
      <h1>Blog details - {id}</h1>
      {error && <div> {error}</div>}
      {isPending && <div> Loading</div>}
      {blog && (
        <article>
          <h2> {blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div> {blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
