# Find It App

<p align="center">
  <img src="https://i.imgur.com/TiaQDZ9.jpg"/>
</p>

## About
A mobile app built with React Native and Expo. This application uses image recognition technology Google Cloud Vision API to identify landmarks with great accuracy. Once the image has been processed and identified, user is directed to Wikipedia page using WikiMedia API.

The user can either take the photo or pick an existing image from their phone to use the app.

<p align="center">
   <img src="https://media.giphy.com/media/JtBOaYsRNX7trkl6I9/giphy.gif">
</p>

## How to run locally
1. Clone and fork this repo
2. Run `npm install` to load dependencies
3. Create a folder `config` and `environment.js` file with Google Cloud Vision API like below:
```javascript
let environments = {
  staging: {
    GOOGLE_CLOUD_VISION_API_KEY: YOUR_KEY_HERE
  }
};


function getReleaseChannel() {
  let releaseChannel = Expo.Constants.manifest.releaseChannel;
  if (releaseChannel === undefined) {
    return 'staging';
  } else if (releaseChannel === 'staging') {
    return 'staging';
  } else {
    return 'staging';
  }
}

function getEnvironment(env) {
  console.log('Release Channel: ', getReleaseChannel());
  return environments[env];
}

var Environment = getEnvironment(getReleaseChannel());
export default Environment;
```

4. `expo start` to open the application

## Technologies
* React Native 
* Expo 
* Redux 
* Google Cloud Vision API 
* Wikipedia API
