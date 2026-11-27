import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'
import './App.css'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  )
}
