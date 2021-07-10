import BookList from "./components/BookList";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import Modal from "./components/Modal";
import BookContextprovider from "./Contexts/BookContext";


function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Header />
        <BookContextprovider>
          <BookList />
        </BookContextprovider>
      </div>
    </ErrorBoundary>
  );
}

export default App;
