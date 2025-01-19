import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom"
const Application = React.lazy( ()=>import('./utils/LazyConfig') )

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading....</h1>}>
        <Application />
      </Suspense>
    </BrowserRouter>
  )
}

export default App