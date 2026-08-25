class Account < ApplicationRecord
  belongs_to :user
  has_one_attached :medium
end
