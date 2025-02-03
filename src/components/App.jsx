import { useEffect, useState } from 'react';
import './App.css';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Notification from './Notification/Notification ';
const App = () => {
  const [feedData, setFeedData] = useState(() => {
    const dataStorage = localStorage.getItem('key');
    console.log(dataStorage);
    if (dataStorage !== null) {
      return JSON.parse(dataStorage);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem('key', JSON.stringify(feedData));
  }, [feedData]);

  const updateFeedback = feedbackType => {
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
  const resetFeedback = () => {
    setFeedData({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedData.good + feedData.neutral + feedData.bad;

  return (
    <div>
      <Description />
      <Options
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
      />
      {(totalFeedback > 0 && (
        <Feedback totalFeedback={totalFeedback} feedData={feedData} />
      )) ||
        (totalFeedback === 0 && <Notification />)}
    </div>
  );
};

export default App;
