# Portfolio of Silvan Wenk

Hello my friend, thank you for dropping by. I realized this website as a little side-project, don't expect big tech and great changes all the time. Anyway, the website was built with Angular 18, TailwindCSS and ExpressJS. All the data is stored in a yaml file as you might have already seen.

## Changelog
- v1.0.1: Adds readme, improve image aspect ratios and improve styling
- v1.0.0: Adds proper text and improves layout
- v0.1.0: Basic layout and styling

## Run locally
To run the project locally, make sure to install the Angular CLI and NodeJS. Also, there are a few code changes necessary:
1. functions/index.js: Change line 10 to 'origin: "http://localhost:4200",'
2. functions/index.js: Change line 29 to 'app.listen(port, () => {
    console.log("App listening on port ", port)
})'
3. src/app/api.service.ts: Change line 8 to 'baseUrl = "http://localhost:3000/"'

## Backend Developement server

Navigate to functions/ and run `node index.js`

### Frontend Development server

Navigate to project root and run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Deploy

1. Make sure you are logged into your Firebase CLI.
2. Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
3. Run `firebase deploy`

## Author

The code was written 100% by me, silvan.wenk@gmail.com. Please contact me if you have any questions or if you just want to get in touch.