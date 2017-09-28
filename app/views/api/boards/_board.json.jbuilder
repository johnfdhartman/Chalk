json.extract! board, :title, :paths, :id, :created_at
json.set! :author do
  json.partial! 'api/users/user', user: board.author
end
