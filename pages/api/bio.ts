import NextCors from 'nextjs-cors';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

async function handler(req: NextApiRequest, res: NextApiResponse<unknown>) {
  // Run the cors middleware
  // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  try {
    fetch("https://pallyy.com/api/bios", {
      "method": "POST",
      "body": req.body,
      "headers": {
        "accept": "application/json",
      },
      'mode': 'cors',
    })
      .then(response => response.json())
      .then((result) => {
        // Rest of the API logic
        res.json(result);
      })
      .catch(error => console.log('error', error));
  } catch (error) {
    console.log(error);
  }
}

export default handler