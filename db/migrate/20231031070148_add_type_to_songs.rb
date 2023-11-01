# frozen_string_literal: true

class AddTypeToSongs < ActiveRecord::Migration[7.0]
  def change
    add_column :songs, :type, :string
  end
end
