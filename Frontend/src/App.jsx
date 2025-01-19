import React, { Suspense } from 'react'
import { BrowserRouter } from "react-router-dom"
import ScreenBeforeMounted from './components/ScreenBeforeMounted/ScreenBeforeMounted'
const Application = React.lazy( ()=>import('./utils/LazyConfig') )

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<ScreenBeforeMounted />}>
        <Application />
      </Suspense>
    </BrowserRouter>
  )
}

export default App