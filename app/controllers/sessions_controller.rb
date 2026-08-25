# frozen_string_literal: true

# Renders the sign-in screen as an Inertia page. `create` and `destroy` stay on
# Devise's implementations.
#
# On a failed sign-in Devise does not redirect: Warden's failure app recalls
# this `new` action with `flash.now[:alert]` set and forces the response to 422,
# so this render is what the user sees after a bad password.
class SessionsController < Devise::SessionsController
  def new
    render inertia: "Auth/SignIn"
  end
end
