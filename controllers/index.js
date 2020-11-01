const tradutor = require('./tradutor-api');

module.exports.home = (req, res) => {
	res.status(200).json({
		'message': tradutor.toTranslate('EN', 'pt', 'This is Angola')
	})
}

module.exports.translate = (req, res) => {
	const fromLanguage = req.params.fromLanguage;
	const toLanguage = req.params.toLanguage;
	const content = req.params.content;

	res.status(200).json({
		'message': tradutor.toTranslate(`${fromLanguage}`, `${toLanguage}`, `${content}`)
	})
}
