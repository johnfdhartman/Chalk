require 'json'

unless @errors
  json.extract! @board, :title
  json.set! :paths, @board.paths
  json.set! :author do
    json.partial! 'api/users/user', user: @board.author
  end
end

json.errors @errors
