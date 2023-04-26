import './App.css';
import TodoView from './Components/TodoView';
import Navbar from './Components/Navbar';
import Modal from './Components/Modal';

function App() {
  return (
    <>
      <Navbar />
      <Modal />
      <TodoView />
    </>
  );
}

export default App;
