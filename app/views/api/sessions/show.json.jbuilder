json.currentUser do
  json.partial! 'api/users/user', user: @user unless @errors
end

json.errors @errors
