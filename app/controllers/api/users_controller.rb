class Api::UsersController < ApplicationController

  def create
    @user = User.new(username: params[:username], password: params[:password])
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      @errors = @user.errors.full_messages
      render 'api/users/show', status: 422
    end
  end

  def boards
    user = User.find_by(id: params[:user_id])
    if user
      @boards = user.created_boards(9, params[:page])
      render 'api/boards/index'
    else
      @errors = ["Cannot find user with id #{params[:user_id]}"]
      render 'api/boards/index', status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
