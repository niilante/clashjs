var utils = require('../lib/utils.js');

var jgroom33 = {
  info: {
    name: 'jgroom33',
    style: 2
  },
  ai: (playerState, enemiesState, gameEnvironment) => {
    var directionToAmmo;

    if (Math.random() > 0.9) return 'shoot';

    if (gameEnvironment.ammoPosition.length) {
      directionToAmmo = utils.getDirection(
        playerState.position,
        gameEnvironment.ammoPosition[0]
      );

      if (directionToAmmo !== playerState.direction) {
        return directionToAmmo;
      }
      return 'move';
    }

    return utils.randomMove();
  }
};

module.exports = jgroom33;
