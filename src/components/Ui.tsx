import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import type { MediaShot } from '../content/media'
import { loadRate, saveRate, track } from '../lib/storage'
import { useApp } from '../state'
import type { IconName, L, Level, Step } from '../types'
import { l } from '../types'
import { Icon } from './Icon'

export function useTitle(title: string) {
  useEffect(() => {
    document.title = `${title} · Apollo`
  }, [title])
}

export function useTrack(id: string) {
  useEffect(() => {
    track({ type: 'view', id })
  }, [id])
}

export function useHashScroll() {
  const { hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    const node = document.getElementById(hash.slice(1))
    requestAnimationFrame(() => node?.scrollIntoView({ block: 'start' }))
  }, [hash])
}

export function LevelBanner({ level }: { level: Level }) {
  const { tx } = useApp()
  if (level === 'self') return null
  if (level === 'emergency') {
    return (
      <div className="banner emergency" role="status">
        <strong>{tx(l('Потрібна людина і, за потреби, швидка', 'You need a person and, if necessary, an ambulance'))}</strong>
        <p>
          {tx(
            l(
              'Застосунок лише підказує перші кроки. Він не ставить діагноз і не замінює працівника клубу чи медиків.',
              'The app only suggests first steps. It does not diagnose and does not replace club staff or medics.',
            ),
          )}
        </p>
      </div>
    )
  }
  return (
    <div className="banner staff" role="status">
      <strong>{tx(l('Тут потрібен працівник клубу', 'This needs a club staff member'))}</strong>
      <p>
        {tx(
          l(
            'Не ремонтуй обладнання і не застосовуй силу. Кроки нижче — що сказати і що безпечно перевірити, а не спосіб закрити питання самому.',
            'Do not repair equipment or use force. The steps below are what to say and what is safe to check, not a way to close the issue alone.',
          ),
        )}
      </p>
    </div>
  )
}

export function Steps({ items }: { items: Step[] }) {
  const { tx } = useApp()
  return (
    <ol className="steps">
      {items.map((item, index) => (
        <li key={item.title.uk} className="step" data-step={index + 1}>
          <span className="num">{index + 1}</span>
          <span>
            <strong>{tx(item.title)}</strong>
            <span>{tx(item.text)}</span>
          </span>
        </li>
      ))}
    </ol>
  )
}

export function Storyboard({ steps, seconds }: { steps: Step[]; seconds: number }) {
  const { tx } = useApp()
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const current = steps[index]

  useEffect(() => {
    if (!playing) return
    const delay = Math.max(2200, Math.round((seconds * 1000) / Math.max(steps.length, 1)))
    const timer = window.setInterval(() => {
      setIndex((value) => {
        if (value >= steps.length - 1) {
          setPlaying(false)
          return value
        }
        return value + 1
      })
    }, delay)
    return () => window.clearInterval(timer)
  }, [playing, seconds, steps.length])

  if (!current) return null

  return (
    <div className="player">
      <div className="player-top">
        <span>{tx(l('Сценарій замість відео', 'Storyboard instead of video'))}</span>
        <span>≈ {seconds} {tx(l('с', 'sec'))}</span>
      </div>
      <div className="player-frame">
        <p className="kicker">
          {index + 1} / {steps.length}
        </p>
        <h2>{tx(current.title)}</h2>
        <p>{tx(current.text)}</p>
        <div className="meter" aria-hidden="true">
          <span style={{ width: `${((index + 1) / steps.length) * 100}%` }} />
        </div>
      </div>
      <div className="row-actions">
        <button
          type="button"
          className="btn primary"
          onClick={() => {
            if (index >= steps.length - 1) setIndex(0)
            setPlaying((value) => !value)
          }}
        >
          <Icon name={playing ? 'pause' : 'play'} size={16} />
          {playing ? tx(l('Пауза', 'Pause')) : tx(l('Дивитися кроки', 'Play steps'))}
        </button>
      </div>
      <p className="muted">
        {tx(
          l(
            'Живе відео 15–60 секунд клуб додасть у матеріали. Зараз ті самі кроки йдуть як короткий ролик.',
            'The club will add a real 15–60 second video later. For now the same steps play as a short reel.',
          ),
        )}
      </p>
    </div>
  )
}

export function Rating({ id }: { id: string }) {
  const { tx } = useApp()
  const [value, setValue] = useState<'yes' | 'no' | null>(() => loadRate(id))

  return (
    <div className="rate">
      <p>
        <Icon name="star" size={16} /> {tx(l('Чи допомогло?', 'Did this help?'))}
      </p>
      <div className="row-actions">
        <button
          type="button"
          className={value === 'yes' ? 'btn primary' : 'btn ghost'}
          onClick={() => {
            saveRate(id, 'yes')
            setValue('yes')
          }}
        >
          {tx(l('Так', 'Yes'))}
        </button>
        <button
          type="button"
          className={value === 'no' ? 'btn primary' : 'btn ghost'}
          onClick={() => {
            saveRate(id, 'no')
            setValue('no')
          }}
        >
          {tx(l('Ні', 'No'))}
        </button>
      </div>
      {value === 'yes' && <p className="muted">{tx(l('Дякуємо. Оцінка лишається на цьому телефоні.', 'Thank you. The rating stays on this phone.'))}</p>}
      {value === 'no' && (
        <Link className="btn ghost block" to={`/help?about=${id}`}>
          {tx(l('Розкажи, що пішло не так', 'Tell us what failed'))}
        </Link>
      )}
    </div>
  )
}

export function HelpButton({ to, id, emergency = false }: { to: string; id: string; emergency?: boolean }) {
  const { tx } = useApp()
  return (
    <div className="sticky-cta">
      <Link
        className={emergency ? 'btn danger block' : 'btn primary block'}
        to={to}
        onClick={() => track({ type: 'help', id })}
      >
        {emergency
          ? tx(l('Контакти та швидка', 'Contacts and emergency'))
          : tx(l('Не вдалося? Потрібна допомога', 'It failed? I need help'))}
      </Link>
    </div>
  )
}

export function PhotoGallery({
  shots,
  icon,
  empty,
}: {
  shots: MediaShot[]
  icon?: IconName
  empty?: L
}) {
  const { tx } = useApp()
  const [index, setIndex] = useState(0)
  const current = shots[index]

  useEffect(() => {
    setIndex(0)
  }, [shots])

  if (!current) {
    return (
      <div className="photo">
        {icon && (
          <span className="card-icon">
            <Icon name={icon} />
          </span>
        )}
        <span>
          {tx(
            empty ??
              l(
                'Фото цієї зони клуб додасть після зйомки локації.',
                'The club will add a photo of this area after the location shoot.',
              ),
          )}
        </span>
      </div>
    )
  }

  return (
    <figure className="gallery">
      <div className="gallery-frame">
        <img src={current.src} alt={tx(current.alt)} loading="lazy" />
      </div>
      <figcaption>{tx(current.alt)}</figcaption>
      {shots.length > 1 && (
        <div className="gallery-dots" role="tablist" aria-label={tx(l('Фото', 'Photos'))}>
          {shots.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              className={i === index ? 'dot on' : 'dot'}
              aria-label={`${i + 1}`}
              aria-pressed={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </figure>
  )
}

export function PhotoSlot({
  icon,
  text,
  shots = [],
}: {
  icon: IconName
  text: L
  shots?: MediaShot[]
}) {
  const { tx } = useApp()
  if (shots.length) return <PhotoGallery shots={shots} icon={icon} empty={text} />
  return (
    <div className="photo">
      <span className="card-icon">
        <Icon name={icon} />
      </span>
      <span>{tx(text)}</span>
    </div>
  )
}
