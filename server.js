const express = require('express')
const app = express()
const PORT = 8000

const rapperNames = {
    '21 savage':{
        'age':29,
      'birthName':'Sheyaa Bin Abraham-Joseph',
      'birthLocation':'London, UK',
    },
    'chance the rapper':{
        'age':29,
      'birthName':'Chancellor Bennett',
      'birthLocation':'Chicago, Illinois',
    },
    'unknown':{
        'age':100,
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