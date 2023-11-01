# frozen_string_literal: true

class Artist < ApplicationRecord
  has_many :album, dependent: :destroy
  has_many :track, dependent: :destroy
  has_one :collaborator, dependent: :destroy

  validates :name, presence: true
  validates :name, length: { maximum: 50 }
end
