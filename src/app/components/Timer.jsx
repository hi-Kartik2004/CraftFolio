import { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <p>
      It might take about {seconds} {seconds === 1 ? "second" : "seconds"} to
      generate a response. Please be patient.
    </p>
  );
};

export default Timer;
