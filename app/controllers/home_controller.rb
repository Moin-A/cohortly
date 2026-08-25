class HomeController < ApplicationController
  def index
    render inertia: "Home/Index", props: { current_user: current_user }
  end
end
