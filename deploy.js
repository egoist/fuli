const gh = require('gh-pages')
require('shelljs/global')

rm('-rf', './build')
exec('tooling build -e src --title 福利')
cp('-rf', 'CNAME', './build/')
gh.publish('./build', err => {
	if (err) {
		return console.log(err)
	}
	console.log('Done!')
})
