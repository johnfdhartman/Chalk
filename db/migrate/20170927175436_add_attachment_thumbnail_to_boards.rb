class AddAttachmentThumbnailToBoards < ActiveRecord::Migration[5.0]
  def self.up
    change_table :boards do |t|
      t.attachment :thumbnail
    end
  end

  def self.down
    remove_attachment :boards, :thumbnail
  end
end
