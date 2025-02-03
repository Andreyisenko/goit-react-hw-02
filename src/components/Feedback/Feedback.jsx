import css from './Feedback.module.css';
const Feedback = ({ feedData, totalFeedback }) => {
  // console.log(good);

  return (
    <div>
      <p className={css.text}>Good: {feedData.good}</p>
      <p className={css.text}>Neutral: {feedData.neutral}</p>
      <p className={css.text}>Bad: {feedData.bad}</p>
      <p className={css.text}>Total: {totalFeedback}</p>
      <p className={css.text}>
        Positive: {Math.round((feedData.good / totalFeedback) * 100)}%
      </p>
    </div>
  );
};
export default Feedback;
console.log();
