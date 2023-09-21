import data from '../data.js';
import dom from '../dom.js';
import updateTimeComponent from '../components/updateTimeComponent.js';

const resetHandler = () => {
    if (data.intervalId) {
        clearInterval(data.intervalId);
        data.intervalId = null;
    }
    data.minutes = 0;
    data.seconds = 0;
    data.milliseconds = 0;
    updateTimeComponent(dom.timeContainer, data);
};

export default resetHandler;