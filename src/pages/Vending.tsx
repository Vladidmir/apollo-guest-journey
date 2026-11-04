import { Link } from 'react-router-dom'
import { HelpButton, PhotoGallery, Steps, useHashScroll, useTitle, useTrack } from '../components/Ui'
import { vendingPhotos } from '../content/media'
import { productsFor, vendingSteps } from '../content/products'
import { useApp } from '../state'
import { l } from '../types'

const problemLinks = [
  { to: '/situations/vending-failed?branch=empty', label: l('Товар не видався', 'The item did not drop') },
  { to: '/situations/vending-failed?branch=charged', label: l('Кошти списалися, товару немає', 'Money taken, no item') },
  { to: '/situations/vending-failed?branch=down', label: l('Автомат не працює', 'The machine is off') },
]

export function VendingPage() {
  const { tx, club } = useApp()
  useTitle(tx(l('Вендинг', 'Vending')))
  useTrack('vending')
  useHashScroll()
  const items = productsFor(club.id)

  if (!club.hasVending) {
    return (
      <div className="page">
        <h1>{tx(l('Вендинг', 'Vending'))}</h1>
        <div className="banner staff">
          <strong>{tx(l('У цьому клубі автомата немає', 'This club has no vending machine'))}</strong>
          <p>{tx(l('Воду можна набрати в зоні питної води.', 'You can fill a bottle at the drinking water point.'))}</p>
        </div>
        <Link className="btn primary" to="/zones/water">{tx(l('Де вода', 'Where the water is'))}</Link>
      </div>
    )
  }

  return (
    <div className="page">
      <h1>{tx(l('Вендинг', 'Vending'))}</h1>
      <p className="lead">
        {tx(l('Покупка в Apollo', 'A purchase at Apollo'))} {club.code}. {tx(l('Ціни в довіднику зразкові, на кнопці автомата — фактичні.', 'Prices in the list are samples. The button on the machine is the real price.'))}
      </p>
      <PhotoGallery shots={vendingPhotos(club)} icon="box" />
      <Steps items={vendingSteps} />
      <div className="stack">
        {problemLinks.map((item) => (
          <Link key={item.to} className="card" to={item.to}>
            <span>
              <span className="card-title">{tx(item.label)}</span>
              <span className="card-text">{tx(l('Відкрити алгоритм. Далі потрібна рецепція.', 'Open the steps. Reception takes it from there.'))}</span>
            </span>
          </Link>
        ))}
      </div>
      <h2 id="products">{tx(l('Що зазвичай є в автоматі', 'What is usually in the machine'))}</h2>
      <div className="stack">
        {items.map((item) => (
          <article key={item.id} className="product">
            <span className="tag">{tx(item.tag)}</span>
            <h3>{tx(item.title)}</h3>
            <p className="muted">{tx(item.text)}</p>
            <strong>{item.price}</strong>
          </article>
        ))}
      </div>
      <p className="foot-note">{tx(l('Якщо полиця порожня, товару зараз немає. Не оплачуй комірку навмання.', 'If the slot is empty, the item is out. Do not pay for a guess.'))}</p>
      <HelpButton to="/situations/vending-failed" id="vending" />
    </div>
  )
}
