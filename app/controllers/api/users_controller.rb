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
    @boards = user.created_boards(9, params[:page])
    render 'api/boards/index'
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
