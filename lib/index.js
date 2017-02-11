var login = require('./login')
var HarmonyClient = require('./harmonyclient')

function createHarmonyClient (xmppClient) {
	if (xmppClient != undefined) {
		return new HarmonyClient(xmppClient)
	} else {
		return undefined;
	}
}

function getHarmonyClient (hubhost, hubport) {
  return login(hubhost, hubport)
    .then(createHarmonyClient)
}

module.exports = getHarmonyClient
