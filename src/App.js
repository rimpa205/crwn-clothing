import logo from './logo.svg';
import './App.css';
import './categories.styles.scss';
import Directory from './components/directory/directory.component';
import Home from './routes/home/home.component';
import {Routes,Route,Outlet} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

const Shop=()=>{
  return <h1> I am the shop page</h1>
}

const App = () => {
  return( 
  <Routes>

  <Route   path='/' element={<Navigation/>}>
  <Route path='/home' element={<Home/>}/>

<Route path='shop' element={<Shop/>}/>
<Route path='signIn' element={<SignIn/>}/>
 
 </Route>

</Routes>  )
}

export default App;
