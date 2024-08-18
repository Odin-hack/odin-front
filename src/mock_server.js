const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const t = {
  id: '4444422',
  status: 'active',
  onboardedModalShow: false,
  accounts: [
    {
      id: '39e134cb-36cf-40a4-bded-86cade503ec0',
      accountType: 'key',
      balance: 10,
    },
    {
      id: '1a4a4a72-75f5-421a-9882-b0a2ef1d1a68',
      accountType: 'token',
      balance: 100,
    },
    {
      id: 'b969c970-88e5-471d-9400-7f85f1299090',
      accountType: 'friend_rewards',
      balance: 44,
    },
  ],
  timers: [
    {
      id: 'cd05da32-a00a-4319-8997-fb57fcfc3eb4',
      userId: '4444422',
      timerType: 'claim_key',
      expireAt: '2024-08-10T16:42:56.678Z',
    },
    {
      id: '99a59d21-5fbd-442c-99fe-7b2d617725b0',
      userId: '4444422',
      timerType: 'claim_friends_reward',
      expireAt: '2024-08-08T18:34:38.863Z',
    },
  ],
}

const app = express()

app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.json())
app.use((_req, _res, next) => setTimeout(next, 1000))

app.get('/be/users/4444422', (_, res) =>
  res.status(200).send({success: true, data: t}),
)
app.post('/be/users/4444422', cors(), (_, res) => {
  t.onboardedModalShow = true
  res.status(200).send({success: true})
})
app.post('/be/game/spin', (_, res) => {
  const tokenReward = 44
  t.accounts[0].balance -= 1
  t.accounts[1].balance += tokenReward
  res.status(200).send({
    success: true,
    data: {
      user: {id: t.id, accounts: t.accounts},
      reward: {rewardType: 'token', amount: tokenReward},
    },
  })
})
app.post('/be/claim/keys', (_, res) => {
  t.accounts[0].balance += 1
  t.timers[0].expireAt = '2024-08-11T09:32:56.678Z'
  res.status(200).send({
    success: true,
    data: {account: t.accounts[0], timer: t.timers[0]},
  })
})
app.get('/be/game/rewards', (_, res) =>
  res.status(200).send({
    success: true,
    data: [
      {
        id: '00000000-0000-0000-0000-000000000000',
        rewardType: 'token',
        amount: 10000,
      },
      {
        id: '00000000-0000-0000-0000-000000000001',
        rewardType: 'key',
        amount: 1,
      },
      {
        id: '00000000-0000-0000-0000-000000000002',
        rewardType: 'key',
        amount: 5,
      },
      {
        id: '00000000-0000-0000-0000-000000000006',
        rewardType: 'token',
        amount: 100,
      },
      {
        id: '00000000-0000-0000-0000-000000000004',
        rewardType: 'token',
        amount: 500,
      },
      {
        id: '00000000-0000-0000-0000-000000000005',
        rewardType: 'token',
        amount: 1000,
      },
      {
        id: '00000000-0000-0000-0000-000000000003',
        rewardType: 'token',
        amount: 200,
      },
    ],
  }),
)
app.post('/be/users/:telegramAccountId/wallet/register', (_, res) =>
  res.status(200).send({
    success: true,
    data: {
      keys: 4,
      tokens: 77,
      rewardForBalance: 44,
      rewardForTxCount: 77,
      storyMediaUrl:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      storyMediaText: 'Welcome to the Hax community! lala 44',
      accounts: [
        {accountType: 'key', balance: 62},
        {accountType: 'token', balance: 6020},
      ],
    },
  }),
)
app.get('/be/leaderboard/:telegramAccountId', (_, res) =>
  res.status(200).send({
    success: true,
    data: {
      leaderboard: [
        {
          user: {
            id: '4444422',
            name: 'Anonymous_953165 Anonymous_953165 Anonymous_953165',
            photoUrl:
              'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/user-photo-default-purple.png',
            defaultPhoto: true,
          },
          score: 2600,
        },
        {
          user: {
            id: '476373419',
            name: 'Anonymous_287903',
            photoUrl:
              'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/user-photo-default-blue.png',
            defaultPhoto: true,
          },
          score: 900,
        },
        {
          user: {
            id: '149601996',
            name: 'Anonymous_49578',
            photoUrl:
              'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/user-photo-default-green.png',
            defaultPhoto: true,
          },
          score: 400,
        },
        {
          user: {
            id: '1896126465',
            name: 'Anonymous_694713',
            photoUrl:
              'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/user-photo-default-yellow.png',
            defaultPhoto: true,
          },
          score: 200,
        },
        {
          user: {
            id: '12345',
            name: 'Anonymous_600020',
            photoUrl:
              'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/user-photo-default-purple.png',
            defaultPhoto: true,
          },
          score: 0,
        },
        {
          user: {
            id: '12345',
            name: 'Anonymous_600020',
            photoUrl:
              'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/user-photo-default-purple.png',
            defaultPhoto: true,
          },
          score: 0,
        },
        {
          user: {
            id: '12345',
            name: 'Anonymous_600020',
            photoUrl:
              'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/user-photo-default-purple.png',
            defaultPhoto: true,
          },
          score: 0,
        },
        {
          user: {
            id: '12345',
            name: 'Anonymous_600020',
            photoUrl:
              'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/user-photo-default-purple.png',
            defaultPhoto: true,
          },
          score: 0,
        },
        {
          user: {
            id: '12345',
            name: 'Anonymous_600020',
            photoUrl:
              'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/user-photo-default-purple.png',
            defaultPhoto: true,
          },
          score: 0,
        },
        {
          user: {
            id: '12345',
            name: 'Anonymous_600020',
            photoUrl:
              'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/user-photo-default-purple.png',
            defaultPhoto: true,
          },
          score: 0,
        },
        {
          user: {
            id: '12345',
            name: 'Anonymous_600020-4',
            photoUrl:
              'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/user-photo-default-purple.png',
            defaultPhoto: true,
          },
          score: 0,
        },
      ],
      user: {
        fullName: 'Grace',
        photoUrl:
          'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/user-photo-default-yellow.png',
        defaultPhoto: true,
      },
      userRank: 1,
      userScore: 2600,
      totalHoldersTokens: 6400,
    },
  }),
)

app.get('/be/friends/:telegramAccountId', (req, res) => {
  const offset = parseInt(req.query.offset || '1', 10)
  const limit = parseInt(req.query.limit || '1', 10)
  const friendsList = [
    {
      referralId: '01',
      earnedForReferrer: 5000,
      photoUrl:
        'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/user-photo-default-purple.png',
      defaultPhoto: true,
      name: 'Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 ',
    },
    {
      referralId: '02',
      earnedForReferrer: 5000,
      photoUrl:
        'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/user-photo-default-purple.png',
      defaultPhoto: true,
      name: 'Dmitry 2 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 ',
    },
    {
      referralId: '03',
      earnedForReferrer: 5000,
      photoUrl:
        'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/user-photo-default-purple.png',
      defaultPhoto: true,
      name: 'Dmitry 3 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 ',
    },
    {
      referralId: '04',
      earnedForReferrer: 5000,
      photoUrl:
        'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/user-photo-default-purple.png',
      defaultPhoto: true,
      name: 'Dmitry 4 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 ',
    },
    {
      referralId: '05',
      earnedForReferrer: 5000,
      photoUrl:
        'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/user-photo-default-purple.png',
      defaultPhoto: true,
      name: 'Dmitry 5 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 ',
    },
    {
      referralId: '06',
      earnedForReferrer: 5000,
      photoUrl:
        'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/user-photo-default-purple.png',
      defaultPhoto: true,
      name: 'Dmitry 6 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 ',
    },
    {
      referralId: '07',
      earnedForReferrer: 5000,
      photoUrl:
        'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/user-photo-default-purple.png',
      defaultPhoto: true,
      name: 'Dmitry 7 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 ',
    },
    {
      referralId: '08',
      earnedForReferrer: 5000,
      photoUrl:
        'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/user-photo-default-purple.png',
      defaultPhoto: true,
      name: 'Dmitry 8 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 ',
    },
    {
      referralId: '09',
      earnedForReferrer: 5000,
      photoUrl:
        'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/user-photo-default-purple.png',
      defaultPhoto: true,
      name: 'Dmitry 9 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 ',
    },
    {
      referralId: '10',
      earnedForReferrer: 5000,
      photoUrl:
        'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/user-photo-default-purple.png',
      defaultPhoto: true,
      name: 'Dmitry 10 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 ',
    },
    {
      referralId: '11',
      earnedForReferrer: 5000,
      photoUrl:
        'https://hax-commonity.fra1.cdn.digitaloceanspaces.com/user-photo-default-purple.png',
      defaultPhoto: true,
      name: 'Dmitry 11 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 Dmitry 1 ',
    },
  ]
  res.status(200).send({
    success: true,
    data: {
      friendsCount: 5,
      friends: friendsList.slice(offset, offset + limit),
      link: 'https://example.com/?ref=4444422',
      user: {
        timer: {expireAt: '2024-08-09T05:58:00.150Z'},
        account: {balance: 0},
      },
    },
  })
})
app.post('/be/claim/friends', (_, res) => {
  const nextTimerInt = +new Date(t.timers[1].expireAt) + 24 * 60 * 60 * 1000
  t.timers[1].expireAt = new Date(nextTimerInt).toISOString()
  t.accounts[2].balance = 0
  res.status(200).send({
    success: true,
    data: {
      friendRewardAccount: t.accounts[2],
      tokenAccount: t.accounts[1],
      timer: t.timers[1],
    },
  })
})

const tasks = [
  {
    id: '5608b419-c0e3-425b-a65d-0a2bb80a282f',
    status: 'claim',
    type: 'X',
    description:
      'Join our X group jhasj hasjha sjha sj hasjh jh asjh asj hasjhasjhasjh jhasjhasjhasjhasjhasjh',
    title:
      'Social jh a s j h a s j h as j has j h as j h j h a sj ha sjha s jh a s j h a s jh jh a s jh a s j ha s j ha  sjhasjh',
    position: 1,
    data: {
      url: 'https://x.com',
      actionUrl:
        'http://127.0.0.1:5000/be/tasks?userTaskId=5608b419-c0e3-425b-a65d-0a2bb80a282f',
    },
    shouldBePinned: true,
    reward: {
      type: 'token',
      amount: 100,
    },
  },
  {
    id: '5608b419-c0e3-425b-a65d-0a2bb80a282d',
    status: 'started',
    type: 'connect_wallet',
    title: 'Connect Wallet',
    description: 'Get rewarded for your wallet activity',
    position: 0,
    data: {url: 'https://x.com'},
    shouldBePinned: true,
    reward: {type: 'token', amount: 500},
  },
  {
    id: '3e82f981-ae78-4f65-96dd-153b49883ad4',
    status: 'started',
    type: 'tg_blue',
    description: 'Follow us on Telegram Community',
    title: 'Social',
    position: 2,
    data: {
      url: 'https://x.com',
      targetId: '...',
    },
    shouldBePinned: true,
    reward: {
      type: 'token',
      amount: 100,
    },
  },
  {
    id: '8d0e3495-ab72-4a56-a7c3-2687f02186a1',
    status: 'complete',
    type: 'tg_black',
    description: 'Follow us on Telegram Community CIS',
    title: 'Social',
    position: 3,
    data: {
      url: 'https://x.com',
      targetId: '...',
    },
    shouldBePinned: true,
    reward: {
      type: 'token',
      amount: 100,
    },
  },
  {
    id: '63ffc2cb-722e-447d-b3f7-005b1ace6339',
    status: 'started',
    type: 'tg_blue',
    description: 'Follow us on Telegram Chat',
    title: 'Social',
    position: 4,
    data: {
      url: 'https://x.com',
      targetId: '...',
    },
    shouldBePinned: false,
    reward: {
      type: 'token',
      amount: 100,
    },
  },
  {
    id: '1f880710-7bc8-4c63-ad1b-8d66db097ef0',
    status: 'pending',
    type: 'tg_blue',
    description: 'Follow us on Telegram Chat CIS',
    title: 'Social lala44',
    position: 5,
    data: {
      url: 'https://x.com',
      targetId: '...',
    },
    shouldBePinned: false,
    reward: {
      type: 'token',
      amount: 100,
    },
  },
  {
    id: '363acfb4-cdf9-48eb-b439-5393f2363ea6',
    status: 'started',
    type: 'youtube',
    description: 'Join our Youtube Channel',
    title: 'Social',
    position: 51,
    data: {
      url: 'https://x.com',
    },
    shouldBePinned: false,
    reward: {
      type: 'token',
      amount: 100,
    },
  },
  {
    id: '8853a598-cc08-4b93-b043-c222ab83f006',
    status: 'complete',
    type: 'spin',
    description: 'Spin the wheel of fortune',
    title: 'Spin',
    position: 6,
    data: {
      count: 5,
    },
    shouldBePinned: false,
    reward: {
      type: 'token',
      amount: 100,
    },
  },
  {
    id: '50cb0acb-7ed6-457b-bbb7-6a78a367bdd2',
    status: 'started',
    type: 'spin',
    description: 'Spin the wheel of fortune',
    title: 'Spin',
    position: 7,
    data: {
      count: 10,
    },
    shouldBePinned: false,
    reward: {
      type: 'token',
      amount: 100,
    },
  },
  {
    id: '14f23a38-ccd3-4a4d-a80a-f869dc149e4c',
    status: 'started',
    type: 'spin',
    description: 'Spin the wheel of fortune',
    title: 'Spin',
    position: 8,
    data: {
      count: 15,
    },
    shouldBePinned: false,
    reward: {
      type: 'token',
      amount: 100,
    },
  },
  {
    id: '18284ad0-f8f9-4d2c-85be-b69aec19c949',
    status: 'started',
    type: 'invite_friends',
    description: 'Spin the wheel of fortune',
    title: 'Invite friends',
    position: 9,
    data: {
      count: 1,
    },
    shouldBePinned: false,
    reward: {
      type: 'token',
      amount: 100,
    },
  },
  {
    id: '3eba9619-5306-425f-8cce-67d33d2a3318',
    status: 'started',
    type: 'invite_friends',
    description: 'Invite friends',
    title: 'Invite friends',
    position: 10,
    data: {
      count: 1,
    },
    shouldBePinned: false,
    reward: {
      type: 'token',
      amount: 100,
    },
  },
  {
    id: '77d39418-7f7f-46ea-bde2-be014193a993',
    status: 'pending',
    type: 'invite_friends',
    description: 'Invite friends',
    title: 'Invite friends',
    position: 11,
    data: {
      progress: 2,
      count: 3,
    },
    shouldBePinned: false,
    reward: {
      type: 'token',
      amount: 100,
    },
  },
]

app.get('/be/tasks', (req, res) => {
  const userTaskId = req.query.userTaskId
  console.info({userTaskId})
  for (const task of tasks) {
    if (task.id === userTaskId) {
      task.status = 'claim'
    }
  }
  res.status(200).send({
    success: true,
    data: tasks,
  })
})
app.get('/be/tasks/4444422', (_, res) =>
  res.status(200).send({
    success: true,
    data: tasks,
  }),
)
app.post('/be/claim/tasks', (req, res) => {
  const taskId = req.body.taskId
  for (const task of tasks) {
    if (task.id === taskId) {
      task.status = 'pending'
      break
    }
  }
  return res.status(200).send({success: true})
})
app.post('/be/auth', (req, res) => {
  return res.status(200).send({
    success: true,
    data: {token: 't-token'},
  })
})

const port = 5000
app.listen(port, () => console.log(`program listening on port ${port}`))
