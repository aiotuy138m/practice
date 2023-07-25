Rails.application.routes.draw do
  get 'lists/new'
  get 'lists/index'
  get 'lists/:id' => 'lists#show', as: 'list'
  get 'lists/:id/edit' => 'lists#edit', as: 'edit_list'
  post 'lists' => 'lists#create'
  get 'lists' => 'lists#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/top' => 'homes#top'
end
