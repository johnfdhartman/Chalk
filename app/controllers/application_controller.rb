class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?, :verify_user

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    @current_user = nil
    session[:session_token] = nil
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def verify_user(authorized_user_id)
    # redirects to a 403 error unless the current user's id is equal
    #to the authorized user's id
    #this method works assumes there is *one* authorized user for the
    #given action
    print("current_user.id: #{current_user.id}, authorized_user_id: #{authorized_user_id}")
    unless current_user && current_user.id.to_s == authorized_user_id
      authorized_user = User.find_by(id: authorized_user_id)
      @errors = ["You are not authorized to do this. Sign in as  \n
        #{authorized_user.username} \n and try again" ]
      render('/api/users/show', status: 403) and return
    end

    return true
  end
end
