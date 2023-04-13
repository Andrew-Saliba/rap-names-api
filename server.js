const express = require('express')
const app = express()
const PORT = 8000

const rapperNames = {
    '21 savage':{
        'dateOfBirth': '1992-10-22',
      'birthName':'Sheyaa Bin Abraham-Joseph',
      'birthLocation':'London, UK',
    },
    'chance the rapper':{
        'dateOfBirth': '1993-04-16',
      'birthName':'Chancellor Bennett',
      'birthLocation':'Chicago, Illinois',
    },
    'drake':{
        'dateOfBirth': '1986-10-24',
        'birthName':'Aubrey Drake Graham',
        'birthLocation':'Toronto, Ontario, Canada',
    },
    'kendrick lamar':{
        'dateOfBirth': '1987-06-17',
        'birthName':'Kendrick Lamar Duckworth',
        'birthLocation':'Compton, California',
    },
    'j cole':{
        'dateOfBirth': '1985-01-28',
        'birthName':'Jermaine Lamar Cole',
        'birthLocation':'Frankfurt, Germany',
    },
    'jay-z': {
        'dateOfBirth': '1969-12-04',
        'birthName': 'Shawn Corey Carter',
        'birthLocation': 'New York City, New York',
    },
    'kanye west': {
        'dateOfBirth': '1977-06-08',
        'birthName': 'Kanye Omari West',
        'birthLocation': 'Atlanta, Georgia',
    },
    'lil wayne': {
        'dateOfBirth': '1982-09-27',
        'birthName': 'Dwayne Michael Carter Jr.',
        'birthLocation': 'New Orleans, Louisiana',
    },
    'eminem': {
        'dateOfBirth': '1972-10-17',
        'birthName': 'Marshall Bruce Mathers III',
        'birthLocation': 'St. Joseph, Missouri',
    },
    'snoop dogg': {
        'dateOfBirth': '1971-10-20',
        'birthName': 'Calvin Cordozar Broadus Jr.',
        'birthLocation': 'Long Beach, California',
    },
    'nas': {
        'dateOfBirth': '1973-09-14',
        'birthName': 'Nasir bin Olu Dara Jones',
        'birthLocation': 'New York City, New York',
    },
    'ice cube': {
        'dateOfBirth': '1969-06-15',
        'birthName': 'O’Shea Jackson',
        'birthLocation': 'Los Angeles, California',
    },
    'notorious b.i.g.': {
        'dateOfBirth': '1972-05-21',
        'birthName': 'Christopher Wallace',
        'birthLocation': 'Brooklyn, New York City, New York',
    },
    'tupac shakur': {
        'dateOfBirth': '1971-06-16',
        'birthName': 'Lesane Parish Crooks',
        'birthLocation': 'East Harlem, New York City, New York',
    },
    'cardi b': {
        'dateOfBirth': '1992-10-11',
        'birthName': 'Belcalis Marlenis Almánzar',
        'birthLocation': 'The Bronx, New York City, New York',
    },
    'unknown':{
        'dateOfBirth': '1923-01-01',
        'birthName':'unknown',
        'birthLocation':'unknown',
        },
   
}




app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response)=>{
    const rapper = request.params.rapperName.toLowerCase()
    if(rapperNames[rapper]){
        response.json(rapperNames[rapper])
    }else{
        response.json(rapperNames['unknown'])
    }


})


app.listen(PORT, ()=>{
    console.log(`The server is running on Port ${PORT}`)
})