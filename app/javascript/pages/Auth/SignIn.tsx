import { Head, useForm, usePage } from '@inertiajs/react'
import type { FormEvent } from 'react'

export default function SignIn() {
  const { flash } = usePage()

  const form = useForm({
    email: '',
    password: '',
    remember_me: false,
  })

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    // Devise reads credentials from params[:user].
    form.transform((data) => ({ user: data }))
    form.post('/users/sign_in')
  }

  return (
    <div>
      <Head title="Log in" />

      <h2>Log in</h2>

      {flash?.alert && <p role="alert">{flash.alert}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            autoFocus
            value={form.data.email}
            onChange={(event) => form.setData('email', event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            value={form.data.password}
            onChange={(event) => form.setData('password', event.target.value)}
          />
        </div>

        <div>
          <input
            id="remember_me"
            type="checkbox"
            checked={form.data.remember_me}
            onChange={(event) => form.setData('remember_me', event.target.checked)}
          />
          <label htmlFor="remember_me">Remember me</label>
        </div>

        <button type="submit" disabled={form.processing}>
          Log in
        </button>
      </form>

      {/* Registrations, passwords, and confirmations still render ERB, so these
          must be plain anchors: an Inertia <Link> would XHR them and get a
          response with no X-Inertia header, tripping Inertia's error dialog. */}
      <p><a href="/users/sign_up">Sign up</a></p>
      <p><a href="/users/password/new">Forgot your password?</a></p>
      <p><a href="/users/confirmation/new">Didn't receive confirmation instructions?</a></p>
    </div>
  )
}
