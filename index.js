var Twit = require('twit')
var greet = require('./greeting')

var T = new Twit({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret
})

function verifyCredentials(cb) {
  T.get(
    'account/verify_credentials',
    {
      include_entities: false,
      skip_status: true,
      include_email: false
    },
    cb
  )
}

function sendGreeting(user) {
  T.post(
    'direct_messages/new',
    {
      user_id: user.id_str,
      text: greet(user.name)
    },
    function(err) {
      if (err) {
        console.error('error in sendGreeting to user: %s %s %s', user.name, user.screen_name, user.id_str)
        console.error(err)
      }
    }
  )
}

var stream = T.stream('user')

verifyCredentials(function(err, res) {
  if (err) throw err

  var account_id = res.id_str

  console.log('credentials ok - running bot')

  stream.on('follow', function(json) {
    // ignore event, which is fired when we follow someone
    if (json.event === 'follow' && json.source.id_str !== account_id) {
      sendGreeting(json.source)
    }
  })

  stream.on('error', function(error) {
    throw error
  })
})

