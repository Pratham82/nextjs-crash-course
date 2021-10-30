import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse){
  console.log('Logging body', req.body)
  console.log('Logging query', req.query)

  // Setting headers
  res.setHeader('X-Custom-Header','This is a custom header')
  res.setHeader('Set-Cookie','Its a cookie :)')

  // res methods
  res.send('Normal data ')

  // res.json({
  //   'success': true,
  //   'message': 'req, res API'
  // })
  // POST req for testing 
  // fetch('http://localhost:3000/api/request', {method: 'POST', body: 'Req body'} )

  // With json req body
  // fetch('http://localhost:3000/api/request', {method: 'POST', headers:{'Content-Type': 'application/json'}, body: JSON.stringify({username:'prathamesh', password:'12345'})})

  // with query
  // fetch('http://localhost:3000/api/request?query=yo', {method: 'POST', body: 'Req body'} )



};