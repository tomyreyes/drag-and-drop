# Drag Drop Animations

This is a small drag and drop project built with React. The idea behind this is that users should be able to drag and drop answers into the correct boxes.

Here is a [Demo](https://codesandbox.io/s/m2zmlzkop).

As well, there are installation instructions below that will help you run the application locally.

### Notes:

I decided to use [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) to help me build this application. This library fit my needs perfectly as it provides great support for animations, touch sensitivty and drag and drop functionalities.

In App.js you will see a lengthy onDragEnd function which handles the movement of answers between boxes. Despite its length, this is the recommended way to handle the movement of draggable elements into different droppable elements as provided by one of react-beautiful-dnd's [creators](https://egghead.io/lessons/react-move-items-between-columns-with-react-beautiful-dnd-using-ondragend).

For styling I used [styled-components](https://www.styled-components.com/) and flexbox. I favoured using styled componentsover inheriting styles from class names because I wanted build a more composed application as recommended by React's documentation. [source](https://reactjs.org/docs/composition-vs-inheritance.html)

Please note that a spinner animation is present in this application. From the wireframe provided, a spinner is expected to be put on display when the user submits their answer. However, the checkAnswer function I have implemented is very fast so you will likely not see this animation at all. Feel free to add a setTimeout if you would like to see this animation.

I have created unit tests which test the helper functions I have created. These functions play a very large role in checking the user's answer so I thought it was important to create tests for these.

### Application Structure

```
├── client
    ├── public
    │   ├── index.html
    ├── src

    ├── __tests__
    │   │    │   ├── **.js - contain unit tests
    │   ├── components
    │   │    │   │── **.js - different building blocks of the application
    │   ├── utils
    │   │    │  ├── **.js    # Helper functions
    │   │    │**.js
    │   │initialData.js      # Contains the question data, including answers, questions, and the boxes used
    │   │**.js               # React configurations
    │
    │
    │
    ├── package.json
    ├── package.json
    └── .gitignore
```

### Running this Project

Pre-requisiets:
[Node.js and NPM](https://nodejs.org/en/download/)

```
from root directory:
npm install
npm start - should be set to localhost:3000
```

## This application was built using:

- [React](https://reactjs.org/)
- [styled-components](https://www.styled-components.com/)
- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)

## Special Thanks To:

[Alex Reardon](https://egghead.io/lessons/react-course-introduction-beautiful-and-accessible-drag-and-drop-with-react-beautiful-dnd) for his free course on react-beautiful-dnd
