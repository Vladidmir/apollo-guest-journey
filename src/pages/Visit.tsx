import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { PhotoGallery, useTitle, useTrack } from '../components/Ui'
import { homePhotos } from '../content/media'
import { packItems, visitSteps } from '../content/visit'
import { loadVisit, saveVisit } from '../lib/storage'
import { useApp } from '../state'
import { l } from '../types'

export function VisitPage() {
  const { tx, club } = useApp()
  useTitle(tx(l('Перший візит', 'First visit')))
  useTrack('visit')
  const steps = visitSteps(club)
  const [done, setDone] = useState<string[]>(() => loadVisit(club.id))

  function toggle(id: string) {
    const next = done.includes(id) ? done.filter((item) => item !== id) : [...done, id]
    setDone(next)
    saveVisit(club.id, next)
  }

  return (
    <div className="page">
      <h1>{tx(l('Перший візит до Apollo', 'Your first visit to Apollo'))}</h1>
      <p className="lead">
        Apollo {club.code} · {tx(club.city)}. {tx(l('Відмічай кроки, які вже пройшов. Список лишається на цьому телефоні.', 'Tick the steps you have finished. The list stays on this phone.'))}
      </p>
      <PhotoGallery shots={homePhotos(club).slice(0, 2)} icon="user" />
      <div className="meter">
        <span style={{ width: `${(done.length / steps.length) * 100}%` }} />
      </div>
      <p className="muted">
        {done.length} / {steps.length}
      </p>
      <h2>{tx(l('Візьми із собою', 'Bring with you'))}</h2>
      <ul className="mistakes">
        {packItems.map((item) => (
          <li key={item.uk}>{tx(item)}</li>
        ))}
      </ul>
      <h2>{tx(l('Пройди візит', 'Walk through the visit'))}</h2>
      <div className="stack">
        {steps.map((step) => {
          const on = done.includes(step.id)
          return (
            <button key={step.id} type="button" className={on ? 'check on' : 'check'} aria-pressed={on} onClick={() => toggle(step.id)}>
              <span className="box">{on && <Icon name="check" size={16} />}</span>
              <span>
                <strong>{tx(step.title)}</strong>
                <span>{tx(step.text)}</span>
              </span>
            </button>
          )
        })}
      </div>
      {done.length === steps.length && <p className="status">{tx(l('Маршрут першого візиту пройдено.', 'You have walked through the first visit.'))}</p>}
      <button
        type="button"
        className="btn ghost"
        onClick={() => {
          setDone([])
          saveVisit(club.id, [])
        }}
      >
        {tx(l('Скинути позначки', 'Clear ticks'))}
      </button>
      <Link className="link-quiet" to="/tour">{tx(l('Відкрити карту клубу', 'Open the club map'))}</Link>
    </div>
  )
}
