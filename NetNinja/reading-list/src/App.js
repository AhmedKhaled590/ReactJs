import BookList from "./components/BookList";
import ClickCounter from "./components/ClickCounter";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import HoverCount from "./components/HoverCount";
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
        <ClickCounter />
        <HoverCount />
      </div>
    </ErrorBoundary>
  );
}

export default App;
