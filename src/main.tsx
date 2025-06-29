
import ReactDOM from 'react-dom/client'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from '@routes/AppRouter';
import "@styles/global.css"


const root = ReactDOM.createRoot(document.getElementById('app')!)
root.render(
  <AppRouter/>
)
