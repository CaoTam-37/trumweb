import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const Service = ({id , jobName, description}) => {
  return (
    <>
      <div className='service-item'>
        <div className='service-item-icon'>
          <FontAwesomeIcon className='item-icon' icon={faCalendar} />
        </div>
        <div className='services-words'>
          <p>{jobName}</p>
          <p>
            {description}
          </p>
          <p>{id}</p>
        </div>
      </div>
    </>
  );
};

export default Service;
