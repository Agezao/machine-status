const config = require('../config');
const trackService = require('../services/track.service');
const os = require('os');
const exec = require('child_process').exec; 
const osutils = require('os-utils');
//

const cpu = async() => {
  return new Promise((resolve, reject) => {
    exec('wmic cpu get loadpercentage /value | find "Load"', function(err, output, code) {
      if(err) return reject(err);
      
      let loadpct = parseFloat(output.split('=')[1].split('\r\r\n')[0]);
      
      if(!isNaN(loadpct))
        return resolve(loadpct);

      return reject();
    });
  });
};

const memory = () => {
  let totalMem = parseInt(os.totalmem());
  let freeMem = parseInt(os.freemem());
  let memUsage = Number(parseFloat(((totalMem - freeMem) / totalMem * 100)).toFixed(2));

  return memUsage;
}

const disk = () => {
  return new Promise((resolve, reject) => {
    exec('wmic LOGICALDISK get Access /value | find "Access"', function(err, output, code) {
        if(err) return reject(err);
        
        let segments = output.split('\n');
        let disk1 = segments[0];
        let usage = disk1.replace('Access=', '');
        return resolve(usage);
    });
  });
}

const run = async () => {
  console.log(config.spacer);
  console.log('Fetching infos');

  try{
    let dateNow = new Date().getTime();
    let cpuUsage = await cpu();
    let diskUsage = await disk();
    let memUsage = memory();
  
    await trackService.save(dateNow, cpuUsage, memUsage, diskUsage);
    console.log(`Tracked at ${new Date()} - CPU: ${cpuUsage} | Mem: ${memUsage} | Disk: ${diskUsage}`);
  }
  catch(ex) {
    console.log(ex);
  }
};

module.exports = { run };