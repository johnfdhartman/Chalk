class Api::BoardController < ApplicationController
  def create
    @board = Board.new(title: params[:title],
                       paths: params[:paths],
                       author_id: current_user.id)
    
  end
end
