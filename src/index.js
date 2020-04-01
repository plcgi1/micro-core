const moment = require('moment');

module.exports = {
	hello: () => { return `Hello from dep ${moment().toISOString()}` }
}
