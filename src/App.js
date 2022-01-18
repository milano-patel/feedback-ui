import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to Delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([...feedback, newFeedback]);
  };

  return (
    <BrowserRouter>
      <Header text="Feedback UI" />

      <div className="container">
        <Route exact path="/">
          <FeedbackForm feedback={feedback} handleAdd={addFeedback} />
          <FeedbackStats feedback={feedback} />
          <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </Route>
        <Route path="/about" component={AboutPage} />

        <AboutIconLink />
      </div>
    </BrowserRouter>
  );
};

export default App;
