
json.partial! 'api/users/user', user: @user unless @errors
json.bio @user.bio

json.errors @errors
