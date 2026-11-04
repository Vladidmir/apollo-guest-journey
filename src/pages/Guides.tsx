import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { HelpButton, PhotoSlot, Rating, Steps, Storyboard, useTitle, useTrack } from '../components/Ui'
import { guidePhotos } from '../content/media'
import { getGuide, getGuides } from '../content/select'
import { track } from '../lib/storage'
import { useApp } from '../state'
import { l } from '../types'

export function GuidesPage() {
  const { tx, club } = useApp()
  useTitle(tx(l('Як користуватися', 'How to use it')))
  useTrack('guides')
  const guides = getGuides(club)

  return (
    <div className="page">
      <h1>{tx(l('Як користуватися клубом', 'How to use the club'))}</h1>
      <p className="lead">
        Apollo {club.code}. {tx(l('Інструкції під обладнання саме цієї локації.', 'Guides match the equipment in this location.'))}
      </p>
      <div className="stack">
        {guides.map((guide) => {
          const thumb = guidePhotos(club, guide.id)[0]
          return (
            <Link key={guide.id} to={guide.to ?? `/guides/${guide.id}`} className="card">
              {thumb ? (
                <span className="card-thumb">
                  <img src={thumb.src} alt="" />
                </span>
              ) : (
                <span className="card-icon"><Icon name={guide.icon} /></span>
              )}
              <span>
                <span className="card-title">{tx(guide.title)}</span>
                <span className="card-text">{tx(guide.summary)}</span>
              </span>
              <Icon name="chevron" className="chev" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export function GuidePage() {
  const { id = '' } = useParams()
  const { tx, club } = useApp()
  const guide = getGuide(club, id)
  useTitle(guide ? tx(guide.title) : tx(l('Інструкція', 'Guide')))
  useTrack(guide ? `guide:${guide.id}` : 'guide:missing')

  useEffect(() => {
    const current = getGuide(club, id)
    if (!current || current.to) return
    const nodes = document.querySelectorAll('[data-step]')
    let max = 0
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          max = Math.max(max, Number((entry.target as HTMLElement).dataset.step ?? 0))
        }
      },
      { threshold: 0.6 },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => {
      observer.disconnect()
      track({ type: 'drop', id: `guide:${current.id}`, step: max })
    }
  }, [club, id])

  if (guide?.to) return <Navigate to={guide.to} replace />

  if (!guide) {
    return (
      <div className="page">
        <h1>{tx(l('Інструкція недоступна', 'Guide unavailable'))}</h1>
        <Link to="/guides">{tx(l('Усі інструкції', 'All guides'))}</Link>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="back-row">
        <Link to="/guides" className="icon-btn" aria-label={tx(l('Назад', 'Back'))}>
          <Icon name="chevron" className="back-icon" />
        </Link>
        <h1>{tx(guide.title)}</h1>
      </div>
      <p className="lead">{tx(guide.summary)}</p>
      <PhotoSlot
        icon={guide.icon}
        shots={guidePhotos(club, guide.id)}
        text={l('Фото реального обладнання клуб додасть у матеріали.', 'The club will add a photo of the real equipment.')}
      />
      <Storyboard steps={guide.steps} seconds={guide.seconds} />
      <h2>{tx(l('Покроково', 'Step by step'))}</h2>
      <Steps items={guide.steps} />
      <h2>{tx(l('Типові помилки', 'Typical mistakes'))}</h2>
      <ul className="mistakes">
        {guide.mistakes.map((item) => (
          <li key={item.uk}>{tx(item)}</li>
        ))}
      </ul>
      <Rating id={guide.id} />
      <HelpButton to={guide.helpTo ?? `/help?about=${guide.id}`} id={guide.id} />
    </div>
  )
}
