import './App.css';
import TodoView from './Components/TodoView';
import Navbar from './Components/Navbar';
import Modal from './Components/Modal';
import Form from './Components/Form';

function App() {
  return (
    <>
      <Navbar />
      <Modal />
      <TodoView />
      <Form />
    </>
  );
}

export default App;
