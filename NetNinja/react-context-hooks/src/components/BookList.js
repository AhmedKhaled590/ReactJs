import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { themeContext } from '../contexts/ThemeContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(themeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
      <ul>
        {books.map(book => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default BookList;

