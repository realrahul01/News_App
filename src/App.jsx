import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './Components/Header/Header'
import News from './Components/News/News';
// import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

function App() {

  const [progress, setProgress] = useState(0)
  

  return (

   <div className="App">

            <LoadingBar
              // color='#f11946'
              color='red'
              progress={progress}
              height={3}
              onLoaderFinished={() => setProgress(0)}
            />
      <Header/>
        <Routes>
          <Route path='/' element={<News pageSize={5} country="in" category={"general"} setProgress={setProgress} />}/>
          <Route path='/business' element={ <News pageSize={5} country="in" category={"business"} setProgress={setProgress}/>}/>
          <Route path='/entertainment' element={ <News pageSize={5} country="in" category={"entertainment"} setProgress={setProgress}/>}/>
          <Route path='general' element={ <News pageSize={5} country="in" category={"general"} setProgress={setProgress} />}/>
          <Route path='health' element={ <News pageSize={5} country="in" category={"health"} setProgress={setProgress}/>}/>
          <Route path='science' element={ <News pageSize={5} country="in" category={"science"} setProgress={setProgress}/>}/>
          <Route path='sports' element={ <News pageSize={5} country="in" category={"sports"} setProgress={setProgress}/>}/>
          <Route path='technology' element={ <News pageSize={5} country="in" category={"technology"} setProgress={setProgress}/>}/>
        </Routes>
        
   </div>
  )
}

export default App
