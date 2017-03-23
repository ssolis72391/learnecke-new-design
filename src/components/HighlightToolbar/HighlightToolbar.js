import React, { useState, useEffect, forwardRef } from 'react';
import PopOver from 'react-text-selection-popover';
import useStyles from './HighlightToolbarStyles';

const HighlightToolbar = forwardRef((props, ref) => {
  const [highlightText, setHighlightText] = useState('');

  const { handleClickTooltip, loading } = props;
  const classes = useStyles(props);

  const handleTextSelected = () => {
    let result = window.getSelection() || document.getSelection();
    if (!result && document.selection) {
      result = document.selection.createRange().text;
    }

    if (result) {
      if (result.toString() !== '') {
        setHighlightText(result.toString());
      }
      return result.toString();
    }
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleTextSelected);
    return () => {
      window.removeEventListener('mouseup', handleTextSelected);
    };
  }, []);

  return (
    <PopOver selectionRef={ref}>
      <button type='button' className={classes.tooltipButton} onClick={() => handleClickTooltip(highlightText)}>
        <span className={classes.tooltipText}>GENERATE QUESTIONS</span>
      </button>
    </PopOver>
  );
});

export default HighlightToolbar;
