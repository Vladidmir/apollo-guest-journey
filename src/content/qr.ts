import type { QrLink } from '../types'
import { l } from '../types'

export const qrLinks: QrLink[] = [
  {
    code: 'ap025-reception',
    clubId: 'apollo-025',
    to: '/zones/reception',
    title: l('Рецепція Apollo 025', 'Apollo 025 reception'),
    place: l('На стійці рецепції', 'On the reception desk'),
  },
  {
    code: 'ap025-locker',
    clubId: 'apollo-025',
    to: '/guides/locker',
    title: l('Шафка з браслетом', 'Wristband locker'),
    place: l('Біля шафок', 'By the lockers'),
  },
  {
    code: 'ap025-vending',
    clubId: 'apollo-025',
    to: '/vending',
    title: l('Вендинг Apollo 025', 'Apollo 025 vending'),
    place: l('На автоматі', 'On the machine'),
  },
  {
    code: 'ap025-cardio',
    clubId: 'apollo-025',
    to: '/guides/machines',
    title: l('Тренажери Apollo 025', 'Apollo 025 machines'),
    place: l('У кардіозоні', 'In the cardio area'),
  },
  {
    code: 'ap025-kasa',
    clubId: 'apollo-025',
    to: '/guides/kasa',
    title: l('Каса самообслуговування 025', '025 self-checkout'),
    place: l('На терміналі каси', 'On the checkout kiosk'),
  },
  {
    code: 'ap025-accuniq',
    clubId: 'apollo-025',
    to: '/guides/accuniq',
    title: l('Accuniq 025', 'Accuniq 025'),
    place: l('Біля приладу Accuniq', 'By the Accuniq device'),
  },
  {
    code: 'ap025-retail',
    clubId: 'apollo-025',
    to: '/zones/retail',
    title: l('Підживинки 025', 'Refreshments 025'),
    place: l('Біля стелажа добавок', 'By the supplement shelf'),
  },
  {
    code: 'ap014-reception',
    clubId: 'apollo-014',
    to: '/zones/reception',
    title: l('Рецепція Apollo 014', 'Apollo 014 reception'),
    place: l('На стійці рецепції', 'On the reception desk'),
  },
  {
    code: 'ap014-locker',
    clubId: 'apollo-014',
    to: '/guides/locker',
    title: l('Шафка з PIN-кодом', 'PIN-code locker'),
    place: l('Біля шафок', 'By the lockers'),
  },
  {
    code: 'ap014-vending',
    clubId: 'apollo-014',
    to: '/vending',
    title: l('Вендинг Apollo 014', 'Apollo 014 vending'),
    place: l('На автоматі', 'On the machine'),
  },
]

export function findQr(code: string | undefined): QrLink | undefined {
  return qrLinks.find((item) => item.code === code)
}
