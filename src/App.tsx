import { useState } from 'react'
import welcome from './lib/images/svelte-welcome.webp'
import welcomeFallback from './lib/images/svelte-welcome.png'
import './index.css'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <section>
      <h1>
        <span className="welcome">
          <picture>
            <source srcSet={welcome} type="image/webp" />
            <img src={welcomeFallback} alt="Welcome" />
          </picture>
        </span>
        to your new React app
      </h1>
      <h2>try editing <strong>src/App.tsx</strong></h2>
      <div className="counter">
        <button aria-label="Decrease the counter by one" onClick={() => setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button aria-label="Increase the counter by one" onClick={() => setCount(count + 1)}>+</button>
      </div>
    </section>
  )
}
