*A simple twitter bot to send your new followers a nice greeting message.*

![demo](https://user-images.githubusercontent.com/31125521/35782557-f3dbd004-09f9-11e8-9fab-eaab504a7a1a.gif)

## Requirements

### Credentials for the twitter api

Create a <a href="https://apps.twitter.com"><b> twitter app </b></a> for your twitter account and switch to the tab *Keys and Access Tokens*. If you do not have an access token yet click *Create my access token*. Now you should have all your credentials:

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

7. Testing your bot:

If everything worked your bot should be running. You can test your bot by following: <a href="https://twitter.com/justapoliteguy"><b>justapoliteguy</b></a>, who will follow you back. Check if your greeting message was sent. You can retry as many times as you wish by unfollowing and following again.

## Trouble Shooting

In case your bot does not seem to work, you can open the heroku dashboard of your app and navigate to *View logs* by clicking the *More* button in the upper right corner:

![heroku-log](https://user-images.githubusercontent.com/31125521/35809370-a91d817c-0a88-11e8-9fef-312f1c648611.png)

If you see the output *credentials ok — running bot*, the bot should be up watching for new followers. As the log only displays a few lines, you can also dump the log to a text file:
``` bash
heroku logs -a mytwitterbot1234 >> logs.txt
```

Another thing you might want to check is, whether your credentials are set up correctly. Navigate to the *Settings* tab and click *Reveal Config Vars*. Check and edit your credentials here.