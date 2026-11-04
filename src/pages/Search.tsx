import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { useTitle, useTrack } from '../components/Ui'
import { searchAll, type SearchHit } from '../content/select'
import { useApp } from '../state'
import { l } from '../types'

const hints = [
  l('Фен', 'Dryer'),
  l('Шафка', 'Locker'),
  l('Вода', 'Water'),
  l('Турнікет', 'Turnstile'),
  l('Вендинг', 'Vending'),
  l('Тренер', 'Trainer'),
  l('Wi-Fi', 'Wi-Fi'),
]

type Rec = {
  lang: string
  onresult: ((event: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null
  onerror: (() => void) | null
  start: () => void
}

function speechCtor(): (new () => Rec) | null {
  const host = window as unknown as {
    SpeechRecognition?: new () => Rec
    webkitSpeechRecognition?: new () => Rec
  }
  return host.SpeechRecognition ?? host.webkitSpeechRecognition ?? null
}

const kindLabel = {
  zone: l('Зона', 'Area'),
  guide: l('Інструкція', 'Guide'),
  situation: l('Ситуація', 'Situation'),
  rule: l('Правило', 'Rule'),
  product: l('Товар', 'Product'),
  training: l('Тренування', 'Training'),
}

export function SearchPage() {
  const { tx, club, lang } = useApp()
  useTitle(tx(l('Пошук', 'Search')))
  useTrack('search')
  const [query, setQuery] = useState('')
  const [listening, setListening] = useState(false)
  const [voiceNote, setVoiceNote] = useState('')
  const hits: SearchHit[] = searchAll(club, query, lang)

  useEffect(() => {
    setVoiceNote('')
  }, [lang])

  function listen() {
    const Ctor = speechCtor()
    if (!Ctor) {
      setVoiceNote(tx(l('Голосовий пошук недоступний у цьому браузері.', 'Voice search is not available in this browser.')))
      return
    }
    const rec = new Ctor()
    rec.lang = lang === 'uk' ? 'uk-UA' : 'en-US'
    rec.onresult = (event) => {
      const text = event.results[0]?.[0]?.transcript ?? ''
      setQuery(text)
      setListening(false)
    }
    rec.onerror = () => {
      setListening(false)
      setVoiceNote(tx(l('Не вдалося розпізнати голос. Спробуй написати запит.', 'Voice was not recognized. Try typing the question.')))
    }
    setListening(true)
    rec.start()
  }

  return (
    <div className="page">
      <h1>{tx(l('Знайти в клубі', 'Find it in the club'))}</h1>
      <p className="lead">{tx(l('Наприклад: де фен, не відкривається шафка, вода.', 'Try: where is the dryer, locker will not open, water.'))}</p>
      <div className="search-row">
        <input
          className="input"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={tx(l('Що шукаєш?', 'What are you looking for?'))}
          aria-label={tx(l('Пошук', 'Search'))}
        />
        <button type="button" className={listening ? 'icon-btn mic on' : 'icon-btn'} onClick={listen} aria-pressed={listening} aria-label={tx(l('Голосовий пошук', 'Voice search'))}>
          <Icon name="mic" />
        </button>
      </div>
      {voiceNote && <p className="muted">{voiceNote}</p>}
      <div className="chips">
        {hints.map((hint) => (
          <button key={hint.uk} type="button" className="chip" onClick={() => setQuery(tx(hint))}>
            {tx(hint)}
          </button>
        ))}
      </div>
      <div className="stack">
        {query.trim().length >= 2 && hits.length === 0 && <p className="empty">{tx(l('Немає прямої відповіді. Спробуй ситуацію або запитай рецепцію.', 'No direct answer. Try a situation, or ask reception.'))}</p>}
        {hits.map((hit) => (
          <Link key={hit.to + hit.title} className="result" to={hit.to}>
            <small>{tx(kindLabel[hit.kind])}</small>
            <strong>{hit.title}</strong>
            <span className="muted">{hit.text}</span>
          </Link>
        ))}
      </div>
      {query.trim().length >= 2 && hits.length === 0 && (
        <Link className="btn ghost" to="/help">{tx(l('Написати рецепції', 'Write to reception'))}</Link>
      )}
    </div>
  )
}
