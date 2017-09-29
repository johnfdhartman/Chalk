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
    if @user.id == current_user.id
      @user.update(user_update_attributes)
      if @user.save
        render 'api/users/show'
      else
        @errors = @user.errors.full_messages
        render 'api/users/show', status: 422
      end
    else
      @errors = ["Update request not authorized for user #{current_user.id}"]
      render 'api/users/show', status: 403
    end
  end

  private

  def user_update_attributes
    params.permit(:bio)
  end
end
