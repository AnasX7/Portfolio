const downloadResume = () => {
  const resumeBtn = document.querySelector("#resume-btn");

  const handleClick = () => {
    const pdfUrl = "/Anas Salem Mansoor-Resume.pdf";

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Anas Salem Mansoor-Resume.pdf";

    link.click();

    window.open(pdfUrl, "_blank");
  };

  resumeBtn.addEventListener('click', handleClick);
};

export default downloadResume;
