function registerKeybind(commandToRun = '', emitEvent = '', name = '', isKeyboard = true, control = '') {
  if(commandToRun.length > 0 && name.length > 0 && control.length > 0) {
    RegisterCommand(commandToRun, () => {
      emit(emitEvent);
    }, false);
    RegisterKeyMapping(commandToRun, name, isKeyboard?'keyboard':'pad_analogbutton', control.toUpperCase());
  } else {}
}

function registerUpDownKeybind(commandToRun = '', emitEvent = '', name = '', isKeyboard = true, control = '') {
  if(commandToRun.length > 0 && name.length > 0 && control.length > 0) {
    RegisterCommand('+' + commandToRun, () => {
      emit('+' + emitEvent);
    }, false);
    RegisterCommand('-' + commandToRun, () => {
      emit('-' + emitEvent);
    }, false);
    RegisterKeyMapping('+' + commandToRun, name, isKeyboard?'keyboard':'pad_analogbutton', control.toUpperCase());
  } else {}
}

exports('registerKeybind', registerKeybind);
exports('registerUpDownKeybind', registerUpDownKeybind);
on('mes:registerKeybind', registerKeybind);
on('mes:registerUpDownKeybind', registerKeybind);
