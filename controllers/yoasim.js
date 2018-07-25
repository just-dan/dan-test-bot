'use strict';
const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
const StringBuilder = require("string-builder");

class YoasimController extends TelegramBaseController {

	yoasimHandler($) {
		let sb = new StringBuilder();
		sb.append('על מנת להכנס לקבוצה יש ללחוץ כאן');
		sb.appendLine('@yoasim');
		$.sendMessage(sb.toString());
	}

	get routes() {
		return {
			'yoasimCommand': 'yoasimHandler'
		}
	}
}

module.exports = YoasimController;