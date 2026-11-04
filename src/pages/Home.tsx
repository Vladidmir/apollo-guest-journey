import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { useTitle, useTrack } from '../components/Ui'
import { lockLabel } from '../content/clubs'
import { homePhotos } from '../content/media'
import { visitSteps } from '../content/visit'
import { loadVisit } from '../lib/storage'
import { useApp } from '../state'
import { l, type IconName } from '../types'

const cards: { to: string; icon: IconName; title: ReturnType<typeof l>; text: ReturnType<typeof l>; kind?: string }[] = [
  {
    to: '/tour',
    icon: 'map',
    title: l('Знайомство з клубом', 'Get to know the club'),
    text: l('Дізнайся, де що знаходиться', 'See where everything is'),
  },
  {
    to: '/guides',
    icon: 'list',
    title: l('Як користуватися клубом', 'How to use the club'),
    text: l('Турнікети, шафки, душові', 'Turnstiles, lockers, showers'),
  },
  {
    to: '/vending',
    icon: 'box',
    title: l('Вендинг', 'Vending'),
    text: l('Покупки та оплата', 'Buying and paying'),
  },
  {
    to: '/situations',
    icon: 'help',
    kind: 'emphasis',
    title: l('Потрібна допомога?', 'Need help?'),
    text: l('Поширені проблеми', 'Common problems'),
  },
  {
    to: '/search',
    icon: 'search',
    title: l('Знайти в клубі', 'Find it in the club'),
    text: l('Пошук зон та обладнання', 'Search areas and equipment'),
  },
  {
    to: '/situations/lost-item',
    icon: 'alert',
    kind: 'alert',
    title: l('Загубив або забув річ?', 'Lost or forgot something?'),
    text: l('Дізнайся, як діяти та куди звернутися.', 'See what to do and who to ask.'),
  },
]

export function HomePage() {
  const { tx, club } = useApp()
  useTitle(tx(l('Дорога гостя', 'Guest path')))
  useTrack('home')
  const total = visitSteps(club).length
  const done = loadVisit(club.id).length
  const hero = homePhotos(club)[0]

  return (
    <div>
      <section className="hero">
        {hero && (
          <div className="hero-shot">
            <img src={hero.src} alt={tx(hero.alt)} />
          </div>
        )}
        <p className="kicker">{tx(l('Дорога гостя', 'Guest path'))}</p>
        <p className="eyebrow">{tx(l('Гість клубу', 'Club guest'))}</p>
        <h1>{tx(l('Привіт!', 'Hello!'))}</h1>
        <p className="lede">{tx(l('Допоможемо тобі комфортно почуватися в клубі.', 'We will help you feel at home in the club.'))}</p>
        <Link className="club-line" to="/club">
          {tx(club.title)} · {tx(club.mall)} · {tx(lockLabel(club.lockType))}
        </Link>
        <p className="muted">{tx(club.findHint)}</p>
      </section>
      <div className="page">
        {done > 0 && (
          <Link to="/visit" className="note">
            <strong>{tx(l('Перший візит', 'First visit'))}</strong>
            <p>
              {done} / {total}
            </p>
            <div className="meter progress">
              <span style={{ width: `${Math.min(100, (done / total) * 100)}%` }} />
            </div>
          </Link>
        )}
        <Link to="/visit" className="card emphasis">
          <span className="card-icon">
            <Icon name="user" />
          </span>
          <span>
            <span className="card-title">{tx(l('Перший раз в Apollo?', 'First time at Apollo?'))}</span>
            <span className="card-text">{tx(l('Короткий маршрут від входу до виходу', 'A short route from the door to the exit'))}</span>
          </span>
          <Icon name="chevron" className="chev" />
        </Link>
        <div className="stack">
          {cards.map((card) => (
            <Link key={card.to} to={card.to} className={card.kind ? `card ${card.kind}` : 'card'}>
              <span className="card-icon">
                <Icon name={card.icon} />
              </span>
              <span>
                <span className="card-title">{tx(card.title)}</span>
                <span className="card-text">{tx(card.text)}</span>
              </span>
              <Icon name="chevron" className="chev" />
            </Link>
          ))}
        </div>
        <div className="split">
          <Link to="/rules" className="mini">
            <Icon name="list" />
            <strong>{tx(l('Правила клубу', 'Club rules'))}</strong>
          </Link>
          <Link to="/help" className="mini">
            <Icon name="phone" />
            <strong>{tx(l('Рецепція', 'Reception'))}</strong>
          </Link>
        </div>
        {club.hasAccuniq && (
          <div className="split">
            <Link to="/zones/accuniq" className="mini">
              <Icon name="heart" />
              <strong>Accuniq</strong>
            </Link>
            {club.hasKasa ? (
              <Link to="/zones/kasa" className="mini">
                <Icon name="card" />
                <strong>{tx(l('Каса', 'Checkout'))}</strong>
              </Link>
            ) : (
              <Link to="/help" className="mini">
                <Icon name="help" />
                <strong>{tx(l('Гʼюстон', 'Houston'))}</strong>
              </Link>
            )}
          </div>
        )}
        <p className="foot-note">
          {tx(
            l(
              'Демонстраційний прототип із фото зон і обладнання. Інструкції затверджує адміністрація клубу. Контакти, ціни і планування — зразкові для вибраної локації.',
              'Demonstration prototype with zone and equipment photos. The club administration approves the real instructions. Contacts, prices and the floor plan are samples for the selected location.',
            ),
          )}
        </p>
      </div>
    </div>
  )
}
