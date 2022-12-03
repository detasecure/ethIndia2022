import React, { useEffect, useState } from "react";
import Charts from "../components/dashboard/Charts";
import Stats from "../components/dashboard/Stats";

const dashboard = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center  h-screen ">
      {loaded ? <Stats /> : ""}
      {loaded ? <Charts /> : ""}
    </div>
  );
};

export default dashboard;
