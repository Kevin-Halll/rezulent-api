require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads', { setHeaders: function (res, path, stat) {
	res.set('Content-Disposition', 'inline')
}}))

// Routers
const indexRouter = require('./routes/index.routes')

// Routes
app.use('/api/v1', indexRouter)
app.use('/api/v1/jobs', require('./routes/job-board.routes'))
app.use('/api/v1/company', require('./routes/company.routes'))
app.use('/api/v1/auth', require('./routes/auth.routes'))
app.use('/api/v1/apply', require('./routes/applicant.routes'))
app.use('/api/v1/adverts-by-company', require('./routes/advertsByCompany.routes'))
app.use('/api/v1/advert-details', require('./routes/advertDetails.routes'))

// Start Express App

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://0.0.0.0', { useNewUrlParser: true }, (err) => {
// 	if (err) throw err

// 	console.log('MongoDB Connected')
// })

main().catch(err => console.log(err));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1/rezulent');
  console.log('MongoDB Connected')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}