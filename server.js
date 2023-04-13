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
    'Drake':{
        'dateOfBirth': '1986-10-24',
        'birthName':'Aubrey Drake Graham',
        'birthLocation':'Toronto, Ontario, Canada',
    },
    'Kendrick Lamar':{
        'dateOfBirth': '1987-06-17',
        'birthName':'Kendrick Lamar Duckworth',
        'birthLocation':'Compton, California',
    },
    'J. Cole':{
        'dateOfBirth': '1985-01-28',
        'birthName':'Jermaine Lamar Cole',
        'birthLocation':'Frankfurt, Germany',
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