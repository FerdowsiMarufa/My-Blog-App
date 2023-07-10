import { Link } from "react-router-dom";
const BlogList = ({ blogs, title, handleDelete }) => {
  //   const blogs = props.blogs;
  //   const title = props.title;

  return (
    <div>
      <h1> {title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogdetails/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
          </Link>
          {/* <button onClick={() => handleDelete(blog.id)}> Delete</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
