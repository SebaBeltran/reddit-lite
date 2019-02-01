## Reddit Lite

A read only lite version of Reddit that lists posts for any subreddit without need of logging in.

React app created with create-react-app for fast boilerplate.

## How does the app works:

User searches for a subreddit.
An api request is made and 3 pieces of data are stored in the store: An array of 25 posts for that subreddit, and the name of the first and the last element in the array.

Once the List of posts is mounted a setInterval method will make new api request searching for new post every 60 seconds. If there are, then it will be stored at beginning of the array of posts in the store, so they are displayed at the top. The List component has lifecycle methods that will evaluate if the incoming posts are recent posts or are posts required by the user and keep the scrollbar in the same position so the user won’t loose track of his current position. The user will request more posts once the bottom of the list was reached. No external libraries was used for the infinite scroller.

If the incoming posts are newer than the current first one then, the new first post will be stored and used by the autofetch function to keep searching for newer posts. If, instead, the incoming posts where requested by the user once he reached the bottom of the list, then the one stored is the last one of the set of 25, and it will be used the next time the user requests more posts.

Files are structured in 4 main folders:
How does the app works:

### API

which contains a file for all api requests

### COMPONENTS

for functional components - reusable UI components
Layout: is the wrapper for all UI elements and will render the SearchBar component along with the Loading or List components which are conditionally rendered.
Loading: simple component to give feedback to user about the status of his request
Post: functional component that will render all data for each post in the list
SearchInput: also functional component with props to handle user’s interactions
SubmitButton: this component will trigger a given method trough props to make the request

### CONTAINERS

for class components that contain the logic for the functional components
List: contains most of the logic in the app. With its lifecycle methods will handle the position of the page so every time the component rerenders won’t loose track of his position. It will also be asking for new posts every one minute. Once it gets all the posts they are mapped and rendered. It has an event listener for the scroll., once the user reaches the bottom it will ask for more posts.

SearchBar: the only stateful component in the App will keep track of the interactions in the SearchInput component and only once the user clicked the SubmitButton it will store the value of the input in the store and make the request for posts

### REDUX

for state management files

## State Management

All data is stored in Redux store.
Store is managed independently with individual reducers for ease of maintenance.
Thunk: This middleware was really useful for asyncronous operations, data processing before dispatching and conditional dispatching.

## TESTING

For testing I used Jest along with enzyme. The Post component is a snapshot component to make sure all data required is displayed.
Action creators tests were made tu ensure the correct actions was called.
SubmitButton and SearchInput callbacks were tested too.
