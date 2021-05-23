const express = require('express')
const app = express();
const port = 8000;
const home = require('./modules/pages/home/home_controller.js');
const aboutus = require('./modules/pages/aboutus/aboutus_controller.js');
const contact = require('./modules/pages/contactus/contactus_controller.js');
const review = require('./modules/pages/review/review_controller.js');
const signin = require('./modules/pages/signin/signin_controller.js');
const transaction = require('./modules/pages/transaction/transaction_controller.js');
const signup = require('./modules/pages/signup/signup_controller.js');
const generalDB = require('./general_DB.js')



app.get('/home', home.HomePage)
app.get('/review', review.ReviewPage)
app.get('/about', aboutus.AboutPage)
app.get('/contact', contact.ContactPage)
app.get('/signin', signin.SignInPage)
app.get('/transaction', transaction.TransactionPage)
app.get('/signup', signup.SignUpPage)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
