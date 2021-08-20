import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ page, limit }) => {
  return (
    <div className="tc mw8 center">
      <div className="dib overflow-hidden ba br2 b--light-silver">
        <nav className="cf" data-name="pagination-numbers-bordered">
          <a
            className="fl dib link dim black f6 f5-ns b pa3 br b--light-silver"
            href="#0"
            title="Previous"
          >
            &larr; Previous
          </a>
          <Link to={`/page=${page + 1}&limit=${limit}`}>
            <div className="fr dib link dim black f6 f5-ns b pa3" title="Next">
              Next &rarr;
            </div>
          </Link>
          <div className="overflow-hidden center dt tc">
            <a
              className="dtc link dim white bg-blue f6 f5-ns b pa3 br b--light-silver"
              href="#0"
              title="1"
            >
              1
            </a>
            <a
              className="dtc link dim black         f6 f5-ns b pa3 br b--light-silver"
              href="#0"
              title="2"
            >
              2
            </a>
            <a
              className="dtc link dim black f6 f5-ns b pa3 br b--light-silver"
              href="#0"
              title="3"
            >
              3
            </a>
            <a
              className="dtc link dim black         f6 f5-ns b pa3 br b--light-silver"
              href="#0"
              title="4"
            >
              4
            </a>
            <a
              className="dtc link dim black         f6 f5-ns b pa3 br b--light-silver"
              href="#0"
              title="5"
            >
              5
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
