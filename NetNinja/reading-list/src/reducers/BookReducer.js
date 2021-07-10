export const BookReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            const id = new Date().getTime().toString();
            console.log(action);
            return [...state, { title: action.book.title, author: action.book.author, id: id }];
        case 'DELETE_BOOK':
            action.modalRef.current.setState({ addBtn: false, removeBtn: true });
            return state.filter((book) => { return book.id !== action.id });
        default:
            return state;
    }
}