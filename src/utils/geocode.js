const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoibmFuY3lwMTk5NyIsImEiOiJja2Y5d2w3amswcWU5MzBsY3M5eXRxYnN5In0.TwEIQNSLdOPOPfhIh5R3_Q&limit=1'
    console.log('geocodeurl'+url)
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            console.log('Unable to connect to location services!', undefined)
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            console.log('All ok in geocode')
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode