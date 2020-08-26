'use strict';

const t = require('tap');
const Lib = require('../../toTest');

t.beforeEach((done, t) => {
  console.log('before each...');
  t.context = { message: 'You can hang things to tests here.. e.g. db connections etc.'};
  done();
});

t.afterEach((done, t) => {
  console.log('after each...');
  done();
});

t.teardown(() => {
  console.log('--COMPLETELY DONE––')
})

//** Tests can be written as small as this: */
t.equal(Lib.hashEnoughMoney(5, 6), false);
t.equal(Lib.hashEnoughMoney(744, 600), true);

t.todo('moetje')


//** Or be nested and created as kind of 'blocks' like so: */
t.test('Lib.Contains', (t) => {
  t.equal(Lib.contains(['one', 'two'], 'one'), true, 'Should contain One');
  t.equal(Lib.contains(['one', 'two'], 'three'), false, 'Should not contain three');
  t.isA(Lib.contains(['one', 'two'], 'three'), 'boolean');
  t.end();
})

t.test('Lib.fullname', (t) => {
  t.equal(Lib.fullName('Noud', 'Adrichem'), 'Noud Adrichem', 'Should concat name to 1 string');
  t.end();
})

//** Testing works with promises as well */
t.test('Should resolve promise', async (t) => {
  const promiseResult = await Lib.shouldResolve();
  t.equal(promiseResult, 'good.');
  console.log('This is context from a test', t.context.message)
  t.end();
})