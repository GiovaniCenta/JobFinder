//creating routes to 
const express =     require('express');
const router =      express.Router();
const Job =         require('../models/Job');

router.get('/test',(req,res)=>{
    res.send("route request ok");
})
// add job via post
router.post('/add', (req, res) => {

    let {title, salary, company, description, email, new_job} = req.body;
  
    // insert
    Job.create({
      title,
      description,
      salary,
      company,
      email,
      new_job
    })
    .then(() => res.redirect('/')) //when succesfully inserted, return to home
    .catch(err => console.log(err));
  
  });
  module.exports = router;