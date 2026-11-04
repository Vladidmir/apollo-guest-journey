import { Link } from 'react-router-dom'
import { useApp } from '../state'
import { l } from '../types'

export function NotFoundPage() {
  const { tx } = useApp()
  return (
    <div className="page">
      <h1>{tx(l('Сторінку не знайдено', 'Page not found'))}</h1>
      <Link className="btn primary" to="/">{tx(l('На головну', 'Go home'))}</Link>
    </div>
  )
}
