fx_version 'cerulean'
games { 'gta5' }

author 'Prinston'
description 'Modular Economy Server'
version '0.1'

ui_page 'ui/ui.htm'

files {
  'ui/ui.htm',
  'ui/ui.js',
  'ui/ui.css'
}

-- START SHARED
shared_script 'src/shared/shared.js'
-- END SHARED

-- START SERVER
server_script 'src/server/server.js'

-- mysql
server_script 'src/server/mysql/mysql.js'
server_script 'src/server/mysql/table.js'
server_script 'src/server/mysql/finances.js'
-- END SERVER

-- START CLIENT
client_script 'src/client/client.js'

-- helpers
client_script 'src/client/helper/helper.js'
client_script 'src/client/helper/resources.js'
client_script 'src/client/helper/keybind.js'
-- END CLIENT
