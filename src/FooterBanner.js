import React, { useState, useEffect } from 'react'

const FooterBanner = () => {

  var [date, setDate] = useState(new Date());

  useEffect(() => {

    var timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer)
    }

  });

  return (
    <div className='timeFooter'>
      <p> Time : {date.toLocaleTimeString()}</p>
      <p> Date : {date.toLocaleDateString()}</p>
    </div>
  )

}

export default FooterBanner;