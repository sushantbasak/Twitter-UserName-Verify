## How to Setup

- You need to Download the source code of the API.
- Then you need to go Twitter Developer Console. [Link](https://developer.twitter.com/en/portal/dashboard)
- You need to Create a Project there and then you need to generate the Token.
- After that you need to create .env file in root folder.
- You can copy the Sample provided below & Replace the Token copied from Twitter Developer Console.

```bash
cd Twtter-Follower
npm install
```

#### Env File

```bash
API_URL=https://api.twitter.com/1.1/followers/list.json?cursor=-1&screen_name={your_twitter_username}&skip_status=true&include_user_entities=false
TOKEN=YOUR_API_TOKEN_TWITTER
API_URL2=https://api.twitter.com/1.1/followers/ids.json?cursor=-1&screen_name={your_twitter_username}&count=5000
```

#### API Testing Endpoints

1 - This is Admin Url - https://twitter.com/{your_twitter_username}

1.  User need to Follow your_twitter_username.
2.  Then he need to Make a request at [Link](https://twttr-follower.herokuapp.com/twitter/rewards/{twitter_user_name})
3.  If the User

    1. has followed then

       ```bash
       {"status":"success","message":"Twitter Following Succcessful"}
       ```

    2. Otherwise
       ```bash
       {"status":"success","message":"User has not Followed yet"}
       ```
