import test from 'ava'
import assign from '../../src/js/helpers/assign'

test('merge 2 objects', t => {
  const obj1 = { hoge: 'hoge' }
  const obj2 = { fuga: 'fuga' }
  const result = assign(obj1, obj2)

  t.is(result.hoge, 'hoge')
  t.is(result.fuga, 'fuga')
})
