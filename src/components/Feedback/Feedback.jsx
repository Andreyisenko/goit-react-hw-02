import css from './Feedback.module.css'
const Feedback = ({feed:{good, neutral, bad}}) => {
  // console.log(good);
  
  return (
    <div>
      <p className={css.text}>Good: {good}</p>
      <p className={css.text}>Neutral: {neutral}</p>
      <p className={css.text}>Bad: {bad}</p>
      <p className={css.text}>Total: {}</p>
      <p className={css.text}>Positive: {}</p>
    </div>
  );
};
export default Feedback;
console.log();
