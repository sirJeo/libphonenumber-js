import metadata from './metadata.min.json.js'
import isValidNumberCustom from './es6/validate'

export function isValidNumber()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(metadata)
	return isValidNumberCustom.apply(this, parameters)
}
