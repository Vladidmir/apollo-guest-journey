import { hasZone } from '../content/clubs'
import { rules } from '../content/rules'
import { useApp } from '../state'
import { useHashScroll, useTitle, useTrack } from '../components/Ui'
import { l } from '../types'

export function RulesPage() {
  const { tx, club } = useApp()
  useTitle(tx(l('Правила клубу', 'Club rules')))
  useTrack('rules')
  useHashScroll()

  return (
    <div className="page">
      <h1>{tx(l('Правила клубу', 'Club rules'))}</h1>
      <p className="lead">{tx(l('Коротко і по справі. Юридичну редакцію затверджує адміністрація, тут — гостьова пам’ятка.', 'Short and practical. The administration approves the legal text. This is the guest note.'))}</p>
      {rules.map((block) => {
        if (block.zoneId && !hasZone(club.id, block.zoneId)) {
          return (
            <section key={block.id} id={block.id} className="note">
              <h2>{tx(block.title)}</h2>
              <p>{tx(l('У цьому клубі такої зали немає, тож окремі правила до неї не застосовуються.', 'This club has no such studio, so those rules do not apply.'))}</p>
            </section>
          )
        }
        return (
          <section key={block.id} id={block.id} className="stack">
            <h2>{tx(block.title)}</h2>
            <ul className="mistakes">
              {block.items.map((item) => (
                <li key={item.uk}>{tx(item)}</li>
              ))}
            </ul>
          </section>
        )
      })}
      {hasZone(club.id, 'medkit') && (
        <p className="note">{tx(l('Аптечка позначена на карті біля рецепції. Її відкриває працівник. Вона не замінює виклик 103 або 112.', 'The first-aid kit is marked on the map by reception. Staff open it. It does not replace a call to 103 or 112.'))}</p>
      )}
    </div>
  )
}
