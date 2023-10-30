# frozen_string_literal: true

class Album < ApplicationRecord
  belongs_to :artist
  belongs_to :publisher
  has_many :song, dependent: :destory

  validates :title, :genre, presence: true
  validates :title, length: { maximum: 100 }
end
