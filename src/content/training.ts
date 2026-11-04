import type { IconName, L, Lang, Step } from '../types'
import { l } from '../types'

export type TrainingSection = {
  to: string
  icon: IconName
  title: L
  summary: L
}

export const trainingDisclaimer = l(
  'Це орієнтир для здорових дорослих. Першу вагу й амплітуду краще узгодити з тренером. Текст не замінює медичну пораду і не є персональним планом.',
  'This is a guide for healthy adults. Agree the first weight and range of motion with a trainer. The text does not replace medical advice and is not a personal plan.',
)

export const trainingSections: TrainingSection[] = [
  {
    to: '/training/plan',
    icon: 'dumbbell',
    title: l('Моє перше тренування', 'My first workout'),
    summary: l('Стартове Full Body: 8 вправ, підходи і як прогресувати.', 'A starter full-body session: 8 exercises, sets, and how to progress.'),
  },
  {
    to: '/training/machines',
    icon: 'wrench',
    title: l('Тренажери', 'Machines'),
    summary: l('Як знайти машину, налаштувати її і уникнути типових помилок.', 'How to find a machine, set it up, and avoid common mistakes.'),
  },
  {
    to: '/training/recovery',
    icon: 'heart',
    title: l('М’язи й відновлення', 'Muscles and recovery'),
    summary: l('Волокна, повторення, сон і коли зупинити вправу.', 'Fibers, repetitions, sleep, and when to stop an exercise.'),
  },
  {
    to: '/training/nutrition',
    icon: 'water',
    title: l('Харчування', 'Nutrition'),
    summary: l('Дефіцит, підтримка чи профіцит — і простий день їжі.', 'Deficit, maintenance, or surplus — and a simple day of meals.'),
  },
]

export const fullBodyPoints: L[] = [
  l(
    'Нервово-м’язовий зв’язок. Нервова система вчиться вчасно вмикати потрібні м’язи і гальмувати зайві рухи. Зв’язок уже є — тренування покращує керування.',
    'Neuromuscular control. The nervous system learns to switch on the right muscles and quiet the extra movement. The connection is already there — training improves how you steer it.',
  ),
  l(
    'Кор. Це м’язи живота, спини, тазу й діафрагми, які стабілізують тулуб і передають зусилля. Прес і гіперекстензія — лише частина цієї роботи.',
    'Core. The muscles of the abdomen, back, pelvis, and diaphragm stabilize the torso and pass force through it. Crunches and back extensions are only part of that job.',
  ),
  l(
    'Техніка і контроль. Зрозуміти, які суглоби рухаються, як тримати нейтральну спину, як дихати і коли зупинити підхід.',
    'Technique and control. Know which joints move, how to keep a neutral spine, how to breathe, and when to end a set.',
  ),
  l(
    'Підготовка до прогресії. Коли рух освоєно, можна потроху додавати навантаження або переходити до складніших вправ.',
    'A base for progress. Once the movement is familiar, load or harder variations can come later.',
  ),
]

export type Exercise = {
  id: string
  group: L
  title: L
  volume: L
  purpose: L
  technique: L
  keywords: string
}

export const exercises: Exercise[] = [
  {
    id: 'chest-press',
    group: l('Груди', 'Chest'),
    title: l('Жим від грудей у тренажері', 'Chest press'),
    volume: l('1–2 × 8–12', '1–2 × 8–12'),
    purpose: l(
      'Освоїти горизонтальний жим. Працюють грудні м’язи і трицепс.',
      'Learn the horizontal press. Chest and triceps do the work.',
    ),
    technique: l(
      'Сидіння постав так, щоб рукоятки були приблизно на рівні середини грудей, а стопи твердо стояли на підлозі. Притисни спину до спинки, м’яко зафіксуй лопатки і виштовхуй рукоятки без ривка. Повертай їх під контролем. Не піднімай плечі до вух, не відривай таз і не «вибивай» лікті до жорсткого блокування.',
      'Set the seat so the handles sit about mid-chest and both feet are planted. Keep your back on the pad, gently set the shoulder blades, and press without a jerk. Return the handles under control. Do not shrug toward your ears, lift your hips, or snap the elbows into a hard lock.',
    ),
    keywords: 'chest press жим груди грудей pec',
  },
  {
    id: 'pec-deck',
    group: l('Груди', 'Chest'),
    title: l('Зведення рук у тренажері', 'Pec deck'),
    volume: l('1–2 × 10–15', '1–2 × 10–15'),
    purpose: l(
      'Контроль руху в плечі і робота грудних м’язів.',
      'Control at the shoulder and work for the chest.',
    ),
    technique: l(
      'Вистав сидіння й важелі так, щоб руки рухалися на комфортній висоті грудей і плечі не відводились надто далеко назад. Зводь руки плавно. На зворотному шляху не давай вантажу різко тягнути плечі. Зупиняйся до болісного розтягнення в плечовому суглобі.',
      'Set the seat and arms so the hands travel at a comfortable chest height without pulling the shoulders too far back. Bring the arms together smoothly. On the way back, do not let the stack yank the shoulders. Stop before a painful stretch in the shoulder.',
    ),
    keywords: 'pec deck зведення груди butterfly',
  },
  {
    id: 'lat-pulldown',
    group: l('Спина', 'Back'),
    title: l('Вертикальна тяга блока', 'Lat pulldown'),
    volume: l('1–2 × 8–12', '1–2 × 8–12'),
    purpose: l(
      'Вертикальна тяга. Працюють найширші м’язи спини.',
      'A vertical pull for the latissimus dorsi.',
    ),
    technique: l(
      'Відрегулюй валики над стегнами і стабілізуй тулуб. Тягни рукоятку до верхньої частини грудей у комфортній амплітуді, лікті спрямовуй вниз. Не тягни за голову, не розгойдуй корпус і не підключай інерцію.',
      'Set the thigh pads and keep the torso steady. Pull the handle toward the upper chest through a comfortable range, with the elbows traveling down. Do not pull behind the head, swing the torso, or use momentum.',
    ),
    keywords: 'lat pulldown тяга блока спина вертикальна',
  },
  {
    id: 'seated-row',
    group: l('Спина', 'Back'),
    title: l('Горизонтальна тяга сидячи', 'Seated row'),
    volume: l('1–2 × 8–12', '1–2 × 8–12'),
    purpose: l(
      'Контроль лопаток і м’язи верхньої та середньої частини спини.',
      'Shoulder-blade control and the upper and mid back.',
    ),
    technique: l(
      'Налаштуй упори і відстань до рукояток, постав стопи на опори. Почни з рівної нейтральної спини. Веди лікті назад і контрольовано відпускай рукоятки. Не перетворюй вправу на розгойдування тулубом і не закидай плечі вгору.',
      'Set the supports and the distance to the handles, and place your feet on the pads. Start with a neutral spine. Draw the elbows back and let the handles return under control. Do not turn it into a torso swing or shrug the shoulders up.',
    ),
    keywords: 'seated row горизонтальна тяга спина лопатки',
  },
  {
    id: 'leg-press',
    group: l('Ноги', 'Legs'),
    title: l('Жим ногами', 'Leg press'),
    volume: l('1–2 × 10–12', '1–2 × 10–12'),
    purpose: l(
      'Освоїти поштовх ногами. Працюють квадрицепси і сідниці.',
      'Learn a leg push. Quadriceps and glutes do the work.',
    ),
    technique: l(
      'Вистав сидіння так, щоб у нижній точці таз лишався на спинці, а поперек не округлювався. Стопи — приблизно на ширині плечей, коліна рухаються в напрямку пальців. Опускай платформу в комфортній амплітуді. Не відривай таз і не випрямляй коліна ривком. Глибина залежить від конструкції тренажера і твоєї рухливості.',
      'Set the seat so the pelvis stays on the pad at the bottom and the lower back does not round. Feet about shoulder-width, knees tracking toward the toes. Lower the platform only as far as is comfortable. Do not let the pelvis lift or snap the knees straight. Depth depends on the machine and your mobility.',
    ),
    keywords: 'leg press жим ногами квадрицепс сідниці ноги',
  },
  {
    id: 'leg-curl',
    group: l('Ноги', 'Legs'),
    title: l('Згинання ніг', 'Leg curl'),
    volume: l('1–2 × 10–15', '1–2 × 10–15'),
    purpose: l(
      'Задня поверхня стегна і контроль руху в коліні.',
      'The hamstrings, with control at the knee.',
    ),
    technique: l(
      'Сумісти вісь тренажера приблизно з віссю коліна — за маркуванням виробника. Валик постав біля нижньої частини гомілки, не на ахілловому сухожиллі. Тримай стегна і таз на опорах і виконуй рух повільно, без ривків. Підійде варіант сидячи або лежачи.',
      'Line the machine’s axis up with the knee, following the manufacturer’s marks. Place the pad on the lower shin, not on the Achilles tendon. Keep the thighs and pelvis on the supports and move slowly, without jerks. Seated or lying versions both fit.',
    ),
    keywords: 'leg curl згинання ніг біцепс стегна hamstring',
  },
  {
    id: 'core',
    group: l('Прес', 'Abs'),
    title: l('Скручування або dead bug', 'Crunch or dead bug'),
    volume: l('1–2 × 8–12', '1–2 × 8–12'),
    purpose: l(
      'М’язи живота, контроль таза і ребер. Рахунок повторень — не мета.',
      'Abdominal muscles and control of the pelvis and ribs. The rep count is not the goal.',
    ),
    technique: l(
      'Dead bug: ляж на спину, тримай ребра й таз під контролем і повільно опускай протилежні руку та ногу, не прогинаючи поперек. Скручування на килимку: рух невеликий, без тяги голови руками, видих під час підйому. Мета — контроль тулуба, а не максимальна кількість повторень.',
      'Dead bug: lie on your back, keep the ribs and pelvis controlled, and slowly lower the opposite arm and leg without arching the lower back. Floor crunch: a small movement, no pulling on the head, exhale as you lift. The aim is torso control, not the highest rep count.',
    ),
    keywords: 'прес dead bug скручування кор живіт',
  },
  {
    id: 'back-extension',
    group: l('Кор', 'Core'),
    title: l('Гіперекстензія', 'Back extension'),
    volume: l('1–2 × 8–12', '1–2 × 8–12'),
    purpose: l(
      'Контроль нахилу в тазі і робота заднього ланцюга. Без додаткової ваги.',
      'Control of the hip hinge and the posterior chain. No extra load.',
    ),
    technique: l(
      'Постав опору так, щоб вона не заважала згинанню в тазостегнових суглобах. На типовій римській лаві верхній край подушки — нижче тазових кісток, стопи надійно зафіксовані. Нахиляйся контрольовано і повертайся приблизно до прямої лінії «ноги–тулуб». Не закидай корпус вище нейтрального положення. Якщо конструкція інша — дивись її інструкцію. За болю в спині припини вправу і звернись по оцінку.',
      'Set the pad so it does not block hip flexion. On a typical Roman chair the top of the pad sits below the pelvic bones and the feet are fixed. Hinge under control and return to about a straight line from legs to torso. Do not throw the chest past neutral. If the machine is built differently, follow its own instructions. Stop and get it checked if your back hurts.',
    ),
    keywords: 'гіперекстензія hyper extension спина кор roman',
  },
]

export function exerciseById(id: string): Exercise | undefined {
  return exercises.find((item) => item.id === id)
}

export const planVolumeNote = l(
  'Це орієнтир, не норма. На першому занятті можна зробити один підхід або скоротити список, якщо техніка псується. Вісім вправ можуть бути забагато для першого візиту, особливо з повним інструктажем. Тренер може замінити вправу.',
  'This is a guide, not a quota. On a first visit, one set or a shorter list is enough if technique slips. Eight exercises can be too much for a first session, especially with a full walkthrough. A trainer can swap an exercise.',
)

export const planSchedule = l(
  'Орієнтовно 2–3 рази на тиждень у непослідовні дні, наприклад понеділок–четвер або понеділок–середа–п’ятниця. Перед роботою — 5–10 хвилин легкої активності і кілька пробних повторень із малою вагою. Пауза між основними підходами — приблизно 1–2 хвилини, довше, якщо треба відновити дихання і техніку. Вагу обирай так, щоб наприкінці підходу лишались приблизно 2–4 якісні повторення в запасі. До відмови тренуватися не потрібно.',
  'About 2–3 times a week on non-consecutive days, for example Monday–Thursday or Monday–Wednesday–Friday. Before the work sets, 5–10 minutes of easy movement and a few light practice reps. Rest about 1–2 minutes between main sets, longer if breathing or technique needs it. Pick a weight that leaves about 2–4 good reps in reserve. Training to failure is not required.',
)

export const planOrder = l(
  'Зазвичай починай із більших багатосуглобових вправ — жим ногами, жим грудьми, тяги — а потім ізоляція і кор. Список вище згрупований за м’язами для наочності, це не обов’язкова послідовність. Першу робочу вагу й амплітуду краще визначити з тренером.',
  'Usually start with the larger multi-joint moves — leg press, chest press, rows — then isolation and core. The list above is grouped by muscle so it is easy to scan. It is not a required order. Set the first working weight and range with a trainer.',
)

export const progression: Step[] = [
  {
    title: l('Спочатку техніка', 'Technique first'),
    text: l(
      'Тримай обраний діапазон повторень із контрольованою амплітудою і без болю.',
      'Stay in the chosen rep range with a controlled range of motion and no pain.',
    ),
  },
  {
    title: l('Потім повторення', 'Then repetitions'),
    text: l(
      'Коли, наприклад, 2 × 10 стає комфортним, поступово наближайся до 2 × 12 без втрати якості.',
      'When, for example, 2 × 10 feels comfortable, work toward 2 × 12 without losing quality.',
    ),
  },
  {
    title: l('Потім вага', 'Then load'),
    text: l(
      'Лише коли верхня межа повторень стабільно виходить правильно, додай найменший доступний крок навантаження.',
      'Only when the top of the rep range is consistently clean, add the smallest available load step.',
    ),
  },
  {
    title: l('Далі складність або обсяг', 'Then difficulty or volume'),
    text: l(
      'За потреби і за погодженням із тренером додай підхід або переходь до вільних ваг. Зручно вести журнал: дата, вправа, вага, підходи, повторення, відчуття і будь-який дискомфорт.',
      'If needed, and with a trainer, add a set or move toward free weights. A simple log helps: date, exercise, weight, sets, reps, effort, and any discomfort.',
    ),
  },
]

export const setupSteps: Step[] = [
  {
    title: l('Знайти тренажер за фото', 'Match the machine'),
    text: l(
      'Зістав форму, рукоятки, табличку виробника і назву. Різні моделі — різні осі, валики й обмежувачі.',
      'Match the shape, handles, maker’s plate, and name. Different models have different axes, pads, and stops.',
    ),
  },
  {
    title: l('Перевірити стан', 'Check the condition'),
    text: l(
      'Фіксатори на місці, троси цілі, штифт вагового стека зафіксований. Якщо щось несправне — не користуйся.',
      'Stops are in place, cables are intact, and the stack pin is seated. If something is wrong, do not use it.',
    ),
  },
  {
    title: l('Налаштувати контактні точки', 'Set the contact points'),
    text: l(
      'Сидіння, спинку, упор грудей, валики чи платформу вистав під зріст, довжину кінцівок і схему виробника.',
      'Set the seat, back pad, chest support, rollers, or platform for your height, limb length, and the maker’s diagram.',
    ),
  },
  {
    title: l('Сумістити суглоб і вісь', 'Line up the joint'),
    text: l(
      'Там, де це передбачено. На згинанні ніг — колінний суглоб. В інших тренажерах геометрія інша.',
      'Where the machine is built for it. On a leg curl, that is the knee. Other machines use a different geometry.',
    ),
  },
  {
    title: l('Взяти легку пробну вагу', 'Use a light trial weight'),
    text: l(
      'Спершу 3–5 повільних повторень без ривків, щоб перевірити амплітуду, комфорт і хід механізму.',
      'First do 3–5 slow reps without jerks, to check the range, comfort, and how the mechanism moves.',
    ),
  },
  {
    title: l('Перевірити тулуб', 'Check the torso'),
    text: l(
      'Стопи на опорах, таз і спина стабільні, плечі не тягнуться до вух, рухи контрольовані.',
      'Feet on the supports, pelvis and back steady, shoulders not creeping toward the ears, movement under control.',
    ),
  },
  {
    title: l('Обрати амплітуду без болю', 'Choose a pain-free range'),
    text: l(
      'Не намагайся силоміць дістати однакову глибину для всіх.',
      'Do not force the same depth that someone else uses.',
    ),
  },
  {
    title: l('Повторення і дихання', 'Reps and breathing'),
    text: l(
      'Зазвичай видих на зусиллі, вдих на контрольованому поверненні. Не затримуй дихання надовго.',
      'Usually exhale on the effort and inhale as you return under control. Do not hold your breath for long.',
    ),
  },
  {
    title: l('Завершити вправу', 'Finish the set'),
    text: l(
      'Обережно поверни вантаж у старт, протри контактні поверхні і прибери додаткові диски, якщо вони були.',
      'Return the weight to the start carefully, wipe the contact surfaces, and put away any extra plates.',
    ),
  },
]

export type MachineTune = {
  id: string
  name: L
  adjust: L
  watch: L
}

export const machineTunes: MachineTune[] = [
  {
    id: 'chest-press',
    name: l('Chest Press', 'Chest press'),
    adjust: l('Висота сидіння і стартове положення рукояток.', 'Seat height and the starting position of the handles.'),
    watch: l('Рукоятки на рівні грудей, стопи стабільні, плечі не болять.', 'Handles at chest height, feet stable, shoulders not painful.'),
  },
  {
    id: 'pec-deck',
    name: l('Pec Deck', 'Pec deck'),
    adjust: l('Висота сидіння, кут важелів і стартова позиція.', 'Seat height, arm angle, and the start position.'),
    watch: l('Не заводь плечі занадто далеко назад.', 'Do not take the shoulders too far back.'),
  },
  {
    id: 'lat-pulldown',
    name: l('Lat Pulldown', 'Lat pulldown'),
    adjust: l('Валик для стегон, за потреби висота сидіння, рукоятка.', 'Thigh pad, seat height if needed, and the handle.'),
    watch: l('Стегна зафіксовані, тяга до грудей, корпус без інерції.', 'Thighs secured, pull toward the chest, torso without momentum.'),
  },
  {
    id: 'seated-row',
    name: l('Seated Row', 'Seated row'),
    adjust: l('Грудний упор або сидіння, відстань до рукояток.', 'Chest pad or seat, and the distance to the handles.'),
    watch: l('Не округлюй спину під вагою і не смикай корпус.', 'Do not round the back under load or yank the torso.'),
  },
  {
    id: 'leg-press',
    name: l('Leg Press', 'Leg press'),
    adjust: l('Кут спинки або відстань до платформи, положення стоп.', 'Back-pad angle or distance to the platform, and foot position.'),
    watch: l('Таз на опорі, коліна за напрямком стоп, без ривкового блокування.', 'Pelvis on the pad, knees tracking the toes, no snapped lockout.'),
  },
  {
    id: 'leg-curl',
    name: l('Leg Curl', 'Leg curl'),
    adjust: l('Вісь коліна, положення валика, упор стегна.', 'Knee axis, roller position, and thigh support.'),
    watch: l('Валик на гомілці, рух із коліна, таз не відривається.', 'Pad on the shin, movement from the knee, pelvis stays down.'),
  },
  {
    id: 'back-extension',
    name: l('Гіперекстензія', 'Back extension'),
    adjust: l('Висота подушки або упору і фіксація стоп.', 'Pad or support height, and how the feet are fixed.'),
    watch: l('Опора не блокує згинання в тазі. Без надмірного прогину.', 'The pad does not block the hip hinge. No excessive arch.'),
  },
]

export const machineMistakes: L[] = [
  l(
    'Завелика вага: людина розгойдується і коротшає амплітуда. Зменш навантаження до контрольованого.',
    'Too much weight: the body swings and the range shrinks. Reduce the load until you can control it.',
  ),
  l(
    'Невідрегульоване сидіння: суглоби працюють під незручним кутом. Спочатку підлаштуй тренажер під себе.',
    'An unset seat: the joints work at an awkward angle. Adjust the machine to you first.',
  ),
  l(
    'Ривки і падіння стека: м’язи втрачають контроль. Веди повторення плавно в обидва боки.',
    'Jerks and a crashing stack: the muscles lose the movement. Move smoothly both ways.',
  ),
  l(
    'Біль у суглобі не треба терпіти. Зупинись, переглянь техніку і за потреби звернись до тренера або лікаря.',
    'Joint pain is not something to push through. Stop, review the technique, and ask a trainer or a doctor if you need to.',
  ),
  l(
    'Чужа вага може тобі не підходити. Обирай навантаження за власною технікою і самопочуттям.',
    'Someone else’s weight may not fit you. Choose the load from your own technique and how you feel.',
  ),
]

export const machineHelp = l(
  'Працівник може запитати «Привіт! Можна підказати?», показати регулювання або відкрити картку тренажера. Це коротка допомога, не заміна персонального тренування. Якщо є браслет «Мені потрібна допомога», дозвіл усе одно варто запитати.',
  'A staff member may ask “Hi, can I show you?”, point out a setting, or open the machine card. That is a short assist, not a personal session. Even with a “I need help” band, they should still ask permission.',
)

export type FiberRow = {
  name: L
  trait: L
  energy: L
  tasks: L
}

export const fibers: FiberRow[] = [
  {
    name: l('Тип I — повільні, переважно «червоні»', 'Type I — slow, mostly “red”'),
    trait: l('Стійкі до втоми.', 'Resistant to fatigue.'),
    energy: l('Переважно аеробні процеси.', 'Mostly aerobic energy.'),
    tasks: l('Тривала ходьба, підтримка пози.', 'Long walking and holding posture.'),
  },
  {
    name: l('Тип IIa — швидкі, проміжні', 'Type IIa — fast, intermediate'),
    trait: l('Поєднання швидкості і помірної витривалості.', 'A mix of speed and moderate endurance.'),
    energy: l('І аеробні, і анаеробні процеси.', 'Both aerobic and anaerobic energy.'),
    tasks: l('Динамічні зусилля середньої і високої інтенсивності.', 'Dynamic efforts at moderate and high intensity.'),
  },
  {
    name: l('Тип IIx — швидкі, умовно «білі»', 'Type IIx — fast, loosely “white”'),
    trait: l('Висока швидкість і потужність, швидша втома.', 'High speed and power, and they fatigue sooner.'),
    energy: l('Більша роль швидких анаеробних процесів.', 'A larger share of fast anaerobic energy.'),
    tasks: l('Вибухові і дуже інтенсивні зусилля.', 'Explosive and very intense efforts.'),
  },
]

export const fiberNote = l(
  'Поділ на «червоні» і «білі» — спрощення. У людини м’яз складається з суміші волокон, між типами є проміжні. Для швидких волокон прийнято говорити про IIa та IIx, а не переносити тваринну схему IIb. На вправі нервова система набирає різні моторні одиниці залежно від зусилля і втоми. Немає такого, що 15 повторень тренують лише червоні волокна, а 5 — лише білі.',
  'Splitting fibers into “red” and “white” is a simplification. A human muscle is a mix, with types in between. Fast fibers in people are described as IIa and IIx, not by copying the animal IIb scheme. During an exercise the nervous system recruits different motor units according to effort and fatigue. Fifteen reps do not train only red fibers, and five do not train only white ones.',
)

export type RepBand = {
  range: L
  use: L
  note: L
}

export const repBands: RepBand[] = [
  {
    range: l('1–5', '1–5'),
    use: l('Акцент на максимальну силу при високому навантаженні.', 'A focus on maximal strength under heavy load.'),
    note: l('Потрібна добра техніка. Для першого тренування це не пріоритет.', 'It needs solid technique. It is not the priority for a first workout.'),
  },
  {
    range: l('6–12', '6–12'),
    use: l('Зручний практичний діапазон для сили і м’язової маси.', 'A practical range for strength and muscle size.'),
    note: l('Не «магічний» діапазон: ріст можливий і поза ним.', 'Not a magic range: growth is possible outside it too.'),
  },
  {
    range: l('12–20+', '12–20+'),
    use: l('Менше навантаження на повторення, більше роботи на локальну витривалість.', 'Less load per rep, more work for local endurance.'),
    note: l('Теж може стимулювати ріст, якщо зусилля достатнє.', 'It can still drive growth when the effort is high enough.'),
  },
]

export const hypertrophyNotes: L[] = [
  l(
    'Ріст м’язів залежить не лише від цифри повторень. Мають значення механічне напруження, складність підходу, загальний обсяг, поступовий прогрес, відновлення і харчування. Помірні й легші ваги можуть давати схожу гіпертрофію за достатньої інтенсивності. Важчі ваги зазвичай краще розвивають результат у тестах максимальної сили.',
    'Muscle growth does not depend on the rep number alone. Mechanical tension, how hard the set is, total volume, gradual progress, recovery, and food all matter. Moderate and lighter loads can build similar size when the effort is high enough. Heavier loads usually improve tests of maximal strength more.',
  ),
  l(
    '«Форма м’яза» — не те саме, що діапазон повторень. Місця кріплення, довжина черевця і базова анатомія значною мірою індивідуальні. Тренування може збільшити об’єм м’язів і змінити пропорції, але не дозволяє довільно «ліпити» форму вибором 8 чи 15 повторень. Виразність також залежить від підшкірного жиру.',
    'Muscle “shape” is not the same thing as a rep range. Attachments, belly length, and basic anatomy are largely individual. Training can increase a muscle’s size and change proportions. It cannot freely sculpt a shape by choosing 8 or 15 reps. How visible a muscle looks also depends on body fat.',
  ),
  l(
    'Новачкові практично почати з комфортних 8–12 або 10–15 повторень, стабільної техніки і помірного навантаження. Мета першого етапу — якісно рухатися, а не «влучити» в особливий тип волокон.',
    'A practical start is a comfortable 8–12 or 10–15 reps, stable technique, and moderate load. The first stage is about moving well, not about hitting a special fiber type.',
  ),
]

export const recoveryNote = l(
  'Регулярність важливіша за виснаження на одному занятті. Перед повторним важким навантаженням на ті самі м’язи дай час на відновлення: у цьому графіку між Full Body-сесіями є день без силового заняття. Дорослим зазвичай радять приблизно 7–9 годин сну, потреба індивідуальна. Легкий м’язовий дискомфорт після незвичного навантаження можливий. Гострий біль у суглобі, оніміння, запаморочення або сильний незвичний біль — привід зупинити вправу і звернутися по допомогу.',
  'Consistency matters more than emptying yourself in one session. Before hard work on the same muscles again, leave time to recover: this schedule puts a day without a strength session between full-body days. Adults are often advised to sleep about 7–9 hours; the need varies. Mild muscle discomfort after unfamiliar work can happen. Sharp joint pain, numbness, dizziness, or strong unusual pain is a reason to stop and get help.',
)

export type CalorieMode = {
  id: string
  title: L
  means: L
  why: L
  limit: L
}

export const calorieModes: CalorieMode[] = [
  {
    id: 'deficit',
    title: l('Дефіцит', 'Deficit'),
    means: l('У середньому надходить менше енергії, ніж витрачається.', 'On average, less energy comes in than goes out.'),
    why: l('Щоб зменшувати масу тіла, зокрема жирову.', 'To reduce body mass, including fat mass.'),
    limit: l(
      'Занадто великий дефіцит погіршує відновлення і самопочуття і може забирати м’язову масу.',
      'Too large a deficit hurts recovery and how you feel, and it can cost muscle.',
    ),
  },
  {
    id: 'maintenance',
    title: l('Підтримка', 'Maintenance'),
    means: l('Споживання приблизно дорівнює витратам.', 'Intake is about equal to what you spend.'),
    why: l(
      'Стабілізувати вагу, освоювати тренування, розвивати силу, поступово змінювати склад тіла.',
      'To keep weight steady, learn the training, build strength, and change body composition gradually.',
    ),
    limit: l('Маса тіла не обов’язково швидко змінюється.', 'Body mass does not have to change quickly.'),
  },
  {
    id: 'surplus',
    title: l('Профіцит', 'Surplus'),
    means: l('У середньому надходить більше енергії, ніж витрачається.', 'On average, more energy comes in than goes out.'),
    why: l('Підтримати набір маси і ріст м’язів під час силових тренувань.', 'To support weight gain and muscle growth during strength training.'),
    limit: l('Надлишок енергії може збільшувати і жирову масу.', 'Extra energy can also increase fat mass.'),
  },
]

export const calorieExample = l(
  'Приклад лише для математики. Якщо умовна підтримка — 2300 ккал на добу, то 2050 — дефіцит близько 250 ккал, 2300 — підтримка, а 2500–2550 — профіцит 200–250 ккал. 2300 ккал не є нормою для всіх. Реальну потребу рахують індивідуально і уточнюють за зміною маси й самопочуттям протягом кількох тижнів.',
  'An example of the arithmetic only. If a hypothetical maintenance level is 2300 kcal a day, then 2050 is a deficit of about 250 kcal, 2300 is maintenance, and 2500–2550 is a surplus of 200–250 kcal. 2300 kcal is not a target for everyone. Real needs are individual and get adjusted from weight and how you feel over several weeks.',
)

export const nutritionGoals: { title: L; text: L }[] = [
  {
    title: l('Зменшити жирову масу', 'Reduce fat mass'),
    text: l(
      'Зазвичай обирають помірний дефіцит, силові тренування, достатній білок і сон. Не варто розганяти схуднення великими обмеженнями. За медичних станів, вагітності, неповноліття або історії розладів харчової поведінки — лише індивідуальна консультація.',
      'A moderate deficit, strength training, enough protein, and sleep is the usual combination. Do not chase faster loss with severe restriction. Medical conditions, pregnancy, being underage, or a history of disordered eating call for individual advice only.',
    ),
  },
  {
    title: l('Освоїти зал або зберегти вагу', 'Learn the gym or keep your weight'),
    text: l(
      'Обирають підтримку: регулярність, техніка і якість їжі. Новачки іноді нарощують м’язи і зменшують жир без помітної зміни ваги — це рекомпозиція. Результат індивідуальний.',
      'Choose maintenance: consistency, technique, and food quality. Beginners sometimes gain muscle and lose fat without a clear change on the scale — that is recomposition. The result is individual.',
    ),
  },
  {
    title: l('Набирати м’язову масу', 'Gain muscle'),
    text: l(
      'Можна обрати невеликий профіцит разом із прогресією в силових і достатнім білком. Більший профіцит не гарантує швидшого росту м’язів і може додавати зайвий жир.',
      'A small surplus can sit alongside progressive strength work and enough protein. A larger surplus does not guarantee faster muscle growth and can add extra fat.',
    ),
  },
  {
    title: l('Мета ще неясна', 'The goal is still unclear'),
    text: l(
      'Багатьом здоровим новачкам доречно почати з підтримки, налагодити звичку тренуватися, оцінити самопочуття і вже потім коригувати раціон. Це відправна точка, не правило для всіх.',
      'For many healthy beginners, maintenance is a sensible start: build the training habit, notice how you feel, then adjust food. It is a starting point, not a rule for everyone.',
    ),
  },
]

export const macros: { title: L; text: L }[] = [
  {
    title: l('Білки', 'Protein'),
    text: l(
      'Дають амінокислоти для відновлення і підтримки м’язових тканин. Джерела: яйця, риба, м’ясо, молочні продукти, бобові, тофу. Для багатьох фізично активних дорослих орієнтир — 1,4–2,0 г білка на кг маси тіла на добу. Потреби і протипоказання індивідуальні.',
      'They supply amino acids for repairing and maintaining muscle tissue. Sources: eggs, fish, meat, dairy, legumes, tofu. For many active adults a working range is 1.4–2.0 g of protein per kg of body weight per day. Needs and contraindications are individual.',
    ),
  },
  {
    title: l('Жири', 'Fats'),
    text: l(
      'Потрібні для клітинних мембран, синтезу гормонів і засвоєння жиророзчинних вітамінів. Джерела: оливкова олія, горіхи, насіння, риба, авокадо. Не варто без причини прибирати жири.',
      'Needed for cell membranes, hormone synthesis, and absorbing fat-soluble vitamins. Sources: olive oil, nuts, seeds, fish, avocado. There is no good reason to cut fats out by default.',
    ),
  },
  {
    title: l('Вуглеводи', 'Carbohydrates'),
    text: l(
      'Зручне джерело енергії для дня і силових занять. Джерела: крупи, картопля, цільнозернові продукти, фрукти, бобові.',
      'A practical energy source for the day and for strength sessions. Sources: grains, potatoes, whole-grain foods, fruit, legumes.',
    ),
  },
  {
    title: l('Клітковина, овочі і вода', 'Fiber, vegetables, and water'),
    text: l(
      'Важливі для загального здоров’я незалежно від того, обрано дефіцит чи профіцит. Спортивні добавки не потрібні, щоб почати тренуватися. Режим має бути реалістичним для звичайного життя.',
      'They matter for general health whether you choose a deficit or a surplus. Sports supplements are not required to start training. The pattern has to fit ordinary life.',
    ),
  },
]

export type MealRow = {
  meal: L
  example: L
  provides: L
}

export const meals: MealRow[] = [
  {
    meal: l('Сніданок', 'Breakfast'),
    example: l('Вівсянка з йогуртом, фруктами і горіхами.', 'Oatmeal with yogurt, fruit, and nuts.'),
    provides: l('Вуглеводи, білок, жири, клітковина.', 'Carbohydrate, protein, fat, and fiber.'),
  },
  {
    meal: l('Обід', 'Lunch'),
    example: l('Рис або гречка, курка чи тофу, овочі.', 'Rice or buckwheat, chicken or tofu, and vegetables.'),
    provides: l('Білок, енергія для активності, мікронутрієнти.', 'Protein, energy for activity, and micronutrients.'),
  },
  {
    meal: l('Перекус', 'Snack'),
    example: l('Сир, йогурт або хумус із хлібцями.', 'Cheese, yogurt, or hummus with crispbread.'),
    provides: l('Зручний додатковий білок і енергія.', 'An easy extra portion of protein and energy.'),
  },
  {
    meal: l('Вечеря', 'Dinner'),
    example: l('Риба або бобові, картопля чи крупа, салат.', 'Fish or legumes, potato or grain, and a salad.'),
    provides: l('Збалансований прийом для відновлення.', 'A balanced meal for recovery.'),
  },
]

export const mealAdjust = l(
  'Порції в таблиці не універсальні. У дефіциті коригуй загальну калорійність і розмір енергомістких порцій, не зрізаючи різко білок і овочі. На підтримці лишай обсяг, за якого вага в середньому стабільна. У профіциті додавай зручну енергію — крупи, оливкову олію, горіхи — і зберігай баланс продуктів.',
  'The meals are examples, not universal portions. In a deficit, adjust total calories and the size of energy-dense portions without sharply cutting protein and vegetables. At maintenance, keep the amount at which weight stays roughly stable. In a surplus, add easy energy — grains, olive oil, nuts — and keep the mix of foods.',
)

export const nutritionFaq: { q: L; a: L }[] = [
  {
    q: l('Чи можна схуднути лише в животі?', 'Can you lose fat only from the belly?'),
    a: l(
      'Ні. Вправи на прес зміцнюють його м’язи, але не спалюють жир вибірково над ними.',
      'No. Ab exercises strengthen those muscles. They do not burn the fat directly over them.',
    ),
  },
  {
    q: l('Чи треба їсти одразу після тренування?', 'Do you have to eat right after training?'),
    a: l(
      'Не обов’язково до конкретної хвилини. Важливіші загальний раціон за добу, достатній білок і регулярність прийомів їжі.',
      'Not to a specific minute. The day’s food, enough protein, and regular meals matter more.',
    ),
  },
  {
    q: l('Чи можна наростити м’язи без профіциту?', 'Can you build muscle without a surplus?'),
    a: l(
      'Іноді так, особливо новачкам — залежно від стартового стану, тренувань і білка. Профіцит — інструмент, не обов’язкова умова для кожної людини.',
      'Sometimes yes, especially for beginners, depending on the starting point, the training, and protein. A surplus is a tool, not a requirement for every person.',
    ),
  },
  {
    q: l('Як зрозуміти, що калорійність підібрана?', 'How do you know the calories fit?'),
    a: l(
      'Дивись на тенденцію маси, працездатність, голод, відновлення і самопочуття протягом кількох тижнів. Одне зважування нічого не вирішує.',
      'Watch the trend in body mass, how well you train, hunger, recovery, and how you feel over several weeks. One weigh-in decides nothing.',
    ),
  },
]

export type TrainingSearchItem = {
  title: L
  text: L
  to: string
  keywords: string
}

export const trainingSearch: TrainingSearchItem[] = [
  {
    title: l('Тренування', 'Training'),
    text: l('Full Body для новачків: з чого почати і навіщо.', 'Full body for beginners: where to start and why.'),
    to: '/training',
    keywords: 'full body фулл боді тренування training новачок beginner',
  },
  {
    title: l('Моє перше тренування', 'My first workout'),
    text: l('Вісім вправ, підходи, паузи і прогресія.', 'Eight exercises, sets, rests, and progression.'),
    to: '/training/plan',
    keywords: exercises.map((item) => `${item.keywords} ${item.title.uk} ${item.title.en}`).join(' '),
  },
  ...exercises.map((item) => ({
    title: item.title,
    text: item.purpose,
    to: `/training/exercises/${item.id}`,
    keywords: item.keywords,
  })),
  {
    title: l('Тренажери', 'Machines'),
    text: l('Як налаштувати тренажер і типові помилки.', 'How to set up a machine, and typical mistakes.'),
    to: '/training/machines',
    keywords: 'тренажер machine налаштування setup сидіння вага стек',
  },
  {
    title: l('М’язи й відновлення', 'Muscles and recovery'),
    text: l('Типи волокон, повторення і сон.', 'Fiber types, repetitions, and sleep.'),
    to: '/training/recovery',
    keywords: 'волокна fibers повторення reps гіпертрофія сон sleep відновлення recovery кор',
  },
  {
    title: l('Харчування', 'Nutrition'),
    text: l('Дефіцит, підтримка, профіцит, білок і приклади страв.', 'Deficit, maintenance, surplus, protein, and sample meals.'),
    to: '/training/nutrition',
    keywords: 'харчування nutrition калорії calories білок protein дефіцит профіцит їжа diet',
  },
]

const trainingTitles: Record<string, L> = {
  training: l('Тренування', 'Training'),
  'training:plan': l('Моє перше тренування', 'My first workout'),
  'training:machines': l('Тренажери', 'Machines'),
  'training:recovery': l('М’язи й відновлення', 'Muscles and recovery'),
  'training:nutrition': l('Харчування', 'Nutrition'),
}

export function trainingEventTitle(raw: string, lang: Lang): string | undefined {
  const page = trainingTitles[raw]
  if (page) return page[lang]
  const prefix = 'training:exercise:'
  if (raw.startsWith(prefix)) return exerciseById(raw.slice(prefix.length))?.title[lang]
  return undefined
}
