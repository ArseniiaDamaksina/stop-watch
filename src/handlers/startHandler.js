import data from '../data.js';
import dom from '../dom.js';
import updateWatch from '../utils/updateWatch.js';
import updateTimeComponent from '../components/updateTimeComponent.js';

const startHandler = () => {
    if (data.intervalId !== null) {
        clearInterval(data.intervalId);
        data.intervalId = null;
    }

    data.intervalId = setInterval(() => {
        const time = updateWatch(data);
        updateTimeComponent(dom.timeContainer, time);
    }, 10);
};

export default startHandler;