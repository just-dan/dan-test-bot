const Ttoken = '604361708:AAHvDAiExKV-nJWBWX2GxISQQDlweKeHX-A';
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')

const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Scene = require('telegraf/scenes/base')
const { enter, leave } = Stage

const keyboard = Markup.inlineKeyboard([
	// Markup.urlButton('❤️', 'http://telegraf.js.org'),
	Markup.urlButton('ישירות ליוע"סים', 'https://t.me/Yoasim'),

	Markup.callbackButton('לערוץ היוע"סים עם הודעה מקדימה', 'yoasim'),

	Markup.callbackButton('לערוץ יוע"סים - תרפיה ואינטגרציה', 'yoasimpt'),
	Markup.callbackButton('בעצם התחרטתי', 'delete')
	],
	{
		columns: 1
	})

const bot = new Telegraf(Ttoken)
bot.start((ctx) => {
	ctx.reply('ברוכים הבאים ליוע"סים, להלן רשימת האופציות:', Extra.markup(keyboard))
})

bot.help((ctx) => ctx.reply('Help message'))



bot.on('message', (ctx) => {
	// ctx.telegram.sendCopy(ctx.from.id, ctx.message, Extra.markup(keyboard))
	ctx.reply('אנא בחר אחת מהאופציות...', Extra.markup(keyboard))
})

bot.action('delete', ({ deleteMessage }) => deleteMessage())

bot.action('tooscared', (ctx) => ctx.reply('הכל טוב, כאן מקבלים את כולם'))


// bot.action('yoasim', (ctx) => ctx.editMessageText('🎉 Awesome! 🎉 goto @yoasim'))
bot.action('yoasim', (ctx) => {
	
	ctx.editMessageText('🎉 מעולה! 🎉 חשוב שתקרא את החוקים בטרם כניסתך לקבוצה!',
		Extra.markup(
			Markup.inlineKeyboard([
				Markup.urlButton('ישירות ליוע"סים', 'https://t.me/Yoasim'),
				Markup.callbackButton('לא לא מפחיד מדי', 'tooscared'),				
			],
			{
				columns: 1
			})
		)
	)
})

bot.action('yoasimpt', (ctx) => {
	
	ctx.editMessageText('כאן תוכלו להתייעץ איתנו בכל נושא התרפיה העצמית עם פסיכדלים, כמו גם על האינטגרציה לחיי היומיום.',
		Extra.markup(
			Markup.inlineKeyboard([
				Markup.urlButton('קח אותי לשם', 'https://t.me/YoasimPT')
			],
			{
				columns: 1
			})
		)
	)
})



bot.startPolling()


