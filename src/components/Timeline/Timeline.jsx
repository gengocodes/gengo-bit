import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import PendingIcon from "@mui/icons-material/Pending";

function Timeline() {
  return (
    <div className="timeline ">
      <VerticalTimeline lineColor="linear-gradient(270deg,rgba(0, 0, 0, 1) 0%, rgba(51, 52, 70, 1) 50%, rgba(0, 0, 0, 1) 100%)">
        <VerticalTimelineElement
          contentStyle={{ background: "#333446", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #333446" }}
          date="2019 - 2021"
          iconStyle={{ background: "#333446", color: "#fff" }}
          icon={<SchoolIcon />}
          shadowSize="large"
        >
          <h3 className="vertical-timeline-element-title">
            University of Cebu - Lapu-Lapu and Mandaue
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Information and Communications Technology (ICT) Strand
          </h4>
          <p>Student</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#333446", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #333446" }}
          date="2021 - 2025"
          iconStyle={{ background: "#333446", color: "#fff" }}
          icon={<SchoolIcon />}
          shadowSize="large"
        >
          <h3 className="vertical-timeline-element-title">
            University of San Carlos
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor of Science in Computer Engineering
          </h4>
          <p>Student</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#333446", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #333446" }}
          date="03/2025 - 05/2025"
          iconStyle={{ background: "#333446", color: "#fff" }}
          icon={<WorkIcon />}
          shadowSize="large"
        >
          <h3 className="vertical-timeline-element-title">Techflow.ai</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Darmstadt, Hessen, Germany
          </h4>
          <p>Automation Engineer Intern</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "#EAEFEF", color: "#333446" }}
          icon={<PendingIcon />}
          shadowSize="large"
        />
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
