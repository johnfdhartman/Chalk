unless @errors
  json.extract! @board, :title, :paths
  json.set! :author do
    json.partial! 'api/users/user', user: @board.author
  end
end

json.errors @errors
