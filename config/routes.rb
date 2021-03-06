Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :boards, only: [:create, :show]

    get 'users/:user_id/boards/:page', to: 'boards#user_boards'
    get 'boards/recent/:page', to: 'boards#recent_boards'
  end
end
