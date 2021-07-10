import { useContext, createRef, useRef } from "react";
import { BookContext } from "../Contexts/BookContext";
import Modal from "./Modal";



const BookList = () => {
    const titleRef = useRef();
    const authorRef = useRef();
    const modalRef = useRef();

    const { books, dispatch } = useContext(BookContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_BOOK', book: {
                title: titleRef.current.value,
                author: authorRef.current.value
            }
        });
        modalRef.current.setState({
            addBtn: true,
            removeBtn: false,
        })
    }



    return (
        <form onSubmit={handleSubmit} style={{ color: "#fff" }} className="book-list">
            <h3 style={{ color: "#555" }} >{books.length} Books in the List</h3>
            <ul>
                {books && books.map(book => {
                    return <li onClick={() => dispatch({ type: 'DELETE_BOOK', id: book.id, modalRef: modalRef })} key={book.id} style={{ background: "#007bff" }} data-toggle="modal" data-target="#Modal" >{book.title}</li>
                })}
            </ul>
            <div className="form-group">
                <label style={{ color: "#555" }}>Book Title:</label>
                <input ref={titleRef} required id="title" className="form-control" />

                <label style={{ color: "#555" }}>Book Author:</label>
                <input ref={authorRef} required id="author" className="form-control" />
            </div>
            <button data-toggle="modal" data-target="#Modal" type="submit" className="btn btn-success">Add Book</button>
            <Modal ref={modalRef} />
        </form>

    );
}

export default BookList;