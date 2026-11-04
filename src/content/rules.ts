import type { RuleBlock } from '../types'
import { l } from '../types'

export const rules: RuleBlock[] = [
  {
    id: 'visit',
    title: l('Правила відвідування', 'Visiting rules'),
    items: [
      l('Доступ у клуб особистий: не передавай браслет, картку або PIN іншому.', 'Access is personal: do not hand your wristband, card or PIN to someone else.'),
      l('Вхід і вихід — лише через турнікет, по одному.', 'Enter and leave only through the turnstile, one at a time.'),
      l('Вікові та гостьові умови конкретного клубу підкаже рецепція. Не вирішуй їх за табличкою в застосунку.', 'Age and guest rules for this club come from reception, not from a guess in the app.'),
      l('Якщо закриваєш візит, забери речі. Шафка не є камерою схову до наступного разу.', 'When you finish, take your things. A locker is not storage until next time.'),
    ],
  },
  {
    id: 'machines',
    title: l('Правила користування тренажерами', 'Machine rules'),
    items: [
      l('Не займай тренажер, позначений як несправний.', 'Do not use a machine marked out of order.'),
      l('Повертай гантелі і млинці на стійки.', 'Return dumbbells and plates to the racks.'),
      l('Не кидай вільні ваги на підлогу.', 'Do not drop free weights on the floor.'),
      l('Протри контактні місця після себе.', 'Wipe contact points when you finish.'),
      l('Якщо техніка незрозуміла або боляче — зупинись і поклич тренера.', 'If the technique is unclear or it hurts, stop and call a trainer.'),
    ],
  },
  {
    id: 'locker-room',
    title: l('Правила роздягальні', 'Locker room rules'),
    items: [
      l('Не знімай інших людей на телефон.', 'Do not film other people.'),
      l('Речі тримай у зачиненій шафці, не на лаві «на хвилину».', 'Keep things in a closed locker, not on a bench “for a minute”.'),
      l('Поважай дистанцію. Голосна музика з колонки тут не потрібна.', 'Give people space. A loud speaker is not welcome here.'),
    ],
  },
  {
    id: 'lockers',
    title: l('Правила шафок', 'Locker rules'),
    items: [
      l('Зачиняй лише вільну шафку.', 'Lock only a free locker.'),
      l('Не пиши код на дверцятах і не залишай браслет у замку.', 'Do not write the code on the door or leave a wristband in the lock.'),
      l('Не застосовуй силу, якщо замок не відкрився: далі допомагає рецепція.', 'Do not force a lock that will not open: reception helps from there.'),
      l('Після тренування залиш шафку порожньою і відчиненою.', 'After training, leave the locker empty and open.'),
    ],
  },
  {
    id: 'group',
    title: l('Правила групових занять', 'Group class rules'),
    zoneId: 'group',
    items: [
      l('Приходь за кілька хвилин до початку. Розклад — біля зали і на рецепції.', 'Arrive a few minutes early. The schedule is by the studio and at reception.'),
      l('Якщо запізнюєшся, заходь лише з дозволу тренера.', 'If you are late, enter only if the trainer agrees.'),
      l('Скажи тренеру про травму до старту, не посеред складного блоку.', 'Tell the trainer about an injury before the start, not mid-block.'),
      l('Килимок і взуття залежать від заняття. Уточни в описі на дверях.', 'Mat and shoes depend on the class. Check the note on the door.'),
    ],
  },
  {
    id: 'safety',
    title: l('Правила безпеки', 'Safety rules'),
    items: [
      l('Зупинись, якщо паморочиться в голові, нудить або біль різкий.', 'Stop if you feel dizzy, sick or a sharp pain.'),
      l('Екстрена допомога: 103 або 112, і одразу працівник клубу.', 'Emergency help: 103 or 112, and a staff member at once.'),
      l('Не блокуй проходи сумками і грифами.', 'Do not block walkways with bags and bars.'),
      l('Не ремонтуй обладнання самостійно.', 'Do not repair equipment yourself.'),
    ],
  },
  {
    id: 'hygiene',
    title: l('Чистота і гігієна', 'Cleanliness and hygiene'),
    items: [
      l('У зал — у змінному взутті, якщо клуб це просить на вході.', 'Wear indoor shoes on the gym floor when the club asks for them at the entrance.'),
      l('Рушник клади на лаву, з якою торкаєшся.', 'Put a towel on the bench you lie on.'),
      l('Після душу вимкни воду.', 'Turn the shower off when you leave.'),
      l('Якщо в зоні брудно або закінчились серветки — скажи рецепції, не проходь повз.', 'If an area is dirty or wipes have run out, tell reception.'),
    ],
  },
]
