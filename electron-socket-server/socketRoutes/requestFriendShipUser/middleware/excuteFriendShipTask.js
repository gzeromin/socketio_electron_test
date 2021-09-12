'use strict';

module.exports = (result) => {
  return Promise.all(result.updateTasks);
}