class Board < ApplicationRecord

  has_attached_file :thumbnail, default_url: 'missing.png'
  validates_attachment_content_type :thumbnail, content_type: /\Aimage\/.*\Z/
  

  validates :title, :author_id, :paths, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

end
