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
      @errors = ["Cannot find user with id #{params[:id]}"]
      render 'api/users/show', status: 404
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user
      @user.update(user_update_attributes)
      if @user.save
        render 'api/users/show'
      else
        @errors = @user.errors.full_messages
        render 'api/users/show', status: 422
      end
    else
      @errors = ["Cannot find user with id #{params[:id]}"]
      render 'api/users/show', status: 404
    end
  end
  
  private

  def user_update_attributes
    params.require(:data).require(:field).permit(:bio)
  end
end
