import { useState } from 'react'
import CartIndicator from './CartIndicator'
import AddItemButton from './AddItemButton'
import './index.css'

function App() {
  const [cartCount, setCartCount] = useState(0)

  const handleAddItem = () => {
    setCartCount(prevCount => prevCount + 1)
  }

  return (
    <div className="app-container">
      <CartIndicator count={cartCount} />
      <AddItemButton onAdd={handleAddItem} />
    </div>
  )
}

export default App
