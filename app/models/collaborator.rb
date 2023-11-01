# frozen_string_literal: true

class Collaborator < ApplicationRecord
  belongs_to :artist
  has_many :track, dependent: :destroy
end
