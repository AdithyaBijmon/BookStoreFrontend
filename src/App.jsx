import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Button } from 'react-bootstrap'

function App() {


  return (
    <>
     <h3><FontAwesomeIcon icon={faInstagram} />Book Store</h3>
      <Button variant="primary">Primary</Button>
    </>
  )
}

export default App
