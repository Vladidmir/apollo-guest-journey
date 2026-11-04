import type { Club } from '../types'

const P = '/photos'

export type MediaShot = {
  src: string
  alt: { uk: string; en: string }
}

const shot = (src: string, uk: string, en: string): MediaShot => ({ src, alt: { uk, en } })

const demoReception = [
  shot(`${P}/reception-apollo.jpg`, 'Рецепція і турнікети біля входу', 'Reception and turnstiles at the entrance'),
  shot(`${P}/reception-bar.jpg`, 'Рецепція і зона біля стійки', 'Reception and the area by the desk'),
  shot(`${P}/reception-turnstile.jpg`, 'Стійка рецепції і прохід у зал', 'Reception desk and the way into the gym'),
]

const demoTurnstiles = [
  shot(`${P}/turnstiles.jpg`, 'Турнікети на вході в клуб', 'Turnstiles at the club entrance'),
  shot(`${P}/reception-turnstile.jpg`, 'Турнікет поруч із рецепцією', 'Turnstile next to reception'),
]

const lockersPin = [
  shot(`${P}/locker-keypad.jpg`, 'Шафка з PIN-клавіатурою', 'Locker with a PIN keypad'),
  shot(`${P}/lockers-showers-pin.jpg`, 'Роздягальня з шафками і проходом до душу', 'Locker room with lockers and the way to the showers'),
  shot(`${P}/lockers-etiquette.jpg`, 'Роздягальня і правила біля шафок', 'Locker room and the etiquette board by the lockers'),
]

const lockersBracelet = [
  shot(`${P}/lockers-etiquette.jpg`, 'Роздягальня і правила біля шафок', 'Locker room and the etiquette board by the lockers'),
  shot(`${P}/lockers-showers-pin.jpg`, 'Ряди шафок і прохід до душових', 'Rows of lockers and the way to the showers'),
]

const showers = [
  shot(`${P}/showers.jpg`, 'Душові кабіни', 'Shower stalls'),
  shot(`${P}/lockers-showers-pin.jpg`, 'Прохід до душу з роздягальні', 'Way to the showers from the locker room'),
]

const demoCardio = [shot(`${P}/cardio-zone.jpg`, 'Кардіозона з біговими доріжками', 'Cardio area with treadmills')]
const demoMachines = [shot(`${P}/cardio-zone.jpg`, 'Зал: кардіо і силові тренажери', 'Gym floor: cardio and strength machines')]

const demoVending = [
  shot(`${P}/vending-drinks.jpg`, 'Автомат із напоями', 'Drinks vending machine'),
  shot(`${P}/vending-touch-water.jpg`, 'Сенсорний вендинг і питна вода поруч', 'Touchscreen vending and drinking water beside it'),
  shot(`${P}/vending-supplements.jpg`, 'Автомат із добавками', 'Supplement vending machine'),
  shot(`${P}/vending-shake.jpg`, 'Автомат із протеїновими напоями', 'Protein shake machine'),
]

const water = [shot(`${P}/vending-touch-water.jpg`, 'Питна вода біля вендингу', 'Drinking water next to vending')]
const dryer = [
  shot(`${P}/lockers-showers-pin.jpg`, 'Дзеркало і стільниця в роздягальні', 'Mirror and counter in the locker room'),
  shot(`${P}/locker-keypad.jpg`, 'Роздягальня біля дзеркал', 'Locker room by the mirrors'),
]

const real025 = {
  reception: [
    shot(`${P}/025-reception.png`, 'Рецепція APOLLO NEXT 025 у Ocean Plaza', 'APOLLO NEXT 025 reception at Ocean Plaza'),
    shot(`${P}/025-turnstiles.png`, 'Вхідна зона з турнікетами 025', '025 entrance area with turnstiles'),
    shot(`${P}/025-retail.png`, 'Зона біля рецепції: Підживинки і каса', 'Area by reception: refreshments and checkout'),
  ],
  turnstiles: [
    shot(`${P}/025-turnstiles.png`, 'Турнікети APOLLO NEXT 025', 'APOLLO NEXT 025 turnstiles'),
    shot(`${P}/025-reception.png`, 'Рецепція і прохід у 025', 'Reception and entry at 025'),
    shot(`${P}/025-overview.png`, 'Вид у зал з ескалатора 025', 'View into the 025 gym from the escalator'),
  ],
  kasa: [
    shot(`${P}/025-kasa.png`, 'Каса самообслуговування APOLLO NEXT', 'APOLLO NEXT self-service checkout'),
    shot(`${P}/025-retail.png`, 'Каса біля зони Підживинки', 'Checkout by the refreshments zone'),
  ],
  retail: [
    shot(`${P}/025-retail.png`, 'Підживинки, мерч і каса 025', 'Refreshments, merch and checkout at 025'),
    shot(`${P}/025-kasa.png`, 'Стелаж добавок і каса самообслуговування', 'Supplement shelf and self-checkout'),
  ],
  vending: [
    shot(`${P}/025-kasa.png`, 'Вендинг і каса біля стелажа добавок', 'Vending and checkout by the supplement shelf'),
    ...demoVending,
  ],
  water: [shot(`${P}/025-retail.png`, 'Зона біля Підживинок і води', 'Area by refreshments and water'), ...water],
  cardio: [
    shot(`${P}/025-overview.png`, 'Огляд залу 025 з ескалатора', 'Overview of gym 025 from the escalator'),
    shot(`${P}/cardio-zone.jpg`, 'Кардіозона', 'Cardio area'),
  ],
  machines: [
    shot(`${P}/025-machines.png`, 'Силові тренажери APOLLO NEXT 025', 'Strength machines at APOLLO NEXT 025'),
    shot(`${P}/025-overview.png`, 'Зал 025 зверху', 'Gym 025 from above'),
  ],
  freeWeights: [
    shot(`${P}/025-free-weights.png`, 'Вільні ваги і стіна #ТИТВОЯМЕТА', 'Free weights and the #ТИТВОЯМЕТА wall'),
    shot(`${P}/025-overview.png`, 'Вільні ваги ліворуч на огляді залу', 'Free weights on the left in the gym overview'),
  ],
  functional: [
    shot(`${P}/025-overview.png`, 'Функціональна зона з оранжевим ригом', 'Functional area with the orange rig'),
  ],
  accuniq: [
    shot(`${P}/025-overview.png`, 'Зал 025: Accuniq біля входу в тренувальну зону', 'Gym 025: Accuniq near the training entrance'),
  ],
  home: [
    shot(`${P}/025-reception.png`, 'Рецепція APOLLO NEXT 025', 'APOLLO NEXT 025 reception'),
    shot(`${P}/025-overview.png`, 'Зал APOLLO NEXT 025', 'APOLLO NEXT 025 gym floor'),
    shot(`${P}/025-turnstiles.png`, 'Турнікети APOLLO NEXT 025', 'APOLLO NEXT 025 turnstiles'),
  ],
}

function lockers(club: Club): MediaShot[] {
  return club.lockType === 'pin' ? lockersPin : lockersBracelet
}

function is025(club: Club): boolean {
  return club.id === 'apollo-025'
}

export function zonePhotos(club: Club, zoneId: string): MediaShot[] {
  if (is025(club)) {
    switch (zoneId) {
      case 'reception':
        return real025.reception
      case 'turnstiles':
        return real025.turnstiles
      case 'kasa':
        return real025.kasa
      case 'retail':
        return real025.retail
      case 'vending':
        return real025.vending
      case 'water':
        return real025.water
      case 'cardio':
        return real025.cardio
      case 'machines':
        return real025.machines
      case 'free-weights':
        return real025.freeWeights
      case 'functional':
        return real025.functional
      case 'accuniq':
        return real025.accuniq
      case 'medkit':
        return [real025.reception[0]]
      case 'group':
        return [real025.cardio[0]]
      default:
        break
    }
  }

  switch (zoneId) {
    case 'reception':
      return demoReception
    case 'turnstiles':
      return demoTurnstiles
    case 'locker-m':
    case 'locker-w':
      return lockers(club)
    case 'showers':
      return showers
    case 'restroom':
      return [showers[1] ?? showers[0]]
    case 'water':
      return water
    case 'vending':
      return club.hasVending ? demoVending : []
    case 'kasa':
      return club.hasKasa ? real025.kasa : []
    case 'retail':
      return club.hasKasa ? real025.retail : []
    case 'accuniq':
      return club.hasAccuniq ? real025.accuniq : []
    case 'medkit':
      return [demoReception[0]]
    case 'cardio':
      return demoCardio
    case 'machines':
    case 'free-weights':
    case 'functional':
      return demoMachines
    case 'group':
      return [demoReception[0]]
    default:
      return []
  }
}

export function guidePhotos(club: Club, guideId: string): MediaShot[] {
  switch (guideId) {
    case 'turnstile':
      return is025(club) ? real025.turnstiles : demoTurnstiles
    case 'locker':
      return lockers(club)
    case 'shower':
      return showers
    case 'dryer':
      return dryer
    case 'water':
      return is025(club) ? real025.water : water
    case 'terminal':
    case 'kasa':
      return is025(club) || club.hasKasa ? real025.kasa : [demoVending[1], demoVending[0]]
    case 'wifi':
      return is025(club) ? [real025.reception[0]] : [demoReception[0]]
    case 'machines':
      return is025(club) ? real025.machines : demoMachines
    case 'vending':
      return is025(club) ? real025.vending : demoVending
    case 'accuniq':
      return real025.accuniq
    default:
      return []
  }
}

export function homePhotos(club?: Club): MediaShot[] {
  if (club && is025(club)) return real025.home
  return [demoReception[0], demoCardio[0], lockersBracelet[0]]
}

export function vendingPhotos(club?: Club): MediaShot[] {
  if (club && is025(club)) return real025.vending
  return demoVending
}
