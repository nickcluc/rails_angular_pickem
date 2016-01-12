Rails.application.routes.draw do
  root 'application#angular'

  resources :leagues
end
