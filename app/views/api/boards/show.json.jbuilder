json.extract! @board, :title, :paths, :author unless @errors

json.errors @errors
