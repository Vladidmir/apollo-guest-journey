import type { Club, L, VisitStep } from '../types'
import { l } from '../types'

export const packItems: L[] = [
  l('Спортивний одяг і змінне взуття.', 'Workout clothes and indoor shoes.'),
  l('Пляшка для води. Набрати її можна вже в клубі.', 'A water bottle. You can fill it at the club.'),
  l('Рушник, або питання на рецепції, чи є він у цьому клубі.', 'A towel, or a question at reception about whether this club has one.'),
  l('Телефон, якщо абонемент або код доступу в ньому.', 'Your phone, if the membership or access code lives there.'),
  l('Документ — лише якщо рецепція просить його для договору. Не носи зайве.', 'ID only if reception asks for it for a contract. Do not bring extra valuables.'),
]

export function visitSteps(club: Club): VisitStep[] {
  const access =
    club.lockType === 'pin'
      ? l(
          'На рецепції отримай доступ і PIN від шафки. Це різні речі: прохід у клуб і код дверцят.',
          'At reception, get access and a locker PIN. They are different: entry to the club and the code for the door.',
        )
      : l(
          'На рецепції отримай браслет. Ним і заходиш через турнікет, і зачиняєш шафку.',
          'At reception, pick up a wristband. It both opens the turnstile and locks the locker.',
        )

  const locker =
    club.lockType === 'pin'
      ? l(
          'Поклади верхній одяг у вільну шафку, введи PIN і запам’ятай номер дверцят.',
          'Put your coat in a free locker, enter the PIN and remember the door number.',
        )
      : l(
          'Поклади верхній одяг у вільну шафку і приклади браслет, доки замок не клацне.',
          'Put your coat in a free locker and tap the wristband until the lock clicks.',
        )

  return [
    {
      id: 'pack',
      title: l('Збери сумку', 'Pack your bag'),
      text: l(
        'Одяг, взуття, вода, рушник. Цінне, без чого можна обійтися, краще залишити вдома.',
        'Clothes, shoes, water, towel. Leave valuables you do not need at home.',
      ),
    },
    {
      id: 'arrive',
      title: l('Знайди вхід і рецепцію', 'Find the entrance and reception'),
      text: club.findHint,
    },
    {
      id: 'access',
      title: l('Отримай доступ', 'Get access'),
      text: access,
    },
    {
      id: 'coat',
      title: l('Залиш верхній одяг', 'Leave your coat'),
      text: locker,
    },
    {
      id: 'change',
      title: l('Переодягнись', 'Change'),
      text: l(
        'Роздягальня позначена на дверях. Вуличне взуття не неси в зал, якщо на рецепції просили змінне.',
        'The locker room is marked on the door. Do not wear outdoor shoes on the gym floor if reception asked for indoor ones.',
      ),
    },
    {
      id: 'trainer',
      title: l('Знайди тренера, якщо він потрібен', 'Find a trainer if you need one'),
      text: club.trainer,
    },
    ...(club.hasAccuniq
      ? [
          {
            id: 'accuniq',
            title: l('Accuniq зі стартовим вимірюванням', 'Accuniq starter measurement'),
            text: l(
              'На першому візиті тренер може провести аналіз складу тіла на Accuniq BC380. Не починай прилад сам, якщо не знаєш протокол.',
              'On the first visit a trainer may run Accuniq BC380 body composition. Do not start the device alone if you do not know the protocol.',
            ),
          },
        ]
      : []),
    {
      id: 'train',
      title: l('Почни тренування', 'Start training'),
      text: l(
        'Кардіо або легкі тренажери — спокійний старт. Вільні ваги в 025 — біля стіни #ТИТВОЯМЕТА.',
        'Cardio or light machines are a calm start. Free weights in 025 sit by the #ТИТВОЯМЕТА wall.',
      ),
    },
    {
      id: 'finish',
      title: l('Заверши і вийди', 'Finish and leave'),
      text: l(
        'Душ, усі речі з шафки, шафка відчинена. Вихід через турнікет тим самим доступом. Браслет здай, якщо його видавали.',
        'Shower, empty the locker, leave it open. Exit through the turnstile with the same pass. Return a wristband if you were given one.',
      ),
    },
  ]
}
