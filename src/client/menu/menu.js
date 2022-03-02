class Menu {
  constructor(name) {
    this.name = name;
    this.options = [];
    this.onback = undefined;
  }

  addOption(option) {
    if(option != undefined) {
      if(option.type != undefined) {
        this.options.push(option);
      }
    }
  }
  getOptions() { return this.options }
  removeOption(index) { return this.options.splice(index, 1); }

  setOnBack(onback) { this.onback = onback; }
  getOnBack() { return this.onback; }
  removeOnBack() { this.onback = undefined; }
}

class Option {
  constructor(name) {
    this.name = name;
    this.value = undefined;
    this.onchange = undefined;
  }

  setName(name) { this.name = name; }
  getName() { return this.name; }
  removeName() { this.name = undefined; }

  setValue(value) { this.value = value; }
  getValue() { return this.value; }
  removeValue() { this.value = undefined; }

  setOnChange(onchange) { this.onchange = onchange; }
  getOnChange() { return this.onchange; }
  removeOnChange() { this.onchange = undefined; }
}

class SelectableOption extends Option {
  constructor(name) {
    super(name);
    this.onselect = undefined;
  }

  setOnSelect(onselect) { this.onselect = onselect; }
  getOnSelect() { return this.onselect; }
  removeOnSelect() { this.onselect = undefined; }
}

class PromptOption extends Option {
  constructor(name) {
    super(name);
    this.prompt = undefined;
  }

  setPrompt(prompt) { this.prompt = prompt; }
  getPrompt() { return this.prompt; }
  removePrompt() { this.prompt = undefined; }
}

class SelectablePromptOption extends SelectableOption {
  constructor(name) {
    super(name);
    this.prompt = undefined;
  }

  setPrompt(prompt) { this.prompt = prompt; }
  getPrompt() { return this.prompt; }
  removePrompt() { this.prompt = undefined; }
}

class SubMenuOption extends Option {
  // In the UI the name will be the name input, appended to 'parentMenuName:subMenu1Name:subMenu2Name...' etc
  constructor(name) {
    super(name);
    this.type = 'submenu';
    this.options = [];
  }

  addOption(option) {
    if(option != undefined) {
      if(option.type != undefined) {
        this.options.push(option);
      }
    }
  }
  getOptions() { return this.options }
  removeOption(index) { return this.options.splice(index, 1); }
}

class NumberOption extends SelectableOption {
  constructor(name) {
    super(name);
    this.type = 'number';
    this.min = undefined;
    this.max = undefined;
    this.step = undefined;
  }

  setMin(min) { this.min = min; }
  getMin() { return this.min; }
  removeMin() { this.min = undefined; }

  setMax(max) { this.max = max; }
  getMax() { return this.max; }
  removeMax() { this.max = undefined; }

  setStep(step) { this.step = step; }
  getStep() { return this.step; }
  removeStep() { this.step = undefined; }
}

class TextOption extends PromptOption {
  constructor(name) {
    super(name);
    this.type = 'text';
    this.max = undefined;
  }

  setMax(max) { this.max = max; }
  getMax() { return this.max; }
  removeMax() { this.max = undefined }
}

class ButtonOption extends SelectableOption {
  constructor(name) {
    super(name);
    this.type = 'button';
  }
}

class TextDisplayOption extends SelectablePromptOption {
  constructor(name) {
    super(name);
    this.type = 'textdisplay';
  }
}

class ScrollOption extends SelectablePromptOption {
  constructor(name) {
    super(name);
    this.type = 'textdisplay';
    this.options = [];
  }

  addOption(text, value = undefined) { this.options.push({ text: text, value: value }); }
  getOptions() { return this.options; }
  removeOption(index) { return this.options.splice(index, 1); }
}

class TitleOption {
  constructor(title, subtitle) {
    this.title = title;
    this.subtitle = subtitle;
  }

  setTitle(title) { this.title = title; }
  getTitle() { return this.title; }
  removeTitle() { this.title = undefined; }

  setSubTitle(subtitle) { this.subtitle = subtitle; }
  getSubTitle() { return this.subtitle; }
  removeSubTitle() { this.subtitle = undefined; }
}
