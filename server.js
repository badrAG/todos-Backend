require('dotenv/config')
require('express-async-errors')
const mongoose = require('mongoose')

const app = require('./app');

//connect to database
const connectToDatabase = async () => {
    try {
       await mongoose.connect(process.env.DATABASE_URL, {
          useCreateIndex: true,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
       });
     console.log(">🚀 Database is connected 🔥");
    } catch (err) {
       console.error(err);
    }
 };
 
 connectToDatabase();
 
 
 // server port
 const PORT = process.env.PORT || 8888;
 //start port
 app.listen(PORT, (err) => {
   err ? console.log(err) : console.log(
     process.env.NODE_ENV === 'production' ? `> 🚀 Server is running 🔥`
     : `>🚀 Server is running on http://localhost:${PORT} 🔥`
     )
   });

   process.on('uncaughtException', error => {
    console.error('UNCAUGHT EXCEPTION! 💥 Shutting down...')
    console.error(error.name, error.message)
    process.exit(1)
  })
  
  process.on('unhandledRejection', error => {
    console.error('UNHANDLED REJECTION! 💥 Shutting down...')
    console.error(error.name, error.message)
    server.close(() => process.exit(1))
  })
  
  process.on('SIGTERM', () => {
    console.log('👋 SIGTERM RECEIVED. Shutting down gracefully')
    server.close(() => console.log('💥 Process terminated!'))
  })