import "./ResumeButton.css";

const ResumeButton = () => {

  const CV = () => {
    window.open('https://flowcv.com/resume/o7c6b22i6v', '_blank');
  };

  return (
      <div className="resumebutton-icon">
        <div className="resumeicon">
          <img width="96" height="96" src="https://img.icons8.com/external-goofy-color-kerismaker/96/external-CV-business-goofy-color-kerismaker.png" alt="external-CV-business-goofy-color-kerismaker"/>
        </div>
        <div className="cube">
          <span className="side resume-front" onClick={CV}>RESUME</span>
          <span className="side resume-top" onClick={CV}>DOWNLOAD</span>
        </div>
      </div>
  );
}
export default ResumeButton;
