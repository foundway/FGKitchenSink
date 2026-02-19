import { ThemeProvider } from './components/theme/ThemeProvider';
import { KitchenSink } from './pages/KitchenSink';
import './styles/theme.css';
import './styles/global.css';

function App() {
  return (
    <ThemeProvider>
      <KitchenSink />
    </ThemeProvider>
  );
}

export default App;
