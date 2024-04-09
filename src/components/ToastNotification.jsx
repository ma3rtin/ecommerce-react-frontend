import React from 'react'
import '../css/toastNotification.css'

function ToastNotification({str: str}) {
  return (
    <>
      <div class="notification">
            <div className="notification__body">
                <img
                    src="assets/check-circle.svg"
                    alt="Success"
                    className="notification__icon"
                />
                {str} &#128640; 
            </div>
            <div className="notification__progress"></div>
        </div>
    </>
  )
}

export default ToastNotification
