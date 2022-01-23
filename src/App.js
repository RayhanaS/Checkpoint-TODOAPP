import './App.css';
import AddList from './component/AddList';
import ToDoList from './component/ToDoList';

function App() {
  return (
    <div className="App">
     <div className="container">
      <h1 className="">TO DO TASKS LIST</h1>
         <AddList/>
         <ToDoList/>
     
   </div>
    </div>
  );
}

export default App;
