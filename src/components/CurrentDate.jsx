import { useState, useEffect } from "react";
const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const updateDate = () => {
      setCurrentDate(new Date());
    };

    const intervalId = setInterval(updateDate, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    day: "2-digit",
    year: "numeric",
    month: "long",
    weekday: "long",
  });

  return <p>{formattedDate}</p>;
};

export default CurrentDate;
