import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch"
const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
    return (
        <>
            {error && <div>{error}</div>}
            {isPending && <div className="spinner-border text-danger" role="status"></div>}
            {blog &&
                <div className="blog-preview">
                    <h2>{blog.title}</h2>
                    <p>Written by <strong>{blog.author}</strong></p>
                    <p>{blog.body}</p>
                    <button className="delete-btn" onClick={handleDelete}>Delete</button>
                </div>
            }
        </>

    );
}

export default BlogDetails;