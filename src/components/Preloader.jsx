import React from "react";
import CircleLoader from "react-spinners/CircleLoader";

  
const Preloader = ({loading}) => {
    return (
        <div className="preloader">
            <CircleLoader
                color="white"
                loading={loading}
                size={100}
                aria-label="Loading Spinner"
            />
        </div>
    );
}

export default Preloader;
