import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FloorPlan } from '../components/FloorPlan'
import { useTitle, useTrack } from '../components/Ui'
import { tourOf } from '../content/clubs'
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
  const guide = zone ? guideHref(zone.guideId) : null

  const filters = useMemo(
    () => [
      { id: 'all' as const, label: l('Усе', 'All'), color: '' },
      { id: 'service' as const, label: l('Сервіс', 'Service'), color: '#e4b54a' },
      { id: 'training' as const, label: l('Тренування', 'Training'), color: '#f0835a' },
      { id: 'comfort' as const, label: l('Побут', 'Comfort'), color: '#7eb8c9' },
    ],
    [],
  )

  function pick(id: string) {
    setTourOn(false)
    setFinished(false)
    setSelected(id)
  }

  function startTour() {
    setFilter('all')
    setTourOn(true)
    setTourI(0)
    setFinished(false)
  }

  return (
    <div className="page map-page">
      <div className="map-head">
        <div className="map-top">
          <h1>{tx(l('Карта клубу', 'Club map'))}</h1>
          <a className="btn ghost" href={club.tour360Url} target="_blank" rel="noreferrer">
            {tx(l('360°', '360°'))}
          </a>
        </div>
        <button type="button" className="btn primary map-tour" onClick={startTour}>
          {tx(l('Почати екскурсію', 'Start the tour'))}
        </button>
        <div className="chips" role="tablist">
          {filters.map((item) => (
            <button key={item.id} type="button" className={filter === item.id ? 'chip on' : 'chip'} onClick={() => setFilter(item.id)}>
              {item.color ? <i className="chip-dot" style={{ background: item.color }} /> : null}
              {tx(item.label)}
            </button>
          ))}
        </div>
      </div>
      <div className="map-stage">
        <FloorPlan rooms={rooms} active={active ?? null} dim={(room) => filter !== 'all' && room.category !== filter} onSelect={pick} />
      </div>
      {(finished || zone) && (
        <article className="zone-sheet">
          {finished && !tourOn && (
            <p className="status">{tx(l('Екскурсію завершено. Далі можна відкрити будь-яку зону.', 'Tour complete. Open any area next.'))}</p>
          )}
          {tourOn && zone && (
            <>
              <h2>
                {tx(l('Крок', 'Step'))} {tourI + 1} / {stops.length} · {tx(zone.title)}
              </h2>
              <p className="sheet-find">{tx(zone.find)}</p>
              <div className="sheet-actions steps">
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
            </>
          )}
          {!tourOn && zone && (
            <>
              <h2>{tx(zone.title)}</h2>
              <p className="sheet-find">{tx(zone.find)}</p>
              <div className="sheet-actions">
                {guide && (
                  <Link className="btn primary" to={guide}>
                    {tx(l('Як користуватися', 'How to use it'))}
                  </Link>
                )}
                <Link className="btn ghost" to={`/zones/${zone.id}`}>
                  {tx(l('Відкрити сторінку зони', 'Open the area page'))}
                </Link>
              </div>
            </>
          )}
        </article>
      )}
    </div>
  )
}
