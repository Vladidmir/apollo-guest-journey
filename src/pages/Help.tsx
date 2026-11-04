import { useMemo, useState, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useHashScroll, useTitle, useTrack } from '../components/Ui'
import { getGuide } from '../content/guides'
import { getSituation, placedZones } from '../content/select'
import { loadReports, saveReport, type Report } from '../lib/storage'
import { useApp } from '../state'
import { l } from '../types'

const faq = [
  {
    q: l('Чи треба реєструватися?', 'Do I need to register?'),
    a: l('Ні. Інструкції відкриті без акаунта.', 'No. The guides are open without an account.'),
  },
  {
    q: l('Застосунок замінює рецепцію?', 'Does the app replace reception?'),
    a: l('Ні. Типові кроки можна пройти самому. Усе, що вимагає рук працівника, так і позначено.', 'No. Typical steps can be done alone. Anything that needs a staff member is marked that way.'),
  },
  {
    q: l('Чому в іншому клубі інша шафка?', 'Why is the locker guide different in another club?'),
    a: l('Бо замки різні. QR біля шафки відкриває інструкцію саме того типу.', 'Because the locks differ. A QR code by the locker opens the guide for that type.'),
  },
  {
    q: l('Де пароль від Wi-Fi?', 'Where is the Wi-Fi password?'),
    a: l('На табличці рецепції і в роздягальні. У застосунку є лише назва мережі клубу.', 'On the sign at reception and in the locker room. The app only shows the club network name.'),
  },
  {
    q: l('Що робити, якщо людині зле?', 'What if someone feels unwell?'),
    a: l('Зупинити тренування, покликати працівника і за потреби зателефонувати 103 або 112.', 'Stop training, call a staff member and, if needed, phone 103 or 112.'),
  },
  {
    q: l('Де Accuniq і каса?', 'Where are Accuniq and checkout?'),
    a: l(
      'У 025 каса самообслуговування і «Підживинки» біля рецепції. Accuniq — біля входу в тренувальну зону, на карті є окрема позначка.',
      'In 025 the self-checkout and refreshments sit by reception. Accuniq is by the training-floor entrance and has its own map pin.',
    ),
  },
]

export function HelpPage() {
  const { tx, club, lang } = useApp()
  const [params] = useSearchParams()
  useTitle(tx(l('Допомога', 'Help')))
  useTrack('help')
  useHashScroll()
  const about = params.get('about') ?? ''
  const aboutTitle = useMemo(() => {
    if (!about) return ''
    return getGuide(club, about)?.title[lang] ?? getSituation(about)?.title[lang] ?? about
  }, [about, club, lang])
  const zones = placedZones(club.id)
  const [reports, setReports] = useState<Report[]>(() => loadReports().filter((item) => item.clubId === club.id))
  const [status, setStatus] = useState('')

  function submit(kind: Report['kind'], event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const text = String(data.get('text') ?? '').trim()
    if (text.length < 4) return
    const saved = saveReport({
      kind,
      clubId: club.id,
      place: String(data.get('place') ?? ''),
      text,
      contact: String(data.get('contact') ?? '').trim(),
      about: aboutTitle,
    })
    setReports((items) => [saved, ...items])
    setStatus(tx(l('Звернення збережено на цьому телефоні. У робочій версії воно піде в Service Desk.', 'Saved on this phone. In the live version it goes to the service desk.')))
    event.currentTarget.reset()
  }

  return (
    <div className="page">
      <h1>{tx(l('Допомога та контакти', 'Help and contacts'))}</h1>
      {aboutTitle && (
        <p className="note">
          {tx(l('Стосовно матеріалу:', 'About this guide:'))} {aboutTitle}
        </p>
      )}
      <section id="emergency" className="banner emergency">
        <strong>{tx(l('Екстрена допомога', 'Emergency'))}</strong>
        <p>
          {tx(l('Якщо людині зле або є травма: поклич працівника клубу і телефонуй 103 або 112. Адреса для виклику:', 'If someone is unwell or injured: call club staff and phone 103 or 112. Address for the call:'))}{' '}
          {tx(club.address)}
        </p>
        <p>
          <a className="link-quiet" href="tel:103">103</a>
          {' · '}
          <a className="link-quiet" href="tel:112">112</a>
        </p>
      </section>
      <article className="note">
        <h2>{tx(l('Рецепція клубу', 'Club reception'))}</h2>
        <p>{tx(club.title)} · {tx(club.mall)}</p>
        <p>{tx(club.address)}</p>
        <p>{tx(club.hours)}</p>
        <p className="muted">{tx(club.hoursStaff)}</p>
        <p>{tx(club.findHint)}</p>
        <div className="row-actions">
          <a className="btn primary" href={club.siteUrl} target="_blank" rel="noreferrer">
            {tx(l('Сторінка клубу', 'Club page'))}
          </a>
          <a className="btn ghost" href={club.mapsUrl} target="_blank" rel="noreferrer">
            {tx(l('Google Maps', 'Google Maps'))}
          </a>
        </div>
      </article>
      <article className="note">
        <h2>{tx(l('Підтримка Гʼюстон', 'Houston support'))}</h2>
        <p>
          {tx(
            l(
              'Мережева підтримка гостей APOLLO NEXT. Питання підписки, доступу і застосунку — туди. У залі спочатку шукай координатора на рецепції.',
              'Network guest support for APOLLO NEXT. Membership, access and app questions go there. On the floor, start with a coordinator at reception.',
            ),
          )}
        </p>
        <a className="btn primary" href={club.supportUrl} target="_blank" rel="noreferrer">
          {tx(l('Відкрити Гʼюстон', 'Open Houston'))}
        </a>
      </article>
      <article className="note">
        <h2>{tx(l('360° тур клубу', '360° club tour'))}</h2>
        <p>
          {tx(
            l(
              'Офіційний віртуальний тур — на сторінці клубу. Панорами Google Maps можна відкрити за посиланням, але ми не копіюємо їх відео в застосунок: це матеріали Google і їх краще дивитися там.',
              'The official virtual tour is on the club page. Google Maps panoramas can be opened via the link, but we do not copy that video into the app: it belongs to Google and is best viewed there.',
            ),
          )}
        </p>
        <div className="row-actions">
          <a className="btn primary" href={club.tour360Url} target="_blank" rel="noreferrer">
            {tx(l('Тур на apollo.online', 'Tour on apollo.online'))}
          </a>
          <a className="btn ghost" href={club.mapsUrl} target="_blank" rel="noreferrer">
            {tx(l('Панорами в Maps', 'Panoramas in Maps'))}
          </a>
        </div>
      </article>
      <article className="note">
        <h2>{tx(l('Адміністрація клубу', 'Club administration'))}</h2>
        <p>{tx(l('Питання абонемента, загублених речей і несправностей приймає рецепція цієї локації. Застосунок не створює окремий чат із директором.', 'Membership questions, lost property and faults go to this location’s reception. The app does not open a private chat with a director.'))}</p>
        <p>{tx(club.trainer)}</p>
      </article>
      <h2>{tx(l('Часті запитання', 'Common questions'))}</h2>
      {faq.map((item) => (
        <details key={item.q.uk} className="faq">
          <summary>{tx(item.q)}</summary>
          <p>{tx(item.a)}</p>
        </details>
      ))}
      <h2>{tx(l('Повідомити про несправність', 'Report a fault'))}</h2>
      <form className="stack" onSubmit={(event) => submit('fault', event)}>
        <label className="field">
          <span>{tx(l('Де саме', 'Where'))}</span>
          <select className="select" name="place" defaultValue={zones[0]?.id ?? 'other'}>
            {zones.map((zone) => (
              <option key={zone.id} value={tx(zone.title)}>{tx(zone.title)}</option>
            ))}
            <option value={tx(l('Інше', 'Other'))}>{tx(l('Інше', 'Other'))}</option>
          </select>
        </label>
        <label className="field">
          <span>{tx(l('Що сталося', 'What happened'))}</span>
          <textarea className="textarea" name="text" required minLength={4} placeholder={tx(l('Наприклад: бігова доріжка біля вікна не реагує на старт', 'For example: the treadmill by the window ignores start'))} />
        </label>
        <label className="field">
          <span>{tx(l('Телефон, якщо треба відповідь', 'Phone, if you want a reply'))}</span>
          <input className="input" name="contact" inputMode="tel" autoComplete="tel" />
        </label>
        <button className="btn primary" type="submit">{tx(l('Зберегти звернення', 'Save the report'))}</button>
      </form>
      <h2>{tx(l('Повідомити про загублену річ', 'Report a lost item'))}</h2>
      <form className="stack" onSubmit={(event) => submit('lost', event)}>
        <label className="field">
          <span>{tx(l('Де востаннє бачив', 'Where you last saw it'))}</span>
          <input className="input" name="place" required />
        </label>
        <label className="field">
          <span>{tx(l('Що загубив', 'What you lost'))}</span>
          <textarea className="textarea" name="text" required minLength={4} />
        </label>
        <label className="field">
          <span>{tx(l('Як з тобою зв’язатися', 'How to reach you'))}</span>
          <input className="input" name="contact" inputMode="tel" autoComplete="tel" />
        </label>
        <button className="btn primary" type="submit">{tx(l('Передати на рецепцію', 'Send to reception'))}</button>
      </form>
      <p className="foot-note">{tx(l('Фото до звернення з’явиться разом із передачею в Service Desk. Зараз це демонстрація, запис не залишає телефон.', 'A photo attachment arrives with the service-desk handoff. This is a demo: the note stays on the phone.'))}</p>
      {status && <p className="status" role="status">{status}</p>}
      {reports.length > 0 && (
        <section className="stack">
          <h2>{tx(l('Звернення з цього телефона', 'Reports from this phone'))}</h2>
          {reports.map((item) => (
            <article key={item.id} className="report">
              <strong>{item.kind === 'fault' ? tx(l('Несправність', 'Fault')) : tx(l('Загублена річ', 'Lost item'))}</strong>
              <p>{item.place}</p>
              <p>{item.text}</p>
              <p className="muted">{new Date(item.ts).toLocaleString(lang === 'uk' ? 'uk-UA' : 'en-GB')}</p>
            </article>
          ))}
        </section>
      )}
      <Link className="link-quiet" to="/stats">{tx(l('Статистика на цьому телефоні', 'Stats on this phone'))}</Link>
      <Link className="link-quiet" to="/situations/unwell">{tx(l('Якщо стало зле під час тренування', 'If you feel unwell while training'))}</Link>
    </div>
  )
}
