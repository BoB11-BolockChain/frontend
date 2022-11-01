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
    <div class="container">
      <div class="row">
        <div class="xs-12 md-6 mx-auto">
          <div id="countUp">
            <header>
              <div class="number" data-count="404">
                <h1 className="h2 fw-bold my-4">{numberCount}</h1>
              </div>
            </header>
            <div class="text">Page not found</div>
            <div class="text">This may not mean anything.</div>
            <div class="text">
              I'm probably working on something that has blown up.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
