import React, { useState } from 'react'
import Router from './routes/Router';

const App = () => {

    const [user, setUser] = useState(true);

  return (

    <Router user={user} setUser={setUser}/>
  )
}

export default App