unless @errors
  json.partial! 'api/users/user', user: @user
  json.bio @user.bio
end

json.errors @errors
