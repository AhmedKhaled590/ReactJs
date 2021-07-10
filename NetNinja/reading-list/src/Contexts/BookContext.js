import React, { createContext, useEffect, useReducer } from 'react';
import { BookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

const getLocalStorage = () => {
    const books = JSON.parse(localStorage.getItem('Books'));
    if (books)
        return books;
    else
        return [];
}

const BookContextprovider = (props) => {
    const [books, dispatch] = useReducer(BookReducer, getLocalStorage());

    useEffect(() => {
        localStorage.setItem('Books', JSON.stringify(books));
    }, [books])

    return (
        <BookContext.Provider value={{ books: books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextprovider;