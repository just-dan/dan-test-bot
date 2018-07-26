'use strict';

const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
const TextCommand = Telegram.TextCommand;
const tg = new Telegram.Telegram('604361708:AAHvDAiExKV-nJWBWX2GxISQQDlweKeHX-A',{
	workers: 1
});

const StartController = require('./controllers/start');
const MenuController = require('./controllers/menu');
const PingController = require('./controllers/ping');
const YoasimController = require('./controllers/yoasim');
const OtherwiseController = require('./controllers/otherwise');


tg.router
	.when(
		new TextCommand('/start', 'startCommand'),
		new StartController()
	)	
	.when(
		new TextCommand('/menu', 'menuCommand'),
		new MenuController()
	)		
	.when(
        new TextCommand('ping', 'pingCommand'),
        new PingController()
	)
	.when(
		new TextCommand('/yoasim','yoasimCommand'),
		new YoasimController()
	)
	.otherwise(new OtherwiseController());