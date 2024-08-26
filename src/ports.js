import Joi from 'joi'

const urlRoot = import.meta.env.VITE_REACT_APP_URL_SERVER

const fetchAndAssert = async ({
  path,
  method,
  body,
  jwtToken = null,
  schema = null,
}) => {
  const params = {method, headers: {}}
  if (body) {
    params.body = JSON.stringify(body)
  }
  if (method.toLowerCase() === 'post' || method.toLowerCase() === 'patch') {
    params.headers.Accept = 'application/json'
    params.headers['Content-Type'] = 'application/json'
  }
  if (jwtToken !== null) {
    params.headers.Authorization = `Bearer ${jwtToken}`
  }
  const res = await fetch(`${urlRoot}${path}`, params)
  const {success, data} = await res.json()
  if (!success) {
    throw new Error(`res status for path=${path} is not success`)
  }
  if (schema !== null) {
    const errorMessage = schema.validate(data).error
    if (errorMessage) {
      console.error(errorMessage)
      throw new Error(errorMessage)
    }
  }
  return {data}
}

/**
 * POST /game/spin
 */
export const fetchPostHaxGameSpin = async ({userId, jwtToken}) => {
  const path = '/game/spin'
  const schema = Joi.object({
    user: Joi.object({
      id: Joi.string().required().min(1),
      accounts: Joi.array()
        .items(
          Joi.object({
            accountType: Joi.string().required().min(1),
            balance: Joi.number().integer().required().min(0),
          }).unknown(true),
        )
        .required(),
    })
      .required()
      .unknown(true),
    reward: Joi.object({
      rewardType: Joi.string().required().min(1),
      amount: Joi.number().integer().required().min(0),
    })
      .required()
      .unknown(true),
  })
    .required()
    .unknown(true)
  const {data} = await fetchAndAssert({
    path,
    method: 'post',
    body: {userId},
    schema,
    jwtToken,
  })
  const accounts = data.user.accounts.reduce(
    (acc, {accountType, balance}) => ({...acc, [accountType]: balance}),
    {},
  )
  const nextSpingReward = data.reward
  return {accounts, nextSpingReward}
}

/**
 * POST /claim/keys
 */
export const fetchPostHaxClaimKeys = async ({userId, jwtToken}) => {
  const path = '/claim/keys'
  const schema = Joi.object({
    account: Joi.object({
      accountType: Joi.string().required().min(1),
      balance: Joi.number().integer().required().min(0),
    })
      .required()
      .unknown(true),
    timer: Joi.object({
      timerType: Joi.string().required().min(1),
      expireAt: Joi.string().required().min(1),
    })
      .required()
      .unknown(true),
  })
    .required()
    .unknown(true)
  const {
    data: {account, timer},
  } = await fetchAndAssert({
    path,
    method: 'post',
    body: {userId},
    schema,
    jwtToken,
  })
  return {account, timer}
}

/**
 * GET /users/:userId
 */
export const fetchGetHaxUsersUserid = async ({userId, jwtToken, fullName, friendId = null}) => {
  const path = friendId
    ? `/users/${userId}?fullName=${fullName}&friendId=${friendId}`
    : `/users/${userId}?fullName=${fullName}`
  const schema = Joi.object({
    id: Joi.string().required().min(1),
    status: Joi.string().required().min(1),
    accounts: Joi.array()
      .items(
        Joi.object({
          id: Joi.string().required().min(1),
          accountType: Joi.string().required().min(1),
          balance: Joi.number().integer().required().min(0),
        }).unknown(true),
      )
      .required(),
    timers: Joi.array()
      .items(
        Joi.object({
          id: Joi.string().required().min(1),
          userId: Joi.string().required().min(1),
          timerType: Joi.string().required().min(1),
          expireAt: Joi.string().required().min(1),
        }).unknown(true),
      )
      .required(),
  })
    .required()
    .unknown(true)
  const {data: userData} = await fetchAndAssert({
    method: 'get',
    path,
    jwtToken,
    schema,
  })
  return {userData}
}

/**
 * POST /users/:userId
 */
export const fetchPostHaxUsersUserid = async ({userId, jwtToken, p}) => {
  // XXX: make PATCH
  const path = `/users/${userId}`
  await fetchAndAssert({path, method: 'POST', body: p, jwtToken})
}

/**
 * GET /game/rewards
 */
export const fetchGetHaxGameRewards = async ({jwtToken}) => {
  const path = '/game/rewards'
  const schema = Joi.array()
    .items(
      Joi.object({
        id: Joi.string().required().min(1),
        rewardType: Joi.string().required().min(1),
        amount: Joi.number().integer().required().min(0),
      }).unknown(true),
    )
    .required()
  const {data: gameRewardsData} = await fetchAndAssert({
    path,
    method: 'get',
    schema,
    jwtToken,
  })
  return {gameRewardsData}
}

/**
 * POST /users/:userId/wallet/register
 */
export const fetchPostHaxUsersUserIdWalletRegister = async ({
  userId,
  body,
  jwtToken,
}) => {
  const path = `/users/${userId}/wallet/register`
  const schema = Joi.object({
    rewardForBalance: Joi.number().integer().required().min(0),
    rewardForTxCount: Joi.number().integer().required().min(0),
    storyMediaUrl: Joi.string().required().min(1),
    storyMediaText: Joi.string().required().min(1),
    accounts: Joi.array()
      .items(
        Joi.object({
          accountType: Joi.string().required().min(1),
          balance: Joi.number().integer().required().min(0),
        }).unknown(true),
      )
      .required(),
  })
    .required()
    .unknown(true)
  const {data: registerData} = await fetchAndAssert({
    path,
    method: 'post',
    body,
    schema,
    jwtToken,
  })
  return {registerData}
}

/**
 * GET /leaderboard/:userId
 */
export const fetchGetHaxLeaderboardList = async ({userId, jwtToken}) => {
  const path = `/leaderboard/${userId}`
  const schema = Joi.object({
    totalHoldersTokens: Joi.number().integer().required().min(0),
    userRank: Joi.number().integer().required().min(0),
    userScore: Joi.number().integer().required().min(0),
    user: Joi.object({
      fullName: Joi.string().required().min(1),
      photoUrl: Joi.string().required().min(1),
      defaultPhoto: Joi.boolean().required(),
    })
      .required()
      .unknown(true),
    leaderboard: Joi.array()
      .items(
        Joi.object({
          user: Joi.object({
            id: Joi.string().required().min(1),
            name: Joi.string().required().min(1),
            photoUrl: Joi.string().required().min(1),
            defaultPhoto: Joi.boolean().required(),
          })
            .required()
            .unknown(true),
          score: Joi.number().integer().required().min(0),
        }).unknown(true),
      )
      .required(),
  })
    .required()
    .unknown(true)
  const {data: leaderboardData} = await fetchAndAssert({
    path,
    method: 'get',
    schema,
    jwtToken,
  })
  return {leaderboardData}
}

/**
 * GET /friends/:userId?offset=&limit=
 */
export const fetchGetHaxFriendsUserid = async ({
  userId,
  jwtToken,
  offset = 0,
  limit = 2,
}) => {
  const path = `/friends/${userId}?offset=${offset}&limit=${limit}`
  const schema = Joi.object({
    friendsCount: Joi.number().integer().required().min(0),
    link: Joi.string().required().min(1),
    friends: Joi.array()
      .items(
        Joi.object({
          photoUrl: Joi.string().required().min(1),
          referralId: Joi.string().required().min(1),
          earnedForReferrer: Joi.number().integer().required().min(0),
          defaultPhoto: Joi.boolean().required(),
          name: Joi.string().required().min(1),
        }).unknown(true),
      )
      .required(),
    user: Joi.object({
      timer: Joi.object({
        expireAt: Joi.string().required().min(1),
      })
        .required()
        .unknown(true),
      account: Joi.object({
        balance: Joi.number().integer().required().min(0),
      })
        .required()
        .unknown(true),
    })
      .required()
      .unknown(true),
  })
    .required()
    .unknown(true)
  const {data: friendsData} = await fetchAndAssert({
    path,
    method: 'get',
    schema,
    jwtToken,
  })
  return {friendsData}
}

/**
 * POST /claim/friends
 */
export const fetchPostHaxClaimFriends = async ({userId, jwtToken}) => {
  const path = `/claim/friends`
  await fetchAndAssert({path, method: 'post', body: {userId}, jwtToken})
}

/**
 * GET /tasks/:userId
 */
export const fetchGetHaxTasksUserid = async ({userId, jwtToken}) => {
  const path = `/tasks/${userId}`
  const schema = Joi.array()
    .items(
      Joi.object({
        id: Joi.string().required().min(1),
        data: Joi.object({
          url: Joi.string(),
          count: Joi.number(),
          progress: Joi.number(),
        })
          .required()
          .unknown(true),
        description: Joi.string().required().min(1),
        position: Joi.number().integer().required().min(0),
        reward: Joi.object({
          type: Joi.string().required().min(1),
          amount: Joi.number().integer().required().min(0),
        })
          .required()
          .unknown(true),
        status: Joi.string().required().min(1),
        type: Joi.string().required().min(1),
        shouldBePinned: Joi.boolean().required(),
      }).unknown(true),
    )
    .required()
  const {data: tasksData} = await fetchAndAssert({
    path,
    method: 'get',
    schema,
    jwtToken,
  })
  return {tasksData}
}

/**
 * POST /claim/tasks
 */
export const fetchPostHaxClaimTasks = async ({userId, taskId, jwtToken}) => {
  const path = `/claim/tasks`
  await fetchAndAssert({path, method: 'post', body: {userId, taskId}, jwtToken})
}

/**
 * POST /auth
 */
export const fetchPostHaxAuth = async ({initData}) => {
  const path = `/auth`
  const schema = Joi.object({
    token: Joi.string().required().min(1),
  })
    .required()
    .unknown(true)
  const {
    data: {token: jwtToken},
  } = await fetchAndAssert({
    path,
    method: 'post',
    body: {initData},
    schema,
  })
  return {jwtToken}
}
