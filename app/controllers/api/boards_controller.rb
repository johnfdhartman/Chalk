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

  def show
    @board = Board.find_by(id: params[:board_id])
    if @board
      render 'api/boards/show'
    else
      @errors = ["Cannot find board with id #{params[:board_id]}"]
      render 'api/boards/show', status: 404
    end
  end
end
