import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSleigh, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake as faRegularSnowflake } from '@fortawesome/free-regular-svg-icons';
import './background.css';

const ChristmasScene = () => {
  return (
    <>
      <section className="sleigh">
        <div className="santa">🦌</div>
        <div className="santa1">🦌</div>
        <div className="santa2">🦌</div>
        <div className="santa3">🦌</div>
        <div className="santa4">🦌</div>
        <div className="santa5"><FontAwesomeIcon icon={faSleigh} /></div>
      </section>

      <section className="snow">
        <div className="snowflake"><FontAwesomeIcon icon={faRegularSnowflake} /></div>
        <div className="snowflake1"><FontAwesomeIcon icon={faRegularSnowflake} /></div>
        <div className="snowflake2"><FontAwesomeIcon icon={faRegularSnowflake} /></div>
        <div className="snowflake3"><FontAwesomeIcon icon={faRegularSnowflake} /></div>
        <div className="snowflake4"><FontAwesomeIcon icon={faRegularSnowflake} /></div>
        <div className="snowflake5"><FontAwesomeIcon icon={faRegularSnowflake} /></div>
        <div className="snowflake6"><FontAwesomeIcon icon={faRegularSnowflake} /></div>
        <div className="snowflake7"><FontAwesomeIcon icon={faRegularSnowflake} /></div>
        <div className="snowflake8"><FontAwesomeIcon icon={faRegularSnowflake} /></div>
        <div className="snowflake9"><FontAwesomeIcon icon={faRegularSnowflake} /></div>
        <div className="snowflake10"><FontAwesomeIcon icon={faSnowflake} /></div>
        <div className="snowflake11"><FontAwesomeIcon icon={faSnowflake} /></div>
        <div className="snowflake12"><FontAwesomeIcon icon={faRegularSnowflake} /></div>
        <div className="snowflake13"><FontAwesomeIcon icon={faRegularSnowflake} /></div>
        <div className="snowflake14"><FontAwesomeIcon icon={faRegularSnowflake} /></div>
      </section>

     

    </>
  );
};

export default ChristmasScene;
