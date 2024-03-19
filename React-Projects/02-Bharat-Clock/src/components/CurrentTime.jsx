import { useEffect, useState } from "react"

function CurrentTime() {
  let [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("Cleared Interval!");
    }
  }, []);

  return <p className="lead">This current time is: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
}

export default CurrentTime