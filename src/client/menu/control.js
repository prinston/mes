RegisterNuiCallbackType('textinput');
on('__cfx_nui:textinput', (data, callback) => {
  if(data.prompt != undefined) AddTextEntry('mes:textinput_entry', data.prompt);
  else AddTextEntry('mes:textinput_entry', '');
  DisplayOnscreenKeyboard(false, 'mes:textinput_entry', '', data.value != undefined?data.value:'', '', '', '', data.max != undefined?data.max:32);
  let inputTick = setTick(() => {
    HideHudAndRadarThisFrame();
    switch(UpdateOnscreenKeyboard()) {
      case 1:
        if(data.onchange != undefined && data.onchange != '') emit(data.onchange, GetOnscreenKeyboardResult());
        callback(GetOnscreenKeyboardResult());
      case -1:
      case 2:
      case 3:
        clearTick(inputTick);
    }
  });
});
