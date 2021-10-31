import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

export default function (req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body
  const key = 'thisIsATempKey'
  // Perform authentication
  if (!username || !password) {
    res.status(404).json({
      success: false,
      message: 'Please enter the details',
    })
    return
  }

  // Check password and username
  // This is eg. for actual usecase we will check from DB
  if (username === 'pratham' && password === 'pratham') {
    // If details entered properly send JWT token
    res.json({
      success: true,
      token: jwt.sign({ username }, key),
      message: 'You are successfully logged In',
    })
  } else {
    res.json({
      success: false,
      message: 'Username password does not match with our records ',
    })
  }
}
