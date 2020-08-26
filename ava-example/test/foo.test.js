const test = require('ava');

test.beforeEach(t => {
	t.context = {
		authenticator: {
      authenticate(creds) {
        return new Promise(res => {
          if (creds.usn === 'admin' && creds.pass === 's3cr3t') {
            res(true);
          } else {
            res(false)
          }
        })
      }
    },
		credentials: {
      usn: 'admin', 
      pass: 's3cr3t'
    }
	};
});

test('authenticating with valid credentials', async t => {
	const isValid = await t.context.authenticator.authenticate(t.context.credentials);
	t.true(isValid);
});

test('authenticating with an invalid username', async t => {
	t.context.credentials.usn = 'bad_username';
	const isValid = t.context.authenticator.authenticate(t.context.credentials);
	t.false(await isValid);
});

test('authenticating with an invalid password', async t => {
	t.context.credentials.pass = 'bad_password';
	const isValid = t.context.authenticator.authenticate(t.context.credentials);
	t.false(await isValid);
});