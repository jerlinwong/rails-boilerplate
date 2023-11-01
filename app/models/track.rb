# frozen_string_literal: true

class Track < ApplicationRecord
  self.inheritance_column = :type

  belongs_to :artist
  belongs_to :album
  has_many :collaborator, dependent: :destroy

  validates :title, presence: true
  validates :title, length: { maximum: 100 }
end
