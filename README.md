# Empyr Publisher Sample

This project demonstrates a sample Angular 2/4 publisher integration that includes direct signup with card, hosted fields signup, venue search, and pixel tracking. This project needs the sample publisher server to run properly (https://github.com/EmpyrNetwork/sample_publisher_server).

## Running Locally

Run `npm install` to install the dependencies and `npm start` to run the app locally. Navigate to `http://localhost:4200/` to view the app. The app will automatically reload if you change any of the source files. The app also needs to be configured to use the accompanying API server.

## Configuration

The configuration files are found in the src/environments folder. The following parameters need to be set:

```html
API_URL: 'http://localhost:8080', // the url of the API server, which can be run locally
API_KEY: 'v3c6191f-f341-4f7c-8a41-55c280db7095' // Empyr API key in the test environment
```

## Venue Search

The venue search API call is found in the <b>src/app/services/search</b> folder. The code to display search results is in the <b>src/app/components/search-results/results.component.html</b> file.

## Signup with Card

The signupWithCard API call is found in the <b>src/app/services/user/user.service.ts</b> file.

## Hosted Fields Signup

The Hosted Fields implementation can be found in the <b>src/app/containers/hosted-signup-page/hosted-signup-page.component.html</b> and <b>src/app/containers/hosted-signup-page/hosted-signup-page.component.ts</b> files.

## Pixel Tracking
The pixel tracking implementation can be found in the <b>src/app/components/search-results/results.component.ts</b> (setup code) and the <b>src/app/components/search-results/results.component.html</b> (tracking code) files.
