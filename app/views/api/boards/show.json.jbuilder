require 'json'

unless @errors
  json.partial! 'api/boards/board', board: @board
end

json.errors @errors
