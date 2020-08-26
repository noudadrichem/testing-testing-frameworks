const Lib = require('../../toTest');

// const { test, only } = QUnit;

// QUnit.module('test', (hooks) => {
//   hooks.before

//   test('should add two numbers', (assert) => {
//     assert.equal(Lib.sum(1, 1), 2, '1 + 1 = 2');
//   });

//   only( "laser()", assert => {
//     assert.equal(this.something, 'good.')
//   });
// });

const { test, only, todo } = QUnit;

let robot;

QUnit.module( "robot", hooks => {
  let robot;
  hooks.beforeEach( () => {
    robot = { laser() { return true } }
  });

  test( "say()", assert => {
    assert.true( false, "I'm not quite ready yet" );
  });

  // You're currently working on the laser methiod, so run only this test
  test( "laser()", assert => {
    assert.true( robot.laser() );
  });

  // fireLazer hasn't been properly implemented yet, so this is a todo test
todo( "fireLazer returns the correct value", function( assert ) {
  var result = this.robot.fireLazer(); // Currently returns undefined
  assert.equal( result, "I'm firing my lazer!" );
});
});