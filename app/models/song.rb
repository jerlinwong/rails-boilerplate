# frozen_string_literal: true

class Song < ApplicationRecord
  belongs_to :artist
  belongs_to :album
  has_many :collaborator, dependent: :destroy

  validates :title, presence: true
  validates :title, length: { maximum: 100 }
end
