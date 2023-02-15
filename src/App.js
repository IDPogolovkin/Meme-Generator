import './App.css';
import Form from './components/Form';
import Forms from './components/Forms';
import Header from './components/Header';
import SignUp from './components/SignUp';
import troll from './images/Troll.svg'

function App() {
  return (
    <div className="App">
      <Header img={troll} />
      <Form/>
      {/* <Forms /> */}
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
