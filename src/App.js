import { BrowserRouter, Redirect, Switch , Route} from 'react-router-dom'
import Navigator from './Components/Navigator/nav'
import './index.css'
import Land from './Components/land/land'
import Land2 from './Components/land-2/land-2'
import Stories from './Components/stories/stories.js'
import Info from './Components/info/info.js'
import Fashion from './Components/fashion/fashion.js'
import Footer from './Components/Footer/footer.js'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch>
          <Route path='/home'>
           <div className='body_top'>
              <Navigator />
              <Land />
              <Land2 />
              <Stories />
              <Info />
              <Fashion />
              <Footer />

          </div>
        
        </Route>
        <Redirect from ='/' to='/home'></Redirect>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
