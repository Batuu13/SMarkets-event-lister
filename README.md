# Smarkets Event Lister Documentation

This project was created for Smarkets Software Engineering Interview.

## Introduction
This is a simple event lister project that enables users to reach SMarkets Event API and list all the events using certain filters. It is written using ReactJS with Javascript.

In this project, there two sections as frontend and backend. Backend is a simple proxy server for SMarkets API and frontend contains ReactJS code for the interview. Both of the sections are served behind Nginx. Whole project is dockerized.

## How to run

### Production

Clone the github repo

`git clone https://github.com/Batuu13/SMarkets-event-lister.git`

`cd SMarkets-event-lister`

`docker-compose up --build` or `npm run app:start:prod`

You can reach the site on localhost directly on port 80

`http://localhost`

### Development

You can also use the project in development mode

Clone the github repo

`git clone https://github.com/Batuu13/SMarkets-event-lister.git`

`cd SMarkets-event-lister`

`npm install`

`npm run app:install`

`npm start`

This will run both backend and frontend. Backend will available at `http://localhost:8080` and frontend at `http://localhost:3000` by default.

## Features and how to use

After you run the project, you can change the filters on the left side to trigger API calls the SMarket Endpoints and update the event list. Not all of the available data is used on the events table. This could be changed easily depending on the needs.

### Features

Here are some features that can be missed because they are not always obvious but good to have.

* Alert Box to handle errors for better UX.
* URL Query Updates to persist filters on page refresh.
* Infinite Scrolling for the events table.

### Potential Improvements

* Folder structure can be changed depending on the projects scale.
* Functional or Class based components could be selected depending on development needs.
* Relative imports could be better using jsconfig to define certain paths. I wasn't able to implement this because react-starter doesn't support it. If I had use custom webpack, this would be possible.
* Using effects. On filter or url changes effects can be used to trigger api calls or to dispatch actions on errors. I didn't use this feature because I only used it on Angular before and I didn't want to implement it without knowing how to do it properly in React.
* Scss could be used. Again, depending on the development needs, it could be used instead of Material UI's own styling.
* Design could be more responsive. But I wanted to spend my time more on functionaly of the components and to make the project easy to use/navigate
* Testing could be better to improve code coverage. I just wanted to handle different type of tests in general.

## Testing

To test the frontend project, you can use `npm test` inside the *frontend/App* folder.

In order to run the test with code coverage report you can run `npm test -- --coverage` and can find the report at *frontend/App/coverage/Icov-report/index.html* in html page.