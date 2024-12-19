import React from "react";

function SectionTitle({ imgSrc, title, wrapper, colorHeading, colorParagraph }) {
  return (
    <div className="row text-center py-3">
      <div className="col-12">
        <img
          className={`${wrapper}_img img-fluid`}
          src={imgSrc}
          alt="figure1_latest_blogs"
        />
        <div className={`${wrapper}_info`}>
          <h3 className={`fw-bolder mt-2  ${colorHeading}`}>
            {title}
          </h3>
          <p className={`mt-2 fs-p ${colorParagraph}`}>
            Perspiciatis unde omnis iste natus error sit voluptatem accusantium
            fa-angle- <br />
            double-up oremque laudantium, totam remeaque ipsa
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionTitle;
