import * as core from '@actions/core';

(async () => {
    try {
        console.log('boop');
    } catch (err) {
        core.setFailed(err.message);
    }
})();