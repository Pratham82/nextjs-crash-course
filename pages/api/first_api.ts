import { NextApiRequest, NextApiResponse } from 'next'

// This will be registered as an API which we access to get data
// endpoint: localhost:3000/api/first_api
// This only works in api folder
// We can use these functions as lambda functions
export default function (req: NextApiRequest, res: NextApiResponse) {
  res.json({
    success: true,
    message: 'This is first API response from next backend',
    data: [
      {
        _id: '617c2cf079764a959b897ac4',
        index: 0,
        guid: '902096fd-5c23-4f0f-843d-04c7ce5b92b6',
        isActive: false,
        balance: '$1,485.86',
        picture: 'http://placehold.it/32x32',
        age: 40,
        eyeColor: 'brown',
        name: 'Beck Cote',
        gender: 'male',
        company: 'OTHERSIDE',
        email: 'beckcote@otherside.com',
        phone: '+1 (863) 583-2005',
        address: '218 Delevan Street, Caroleen, Minnesota, 6579',
        about:
          'Consequat reprehenderit incididunt in reprehenderit commodo commodo amet reprehenderit nisi labore. Enim quis id aliquip et pariatur incididunt quis ad aliqua amet. Duis deserunt mollit quis commodo adipisicing do. Fugiat pariatur laborum magna mollit proident laborum. In occaecat sint Lorem dolor officia voluptate veniam cillum ea. Do aliqua excepteur exercitation sit excepteur enim in ut velit adipisicing incididunt enim.\r\n',
        registered: '2021-04-17T04:08:05 -06:-30',
        latitude: 73.404,
        longitude: -113.189815,
        tags: [
          'incididunt',
          'cupidatat',
          'consectetur',
          'adipisicing',
          'laboris',
          'consectetur',
          'ipsum',
        ],
        friends: [
          {
            id: 0,
            name: 'Ernestine Roberts',
          },
          {
            id: 1,
            name: 'Olga Goodman',
          },
          {
            id: 2,
            name: 'Newton Lott',
          },
        ],
        greeting: 'Hello, Beck Cote! You have 4 unread messages.',
        favoriteFruit: 'strawberry',
      },
    ],
  })
}
