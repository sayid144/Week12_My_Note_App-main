# WEEK 12: My Note App - Redux Toolkit

This Project allows you to practice the concepts and techniques learned last Sunday and apply them in a concrete project. This assignment explored React advanced state management with Redux Toolkit. In your Project for this assignment, you will demonstrate proficiency by creating a Single Page Application that performs CRUD (Create, Read, Update, Delete) operations on a locally hosted API server.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this assignment.**

## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Clone your OWN version of Repo (Not Gabi's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on this Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.
- [ ] **RUN** `npm install` at the root to retrieve all the dependencies for the node server. You will not need to create any react apps here nor will you need to install any other dependencies. You should have all you need in this repo.
- [ ]  **RUN** `npm run dev` at the root of your project.

------------------- SERVER ----------------------
- [ ] **LOOK** at all the files you've been given for this project. One important folder to note is `server`. This folder contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.
- [ ] **CHANGE** `cd` into `server` folder!
- [ ] **RUN** `npm install` in the `server` folder.
- [ ] **RUN** `npm start` to get your API up and running on `http://localhost:9000`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
- [ ] After your API is up and running, you can open chrome and type in `http://localhost:9000/notes`. You should see an Array `[]`. This is an array that your **API** will be using to store your notes data.
- [ ] Keep your server running while working on your project.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Submit your assignment at the student portal.

## Minimum Viable Product

Remove all props from components and use `useSelector` and `useDispatch` to get data from Redux store.

- [ ] Create a directory called `store` under src, add `index.js`
- [ ] Create another directory under store called `api` and add `NoteSlice.js`, implement your reducer/actions logic here.  
- [ ] In `Notes` component to display all the notes from `useSelector`
- [ ] Change all props in `AddNote` component and use `useDispatch` to make call to `NoteSlice`.
- [ ] Do the same for `EditNote`.
- [ ] Make sure to redirect the user after editing or adding a note using `useNavigation` hook.
- [ ] Make sure to implement the logic to delete notes.

- Example:

```js
[
  {
    title: 'Clean the house',
    content: "Buy cleaning products to clean"
  }
];
```



## STRETCH PROBLEMS

- [ ] **ADVANCED** Use RTK Query instead of Redux Toolkit!
