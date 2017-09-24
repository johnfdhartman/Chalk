class CreateBoards < ActiveRecord::Migration[5.1]
  def change
    create_table :boards do |t|
      t.string :title, null: false
      t.string :paths, null: false
      t.integer :author_id, null: false
      t.timestamps
    end
  end
end
