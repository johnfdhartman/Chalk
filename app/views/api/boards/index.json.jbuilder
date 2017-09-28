unless @errors
  json.set! :boards do
    json.array! @boards do |board|
      json.partial! 'api/boards/board', board: board
    end
  end
end

json.errors @errors
