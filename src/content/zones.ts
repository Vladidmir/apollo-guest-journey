import type { ZoneInfo } from '../types'
import { l } from '../types'

export const zoneInfo: Record<string, ZoneInfo> = {
  reception: {
    title: l('Рецепція', 'Reception'),
    short: l('Рецепція', 'Reception'),
    category: 'service',
    description: l(
      'Стійка APOLLO NEXT: доступ, питання, загублені речі. На стійці 025 є номер клубу і QR-коди.',
      'APOLLO NEXT desk: access, questions, lost items. Club 025 shows the club number and QR codes on the counter.',
    ),
    find: l(
      'Перша стійка з логотипом APOLLO NEXT і номером клубу, до турнікетів.',
      'The first desk with the APOLLO NEXT logo and club number, before the turnstiles.',
    ),
    canDo: l(
      'Оформити перший візит, уточнити підписку, покликати тренера, віддати знайдену річ.',
      'Start a first visit, check a membership, call a trainer, or hand in a found item.',
    ),
    keywords: 'рецепція адміністратор стійка apollo next reception desk 025',
    related: [{ to: '/help', label: l('Контакти та допомога', 'Contacts and help') }],
  },
  turnstiles: {
    title: l('Турнікети', 'Turnstiles'),
    short: l('Турнікети', 'Turnstiles'),
    category: 'service',
    description: l(
      'Прохід у клуб і вихід. У 025 стоїть зчитування обличчя або картки/браслета. Одна людина — одне зчитування.',
      'The way in and out. Club 025 uses face recognition or a card/wristband. One person, one scan.',
    ),
    find: l(
      'Одразу біля рецепції. За турнікетами — сходи/ескалатор у зал і зона залу.',
      'Right by reception. Past the turnstiles are stairs/escalator into the gym floor.',
    ),
    canDo: l(
      'Зайти в клуб і вийти після тренування. Не перелазь і не проходь удвох.',
      'Enter the club and leave after training. Do not climb over or pass two at a time.',
    ),
    guideId: 'turnstile',
    keywords: 'турнікет вхід вихід прохід обличчя face turnstile entry exit',
  },
  kasa: {
    title: l('Каса самообслуговування', 'Self-service checkout'),
    short: l('Каса', 'Checkout'),
    category: 'service',
    description: l(
      'Термінал «Каса самообслуговування» APOLLO NEXT. Оплата карткою біля стелажа з добавками.',
      'APOLLO NEXT self-service checkout. Pay by card next to the supplement shelf.',
    ),
    find: l(
      'Біля рецепції / зони «Підживинки»: чорний термінал з екраном і написом «Каса самообслуговування».',
      'By reception / the refreshments area: a black kiosk with a screen labeled self-service checkout.',
    ),
    canDo: l(
      'Сплатити товар зі стелажа або вендингу. Якщо термінал мовчить — не плати двічі, іди на рецепцію.',
      'Pay for shelf or vending items. If the terminal stays silent, do not pay twice — go to reception.',
    ),
    guideId: 'kasa',
    keywords: 'каса самообслуговування оплата checkout kasa pos',
    related: [
      { to: '/zones/retail', label: l('Підживинки і мерч', 'Refreshments and merch') },
      { to: '/situations/payment', label: l('Проблема з оплатою', 'Payment problem') },
    ],
  },
  retail: {
    title: l('Підживинки та мерч', 'Refreshments and merch'),
    short: l('Підживинки', 'Snacks'),
    category: 'service',
    description: l(
      'Зона «Підживинки»: добавки, шейкери, мерч APOLLO. Поруч каса самообслуговування і вендинг.',
      '“Pidzhyvynky” zone: supplements, shakers, APOLLO merch. Self-checkout and vending are nearby.',
    ),
    find: l(
      'Біля входу / рецепції: вивіска «ПІДЖИВИНКИ», стелаж із банками і вішалки з мерчем.',
      'By the entrance / reception: the “Pidzhyvynky” sign, supplement shelves and merch hangers.',
    ),
    canDo: l(
      'Обрати товар і сплатити на касі самообслуговування. Ціну дивись на ціннику, не в застосунку.',
      'Pick an item and pay at self-checkout. The shelf price wins over anything in the app.',
    ),
    guideId: 'kasa',
    keywords: 'підживинки мерч добавки протеїн retail snacks merch',
    related: [{ to: '/zones/kasa', label: l('Каса самообслуговування', 'Self-service checkout') }],
  },
  accuniq: {
    title: l('Accuniq', 'Accuniq'),
    short: l('Accuniq', 'Accuniq'),
    category: 'service',
    description: l(
      'Прилад біоімпедансного аналізу Accuniq BC380 з ультразвуковим ростоміром. Вимірює склад тіла.',
      'Accuniq BC380 body composition analyzer with an ultrasonic height meter.',
    ),
    find: l(
      'У залі біля входу в тренувальну зону, стійка/місце з позначкою ACCUNIQ. На огляді з ескалатора видно біля центральної колони.',
      'On the gym floor near the training entrance, by the ACCUNIQ sign. From the escalator it is near the central pillar.',
    ),
    canDo: l(
      'Пройти вимірювання з тренером або за правилами клубу. Не починай сам, якщо не знаєш процедуру.',
      'Take a measurement with a trainer or per club rules. Do not start alone if you do not know the procedure.',
    ),
    guideId: 'accuniq',
    keywords: 'accuniq акунік склад тіла аналіз bc380 body composition',
    related: [{ to: '/visit', label: l('Перший візит', 'First visit') }],
  },
  'locker-m': {
    title: l('Чоловіча роздягальня', 'Men’s locker room'),
    short: l('Чоловіча\nроздягальня', 'Men’s\nlockers'),
    category: 'comfort',
    description: l(
      'Шафки, лави і прохід до душових. Речі залишай тільки в зачиненій шафці.',
      'Lockers, benches and the way to the showers. Leave belongings only in a closed locker.',
    ),
    find: l(
      'Ліворуч одразу після турнікетів. На дверях позначка чоловічої роздягальні.',
      'On the left just after the turnstiles. The door is marked as the men’s locker room.',
    ),
    canDo: l(
      'Переодягнутися, залишити речі в шафці, пройти в душ.',
      'Change, leave things in a locker, and go through to the showers.',
    ),
    guideId: 'locker',
    keywords: 'роздягальня чоловіча шафка locker room men',
    related: [{ to: '/guides/locker', label: l('Як закрити шафку', 'How to lock a locker') }],
  },
  'locker-w': {
    title: l('Жіноча роздягальня', 'Women’s locker room'),
    short: l('Жіноча\nроздягальня', 'Women’s\nlockers'),
    category: 'comfort',
    description: l(
      'Шафки, лави і прохід до душових. Зйомка на телефон тут недоречна.',
      'Lockers, benches and the way to the showers. Filming on a phone is not appropriate here.',
    ),
    find: l(
      'Праворуч одразу після турнікетів. На дверях позначка жіночої роздягальні.',
      'On the right just after the turnstiles. The door is marked as the women’s locker room.',
    ),
    canDo: l(
      'Переодягнутися, залишити речі в шафці, пройти в душ.',
      'Change, leave things in a locker, and go through to the showers.',
    ),
    guideId: 'locker',
    keywords: 'роздягальня жіноча шафка locker room women',
    related: [{ to: '/guides/locker', label: l('Як закрити шафку', 'How to lock a locker') }],
  },
  showers: {
    title: l('Душові', 'Showers'),
    short: l('Душові', 'Showers'),
    category: 'comfort',
    description: l(
      'Душові кабіни біля роздягалень. Фени — біля дзеркал, не в самій кабіні.',
      'Shower stalls by the locker rooms. Dryers are by the mirrors, not inside a stall.',
    ),
    find: l(
      'У глибині роздягальні, за рядами шафок. Волога підлога — йди обережно.',
      'At the back of the locker room, past the locker rows. The floor is wet, so walk carefully.',
    ),
    canDo: l(
      'Прийняти душ після тренування. Речі залиш у шафці, не на лаві під струменем води.',
      'Shower after training. Leave belongings in the locker, not on a bench under the water.',
    ),
    guideId: 'shower',
    keywords: 'душ душова shower',
    related: [{ to: '/guides/dryer', label: l('Як користуватися феном', 'How to use a dryer') }],
  },
  restroom: {
    title: l('Санвузол', 'Restroom'),
    short: l('Санвузол', 'Restroom'),
    category: 'comfort',
    description: l(
      'Туалет поруч із душовими. Якщо щось закінчилось або зламалось — напиши рецепції, не шукай комору.',
      'The restroom is next to the showers. If supplies are out or something is broken, tell reception.',
    ),
    find: l(
      'Між душовими і зоною води, двері з позначкою WC.',
      'Between the showers and the water station, through the door marked WC.',
    ),
    canDo: l('Користуватися туалетом. Зйомка і зберігання речей на підлозі тут не потрібні.', 'Use the restroom.'),
    keywords: 'туалет санвузол wc restroom toilet',
  },
  water: {
    title: l('Питна вода', 'Drinking water'),
    short: l('Вода', 'Water'),
    category: 'comfort',
    description: l(
      'Кулер або фонтанчик для своєї пляшки. Одноразові стаканчики залежать від клубу.',
      'A cooler or fountain for your own bottle. Disposable cups depend on the club.',
    ),
    find: l(
      'Біля вендингу, на межі роздягальні і залу. Шукай кран з позначкою води.',
      'By the vending machine, between the locker room and the gym. Look for the water tap.',
    ),
    canDo: l(
      'Набрати воду у свою пляшку. Не залишай пляшку на тренажері.',
      'Fill your own bottle. Do not leave it on a machine.',
    ),
    guideId: 'water',
    keywords: 'вода кулер питна water cooler',
  },
  vending: {
    title: l('Вендинг', 'Vending'),
    short: l('Вендинг', 'Vending'),
    category: 'service',
    description: l(
      'Автомат з напоями, водою і батончиками. Оплата карткою або телефоном.',
      'A machine with drinks, water and bars. Pay by card or phone.',
    ),
    find: l(
      'Поруч із питною водою, на шляху із роздягальні в зал.',
      'Next to the drinking water, on the way from the locker room to the gym.',
    ),
    canDo: l(
      'Купити напій або снек. Якщо товар не видався — не труси автомат, а відкрий інструкцію.',
      'Buy a drink or snack. If the item does not drop, do not shake the machine — open the guide.',
    ),
    guideId: 'vending',
    keywords: 'вендинг автомат покупка батончик протеїн vending snack',
  },
  medkit: {
    title: l('Медична аптечка', 'First-aid kit'),
    short: l('Аптечка', 'First aid'),
    category: 'service',
    description: l(
      'Аптечка для працівників клубу. Вона не замінює швидку і не видається «на самолікування».',
      'A first-aid kit for club staff. It does not replace an ambulance or self-treatment.',
    ),
    find: l(
      'Позначка на рецепції. Самостійно аптечку не відкривай — поклич адміністратора.',
      'Marked at reception. Do not open it yourself — call an administrator.',
    ),
    canDo: l(
      'Попросити працівника про допомогу. Якщо людині зле — паралельно телефонуй 103 або 112.',
      'Ask a staff member for help. If someone is unwell, also call 103 or 112.',
    ),
    keywords: 'аптечка медична first aid medkit',
    related: [
      { to: '/situations/unwell', label: l('Якщо стало зле', 'If you feel unwell') },
      { to: '/help#emergency', label: l('Екстрені контакти', 'Emergency contacts') },
    ],
  },
  cardio: {
    title: l('Кардіозона', 'Cardio area'),
    short: l('Кардіо', 'Cardio'),
    category: 'training',
    description: l(
      'Бігові доріжки, велосипеди та еліпси. Починай з повільного ходу і стоп-ключа.',
      'Treadmills, bikes and ellipticals. Start at an easy pace and use the safety clip.',
    ),
    find: l(
      'Перша частина залу за турнікетами, ближче до вікон.',
      'The first part of the gym after the turnstiles, closer to the windows.',
    ),
    canDo: l(
      'Ходити, бігти або крутити педалі. Після себе протри панель і поручні.',
      'Walk, run or pedal. Wipe the console and handles when you finish.',
    ),
    guideId: 'machines',
    keywords: 'кардіо доріжка бігова велосипед еліпс cardio treadmill',
  },
  machines: {
    title: l('Тренажерна зона', 'Machine area'),
    short: l('Тренажери', 'Machines'),
    category: 'training',
    description: l(
      'Блокові та важільні тренажери. Сидіння і вагу вистав до початку підходу.',
      'Cable and plate-loaded machines. Set the seat and the weight before the set.',
    ),
    find: l(
      'Праворуч від кардіо, у центральній частині залу.',
      'To the right of the cardio area, in the middle of the gym.',
    ),
    canDo: l(
      'Тренуватися на тренажерах. Якщо хід неочевидний — попроси чергового тренера, не вигадуй положення.',
      'Train on the machines. If the path of motion is unclear, ask the floor trainer.',
    ),
    guideId: 'machines',
    keywords: 'тренажер блок сидіння вага machine gym',
  },
  'free-weights': {
    title: l('Зона вільних ваг', 'Free weights'),
    short: l('Вільні\nваги', 'Free\nweights'),
    category: 'training',
    description: l(
      'Гантелі, грифи і лави. У 025 орієнтир — стіна #ТИТВОЯМЕТА і дзеркала. Млинці повертай на стійку.',
      'Dumbbells, bars and benches. In 025 look for the #ТИТВОЯМЕТА wall and the mirrors. Return plates to the rack.',
    ),
    find: l(
      'За тренажерами, біля стіни з написом #ТИТВОЯМЕТА і стійок із гантелями.',
      'Past the machines, by the #ТИТВОЯМЕТА wall and the dumbbell racks.',
    ),
    canDo: l(
      'Працювати з гантелями і штангою. Якщо потрібна страховка — попроси тренера, не випадкового гостя навпроти.',
      'Use dumbbells and a barbell. If you need a spot, ask a trainer.',
    ),
    guideId: 'machines',
    keywords: 'гантелі штанга вільні ваги dumbbell barbell',
  },
  functional: {
    title: l('Функціональна зона', 'Functional area'),
    short: l('Функціональна\nзона', 'Functional\narea'),
    category: 'training',
    description: l(
      'У 025 це зона з оранжевою станцією EXPLODE / функціональним ригом, мішками і медболами.',
      'In 025 this is the orange EXPLODE / functional rig area with bags and med balls.',
    ),
    find: l(
      'Праворуч від вільних ваг: світліше покриття з оранжевими лініями і оранжевий риг.',
      'To the right of the free weights: lighter floor with orange lanes and an orange rig.',
    ),
    canDo: l(
      'Робити функціональні комплекси, не перекриваючи прохід іншим.',
      'Do functional circuits without blocking the path for other people.',
    ),
    guideId: 'machines',
    keywords: 'функціональна зона explode риг functional',
  },
  group: {
    title: l('Зона групових занять', 'Group fitness studio'),
    short: l('Групові\nзаняття', 'Group\nclasses'),
    category: 'training',
    description: l(
      'Зал для групових тренувань за розкладом. Вхід посеред заняття — лише з дозволу тренера.',
      'The studio for scheduled classes. Entering mid-class needs the trainer’s OK.',
    ),
    find: l(
      'Окрема зала в кінці клубу. Розклад висить біля дверей і на рецепції.',
      'A separate studio at the far end. The schedule is by the door and at reception.',
    ),
    canDo: l(
      'Відвідати заняття за розкладом. Килимок і взуття залежать від конкретного класу.',
      'Join a scheduled class. Mat and shoes depend on that class.',
    ),
    keywords: 'групові заняття студія розклад class studio',
    related: [{ to: '/rules#group', label: l('Правила групових занять', 'Group class rules') }],
  },
}
