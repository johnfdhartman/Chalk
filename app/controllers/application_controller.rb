class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?, :require_authorized_user

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

  def require_authorized_user(authorized_user)
    # redirects to a 403 error unless the current user's id is equal
    #to the authorized user's id
    unless current_user && current_user.id == id
      @errors = ["You are not authorized to do this. Sign in as  \n
        #{authorized_user.username} \n and try again" ]
      redirect_to 'api/users/show', status: 403
    end
  end
end
