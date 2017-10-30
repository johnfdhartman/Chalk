class AddDisplayPictureToUsers < ActiveRecord::Migration[5.1]
  def self.up
    add_attachment :users, :display_picture
  end

  def self.down
    remove_attachment :users, :display_picture
  end
end
