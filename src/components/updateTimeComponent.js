import formatTimeUnit from '../utils/formatTimeUnit.js';
import formatMilliseconds from '../utils/formatMilliseconds.js';

const updateTimeComponent = (timeDom, time) => {
  timeDom.querySelector('.milliseconds').innerHTML = formatMilliseconds(
      time.milliseconds
  );

  if (time.seconds !== time.oldSeconds) {
      timeDom.querySelector('.seconds').innerHTML = formatTimeUnit(
          time.seconds
      );
  }

  if (time.minutes !== time.oldMinutes) {
      timeDom.querySelector('.minutes').innerHTML = formatTimeUnit(
          time.minutes
      );
  }

  time.oldMinutes = time.minutes;
  time.oldSeconds = time.seconds;
};

export default updateTimeComponent;