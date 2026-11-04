import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FloorPlan } from '../components/FloorPlan'
import { PhotoGallery, useTitle, useTrack } from '../components/Ui'
import { tourOf } from '../content/clubs'
import { zonePhotos } from '../content/media'
import { getZone, guideHref, placedZones } from '../content/select'
import { useApp } from '../state'
import { l, type ZoneCat } from '../types'

export function TourPage() {
  const { tx, club } = useApp()
  useTitle(tx(l('Карта клубу', 'Club map')))
  useTrack('tour')
  const rooms = placedZones(club.id)
  const stops = tourOf(club.id).filter((id) => rooms.some((room) => room.id === id))
  const [filter, setFilter] = useState<ZoneCat | 'all'>('all')
  const [selected, setSelected] = useState<string | null>(null)
  const [tourOn, setTourOn] = useState(false)
  const [tourI, setTourI] = useState(0)
  const [finished, setFinished] = useState(false)
  const active = tourOn ? stops[tourI] : selected
  const zone = active ? getZone(club.id, active) : undefined

  const filters = useMemo(
    () => [
      { id: 'all' as const, label: l('Усе', 'All') },
      { id: 'service' as const, label: l('Сервіс', 'Service') },
      { id: 'training' as const, label: l('Тренування', 'Training') },
      { id: 'comfort' as const, label: l('Побут', 'Comfort') },
    ],
    [],
  )

  function pick(id: string) {
    setTourOn(false)
    setFinished(false)
    setSelected(id)
  }

  return (
    <div className="page">
      <div className="back-row">
        <h1>{tx(l('Карта клубу', 'Club map'))}</h1>
      </div>
      <p className="lead">
        {tx(club.title)}. {tx(l('Натисни зону або пройди коротку екскурсію.', 'Tap an area or take the short tour.'))}
      </p>
      <div className="row-actions">
        <button
          type="button"
          className="btn primary"
          onClick={() => {
            setFilter('all')
            setTourOn(true)
            setTourI(0)
            setFinished(false)
            document.getElementById('floorplan')?.scrollIntoView({ block: 'start' })
          }}
        >
          {tx(l('Почати екскурсію', 'Start the tour'))}
        </button>
        <a className="btn ghost" href={club.tour360Url} target="_blank" rel="noreferrer">
          {tx(l('360° на сайті', '360° on the site'))}
        </a>
      </div>
      <div className="chips" role="tablist">
        {filters.map((item) => (
          <button key={item.id} type="button" className={filter === item.id ? 'chip on' : 'chip'} onClick={() => setFilter(item.id)}>
            {tx(item.label)}
          </button>
        ))}
      </div>
      <FloorPlan rooms={rooms} active={active ?? null} dim={(room) => filter !== 'all' && room.category !== filter} onSelect={pick} />
      <div className="legend">
        <span><i style={{ background: '#e4b54a' }} />{tx(l('Сервіс', 'Service'))}</span>
        <span><i style={{ background: '#f0835a' }} />{tx(l('Тренування', 'Training'))}</span>
        <span><i style={{ background: '#7eb8c9' }} />{tx(l('Побут', 'Comfort'))}</span>
      </div>
      {finished && <p className="status">{tx(l('Екскурсію завершено. Далі можна відкрити будь-яку зону.', 'Tour complete. Open any area next.'))}</p>}
      {zone && (
        <article className="stack">
          <h2>{tx(zone.title)}</h2>
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
          <div className="row-actions">
            {guideHref(zone.guideId) && (
              <Link className="btn primary" to={guideHref(zone.guideId) ?? '/'}>
                {tx(l('Як користуватися', 'How to use it'))}
              </Link>
            )}
            <Link className="btn ghost" to={`/zones/${zone.id}`}>
              {tx(l('Відкрити сторінку зони', 'Open the area page'))}
            </Link>
          </div>
          {zone.related?.map((link) => (
            <Link key={link.to} className="link-quiet" to={link.to}>
              {tx(link.label)}
            </Link>
          ))}
        </article>
      )}
      {tourOn && stops[tourI] && (
        <div className="tour-bar">
          <strong>
            {tx(l('Крок', 'Step'))} {tourI + 1} / {stops.length} · {tx(rooms.find((room) => room.id === stops[tourI])?.title ?? l('', ''))}
          </strong>
          <div className="row-actions">
            <button type="button" className="btn ghost" disabled={tourI === 0} onClick={() => setTourI((value) => Math.max(0, value - 1))}>
              {tx(l('Назад', 'Back'))}
            </button>
            <button
              type="button"
              className="btn primary"
              onClick={() => {
                if (tourI >= stops.length - 1) {
                  setTourOn(false)
                  setFinished(true)
                  return
                }
                setTourI((value) => value + 1)
              }}
            >
              {tourI >= stops.length - 1 ? tx(l('Завершити', 'Finish')) : tx(l('Далі', 'Next'))}
            </button>
            <button type="button" className="btn ghost" onClick={() => setTourOn(false)}>
              {tx(l('Закрити', 'Close'))}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
