import data from '../data.js';

const stopHandler = () => {
    if (data.intervalId) {
        clearInterval(data.intervalId);
        data.intervalId = null;
    }
};

export default stopHandler;