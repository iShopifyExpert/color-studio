const { colden, hotten, mix } = require('../utilities/base-color-helpers')

const values = {
  gray: '#707070',
  blue: '#016087',
  hotPink: '#d52c82',
  hotRed: '#eb0001',
  hotYellow: '#f6c200',
  hotGreen: '#008a00'
}

values.hotBlue = hotten(values.blue)
values.pink = colden(values.hotPink)
values.red = colden(values.hotRed)
values.yellow = colden(values.hotYellow)
values.green = colden(values.hotGreen)

values.gray = mix(values.gray, values.blue, 0.2)
values.purple = mix(values.blue, values.pink, 0.6)
values.hotPurple = mix(values.hotBlue, values.hotPink, 0.4)
values.orange = mix(values.red, values.yellow)
values.hotOrange = mix(values.hotRed, values.hotYellow)
values.celadon = mix(values.blue, values.green, 0.6)

module.exports = [
  {
    name: 'Gray',
    value: values.gray,
    formula: 'primary'
  },
  {
    name: 'Blue',
    value: values.blue,
    formula: 'primary'
  },
  {
    name: 'Purple',
    value: values.purple,
    formula: 'primary'
  },
  {
    name: 'Pink',
    value: values.pink,
    formula: 'primary'
  },
  {
    name: 'Red',
    value: values.red,
    formula: 'primary'
  },
  {
    name: 'Orange',
    value: values.orange,
    formula: 'primary'
  },
  {
    name: 'Yellow',
    value: values.yellow,
    formula: 'primary'
  },
  {
    name: 'Green',
    value: values.green,
    formula: 'primary'
  },
  {
    name: 'Celadon',
    value: values.celadon,
    formula: 'primary'
  },
  {
    name: 'Hot Blue',
    value: values.hotBlue,
    formula: 'secondary'
  },
  {
    name: 'Hot Purple',
    value: values.hotPurple,
    formula: 'secondary'
  },
  {
    name: 'Hot Pink',
    value: values.hotPink,
    formula: 'secondary'
  },
  {
    name: 'Hot Red',
    value: values.hotRed,
    formula: 'secondary'
  },
  {
    name: 'Hot Orange',
    value: values.hotOrange,
    formula: 'secondary'
  },
  {
    name: 'Hot Yellow',
    value: values.hotYellow,
    formula: 'secondary'
  },
  {
    name: 'Hot Green',
    value: values.hotGreen,
    formula: 'secondary'
  }
]
