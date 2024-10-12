import React from 'react';


interface Ex2Props {
  text: string; 
}

const Ex2: React.FC<Ex2Props> = ({ text }) => {
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

export default Ex2;