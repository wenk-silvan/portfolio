# Portfolio of Silvan Wenk

Hello my friend, thank you for dropping by. I realized this website as a little side-project, don't expect big tech and great changes all the time. Anyway, the website was built with Angular 18, TailwindCSS and ExpressJS. All the data is stored in a yaml file as you might have already seen.

## Changelog
- v1.5.0: Move all data to Firestore and Firebase Storage & deleted nodejs function
- v1.4.0: Improves design and compresses all images
- v1.3.0: New domain silvan-wenk.com is born
- v1.2.0: Adds new section "Blogs"
- v1.1.0: Adds new section "Photography"
- v1.0.0: Adds proper text and improves layout
- v0.1.0: Basic layout and styling

## Run locally

### Frontend Development server

Navigate to project root and run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Backend Developement server

Starting from version 1.5.0, the data is hosted on Firestore and Firebase Storage. Therefore, no backend development server is needed anymore.

## Deploy

1. Make sure you are logged into your Firebase CLI.
2. Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
3. Run `firebase deploy`

## Author

The code was written 100% by me, silvan.wenk@gmail.com. Please contact me if you have any questions or if you just want to get in touch.