import { useState, useEffect } from "react";

function Clock(){
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());

    },1000 )
    return () => clearInterval(interval);
  }, [])

  const day = time.toLocaleDateString(undefined, {weekday: "long", month: "short", day: "numeric", year: "numeric"});
  const currentTime = time.toLocaleTimeString();
  return(
    <div className="clock">
      {day} | {currentTime}
    </div>
  )
}

export default Clock;