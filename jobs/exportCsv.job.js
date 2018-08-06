const config = require('../config');
const fs = require('fs');
const TrackBusiness = require('../business/track.business');
//
const trackBusiness = new TrackBusiness();
//

const run = async () => {
  let data = await trackBusiness.exportCsv();
  fs.writeFileSync(config.outputCsv, data);
  console.log(data);
  return data;
};

module.exports = { run };