class Api::BoardsController < ApplicationController
  def create
    paths = params[:paths].values
    normalized_paths = normalize_paths(paths, params[:dims])

    @board = Board.new(title: params[:title],
                       paths: normalized_paths.to_json,
                       author_id: current_user.id)

    if @board.save
      render 'api/boards/show'
    else
      @errors = @board.errors.full_messages
      render 'api/boards/show', status: 422
    end
  end

  def show
    @board = Board.find_by(id: params[:id])
    if @board
      render 'api/boards/show'
    else
      @errors = ["Cannot find board with id #{params[:board_id]}"]
      render 'api/boards/show', status: 404
    end
  end


  def user_boards
    user = User.find_by(id: params[:user_id])
    if user
      @boards = user.created_boards(9, params[:page])
      render 'api/boards/index'
    else
      @errors = ["Cannot find user with id #{params[:user_id]}"]
      render 'api/boards/index', status: 404
    end
  end

  def recent_boards
    @boards = Board.all.offset(9* (params[:page].to_i - 1))
      .limit(9).order(:created_at)
    render 'api/boards/index'
  end

  private

  def normalize_paths(paths, dims)
    paths.map do |path|
      new_coords = path['pathCoords'].values.map do |coord|
        normalize_coord(coord, dims['width'], dims['height'])
      end
      path['pathCoords'] = new_coords
      path
    end
  end

  def normalize_coord(coord, width, height)
    new_coord = {}
    width, height = width.to_i.to_f, height.to_i.to_f
    new_coord['x'] = (Integer(coord['x']) / width).round(4)
    new_coord['y'] = (Integer(coord['y']) / height).round(4)
    new_coord
  end

end
