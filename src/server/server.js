// Get configs
function getConfig(name) {
  let path = GetResourcePath(GetCurrentResourceName()) + '/../' + filename + '.json';
  let result;
  if(fs.existsSync(path)) {
    result = JSON.parse(fs.readFileSync(path).toString());
  }
  return result;
}

exports('getConfig', getConfig);
onNet('mes:getConfig', (name, callback = undefined) => {
  let player = global.source;
  if(callback != undefined) {
    emitNet(callback, player, getConfig(name));
  }
})
