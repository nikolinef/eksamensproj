import React from 'react';

function Bookbtn({ link }) {
  return (
    <div className="Bookbtn">
      <a href={link}>Læs mere</a>
    </div>
  );
}

export default Bookbtn;

/****
<Bookbtn link="Der hvor du gerne vil hen med linket" />
***/