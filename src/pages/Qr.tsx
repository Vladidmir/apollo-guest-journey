import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { findQr } from '../content/qr'
import { useApp } from '../state'
import { l } from '../types'

export function QrPage() {
  const { code } = useParams()
  const hit = findQr(code)
  const { setClubId, tx } = useApp()
  const navigate = useNavigate()

  useEffect(() => {
    if (!hit) return
    setClubId(hit.clubId)
    navigate(hit.to, { replace: true })
  }, [hit, navigate, setClubId])

  if (!hit) {
    return (
      <div className="page">
        <h1>{tx(l('QR не розпізнано', 'QR not recognized'))}</h1>
        <p className="lead">{tx(l('Код не з мережі Apollo або вже недійсний. Обери клуб вручну.', 'This code is not from the Apollo network, or it is no longer valid. Choose a club manually.'))}</p>
        <Link className="btn primary" to="/club">{tx(l('Обрати клуб', 'Choose a club'))}</Link>
      </div>
    )
  }

  return <p className="page">{tx(l('Відкриваємо інструкцію…', 'Opening the guide…'))}</p>
}
