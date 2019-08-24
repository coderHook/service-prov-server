import express from 'express'
import db from './../db'

const router = express.Router()

/**
 * Post Clients by request
 */
router.post('/clients', (req, res) => {
  //Get into th DB and get the clients with the skills needed.
  const mySkills: string[] = req.body.mySkills

  const requests = db.filter(elem => {
    const found = elem.stack.some(r => mySkills.includes(r))
    if(found) {return elem}
  })
  res.send({requests, mySkills})
})


export default router