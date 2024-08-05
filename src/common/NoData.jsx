import React from 'react';
import { NO_DATA_AVAILABLE, NO_DATA_URL } from '../utils/cars_constants';

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
        src={NO_DATA_URL}
        alt="No Data"
        style={styles.image}
      />
      <p style={styles.text}>
        {NO_DATA_AVAILABLE}
      </p>
    </div>
  );
};


export default NoData;
