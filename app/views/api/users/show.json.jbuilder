unless @errors
  json.partial! 'api/users/user', user: @user
  json.bio @user.bio
  json.displayPictureUrl @user.display_picture.url
end

json.errors @errors
