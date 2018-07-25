'use strict';
const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
const StringBuilder = require("string-builder");


class StratController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
	startHandler($) {
		let sb = new StringBuilder();
		sb.append('ברוכים הבאים ליוע"סים, להלן רשימת האופציות:');
		sb.appendLine('הערוץ הראשי בלה בלה בלה...');
		sb.appendLine('/yoasim');
		sb.appendLine('');

		sb.appendLine('הערוץ המשני בלה בלה בלה...');
		sb.appendLine('/ptyoasim');
		sb.appendLine('');

		sb.appendLine('אפשר גם לראות איך נראה תפריט');
		sb.appendLine('אני פחות אוהב, אבל אני מוזר');
		sb.appendLine('/menu');
		sb.appendLine('');

		$.sendMessage(sb.toString());
	}

	get routes() {
		return {
			'startCommand': 'startHandler'
		}
	}
}

module.exports = StratController;