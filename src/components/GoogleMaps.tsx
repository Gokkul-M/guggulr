import React from 'react';

const GoogleMaps = () => {
  return (
    <iframe
      title="Google Maps Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.994881695133!2d80.17497937412996!3d13.036069813986553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52613e551378b3%3A0x69f706566833b3a!2s1st%20Street%2C%20Anandham%20Nagar%2C%20Ramapuram%2C%20Chennai%2C%20Tamil%20Nadu%20600089!5e0!3m2!1sen!2sin!4v1724571300000!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default GoogleMaps;
