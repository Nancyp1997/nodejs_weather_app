const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8a7e54de1b88e8c11564c9b5e4d32b4d&query='+latitude+','+longitude
    console.log('forecasr url'+url)
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            console.log('in forecasr body errroe')
            callback('Unable to find location', undefined)
        } else {
            console.log('All ok in forecast')
            //callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
            callback(undefined,{
                location: body.location.region,
                temperature: body.current.temperature,
                humidity: body.current.humidity,
                feelslike: body.current.feelslike
            })
        }
    })
}

module.exports = forecast