import React from 'react';
import barbershop from '../images/barbershop.jpg'
class Home extends React.Component {
  render () {
    return (
      <>
        <div style={{ backgroundImage: `url(require("images/barbershop.jpg"))` }}>
            <h1>Home!</h1>
          </div>
      </>
    );
  };
};

export default Home;
