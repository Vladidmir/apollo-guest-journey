import type { Product, Step } from '../types'
import { l } from '../types'

const step = (titleUk: string, titleEn: string, textUk: string, textEn: string): Step => ({
  title: l(titleUk, titleEn),
  text: l(textUk, textEn),
})

export const vendingSteps: Step[] = [
  step(
    'Знайди автомат',
    'Find the machine',
    'На карті клубу це зона «Вендинг», поруч із питною водою.',
    'On the club map this is the Vending area, next to the drinking water.',
  ),
  step(
    'Обери товар на вітрині',
    'Choose an item on the display',
    'Запам’ятай номер комірки. Ціна на кнопці важливіша за довідник у застосунку.',
    'Remember the selection number. The price on the button matters more than the list in the app.',
  ),
  step(
    'Сплати один раз',
    'Pay once',
    'Картка або телефон, якщо термінал це вміє. Дочекайся підтвердження, не прикладай картку знову.',
    'Card or phone, if that terminal supports it. Wait for confirmation. Do not tap again.',
  ),
  step(
    'Забери товар із лотка',
    'Take the item from the tray',
    'Перевір, що впало саме те, що ти обрав. Лоток не відкривай силою.',
    'Check it is the item you chose. Do not force the tray open.',
  ),
  step(
    'Якщо товар не видався',
    'If the item does not drop',
    'Не труси автомат. Відкрий алгоритм для цієї ситуації і поклич рецепцію.',
    'Do not shake the machine. Open the guide for this case and call reception.',
  ),
  step(
    'Якщо гроші зняли, а товару немає',
    'If money was taken and there is no item',
    'Не плати вдруге. Збережи сповіщення банку і звернись до рецепції.',
    'Do not pay again. Keep the bank notification and talk to reception.',
  ),
  step(
    'Якщо автомат не працює',
    'If the machine is off',
    'Не чіпай розетку і не перезавантажуй його. Це робить працівник клубу.',
    'Do not touch the plug or reboot it. Club staff do that.',
  ),
]

export const products: Product[] = [
  {
    id: 'shake',
    clubIds: ['apollo-025'],
    title: l('Протеїновий напій', 'Protein drink'),
    text: l('Готовий напій у банці або пляшці. Склад читай на етикетці автомата.', 'A ready drink in a can or bottle. Read the label on the machine.'),
    price: '70 грн',
    tag: l('Напій', 'Drink'),
  },
  {
    id: 'isotonic',
    clubIds: ['apollo-025'],
    title: l('Ізотонік', 'Isotonic'),
    text: l('Напій поруч із водою. Наявність залежить від завантаження автомата.', 'A drink next to the water. Stock depends on the last refill.'),
    price: '55 грн',
    tag: l('Напій', 'Drink'),
  },
  {
    id: 'bar',
    clubIds: ['apollo-025', 'apollo-014'],
    title: l('Батончик', 'Bar'),
    text: l('Солодкий або протеїновий батончик. Точну назву дивись на вітрині.', 'A sweet or protein bar. Check the exact name on the display.'),
    price: '45 грн',
    tag: l('Перекус', 'Snack'),
  },
  {
    id: 'water-bottle',
    clubIds: ['apollo-025', 'apollo-014'],
    title: l('Вода', 'Water'),
    text: l('Пляшка води, якщо свою забув. Питний фонтанчик усе одно безкоштовний для своєї пляшки.', 'Bottled water if you forgot yours. The fountain is still free for your own bottle.'),
    price: '30 грн',
    tag: l('Вода', 'Water'),
  },
]

export function productsFor(clubId: string): Product[] {
  return products.filter((item) => item.clubIds.includes(clubId))
}
