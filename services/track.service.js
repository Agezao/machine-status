const ctx = require('../contexts/sqlite.context');

const save = async (date, cpu, memory, disk) => {
  let query = `INSERT INTO MachineStatus values (null, ${ date }, ${ cpu }, ${ memory }, ${ disk });`;
  return await ctx.runQuery(query);
};

const list = async (date, json) => {
  let query = `select * from MachineStatus`;
  return await ctx.get(query);
};

module.exports = { save, list };