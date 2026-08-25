# frozen_string_literal: true

require "rails_helper"

RSpec.describe "User sessions", type: :request do
  describe "GET /users/sign_in" do
    it "renders the Auth/SignIn Inertia page" do
      get new_user_session_path

      expect_inertia.to render_component("Auth/SignIn")
    end
  end

  describe "POST /users/sign_in" do
    let!(:user) do
      User.create!(
        email: "test@example.com",
        password: "password123",
        confirmed_at: Time.current
      )
    end

    it "sends the failure alert to the Inertia page when the password is wrong" do
      post user_session_path, params: {
        user: { email: user.email, password: "wrong-password" }
      }

      expect(response).to have_http_status(:unprocessable_content)
      expect_inertia.to render_component("Auth/SignIn")
      expect(inertia.flash[:alert]).to be_present
    end
  end
end
