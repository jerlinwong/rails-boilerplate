# frozen_string_literal: true

class RenameSongToTrack < ActiveRecord::Migration[7.0]
  def change
    rename_table :songs, :tracks
  end
end
