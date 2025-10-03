
import Link from './Link'
import Register from './Register'
import Forgot from './style/Forgot'
import Reset from './style/Reset'

import{ BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App(){
  return (

     <Router>
        <Routes>
          <Route path='/register' element={<Register/>} ></Route>
          <Route path='/link' element={<Link/>}></Route>
          <Route path='/Forgot' element={<Forgot/>}></Route>
          <Route path='/Reset' element={<Reset/>}></Route>
        </Routes>
     </Router>
  )
}

export default App;
