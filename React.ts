// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// App.tsx
import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

// 1. ProductCard Component
const ProductCard = ({ name, price }: { name: string; price: number }) => (
  <div className="border p-4 rounded shadow-md">
    <h2 className="text-xl font-bold">{name}</h2>
    <p className="text-gray-700">${price.toFixed(2)}</p>
  </div>
);

// 2. ToggleMessage Component
const ToggleMessage = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setVisible(!visible)} className="btn">Toggle</button>
      <p>{visible ? 'Message is visible' : 'Message is hidden'}</p>
    </div>
  );
};

// 3. Document Title Updater
const TitleUpdater = () => {
  const [text, setText] = useState('');
  useEffect(() => {
    document.title = text;
  }, [text]);

  return <input type="text" value={text} onChange={e => setText(e.target.value)} className="input" />;
};

// 4. Simple Input Logger
const InputLogger = () => {
  const [input, setInput] = useState('');
  return (
    <div>
      <input type="text" onChange={e => setInput(e.target.value)} className="input" />
      <p>{input}</p>
    </div>
  );
};

// 5. Show/Hide Details
const ItemWithDetails = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h3>Item Name</h3>
      <button onClick={() => setShow(!show)} className="btn">{show ? 'Hide' : 'Show'} Details</button>
      {show && <p>Here are more details about the item...</p>}
    </div>
  );
};

// 6. UserList Component
const UserList = ({ users }: { users: { id: number; name: string }[] }) => (
  <ul>
    {users.map(user => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);

// 7. Feedback Form
const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback:', feedback);
  };
  return (
    <form onSubmit={handleSubmit}>
      <textarea value={feedback} onChange={e => setFeedback(e.target.value)} className="textarea" />
      <button type="submit" className="btn">Submit</button>
    </form>
  );
};

// 8. User Preferences Context
const PreferenceContext = createContext({ fontSize: 'medium', setFontSize: (size: string) => {} });
const PreferencesProvider = ({ children }: { children: React.ReactNode }) => {
  const [fontSize, setFontSize] = useState('medium');
  return (
    <PreferenceContext.Provider value={{ fontSize, setFontSize }}>
      <button onClick={() => setFontSize(fontSize === 'medium' ? 'large' : 'medium')} className="btn">Toggle Font Size</button>
      {children}
    </PreferenceContext.Provider>
  );
};
const FontSizeConsumer = () => {
  const { fontSize } = useContext(PreferenceContext);
  return <p style={{ fontSize: fontSize === 'large' ? '24px' : '16px' }}>This text uses the context font size.</p>;
};

// 9. Multi-Page App
const HomePage = () => <h1>Home Page</h1>;
const ProfilePage = () => <h1>Profile Page</h1>;
const SettingsPage = () => <h1>Settings Page</h1>;

const App = () => (
  <HashRouter>
    <PreferencesProvider>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>

      <hr className="my-4" />
      <ProductCard name="Sample Product" price={29.99} />
      <ToggleMessage />
      <TitleUpdater />
      <InputLogger />
      <ItemWithDetails />
      <UserList users={[{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]} />
      <FeedbackForm />
      <FontSizeConsumer />
    </PreferencesProvider>
  </HashRouter>
);

export default App;

// index.css
/* Optional basic styles */
body {
  font-family: sans-serif;
  margin: 0;
  padding: 2rem;
  background-color: #f9fafb;
}
.input, .textarea, .btn {
  display: block;
  margin-top: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}
.btn {
  background-color: #007bff;
  color: white;
  cursor: pointer;
}
.btn:hover {
  background-color: #0056b3;
}
