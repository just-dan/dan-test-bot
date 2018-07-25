'use strict';
const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;

class MenuController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
	menuHandler($) {
		$.runMenu({
			message: 'ברוכים הבאים ליוע"סים',
			options: {
				parse_mode: 'Markdown' // in options field you can pass some additional data, like parse_mode
			},
			'ערוץ ראשי': {
				message: 'קרא את החוקים במלואם בכניסתך לקבוצה',
				resizeKeyboard: true,
				'קראתי והבנתי': () => {
					$.sendMessage('ברוך הבא ליוע"סים \n @yoasim');
				},
				'מפחיד מדי': () => {
					$.sendMessage('הכל טוב אנחנו מקבלים את כולם');					
				}
			},
			'ערוץ משני': {
				message: 'זה הערוץ המשני',
				resizeKeyboard: true,
				'סתם שעמום': () => {
					$.sendMessage('אתה משעמם!');										
				},
				'וואו מעניין': () => {
					$.sendMessage('כל הכבוד');															
				}
			},
			'anyMatch': () => { //will be executed at any other message
				$.sendMessage('לא טוב...');
			}
		});
	}

	get routes() {
		return {
			'menuCommand': 'menuHandler'
		}
	}
}

module.exports = MenuController;