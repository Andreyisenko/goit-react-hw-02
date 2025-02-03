import { useState } from 'react';
import './App.css';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
const App = () => {
  const [feedData, setFeedData] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = feedbackType => {
    console.log(feedbackType);
    if (feedbackType === 'good') {
      setFeedData(prev => ({ ...prev, good: prev.good + 1 }));
    }
    if (feedbackType === 'neutral') {
      setFeedData(prev => ({ ...prev, neutral: prev.neutral + 1 }));
    }
    if (feedbackType === 'bad') {
      setFeedData(prev => ({ ...prev, bad: prev.bad + 1 }));
    }
  };

  return (
    <div>
      goit-react-hw-02
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback feed={feedData} />
    </div>
  );
};

export default App;
