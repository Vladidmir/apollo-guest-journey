import { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { HelpButton, LevelBanner, Steps, useTitle, useTrack } from '../components/Ui'
import { getSituation, situationAvailable, situationsFor } from '../content/select'
import { useApp } from '../state'
import { l, type Branch, type SituationGroup } from '../types'

const groupOrder: SituationGroup[] = ['things', 'pay', 'access', 'gear', 'health', 'place']

const groupLabel: Record<SituationGroup, ReturnType<typeof l>> = {
  things: l('Особисті речі', 'Personal belongings'),
  pay: l('Оплата і покупки', 'Payments and purchases'),
  access: l('Доступ у клуб', 'Club access'),
  gear: l('Обладнання', 'Equipment'),
  health: l('Самопочуття і безпека', 'How you feel and safety'),
  place: l('Навігація', 'Finding your way'),
}

export function SituationsPage() {
  const { tx, club } = useApp()
  useTitle(tx(l('Потрібна допомога', 'Need help')))
  useTrack('situations')
  const items = situationsFor(club)
  const featured = items.filter((item) => item.featured)
  const rest = items.filter((item) => !item.featured)

  return (
    <div className="page">
      <h1>{tx(l('З якою ситуацією ти зіткнувся?', 'What happened?'))}</h1>
      <p className="lead">{tx(l('Обери випадок і отримай конкретні кроки. Якщо потрібна людина, застосунок скаже про це одразу.', 'Pick a case and get concrete steps. If a person is required, the app says so immediately.'))}</p>
      <div className="stack">
        {featured.map((item) => (
          <Link key={item.id} to={`/situations/${item.id}`} className="card">
            <span className="card-icon"><Icon name={item.icon} /></span>
            <span>
              <span className="card-title">{tx(item.title)}</span>
              <span className="card-text">{tx(item.summary)}</span>
            </span>
            <Icon name="chevron" className="chev" />
          </Link>
        ))}
      </div>
      <h2>{tx(l('Інші ситуації', 'Other situations'))}</h2>
      {groupOrder.map((group) => {
        const list = rest.filter((item) => item.group === group)
        if (!list.length) return null
        return (
          <section key={group} className="stack">
            <h3>{tx(groupLabel[group])}</h3>
            {list.map((item) => (
              <Link key={item.id} to={`/situations/${item.id}`} className="card">
                <span className="card-icon"><Icon name={item.icon} /></span>
                <span>
                  <span className="card-title">{tx(item.title)}</span>
                  <span className="card-text">{tx(item.summary)}</span>
                </span>
                <Icon name="chevron" className="chev" />
              </Link>
            ))}
          </section>
        )
      })}
      <Link className="link-quiet" to="/help">{tx(l('Контакти рецепції та екстрена допомога', 'Reception contacts and emergency help'))}</Link>
    </div>
  )
}

export function SituationPage() {
  const { id = '' } = useParams()
  const [params] = useSearchParams()
  const { tx, club } = useApp()
  const situation = getSituation(id)
  useTitle(situation ? tx(situation.title) : tx(l('Ситуація', 'Situation')))
  useTrack(situation ? `situation:${situation.id}` : 'situation:missing')
  const branches = (situation?.branches ?? []).filter((item) => !item.lockType || item.lockType === club.lockType)
  const queryBranch = params.get('branch')
  const [branchId, setBranchId] = useState<string | null>(queryBranch)

  useEffect(() => {
    setBranchId(queryBranch)
  }, [id, queryBranch])

  if (!situation) {
    return (
      <div className="page">
        <h1>{tx(l('Такої ситуації немає', 'No such situation'))}</h1>
        <Link to="/situations">{tx(l('Усі ситуації', 'All situations'))}</Link>
      </div>
    )
  }

  if (!situationAvailable(club, situation)) {
    return (
      <div className="page">
        <h1>{tx(situation.title)}</h1>
        <div className="banner staff">
          <strong>{tx(l('У цьому клубі це не актуально', 'This does not apply in this club'))}</strong>
        </div>
        <Link className="btn primary" to="/situations">{tx(l('Інші ситуації', 'Other situations'))}</Link>
      </div>
    )
  }

  const branch: Branch | undefined = branches.find((item) => item.id === branchId)
  const level = branch?.level ?? situation.level
  const steps = branch?.steps ?? situation.steps ?? []
  const say = branch?.say ?? situation.say
  const prepare = branch?.prepare ?? situation.prepare

  return (
    <div className="page">
      <div className="back-row">
        <Link to="/situations" className="icon-btn" aria-label={tx(l('Назад', 'Back'))}>
          <Icon name="chevron" className="back-icon" />
        </Link>
        <h1>{tx(situation.title)}</h1>
      </div>
      <LevelBanner level={situation.level === 'self' ? level : situation.level} />
      {branches.length > 0 && (
        <div className="stack">
          <h2>{tx(l('Уточни, що сталося', 'Say which one it is'))}</h2>
          {branches.map((item) => (
            <button key={item.id} type="button" className={item.id === branchId ? 'branch on' : 'branch'} onClick={() => setBranchId(item.id)}>
              {tx(item.label)}
            </button>
          ))}
        </div>
      )}
      {branches.length > 0 && !branch ? (
        <p className="muted">{tx(l('Після вибору з’явиться алгоритм саме для цього випадку.', 'After you choose, the steps for that case appear.'))}</p>
      ) : (
        <>
          <h2>
            {level === 'emergency'
              ? tx(l('Що зробити негайно', 'What to do immediately'))
              : level === 'staff'
                ? tx(l('Як діяти разом із клубом', 'What to do with the club'))
                : tx(l('Що робити', 'What to do'))}
          </h2>
          <Steps items={steps} />
          {say && (
            <aside className="note">
              <h3>{tx(l('Що сказати на рецепції', 'What to say at reception'))}</h3>
              <p>{tx(say)}</p>
            </aside>
          )}
          {prepare && (
            <aside className="note">
              <h3>{tx(l('Що мати під рукою', 'What to have ready'))}</h3>
              <p>{tx(prepare)}</p>
            </aside>
          )}
        </>
      )}
      <p className="foot-note">{tx(l('Остаточний порядок у нестандартному випадку підтверджує адміністрація клубу.', 'In an unusual case, the club administration confirms the final procedure.'))}</p>
      <HelpButton to={level === 'emergency' ? '/help#emergency' : `/help?about=${situation.id}`} id={situation.id} emergency={level === 'emergency'} />
    </div>
  )
}
