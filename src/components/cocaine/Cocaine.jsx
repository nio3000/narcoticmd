import React from 'react';
import './Cocaine.css';

const Cocaine = ({visible = false }) => {

  return (
    <div className="Cocaine" style={(visible)? style.visible : style.hidden}>
      <form>
        <p>Format</p>
        <select>
          <option value="bold">Bold</option>
          <option value="italic">Italic</option>
          <option value="strike">Strikethrough</option>
          <option value="underline">Underline</option>
        </select>
        <p>Headers</p>
        <select>
          <option value="h1">H1</option>
          <option value="h2">H2</option>
          <option value="h3">H3</option>
          <option value="h4">H4</option>
        </select>
      </form>
    </div>
  );
};

export let style = {
  visible: {
    display: 'block'
  },
  hidden: {
    display: 'none'
  }
};


export default Cocaine;