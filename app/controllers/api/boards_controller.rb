class Api::BoardsController < ApplicationController
  def create
    @board = Board.new(title: params[:title],
                       paths: params[:paths],
                       author_id: current_user.id)

    if @board.save
      render 'api/boards/show'
    else
      @errors = @board.errors.full_messages
      render 'api/boards/show', status: 422
    end
  end
end
