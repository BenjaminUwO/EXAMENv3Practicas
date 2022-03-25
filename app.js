const express=require('express')
const path=require('path')
const app=express()
const morgan=require('morgan')

app.set('port',process.env.PORT || 3100)
app.listen(app.get('port'),()=>{
    console.log("Servidor corriendo")
})

app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.use(morgan('start'))

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'./views'))

app.use(require('./routes/generales'))


app.use(express.static(path.join(__dirname,"/public")))