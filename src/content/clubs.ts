import type { Club, L, Room } from '../types'
import { l } from '../types'

/** Club records. Apollo 025 uses public facts from apollo.online; other clubs stay demo. */
export const clubs: Club[] = [
  {
    id: 'apollo-025',
    code: '025',
    title: l('APOLLO NEXT 025', 'APOLLO NEXT 025'),
    city: l('Київ', 'Kyiv'),
    mall: l('ТРЦ Ocean Plaza', 'Ocean Plaza mall'),
    address: l('вул. Антоновича, 176, Київ, 03150', '176 Antonovycha St, Kyiv, 03150'),
    phone: '',
    hours: l('Пн–Пт 06:30–23:00 · Сб–Нд 08:00–22:00', 'Mon–Fri 06:30–23:00 · Sat–Sun 08:00–22:00'),
    hoursStaff: l(
      'Координатори: Пн–Пт 07:00–22:00 · Сб–Нд 08:00–21:00',
      'Coordinators: Mon–Fri 07:00–22:00 · Sat–Sun 08:00–21:00',
    ),
    findHint: l(
      'Вхід у спорт простір — перед входом до «Ашан», ліве крило ТРЦ Ocean Plaza, метро «Либідська».',
      'Club entrance is before Auchan, left wing of Ocean Plaza, Lybidska metro.',
    ),
    lockType: 'bracelet',
    wifiSsid: 'Apollo025-Guest',
    hasVending: true,
    hasKasa: true,
    hasAccuniq: true,
    trainer: l(
      'На першому візиті тренер проводить коротку екскурсію і допомагає з цілями. Accuniq BC380 — біля залу, біля стійки з позначкою ACCUNIQ.',
      'On the first visit a trainer gives a short tour and helps set goals. Accuniq BC380 is by the gym floor, near the ACCUNIQ sign.',
    ),
    siteUrl: 'https://apollo.online/clubs/apollo-next-025-trcz-ocean-plaza/',
    supportUrl: 'https://apollo.online/houston/',
    tour360Url: 'https://apollo.online/clubs/apollo-next-025-trcz-ocean-plaza/#tour',
    mapsUrl:
      'https://www.google.com/maps/place/APOLLO+NEXT+025/@50.411549,30.5235799,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4cf58dd578559:0x3be64614e71f55b4!8m2!3d50.411549!4d30.5235799!16s%2Fg%2F11vrlbbvv9',
    areaM2: 900,
    lockers: 240,
    machines: 125,
  },
  {
    id: 'apollo-014',
    code: '014',
    title: l('APOLLO NEXT 014', 'APOLLO NEXT 014'),
    city: l('Львів', 'Lviv'),
    mall: l('Демо-локація', 'Demo location'),
    address: l('вул. Демонстраційна, 14, Львів', '14 Demonstration Street, Lviv'),
    phone: '',
    hours: l('щодня 07:00–22:00', 'daily 07:00–22:00'),
    hoursStaff: l('Координатори за графіком рецепції', 'Coordinators follow reception hours'),
    findHint: l('Демонстраційний клуб для порівняння замків PIN.', 'Demo club used to compare PIN lockers.'),
    lockType: 'pin',
    wifiSsid: 'Apollo014-Guest',
    hasVending: true,
    hasKasa: false,
    hasAccuniq: false,
    trainer: l(
      'Тренер чергує у тренажерній залі. Розклад вступного інструктажу — на рецепції.',
      'A trainer is on duty in the weight room. The intro schedule is at reception.',
    ),
    siteUrl: 'https://apollo.online/',
    supportUrl: 'https://apollo.online/houston/',
    tour360Url: 'https://apollo.online/',
    mapsUrl: 'https://apollo.online/',
  },
]

export const layouts: Record<string, Room[]> = {
  'apollo-025': [
    { id: 'reception', x: 18, y: 16, w: 120, h: 64 },
    { id: 'turnstiles', x: 148, y: 16, w: 90, h: 64 },
    { id: 'kasa', x: 248, y: 16, w: 54, h: 64 },
    { id: 'retail', x: 18, y: 92, w: 134, h: 56 },
    { id: 'vending', x: 168, y: 92, w: 70, h: 56 },
    { id: 'water', x: 248, y: 92, w: 54, h: 56 },
    { id: 'locker-m', x: 18, y: 160, w: 134, h: 88 },
    { id: 'locker-w', x: 168, y: 160, w: 134, h: 88 },
    { id: 'showers', x: 18, y: 260, w: 100, h: 72 },
    { id: 'restroom', x: 126, y: 260, w: 70, h: 72 },
    { id: 'medkit', x: 208, y: 260, w: 94, h: 32 },
    { id: 'accuniq', x: 208, y: 300, w: 94, h: 32 },
    { id: 'cardio', x: 18, y: 348, w: 134, h: 88 },
    { id: 'machines', x: 168, y: 348, w: 134, h: 88 },
    { id: 'free-weights', x: 18, y: 448, w: 134, h: 72 },
    { id: 'functional', x: 168, y: 448, w: 134, h: 72 },
    { id: 'group', x: 18, y: 532, w: 284, h: 58 },
  ],
  'apollo-014': [
    { id: 'reception', x: 18, y: 16, w: 284, h: 64 },
    { id: 'turnstiles', x: 18, y: 92, w: 284, h: 52 },
    { id: 'locker-m', x: 18, y: 160, w: 134, h: 110 },
    { id: 'locker-w', x: 168, y: 160, w: 134, h: 110 },
    { id: 'showers', x: 18, y: 286, w: 90, h: 80 },
    { id: 'restroom', x: 116, y: 286, w: 70, h: 80 },
    { id: 'water', x: 194, y: 286, w: 108, h: 36 },
    { id: 'vending', x: 194, y: 330, w: 108, h: 36 },
    { id: 'cardio', x: 18, y: 384, w: 284, h: 90 },
    {
      id: 'machines',
      x: 18,
      y: 486,
      w: 284,
      h: 100,
      note: l(
        'У цьому клубі вільні ваги стоять у тій самій залі. Окремої зони немає.',
        'In this club the free weights share this room. There is no separate area.',
      ),
      find: l(
        'Одна тренажерна зала одразу за турнікетами. Вільні ваги — у дальньому кінці біля дзеркал.',
        'One weight room sits just past the turnstiles. Free weights are at the far end by the mirrors.',
      ),
    },
  ],
}

export const tours: Record<string, string[]> = {
  'apollo-025': [
    'reception',
    'turnstiles',
    'kasa',
    'retail',
    'locker-m',
    'accuniq',
    'cardio',
    'machines',
    'free-weights',
    'functional',
    'group',
    'showers',
    'vending',
  ],
  'apollo-014': ['reception', 'turnstiles', 'locker-m', 'cardio', 'machines', 'showers', 'vending', 'water'],
}

export function layoutOf(clubId: string): Room[] {
  return layouts[clubId] ?? []
}

export function tourOf(clubId: string): string[] {
  return tours[clubId] ?? []
}

export function hasZone(clubId: string, zoneId: string): boolean {
  return layoutOf(clubId).some((room) => room.id === zoneId)
}

export function lockLabel(lockType: Club['lockType']): L {
  return lockType === 'pin'
    ? l('Шафки з PIN-кодом', 'PIN-code lockers')
    : l('Браслет: вхід, шафка, сейф', 'Wristband: entry, locker, safe')
}
