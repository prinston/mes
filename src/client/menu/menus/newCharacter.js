let newCharacterMenu = new Menu('newcharacter');

newCharacterMenu.addOption(new TitleOption(lang.menus.newcharacter.title, lang.menus.newcharacter.subtitle));

let firstNameOption = new TextOption('first_name');
firstNameOption.setPrompt('First Name');
firstNameOption.setValue(character.first_name);
firstNameOption.setMax(32);

let lastNameOption = new TextOption('last_name');
lastNameOption.setPrompt('Last Name');
lastNameOption.setValue(character.last_name);
lastNameOption.setMax(32);

on('mes:character:first_name', (name) => { character.first_name = name; });
on('mes:character:last_name', (name) => { character.last_name = name; });
