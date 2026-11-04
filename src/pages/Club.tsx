import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import QRCode from 'qrcode'
import { clubs, layoutOf, lockLabel } from '../content/clubs'
import { qrLinks } from '../content/qr'
import { useApp } from '../state'
import { useTitle } from '../components/Ui'
import { l } from '../types'

function QrImage({ value }: { value: string }) {
  const [src, setSrc] = useState('')
  useEffect(() => {
    let live = true
    QRCode.toDataURL(value, {
      margin: 1,
      width: 280,
      color: { dark: '#14120c', light: '#fff8e7' },
    })
      .then((url) => {
        if (live) setSrc(url)
      })
      .catch(() => {
        if (live) setSrc('')
      })
    return () => {
      live = false
    }
  }, [value])
  if (!src) return <div className="qr-ph" />
  return <img src={src} alt="" width={112} height={112} />
}

export function ClubPage() {
  const { tx, club, picked, setClubId } = useApp()
  const navigate = useNavigate()
  useTitle(tx(l('Обери клуб', 'Choose a club')))

  return (
    <div className="page">
      <h1>{tx(l('Обери клуб', 'Choose a club'))}</h1>
      <p className="lead">
        {tx(
          l(
            'Один застосунок на всю мережу. QR на рецепції, біля шафок або вендингу відкриває вже цей клуб і потрібну інструкцію.',
            'One app for the whole network. A QR code at reception, by the lockers or on a vending machine opens this club and the right guide.',
          ),
        )}
      </p>
      <div className="stack">
        {clubs.map((item) => (
          <button
            key={item.id}
            type="button"
            className={picked && item.id === club.id ? 'club-card on' : 'club-card'}
            onClick={() => {
              setClubId(item.id)
              navigate('/')
            }}
          >
            <strong>{tx(item.title)}</strong>
            <span>
              {tx(item.city)} · {tx(item.mall)}
            </span>
            <span className="muted">{tx(item.address)}</span>
            <span className="muted">{tx(item.hours)}</span>
            <span className="tag">{tx(lockLabel(item.lockType))}</span>
            <span className="muted">
              {layoutOf(item.id).length} {tx(l('зон на карті', 'areas on the map'))}
              {item.hasAccuniq ? ` · Accuniq` : ''}
              {item.hasKasa ? ` · ${tx(l('каса', 'checkout'))}` : ''}
            </span>
          </button>
        ))}
      </div>
      <h2>{tx(l('Демонстраційні QR', 'Demo QR codes'))}</h2>
      <p className="muted">{tx(l('Наведи камеру або відкрий посилання. Клуб перемкнеться сам.', 'Point a camera or open the link. The club switches on its own.'))}</p>
      <div className="qr-grid">
        {qrLinks.map((item) => {
          const url = `${window.location.origin}${import.meta.env.BASE_URL}q/${item.code}`
          return (
            <article key={item.code} className="qr-card">
              <QrImage value={url} />
              <div className="stack">
                <strong>{tx(item.title)}</strong>
                <span className="muted">{tx(item.place)}</span>
                <a href={url}>{item.code}</a>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
