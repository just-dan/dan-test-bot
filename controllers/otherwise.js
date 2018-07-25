'use strict';
const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
const StringBuilder = require("string-builder");

class OtherwiseController extends TelegramBaseController {
	handle($) {
		let sb = new StringBuilder();
		sb.append('טוב לא מימשתי כאן הכל... וגם ייתכן שסתם כתבת שטויות');
		sb.appendLine('הכי טוב, פשוט להתחיל מהתחלה');
		sb.appendLine('/start');
		sb.appendLine('');

		$.sendMessage(sb.toString());
	}
}

module.exports = OtherwiseController;