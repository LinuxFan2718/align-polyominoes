import { useState } from 'react';

function Square() {
  const [color, setColor] = useState('');

  function classes() {
    let classes = ["square"]
    if (color !== '') {
      classes.push(color);
    }
    return classes.join(' ');
  }

  function clickHandler() {
    setColor("yellow");
  }

  return (
    <button 
      className={classes()}
      onClick={clickHandler} 
    />
  );
}

export default Square;