*A simple twitter bot to send your new followers a nice greeting message.*

![demo](https://user-images.githubusercontent.com/31125521/35782056-b76b2e28-09f2-11e8-958f-155f540f8952.gif)

## Requirements

### Credentials for the twitter-api

Create a twitter app for your twitter account at apps.twitter.com and change to the tab *Keys and Access Tokens*. If you do not have an access token yet click *Create my access token*. Now you should have all your credentials:

![twitter-credentials](https://user-images.githubusercontent.com/31125521/35782141-f738728a-09f3-11e8-804c-00c8dec197c3.png)


### Heroku account
If you do not have a heroku account, set one up and install the <a href="https://devcenter.heroku.com/articles/heroku-cli#download-and-install"><b> heroku cli </b></a>.

## Set up your bot

1. Clone the repository:
``` bash
git clone https://github.com/justadudewhohacks/twitter-greet-followers-bot
cd twitter-greet-followers-bot
```

2. Create a heroku app:
``` bash
heroku app:create mytwitterbot1234
```

3. Set your twitter-api credentials as environment variables:
``` bash
heroku config:set consumer_key=xxx
heroku config:set consumer_secret=xxx
heroku config:set access_token=xxx
heroku config:set access_token_secret=xxx
```

4. Edit greeting.js and insert your greeting message

![greeting](https://user-images.githubusercontent.com/31125521/35782464-d2199f42-09f8-11e8-9966-f2db92ad423d.png)


5. Commit the changes and push to heroku
``` bash
git add .
git commit -m "changed the greeting message"
git push heroku master
```

6. Stop the web dyno (default) and start your app in a worker dyno:
``` bash
heroku ps:scale web=0 worker=1
```