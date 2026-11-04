import { Link, useParams } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { Steps, useTitle, useTrack } from '../components/Ui'
import {
  calorieExample,
  calorieModes,
  exerciseById,
  exercises,
  fiberNote,
  fibers,
  fullBodyPoints,
  hypertrophyNotes,
  machineHelp,
  machineMistakes,
  machineTunes,
  mealAdjust,
  meals,
  macros,
  nutritionFaq,
  nutritionGoals,
  planOrder,
  planSchedule,
  planVolumeNote,
  progression,
  recoveryNote,
  repBands,
  setupSteps,
  trainingDisclaimer,
  trainingSections,
} from '../content/training'
import { useApp } from '../state'
import { l } from '../types'

function BackLink({ to }: { to: string }) {
  const { tx } = useApp()
  return (
    <Link to={to} className="icon-btn" aria-label={tx(l('Назад', 'Back'))}>
      <Icon name="chevron" className="back-icon" />
    </Link>
  )
}

export function TrainingPage() {
  const { tx } = useApp()
  useTitle(tx(l('Тренування', 'Training')))
  useTrack('training')

  return (
    <div className="page">
      <h1>{tx(l('Тренування', 'Training'))}</h1>
      <p className="lead">
        {tx(
          l(
            'Full Body — основні групи м’язів за одне заняття. Так простіше повторювати базові рухи, освоювати обладнання і набирати силу без поділу на окремі дні для кожної групи.',
            'Full body trains the main muscle groups in one session. It is a simple way to repeat basic patterns, learn the equipment, and build general strength without a split day for every muscle group.',
          ),
        )}
      </p>
      <p className="note">{tx(trainingDisclaimer)}</p>
      <section className="stack">
        <h2>{tx(l('Навіщо так починати', 'Why start this way'))}</h2>
        <p>
          {tx(
            l(
              'Головна мета першого етапу — не максимальні ваги, а нервово-м’язова адаптація, стабільний корпус і правильна техніка.',
              'The first stage is not about maximal weights. It is neuromuscular adaptation, a stable torso, and sound technique.',
            ),
          )}
        </p>
        <ul className="mistakes">
          {fullBodyPoints.map((item) => (
            <li key={item.uk}>{tx(item)}</li>
          ))}
        </ul>
      </section>
      <div className="stack">
        {trainingSections.map((section) => (
          <Link key={section.to} to={section.to} className="card">
            <span className="card-icon">
              <Icon name={section.icon} />
            </span>
            <span>
              <span className="card-title">{tx(section.title)}</span>
              <span className="card-text">{tx(section.summary)}</span>
            </span>
            <Icon name="chevron" className="chev" />
          </Link>
        ))}
      </div>
    </div>
  )
}

export function TrainingPlanPage() {
  const { tx } = useApp()
  useTitle(tx(l('Моє перше тренування', 'My first workout')))
  useTrack('training:plan')

  return (
    <div className="page">
      <div className="back-row">
        <BackLink to="/training" />
        <h1>{tx(l('Моє перше тренування', 'My first workout'))}</h1>
      </div>
      <p className="lead">
        {tx(
          l(
            'Пропозиція для старту: 2 вправи на груди, 2 на спину, 2 на ноги, прес і гіперекстензія.',
            'A starter proposal: 2 chest exercises, 2 back, 2 legs, abs, and a back extension.',
          ),
        )}
      </p>
      <p className="note">{tx(planVolumeNote)}</p>
      <div className="stack">
        {exercises.map((item, index) => (
          <Link key={item.id} to={`/training/exercises/${item.id}`} className="card">
            <span className="card-icon">
              <Icon name="dumbbell" />
            </span>
            <span>
              <span className="card-title">
                {index + 1}. {tx(item.title)}
              </span>
              <span className="card-text">
                {tx(item.group)} · {tx(item.volume)}. {tx(item.purpose)}
              </span>
            </span>
            <Icon name="chevron" className="chev" />
          </Link>
        ))}
      </div>
      <section className="stack">
        <h2>{tx(l('Як складати заняття', 'How to organize a session'))}</h2>
        <p className="note">{tx(planSchedule)}</p>
        <p className="note">{tx(planOrder)}</p>
      </section>
      <section className="stack">
        <h2>{tx(l('Як прогресувати', 'How to progress'))}</h2>
        <Steps items={progression} />
      </section>
    </div>
  )
}

export function TrainingExercisePage() {
  const { id = '' } = useParams()
  const { tx } = useApp()
  const exercise = exerciseById(id)
  useTitle(exercise ? tx(exercise.title) : tx(l('Вправа', 'Exercise')))
  useTrack(exercise ? `training:exercise:${exercise.id}` : 'training:exercise:missing')

  if (!exercise) {
    return (
      <div className="page">
        <h1>{tx(l('Вправу не знайдено', 'Exercise not found'))}</h1>
        <Link to="/training/plan">{tx(l('До програми', 'Back to the plan'))}</Link>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="back-row">
        <BackLink to="/training/plan" />
        <h1>{tx(exercise.title)}</h1>
      </div>
      <p className="lead">
        {tx(exercise.group)} · {tx(exercise.volume)}
      </p>
      <p className="note">{tx(exercise.purpose)}</p>
      <section className="stack">
        <h2>{tx(l('Техніка', 'Technique'))}</h2>
        <p>{tx(exercise.technique)}</p>
      </section>
      <Link className="link-quiet" to="/training/machines">
        {tx(l('Як налаштувати тренажер', 'How to set up the machine'))}
      </Link>
    </div>
  )
}

export function TrainingMachinesPage() {
  const { tx } = useApp()
  useTitle(tx(l('Тренажери', 'Machines')))
  useTrack('training:machines')

  return (
    <div className="page">
      <div className="back-row">
        <BackLink to="/training" />
        <h1>{tx(l('Тренажери', 'Machines'))}</h1>
      </div>
      <p className="lead">
        {tx(
          l(
            'Один і той самий порядок для будь-якої машини: знайти, перевірити, налаштувати, спробувати легку вагу.',
            'The same order for any machine: find it, check it, set it, then try a light weight.',
          ),
        )}
      </p>
      <section className="stack">
        <h2>{tx(l('Як налаштувати', 'How to set it up'))}</h2>
        <Steps items={setupSteps} />
      </section>
      <section className="stack">
        <h2>{tx(l('Що крутити на якому тренажері', 'What to adjust on each machine'))}</h2>
        {machineTunes.map((item) => (
          <article key={item.id} className="note">
            <h3>{tx(item.name)}</h3>
            <p>{tx(item.adjust)}</p>
            <p>{tx(item.watch)}</p>
          </article>
        ))}
      </section>
      <section className="stack">
        <h2>{tx(l('Типові помилки', 'Typical mistakes'))}</h2>
        <ul className="mistakes">
          {machineMistakes.map((item) => (
            <li key={item.uk}>{tx(item)}</li>
          ))}
        </ul>
        <p className="note">{tx(machineHelp)}</p>
      </section>
    </div>
  )
}

export function TrainingRecoveryPage() {
  const { tx } = useApp()
  useTitle(tx(l('М’язи й відновлення', 'Muscles and recovery')))
  useTrack('training:recovery')

  return (
    <div className="page">
      <div className="back-row">
        <BackLink to="/training" />
        <h1>{tx(l('М’язи й відновлення', 'Muscles and recovery'))}</h1>
      </div>
      <p className="lead">
        {tx(
          l(
            'У побуті волокна ділять на «червоні» і «білі». Нижче — ближче до того, як їх описують у людини.',
            'Everyday language splits fibers into “red” and “white”. Below is closer to how they are described in people.',
          ),
        )}
      </p>
      <div className="stack">
        {fibers.map((item) => (
          <article key={item.name.uk} className="note">
            <h3>{tx(item.name)}</h3>
            <p>{tx(item.trait)}</p>
            <p>{tx(item.energy)}</p>
            <p>{tx(item.tasks)}</p>
          </article>
        ))}
      </div>
      <p className="note">{tx(fiberNote)}</p>
      <section className="stack">
        <h2>{tx(l('Скільки повторень', 'How many reps'))}</h2>
        {repBands.map((item) => (
          <article key={item.range.uk} className="note">
            <h3>{tx(item.range)}</h3>
            <p>{tx(item.use)}</p>
            <p>{tx(item.note)}</p>
          </article>
        ))}
        {hypertrophyNotes.map((item) => (
          <p key={item.uk}>{tx(item)}</p>
        ))}
      </section>
      <section className="stack">
        <h2>{tx(l('Сон', 'Sleep'))}</h2>
        <p className="note">{tx(recoveryNote)}</p>
      </section>
    </div>
  )
}

export function TrainingNutritionPage() {
  const { tx } = useApp()
  useTitle(tx(l('Харчування', 'Nutrition')))
  useTrack('training:nutrition')

  return (
    <div className="page">
      <div className="back-row">
        <BackLink to="/training" />
        <h1>{tx(l('Харчування', 'Nutrition'))}</h1>
      </div>
      <p className="lead">
        {tx(
          l(
            'Калорії — це енергія з їжі. Підтримувальна калорійність — приблизна кількість, за якої маса тіла в довшому періоді лишається стабільною. Вона залежить від розміру тіла, активності, віку і способу життя.',
            'Calories are energy from food. Maintenance is the rough amount at which body mass stays stable over a longer stretch. It depends on body size, activity, age, and how you live.',
          ),
        )}
      </p>
      <p className="note">{tx(trainingDisclaimer)}</p>
      <div className="stack">
        {calorieModes.map((mode) => (
          <article key={mode.id} className="note">
            <h3>{tx(mode.title)}</h3>
            <p>{tx(mode.means)}</p>
            <p>{tx(mode.why)}</p>
            <p>{tx(mode.limit)}</p>
          </article>
        ))}
      </div>
      <p className="note">{tx(calorieExample)}</p>
      <section className="stack">
        <h2>{tx(l('Як обрати режим', 'How to choose a mode'))}</h2>
        {nutritionGoals.map((goal) => (
          <article key={goal.title.uk} className="note">
            <h3>{tx(goal.title)}</h3>
            <p>{tx(goal.text)}</p>
          </article>
        ))}
      </section>
      <section className="stack">
        <h2>{tx(l('Білки, жири, вуглеводи', 'Protein, fat, carbohydrate'))}</h2>
        {macros.map((item) => (
          <article key={item.title.uk} className="note">
            <h3>{tx(item.title)}</h3>
            <p>{tx(item.text)}</p>
          </article>
        ))}
      </section>
      <section className="stack">
        <h2>{tx(l('Приклад дня', 'A sample day'))}</h2>
        {meals.map((meal) => (
          <article key={meal.meal.uk} className="note">
            <h3>{tx(meal.meal)}</h3>
            <p>{tx(meal.example)}</p>
            <p>{tx(meal.provides)}</p>
          </article>
        ))}
        <p className="note">{tx(mealAdjust)}</p>
      </section>
      <section className="stack">
        <h2>{tx(l('Короткі відповіді', 'Short answers'))}</h2>
        {nutritionFaq.map((item) => (
          <details key={item.q.uk} className="faq">
            <summary>{tx(item.q)}</summary>
            <p>{tx(item.a)}</p>
          </details>
        ))}
      </section>
    </div>
  )
}
