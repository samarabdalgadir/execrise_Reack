Setup Your Environment
Your first task is to set up a local React development environment using Vite. Follow the official Vite guide to create a new React + TypeScript project. Once done, try to render a simple 'Hello World' message.

Create a Product Card Component
Create a new functional component called `ProductCard`. It should accept `name` (string) and `price` (number) as props and display them in a visually appealing way (e.g., using `<h2>` for name and `<p>` for price).

Toggleable Message
Create a component `ToggleMessage` that has a button. When the button is clicked, it toggles the visibility of a message ('Message is visible' / 'Message is hidden'). Use state to manage the visibility.

Document Title Updater
Create a component with an input field. Use `useEffect` to update the browser's document title (<code>document.title</code>) whenever the text in the input field changes. Use `useState` to manage the input field's value.

Simple Input Logger
Create a component with an text input field. As the user types into the input, display the current value of the input field below it in a `<p>` tag. Use the `onChange` event.


Show/Hide Details
Create a component `ItemWithDetails`. It should display an item's name and a button 'Show Details'. When the button is clicked, it should display additional details about the item. Clicking it again should hide the details. Use conditional rendering.

User List Component
Create a component `UserList` that takes an array of user objects (e.g., `[{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]`) as a prop. Render each user's name in a list item. Ensure each list item has a unique and stable key.

Feedback Form
Create a simple feedback form with a textarea for comments and a submit button. Make the textarea a controlled component. When submitted, log the feedback to the console

User Preferences Context
Create a context for user preferences (e.g., `fontSize: 'medium'`). Provide this context at the top level of a small component tree. Create a child component that consumes this context and displays text using the font size from the context. Add a button in the provider or another component to change the font size.

Simple Multi-Page App
Create a small application with three 'pages': HomePage, ProfilePage, and SettingsPage. Use `HashRouter`, `Routes`, `Route`, and `Link` components to allow navigation between them. Each page component can just display its name for now.