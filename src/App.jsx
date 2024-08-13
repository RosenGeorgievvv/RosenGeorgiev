import React from 'react'
import Main from './components/Main'

const App = () => {
  return (
    <div className='relative h-full overflow-y-auto antialiased'>
      <div className='fixed inset-0 bgfixed bg-cover bg-center bg-img'>
        <div className='relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto'>
          <Main />
        </div>
      </div>
      </div>
  )
}

export default App