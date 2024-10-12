import React from 'react';


interface Ex3Props {
  text: string; 
}

const Ex3: React.FC<Ex3Props> = ({ text }) => {
  return (
    <div>
      <img
        src="https://www.pngkey.com/png/detail/31-316202_premium-business-cards-calling-card-printing-png.png"
        alt="ex"
      />
      <p>{text}</p> 
    </div>
  );
};

export default Ex3;


