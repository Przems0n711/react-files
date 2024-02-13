import { useContext } from 'react';
import './App.scss';
import AppHeader from './components/AppHeader';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme === 'light' ? 'light' : 'dark'}`}>
      <AppHeader />
      <main>
        <h1>Hello!</h1>
        <p>Lorem ipsum dolir sit amet.</p>
      </main>
    </div>
  );
}

export default App;
