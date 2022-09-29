import Header from './components/Header';
import Shop from './components/Shop';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{ContextProvaider}from './context'

function App() {
  return (
    <div className='goods'>
        <Header/>
      <ContextProvaider>
        <Shop/>
      </ContextProvaider>
    </div>
  );
}

export default App;
