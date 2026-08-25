class CreateMedia < ActiveRecord::Migration[8.1]
  def change
    create_table :media do |t|
      t.references :account, null: false, foreign_key: true

      t.timestamps
    end
  end
end
