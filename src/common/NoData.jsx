import React from 'react';

const NoData = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    image: {
      maxWidth: '300px',
      height: 'auto',
    },
    text: {
      fontSize: '1.2rem',
      marginTop: '1rem',
      color: '#555',
      marginBottom: '1rem',
    },
  };

  return (
    <div style={styles.container}>
      <img 
        loading='lazy'
        src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150624582.jpg?w=1480&t=st=1722610996~exp=1722611596~hmac=a72e8248621a184be71ff203763f2cad34b2eda97651ba0911887a72cf86e39b" 
        alt="No Data"
        style={styles.image}
      />
      <p style={styles.text}>No data available</p>
    </div>
  );
};


export default NoData;
