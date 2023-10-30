# frozen_string_literal: true

class Publisher < ApplicationRecord
  has_many :album, dependent: :destroy

  validates :name, presence: true
  validates :name, length: { maximum: 50 }
end
