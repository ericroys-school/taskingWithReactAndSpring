# Demo React Project using Redux and Java Spring

## Description

This is a preliminary learning experience working with React Redux for the
front-end and Java Spring for serving the REST service. This repository
provides the React portion of the puzzle and the [Java Spring](https://github.com/ericroys-school/spring-task-restservices "Spring Project") RESTful web service provides the other piece.

## Installation

At some point this will be automated but for now it's a manual excercise.

Clone this repo for the React front-end

##### `git clone https://github.com/ericroys-school/taskingWithReactAndSpring.git`

From within the project directory, run

##### `npm start`

This should open the React app in your browser.

![alt text](/doc/images/task_screenshot.png "Tasking Screenshot")

You will need to install/run the Java Spring portion before things will work properly as the React app expects to retrieve data from the web service. Please follow the instructions in that repo's readme.

## Usage

The functionality of the app provides that when the app is opened, a listing of
tasks is provided. One may add new tasks, complete existing tasks, and remove existing tasks. Note: There's currently a bug when marking a task as completed whereby you have to refresh the screen manually to see that update. Thanks for your patience while that get sorted in some future release.

## Credits

This was a self-study effort.

## License

Use as you see fit. Using the "unlicense" license.
