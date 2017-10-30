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

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render 'api/users/show'
    else
      no_user_error(params[:id])
    end
  end

  def update
    verify_user(params[:id]) or return
    @user = User.find_by(id: params[:id])
    if @user.update(update_params)
      render 'api/users/show/'
    else
      @errors = @user.errors.full_messages
      render 'api/users/show', status: 422
    end
  end

  private

  def no_user_error(id)
    @errors = ["Cannot find user with id #{id}"]
    render 'api/users/show/', status: 404
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end

  def update_params
    params.require(:user).permit(:bio, :display_picture)
  end
end
