const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                console.log(JSON.stringify(data))
                messageOne.textContent = data.location + " Feels like : "+data.forecast.feelslike 
                messageTwo.textContent = 'Temperature is '+data.forecast.temperature+' C. Humidity is '+data.forecast.humidity
            }
        })
    })
})