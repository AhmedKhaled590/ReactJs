import React, { useEffect } from 'react'

const Alert = ({ Alerts, setAlerts }) => {
  useEffect(() => {
    setTimeout(() => {
      Alerts = { type: "", title: "" };
      setAlerts(Alerts);
    }, 3000)
  }, [Alerts]);

  return (
    <>
      {
        Alerts && Alerts.type != "" &&
        < div className="alert">
          <div className={`alert-${Alerts.type}`}>{Alerts.title}</div>
        </div>
      }
    </>
  );
}

export default Alert
