import type { Club, Guide, Step } from '../types'
import { l } from '../types'

const step = (titleUk: string, titleEn: string, textUk: string, textEn: string): Step => ({
  title: l(titleUk, titleEn),
  text: l(textUk, textEn),
})

function locker(club: Club): Guide {
  if (club.lockType === 'pin') {
    return {
      id: 'locker',
      icon: 'lock',
      title: l('Шафка з PIN-кодом', 'PIN-code locker'),
      summary: l(
        'У цьому клубі шафка зачиняється кодом з рецепції, не браслетом.',
        'In this club the locker closes with a code from reception, not a wristband.',
      ),
      seconds: 40,
      helpTo: '/situations/locker-stuck',
      keywords: 'шафка замок пін pin код keypad locker',
      steps: [
        step(
          'Візьми код на рецепції',
          'Get the code at reception',
          'Це PIN саме від шафки. Він не є паролем Wi-Fi і не є номером дверцят.',
          'This PIN is for the locker only. It is not the Wi-Fi password and not the door number.',
        ),
        step(
          'Обери вільну шафку',
          'Choose a free locker',
          'Вільна шафка відчинена. Не чіпай зачинені: там речі іншого гостя.',
          'A free locker is open. Leave closed ones alone: they hold someone else’s things.',
        ),
        step(
          'Введи код і зачини дверцята',
          'Enter the code and close the door',
          'Набери PIN і дочекайся сигналу. Потім зачини дверцята і потягни ручку — вони не мають відкритися.',
          'Enter the PIN and wait for the signal. Close the door and tug the handle — it should stay shut.',
        ),
        step(
          'Запам’ятай номер шафки',
          'Remember the locker number',
          'Без номера код не підкаже, які дверцята твої. Збережи номер у нотатках, не пиши його на дверцятах.',
          'Without the number, the code will not tell you which door is yours. Save it in notes, not on the door.',
        ),
        step(
          'Щоб відкрити, введи той самий PIN',
          'To open, enter the same PIN',
          'Набери код, дочекайся сигналу і лише потім тягни дверцята. Не бий по клавішах повторно, якщо замок думає.',
          'Enter the code, wait for the signal, then pull. Do not hammer the keys while the lock is thinking.',
        ),
        step(
          'Перед виходом забери все',
          'Take everything before you leave',
          'Порожня шафка має лишитися відчиненою. Речі «до завтра» клуб не зберігає як камеру схову.',
          'An empty locker should be left open. The club does not keep things overnight as storage.',
        ),
      ],
      mistakes: [
        l('Плутаєш номер шафки і PIN.', 'Mixing up the locker number and the PIN.'),
        l('Тягнеш дверцята до звукового сигналу.', 'Pulling the door before the beep.'),
        l('Багато разів поспіль натискаєш клавіші, доки замок не блокується.', 'Mashing the keys until the lock blocks itself.'),
        l('Залишаєш речі і йдеш з клубу.', 'Leaving belongings behind when you exit.'),
      ],
    }
  }

  return {
    id: 'locker',
    icon: 'lock',
    title: l('Шафка на браслеті', 'Wristband locker'),
    summary: l(
      'У цьому клубі шафка зачиняється тим самим браслетом, який відкриває турнікет.',
      'In this club the locker uses the same wristband that opens the turnstile.',
    ),
    seconds: 40,
    helpTo: '/situations/locker-stuck',
    keywords: 'шафка замок браслет rfid locker wristband',
    steps: [
      step(
        'Візьми браслет на рецепції',
        'Pick up the wristband at reception',
        'Не передавай його іншій людині: браслет прив’язаний до твого візиту.',
        'Do not hand it to someone else: the wristband is tied to your visit.',
      ),
      step(
        'Обери вільну шафку',
        'Choose a free locker',
        'Вільна — це відчинені дверцята. Зачинена шафка вже зайнята.',
        'A free locker has an open door. A closed locker is already taken.',
      ),
      step(
        'Поклади речі і приклади браслет',
        'Put your things in and tap the wristband',
        'Зачини дверцята і приклади браслет до зчитувача, доки замок не клацне. Не смикай ручку раніше.',
        'Close the door and hold the wristband on the reader until the lock clicks. Do not tug early.',
      ),
      step(
        'Запам’ятай номер',
        'Remember the number',
        'Браслет відкриє лише твою шафку, але номер допомагає знайти її в ряду. Можна сфотографувати номер.',
        'The wristband opens only your locker, but the number helps you find it. A photo of the number is fine.',
      ),
      step(
        'Щоб відкрити, приклади той самий браслет',
        'To open, tap the same wristband',
        'Тримай браслет біля зчитувача рівно, доки не почуєш клацання. Тоді тягни дверцята.',
        'Hold the wristband flat on the reader until you hear the click, then pull.',
      ),
      step(
        'Перед виходом забери все',
        'Take everything before you leave',
        'Залиш шафку відчиненою і порожньою. Здай браслет там, де сказала рецепція.',
        'Leave the locker open and empty. Return the wristband where reception told you.',
      ),
    ],
    mistakes: [
      l('Прикладаєш браслет на мить і одразу смикаєш дверцята.', 'Tapping for a split second and pulling at once.'),
      l('Намагаєшся відкрити шафку чужим браслетом.', 'Trying someone else’s wristband.'),
      l('Б’єш по замку, якщо він не клацнув.', 'Hitting the lock when it does not click.'),
      l('Лишаєш речі всередині і йдеш додому.', 'Leaving things inside and going home.'),
    ],
  }
}

function wifi(club: Club): Guide {
  return {
    id: 'wifi',
    icon: 'wifi',
    title: l('Гостьовий Wi-Fi', 'Guest Wi-Fi'),
    summary: l(
      `Мережа цього клубу: ${club.wifiSsid}. Пароль написаний на рецепції, не в чатах.`,
      `This club’s network: ${club.wifiSsid}. The password is posted at reception, not in chats.`,
    ),
    seconds: 30,
    helpTo: '/situations/wifi',
    keywords: 'wifi wi-fi вайфай інтернет пароль network',
    steps: [
      step(
        'Відкрий налаштування Wi-Fi',
        'Open Wi-Fi settings',
        'На телефоні увімкни Wi-Fi і зачекай список мереж. Мобільний інтернет можна не вимикати.',
        'Turn Wi-Fi on and wait for the network list. You can leave mobile data on.',
      ),
      step(
        'Обери мережу клубу',
        'Choose the club network',
        `Потрібна назва ${club.wifiSsid}. Мережі зі словами Staff або Private не для гостей.`,
        `You want ${club.wifiSsid}. Networks with Staff or Private in the name are not for guests.`,
      ),
      step(
        'Введи пароль із таблички',
        'Enter the password from the sign',
        'Табличка стоїть на рецепції і в роздягальні. Не проси пароль у незнайомих гостей.',
        'The sign is at reception and in the locker room. Do not ask strangers for the password.',
      ),
      step(
        'Якщо телефон пам’ятає старий пароль',
        'If the phone remembers an old password',
        'Забудь цю мережу в налаштуваннях і підключись ще раз. Інакше телефон підсовує невірний ключ.',
        'Forget the network in settings and join again. Otherwise the phone keeps offering the old key.',
      ),
    ],
    mistakes: [
      l('Підключаєшся до сусідської або службової мережі.', 'Joining a neighbour’s or staff network.'),
      l('Дивишся пароль в старій нотатці з іншого клубу Apollo.', 'Using a saved password from another Apollo club.'),
      l('Вимикаєш Wi-Fi одразу після введення пароля, не дочекавшись з’єднання.', 'Turning Wi-Fi off before the connection finishes.'),
    ],
  }
}

const turnstile: Guide = {
  id: 'turnstile',
  icon: 'door',
  title: l('Турнікет', 'Turnstile'),
  summary: l(
    'Як зайти в клуб і як вийти. У APOLLO NEXT часто працює розпізнавання обличчя або браслет.',
    'How to enter and how to leave. APOLLO NEXT often uses face recognition or a wristband.',
  ),
  seconds: 30,
  helpTo: '/situations/turnstile-denied',
  keywords: 'турнікет вхід вийти браслет картка обличчя face turnstile',
  steps: [
    step(
      'Підійди з правильного боку',
      'Approach from the correct side',
      'Вхід — з боку рецепції. Вихід — зсередини залу. На 025 турнікети стоять одразу біля стійки.',
      'Entry is from the reception side. Exit is from inside the gym. At 025 the turnstiles sit right by the desk.',
    ),
    step(
      'Подивись у камеру або приклади браслет',
      'Look at the camera or tap the wristband',
      'Після першого візиту система може пускати за обличчям. Якщо ні — приклади браслет рівно до зчитувача і зачекай сигнал.',
      'After the first visit the system may let you in by face. If not, hold the wristband flat on the reader and wait for the signal.',
    ),
    step(
      'Проходь один і не зупиняйся в стулці',
      'Walk through alone and do not stop in the lane',
      'Одна людина на одне зчитування. Сумку тримай перед собою, не на планку турнікета.',
      'One person per scan. Keep your bag in front of you, not on the bar.',
    ),
    step(
      'На виході повтори те саме',
      'On the way out, do the same',
      'Без доступу турнікет не відкриється. Не перелазь і не проходь за кимось.',
      'Without access the turnstile will not open. Do not climb over or tailgate.',
    ),
  ],
  mistakes: [
    l('Проходиш удвох за одним сигналом.', 'Two people passing on one beep.'),
    l('Штовхаєш планку до зеленого сигналу.', 'Pushing the bar before the green light.'),
    l('Перелазиш, якщо турнікет мовчить.', 'Climbing over when the turnstile stays silent.'),
    l('Йдеш без браслета і сподіваєшся, що «хтось пустить».', 'Arriving without a wristband and hoping someone lets you through.'),
  ],
}

const shower: Guide = {
  id: 'shower',
  icon: 'drop',
  title: l('Душова', 'Shower'),
  summary: l('Коротко, як користуватися душем і не залишити речі під водою.', 'How to use the shower without soaking your things.'),
  seconds: 25,
  helpTo: '/help?about=shower',
  keywords: 'душ душова кабіна shower',
  steps: [
    step(
      'Речі залиш у шафці',
      'Leave belongings in the locker',
      'У кабінку бери лише те, що потрібно для душу. Телефон і гаманець під струмінь не клади.',
      'Take into the stall only what you need. Do not put a phone or wallet under the water.',
    ),
    step(
      'Увімкни воду і перевір температуру',
      'Turn the water on and check the temperature',
      'Спочатку невеликий напір. Якщо гарячої води немає — не крути вентиль силою, скажи на рецепцію.',
      'Start with a light flow. If there is no hot water, do not force the handle — tell reception.',
    ),
    step(
      'Не залишай воду текти',
      'Do not leave the water running',
      'Вимикай душ, коли намилюєшся, якщо так влаштована кабіна, і обов’язково перед виходом.',
      'Turn the shower off before you leave. Do not leave it running for the next person.',
    ),
    step(
      'Фен — біля дзеркала',
      'The dryer is by the mirror',
      'Сушиш волосся вже біля дзеркал. Окрема коротка інструкція є для фена.',
      'Dry your hair by the mirrors. There is a separate short guide for the dryer.',
    ),
  ],
  mistakes: [
    l('Лишаєш одяг на лаві, куди тече вода.', 'Leaving clothes on a bench where water runs.'),
    l('Йдеш з кабінки, не закривши кран.', 'Leaving the stall without closing the tap.'),
    l('Намагаєшся самому полагодити лійку.', 'Trying to repair the shower head yourself.'),
  ],
}

const dryer: Guide = {
  id: 'dryer',
  icon: 'wind',
  title: l('Фен', 'Hair dryer'),
  summary: l('Фени стоять біля дзеркал у роздягальні.', 'Dryers are by the mirrors in the locker room.'),
  seconds: 20,
  helpTo: '/situations/dryer-broken',
  keywords: 'фен сушити волосся dryer hair',
  steps: [
    step(
      'Знайди фен біля дзеркала',
      'Find a dryer by the mirror',
      'Вони закріплені на стіні. Не неси фен у душову кабінку.',
      'They are fixed to the wall. Do not carry a dryer into a shower stall.',
    ),
    step(
      'Зніми з тримача і увімкни кнопку',
      'Lift it from the holder and press the button',
      'Частина фенів працює, лише поки кнопку тримають. Якщо тихо — спробуй сусідній.',
      'Some dryers run only while the button is held. If it stays silent, try the next one.',
    ),
    step(
      'Поверни фен на місце',
      'Put the dryer back',
      'Повісь його в тримач, щоб шнур не лежав у воді на стільниці.',
      'Hang it up so the cord is not lying in water on the counter.',
    ),
  ],
  mistakes: [
    l('Користуєшся феном мокрими руками біля струменя води.', 'Using the dryer with wet hands next to running water.'),
    l('Тягнеш шнур, щоб зняти фен із кріплення.', 'Yanking the cord to free the dryer.'),
    l('Розбираєш корпус, якщо він не гріє.', 'Opening the case when it does not heat.'),
  ],
}

const water: Guide = {
  id: 'water',
  icon: 'water',
  title: l('Питна вода', 'Drinking water'),
  summary: l('Де набрати воду у свою пляшку.', 'Where to fill your own bottle.'),
  seconds: 15,
  helpTo: '/help?about=water',
  keywords: 'вода кулер пляшка water bottle',
  steps: [
    step(
      'Підійди до точки води',
      'Go to the water point',
      'Вона позначена на карті клубу поруч із вендингом. Не набирай воду з-під душу.',
      'It is on the club map next to vending. Do not fill a bottle from the shower.',
    ),
    step(
      'Підстав свою пляшку',
      'Use your own bottle',
      'Натисни важіль або кнопку і не нахиляй кулер. Якщо ємність порожня — скажи на рецепцію.',
      'Press the lever or button. Do not tilt the cooler. If it is empty, tell reception.',
    ),
    step(
      'Пляшку забери із собою',
      'Take the bottle with you',
      'Не залишай її на тренажері, грифі чи лаві: її приберуть як забуту річ.',
      'Do not leave it on a machine, bar or bench: it will be treated as a lost item.',
    ),
  ],
  mistakes: [
    l('Ставиш пляшку на чужий тренажер.', 'Leaving the bottle on someone else’s machine.'),
    l('П’єш просто з крана, перекриваючи чергу.', 'Drinking from the tap and blocking the queue.'),
  ],
}

const terminal: Guide = {
  id: 'terminal',
  icon: 'card',
  title: l('Термінал оплати', 'Payment terminal'),
  summary: l('Як сплатити на рецепції або в автоматі і не натиснути оплату двічі.', 'How to pay at reception or a machine without paying twice.'),
  seconds: 35,
  helpTo: '/situations/payment',
  keywords: 'оплата термінал картка apple pay google pay terminal payment',
  steps: [
    step(
      'Перевір суму на екрані',
      'Check the amount on the screen',
      'Назви послуги і сума мають бути зрозумілі до прикладання картки. Якщо сума чужа — зупинись.',
      'The service and the amount should be clear before you tap. If the amount is wrong, stop.',
    ),
    step(
      'Приклади картку або телефон',
      'Tap a card or phone',
      'Один раз. Тримай, доки термінал не покаже результат. Apple Pay і Google Pay залежать від конкретного термінала.',
      'Once. Hold it until the terminal shows a result. Apple Pay and Google Pay depend on that terminal.',
    ),
    step(
      'Дочекайся підтвердження',
      'Wait for confirmation',
      'Потрібна позначка успіху або чек. Напис «обробка» — це ще не оплата і не привід платити знову.',
      'You need a success mark or a receipt. “Processing” is not a reason to pay again.',
    ),
    step(
      'Якщо відмова — не повторюй серією',
      'If it is declined, do not retry in a burst',
      'Одна повторна спроба допустима. Далі зупинись і поклич рецепцію, щоб не зловити подвійне списання.',
      'One retry is enough. Then stop and call reception so you do not get a double charge.',
    ),
  ],
  mistakes: [
    l('Платиш кілька разів поспіль, поки крутиться спінер.', 'Paying again and again while the spinner is still going.'),
    l('Йдеш від термінала, не глянувши на результат.', 'Walking away without checking the result.'),
    l('Фотографуєш чужий чек замість свого.', 'Photographing someone else’s receipt.'),
  ],
}

const machines: Guide = {
  id: 'machines',
  icon: 'dumbbell',
  title: l('Тренажери', 'Machines'),
  summary: l(
    'Базове налаштування до першого повторення. Моделі в клубах різні.',
    'Basic setup before the first rep. Models differ between clubs.',
  ),
  seconds: 45,
  helpTo: '/situations/machine-broken',
  keywords: 'тренажер доріжка сидіння вага pin гантель machine treadmill',
  steps: [
    step(
      'Перевір, що тренажер вільний і цілий',
      'Check that the machine is free and intact',
      'Якщо трос торочиться, лава хитається або на ньому позначка «не працює» — не сідай і поклич тренера.',
      'If a cable is frayed, a bench rocks, or it is marked out of order — do not use it. Call a trainer.',
    ),
    step(
      'Вистав сидіння і упори під себе',
      'Set the seat and the pads',
      'Суглоб, який згинається, має збігатися з віссю тренажера. Не починай підхід «як є», якщо положення ріже.',
      'The joint that bends should line up with the machine’s pivot. Do not start a set in a position that pinches.',
    ),
    step(
      'Постав невелику вагу',
      'Start with a light weight',
      'Встав штир до кінця. На доріжці спочатку повільний хід і стоп-ключ на одязі.',
      'Push the pin all the way in. On a treadmill, start easy and clip on the safety key.',
    ),
    step(
      'Зроби пробний рух без ривка',
      'Try one slow rep',
      'Якщо амплітуда неочевидна, зупинись і попроси чергового тренера. Не вигадуй техніку з випадкового відео посеред підходу.',
      'If the path is unclear, stop and ask the floor trainer. Do not invent technique mid-set.',
    ),
    step(
      'Після себе поверни вагу і протри контакт',
      'Reset the weight and wipe contact points',
      'Штир залиш у легкому положенні або як прийнято в залі. Гантелі — на стійку, не на підлогу.',
      'Leave the pin in a light position, or as the gym expects. Dumbbells go back on the rack.',
    ),
  ],
  mistakes: [
    l('Починаєш біг на доріжці, не причепивши стоп-ключ.', 'Starting a treadmill without the safety clip.'),
    l('Кидаєш гантелі на підлогу.', 'Dropping dumbbells on the floor.'),
    l('Залишаєш млинці на грифі й відходиш.', 'Leaving plates on a bar and walking away.'),
    l('Продовжуєш підхід через гострий біль.', 'Continuing a set through sharp pain.'),
  ],
}

const vending: Guide = {
  id: 'vending',
  icon: 'box',
  title: l('Вендинг', 'Vending'),
  summary: l('Повний шлях покупки: від пошуку автомата до спірної оплати.', 'The full purchase path, including a failed payment.'),
  seconds: 50,
  to: '/vending',
  helpTo: '/situations/vending-failed',
  keywords: 'вендинг товар оплата батончик vending',
  steps: [],
  mistakes: [],
}

const kasa: Guide = {
  id: 'kasa',
  icon: 'card',
  title: l('Каса самообслуговування', 'Self-service checkout'),
  summary: l(
    'Як сплатити на терміналі APOLLO NEXT біля зони «Підживинки».',
    'How to pay at the APOLLO NEXT kiosk by the refreshments area.',
  ),
  seconds: 40,
  helpTo: '/situations/payment',
  keywords: 'каса самообслуговування оплата карткою kasa checkout',
  steps: [
    step(
      'Знайди чорний термінал із написом «Каса самообслуговування»',
      'Find the black kiosk labeled self-service checkout',
      'Він стоїть біля стелажа з добавками і вендингу. Зверху — логотип APOLLO NEXT.',
      'It stands by the supplement shelf and vending. The APOLLO NEXT logo is on top.',
    ),
    step(
      'Обери товар і дочекайся суми на екрані',
      'Pick the item and wait for the amount on the screen',
      'Ціна на екрані має збігатися з цінником. Якщо сума чужа — зупинись.',
      'The screen amount should match the shelf tag. If it is wrong, stop.',
    ),
    step(
      'Сплати карткою або телефоном один раз',
      'Pay by card or phone once',
      'Термінал праворуч від екрана. Дочекайся підтвердження. Не прикладай картку повторно, поки крутиться обробка.',
      'The reader is to the right of the screen. Wait for confirmation. Do not tap again while it is processing.',
    ),
    step(
      'Забери товар і чек, якщо він з’явився',
      'Take the item and the receipt if one appears',
      'Якщо гроші зняли, а товар не підтвердили — не плати вдруге. Іди на рецепцію з підтвердженням банку.',
      'If money was taken and the purchase did not finish, do not pay again. Go to reception with the bank proof.',
    ),
  ],
  mistakes: [
    l('Платиш двічі, бо екран довго думає.', 'Paying twice because the screen is slow.'),
    l('Йдеш з товаром без оплати «потім».', 'Walking off with an item to pay “later”.'),
    l('Ламаєш термінал або стелаж сам.', 'Trying to fix the kiosk or the shelf yourself.'),
  ],
}

const accuniq: Guide = {
  id: 'accuniq',
  icon: 'heart',
  title: l('Accuniq — склад тіла', 'Accuniq body composition'),
  summary: l(
    'Accuniq BC380 з ростоміром. Вимірювання зазвичай робить тренер на першому візиті або за правилами клубу.',
    'Accuniq BC380 with a height meter. A trainer usually runs it on the first visit or per club rules.',
  ),
  seconds: 45,
  helpTo: '/help?about=accuniq',
  keywords: 'accuniq акунік склад тіла аналіз bc380',
  steps: [
    step(
      'Знайди місце з позначкою ACCUNIQ',
      'Find the spot marked ACCUNIQ',
      'У 025 воно біля входу в тренувальну зону / центральної колони на огляді з ескалатора.',
      'In 025 it is by the training-floor entrance / central pillar seen from the escalator.',
    ),
    step(
      'Не починай вимірювання навмання',
      'Do not start the measurement on a guess',
      'Процедуру проводить тренер або координатор. Якщо ти вже знаєш протокол клубу — дотримуйся його.',
      'A trainer or coordinator runs the procedure. If you already know the club protocol, follow it.',
    ),
    step(
      'Зніми важке взуття і метал, як скаже тренер',
      'Remove heavy shoes and metal as the trainer says',
      'Результат залежить від підготовки. Не стій босоніж на мокрій підлозі з роздягальні.',
      'Results depend on preparation. Do not stand barefoot on a wet floor from the locker room.',
    ),
    step(
      'Запиши цифри в застосунок або з тренером',
      'Save the numbers in the app or with the trainer',
      'Стартове вимірювання допомагає будувати план. Повторне — окрема послуга за правилами клубу.',
      'The first measurement helps build a plan. A later one follows the club’s paid/service rules.',
    ),
  ],
  mistakes: [
    l('Стоїш на приладі у мокрому одязі після душу.', 'Standing on the device in wet clothes after a shower.'),
    l('Починаєш аналіз без інструкції і ламаєш ростомір.', 'Starting alone and forcing the height meter.'),
    l('Порівнюєш результат із чужим фото в Instagram замість своїх цифр.', 'Comparing the result to someone else’s Instagram instead of your own numbers.'),
  ],
}

export function getGuides(club: Club): Guide[] {
  const list = [turnstile, locker(club), shower, dryer, water, terminal, wifi(club), machines]
  if (club.hasKasa) list.splice(5, 0, kasa)
  if (club.hasAccuniq) list.push(accuniq)
  if (club.hasVending) list.push(vending)
  return list
}

export function getGuide(club: Club, id: string): Guide | undefined {
  return getGuides(club).find((guide) => guide.id === id)
}
