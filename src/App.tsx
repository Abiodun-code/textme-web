import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-red-400' onClick={()=>setCount((count)=>count + 1)}>
     Count {count}
    </div>
  )
}

export default App
