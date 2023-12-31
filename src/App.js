// components 
import logo from './logo.svg';
import FirstComponent from './components/FirstComponent';

// style / CSS
import './App.css';
import TemplateExpressions from './components/TemplateExpressions';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpressions/>
    </div>
  );
}

export default App;
