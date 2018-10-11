This is a personal project where I'm rebuilding my existing live site [jeffnhorner.com](https://www.jeffnhorner.com) that is running on html, css, bootstrap, and jQuery to a React app. 

I've kept some of the create-react-app documentation below that explains the steps to to take if you clone the repo and want to run this app locally. It's a work in progress. There is a lot of work to do:

- Organizing the css files into individual css files that are tied to individual components. Outside of individual style sheets, there will also be a global style sheet that renders with the most parent component.
- Organizing the navigation with reach-router to be more best practice that I'm currently using it
- Figuring out how to add a class to the body element if you click on the 'Learn To Code' navigation item. On my live site, this renders a totally different page design, however, in the react app, because the app is rendered to the dom element "app" in the index.html file,  the body content is only updated within this container when you use the navigation items. (sorry for the run on sentence)

The motivation behind this simple project is to take the React skills I'm learning and solidifying them with a project rather than a course/tutorial. 



Begin of the create-react-app documentation:

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.

