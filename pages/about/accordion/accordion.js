import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const Accordion = ({ title, content, pdf }) => {
  const [isActive, setIsActive] = useState(false);
  const classes = typeof title === "string" ? "" : "mob-modal";
  return (
    <div className={"accordion-item" + " " + classes}>
      <div
        className="accordion-title"
        onClick={() => {
          if (typeof title === "string") setIsActive(!isActive);
        }}
      >
        <div>{title}</div>
        {content && (
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={typeof title !== "string" ? "mob-modal-menu" : ""}
          >
            {isActive ? "-" : "+"}
          </div>
        )}
      </div>
      <Fade direction="left" duration={700} triggerOnce>
        <div className="accordion-content">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </Fade>
    </div>
  );
};

export default Accordion;
