import { useEffect, useState } from "react";

const NotFound = () => {
  let numberState = useState(0);
  let numberCount = numberState[0];
  let setNumberCount = numberState[1];

  useEffect(() => {
    if (numberCount < 404) {
      for (let i = 0; i < 404; i++) {
        setTimeout(() => setNumberCount(numberCount + 4), 5);
      }
    }
  });

  return (
    <div className="container">
      <div className="row">
        <div className="xs-12 md-6 mx-auto">
          <div id="countUp">
            <header>
              <div className="number" data-count="404">
                <h1 className="h2 fw-bold my-4">{numberCount}</h1>
              </div>
            </header>
            <div className="text">Page not found</div>
            <div className="text">This may not mean anything.</div>
            <div className="text">
              I'm probably working on something that has blown up.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
