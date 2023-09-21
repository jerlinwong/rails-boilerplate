# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.2.1'

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem 'rails', '~> 7.0.8'

# Use the Puma web server [https://github.com/puma/puma]
gem 'puma', '~> 5.0'

# Build JSON APIs with ease [https://github.com/rails/jbuilder]
gem 'jbuilder'

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', require: false

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem 'debug', platforms: %i[mri mingw x64_mingw]
  # For creating data for testing
  gem 'factory_bot_rails', '~> 6.2'
  # For testing
  gem 'rspec-rails', '~> 6.0'
end

group :development do
  # For linting
  gem 'rubocop', '~> 1.56'
  gem 'rubocop-performance', '~> 1.19'
  gem 'rubocop-rails', '~> 2.21'
  gem 'rubocop-rspec', '~> 2.24'
  # Use console on exceptions pages [https://github.com/rails/web-console]
  gem 'web-console'
end

group :test do
  # Database cleaner
  gem 'database_cleaner-active_record', '~> 2.1'
  # for rspec matachers
  gem 'shoulda-matchers', '~> 5.0'
end
