class Board < ApplicationRecord
  validates :title, :author_id, :paths, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

  

end
