import clsx from 'clsx';
import css from './Options.module.css';

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  // console.log(updateFeedback);

  return (
    <div className={css.wraper}>
      <button onClick={() => updateFeedback('good')} className={clsx(css.btn)}>
        Good
      </button>
      <button
        onClick={() => updateFeedback('neutral')}
        className={clsx(css.btn, css.ntr)}
      >
        Neutral
      </button>
      <button
        onClick={() => updateFeedback('bad')}
        className={clsx(css.btn, css.bad)}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} className={clsx(css.btn, css.res)}>
          Reset
        </button>
      )}{' '}
    </div>
  );
};
export default Options;
