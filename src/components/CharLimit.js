import classNames from 'classnames';

export const CharLimit = ({
  showCharLimitAt = 0, charLimitWarn, charLimit, charLimitValue = '',
}) => {
  // if no character limit just return
  if (
    (!charLimit && !charLimitWarn)
    || charLimitValue.length < showCharLimitAt
  ) {
    return null;
  }

  const warnChar = charLimitWarn || charLimit / 2;

  /**
   * calculate width the coloured line should be based on value length
   * as a percentage of character limit.
   */
  let width = `${charLimitValue.length / charLimit * 100}%`;
  let backgroundColor = '#6c7781';

  // to highlight remaining characters if less than half of the limit
  if (charLimitValue.length >= warnChar) {
    backgroundColor = '#FFB900';
  }

  // warning char limit hit
  if (charLimit && charLimitValue.length === charLimit) {
    backgroundColor = '#F56E28';
  }

  // potential error beyond char limit
  if (charLimit && charLimitValue.length > charLimit) {
    backgroundColor = '#DC3232';
    // setting with to 100% so the bar doesn't go beyond the div
    width = '100%';
  }

  const charLimitCountClasses = classNames('charLimit-count',
    { 'charLimit-count--warn': charLimitValue.length >= warnChar });

  return (
    <div className="wrappedInput-charLimit charLimit">
      <div className={charLimitCountClasses} style={{ backgroundColor }}>
        {`${(charLimit || charLimitWarn) - charLimitValue.length}`}
      </div>
      <div className="charLimit-bar">
        <div className="charLimit-bar-progress" style={{ backgroundColor, width }} />
      </div>
    </div>
  );
};

export default CharLimit;