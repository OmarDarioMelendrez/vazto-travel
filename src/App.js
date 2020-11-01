import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//importamos los componentes y paginas
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Products from './Pages/Products'
import Signup from './Pages/Signup'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/services' component={Services} exact />
          <Route path='/products' component={Products} exact />
          <Route path='/sign-up' component={Signup} exact />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
