unless @errors
  json.array! @boards do |board|
    json.title board.title
    json.author do
      json.partial! 'api/users/user', user: board.author
    end
    json.created_at board.created_at
  end
end

json.errors @errors
