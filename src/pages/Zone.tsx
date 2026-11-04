import { Link, useParams } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { PhotoGallery, useTitle } from '../components/Ui'
import { zonePhotos } from '../content/media'
import { getZone, guideHref } from '../content/select'
import { zoneInfo } from '../content/zones'
import { useApp } from '../state'
import { l } from '../types'

export function ZonePage() {
  const { id = '' } = useParams()
  const { tx, club } = useApp()
  const zone = getZone(club.id, id)
  const known = zoneInfo[id]
  useTitle(zone ? tx(zone.title) : tx(l('Зона', 'Area')))

  if (!known) {
    return (
      <div className="page">
        <h1>{tx(l('Такої зони немає', 'No such area'))}</h1>
        <Link to="/tour">{tx(l('До карти', 'Back to the map'))}</Link>
      </div>
    )
  }

  if (!zone) {
    return (
      <div className="page">
        <h1>{tx(known.title)}</h1>
        <div className="banner staff">
          <strong>{tx(l('У цьому клубі такої зони немає', 'This club does not have this area'))}</strong>
          <p>{tx(l('Відкрий карту Apollo', 'Open the Apollo map'))} {club.code}.</p>
        </div>
        <Link className="btn primary" to="/tour">{tx(l('Карта клубу', 'Club map'))}</Link>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="back-row">
        <Link to="/tour" className="icon-btn" aria-label={tx(l('Назад до карти', 'Back to the map'))}>
          <Icon name="chevron" className="back-icon" />
        </Link>
        <h1>{tx(zone.title)}</h1>
      </div>
      <p className="lead">{tx(zone.description)}</p>
      {zone.note && <p className="note">{tx(zone.note)}</p>}
      <div className="note">
        <h3>{tx(l('Як знайти', 'How to find it'))}</h3>
        <p>{tx(zone.find)}</p>
      </div>
      <div className="note">
        <h3>{tx(l('Що тут робити', 'What you can do'))}</h3>
        <p>{tx(zone.canDo)}</p>
      </div>
      <PhotoGallery shots={zonePhotos(club, zone.id)} icon="map" />
      {guideHref(zone.guideId) && (
        <Link className="btn primary" to={guideHref(zone.guideId) ?? '/'}>
          {tx(l('Як користуватися', 'How to use it'))}
        </Link>
      )}
      {zone.related?.map((link) => (
        <Link key={link.to} className="link-quiet" to={link.to}>
          {tx(link.label)}
        </Link>
      ))}
    </div>
  )
}
