const goroscopeArray = []
const first = [
  'Сегодня — идеальный день для новых начинаний. ',
  'Оптимальный день для того, чтобы решиться на смелый поступок! ',
  'Будьте осторожны, сегодня звёзды могут повлиять на ваше финансовое состояние. ',
  'Лучшее время для того, чтобы начать новые отношения или разобраться со старыми. ',
  'Плодотворный день для того, чтобы разобраться с накопившимися делами.',
  'Сегодняшний день подходит для решительных действий. ',
]

const second = [
  'Но помните, что даже в этом случае нужно не забывать про ',
  'Если поедете за город, заранее подумайте про ',
  'Те, кто сегодня нацелен выполнить множество дел, должны помнить про ',
  'Если у вас упадок сил, обратите внимание на ',
  'Помните, что мысли материальны, а значит вам в течение дня нужно постоянно думать про ',
]

const third = [
  'отношения с друзьями и близкими. ',
  'работу и деловые вопросы, которые могут так некстати помешать планам. ',
  'себя и своё здоровье, иначе к вечеру возможен полный раздрай. ',
  'бытовые вопросы — особенно те, которые вы не доделали вчера. ',
  'отдых, чтобы не превратить себя в загнанную лошадь в конце месяца. ',
]

const fourth = [
  'Злые языки могут говорить вам обратное, но сегодня их слушать не нужно.',
  'Знайте, что успех благоволит только настойчивым, поэтому посвятите этот день воспитанию духа.',
  'Даже если вы не сможете уменьшить влияние ретроградного Меркурия, то хотя бы доведите дела до конца.',
  'Не нужно бояться одиноких встреч — сегодня то самое время, когда они значат многое.',
  'Если встретите незнакомца на пути — проявите участие, и тогда эта встреча посулит вам приятные хлопоты.',
]

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}

for (let firstItem = 0; firstItem < first.length; firstItem++) {
  for (let secondItem = 0; secondItem < second.length; secondItem++) {
    for (let thirdItem = 0; thirdItem < third.length; thirdItem++) {
      for (let fourthItem = 0; fourthItem < fourth.length; fourthItem++) {
        goroscopeArray.push({
          main: `${first[firstItem]}${second[secondItem]}${third[thirdItem]}${fourth[fourthItem]}`,
          healthRate: randomInteger(40, 95),
          loveRate: randomInteger(30, 95),
          careerRate: randomInteger(30, 95),
        })
      }
    }
  }
}
// вспомогательная функция
function putToCache(elem, cache) {
  if (cache.indexOf(elem) != -1) {
    return
  }
  const i = Math.floor(Math.random() * (cache.length + 1))
  cache.splice(i, 0, elem)
}
// функция, возвращающая свеженький, девственный компаратор
function madness() {
  const cache = []
  return function (a, b) {
    putToCache(a, cache)
    putToCache(b, cache)
    return cache.indexOf(b) - cache.indexOf(a)
  }
}
// собственно функция перемешивания
function shuffle(arr) {
  const compare = madness()
  return arr.sort(compare)
}

// console.log(
//   JSON.stringify(
//     shuffle(
//       shuffle(shuffle(shuffle(shuffle(shuffle(shuffle(goroscopeArray))))))
//     )
//   )
// )
