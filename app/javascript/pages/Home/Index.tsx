import { Head, Link, router } from '@inertiajs/react'

type User = {
  id: number
  email: string
}

type HomeProps = {
  current_user: User | null
}

export default function Index({ current_user }: HomeProps) {
  const handleSignOut = () => {
    router.delete('/users/sign_out')
  }

  return (
    <div>
      <Head title="Home" />
      
      {current_user ? (
        <>
          <p>Signed in as {current_user.email}</p>
          <button onClick={handleSignOut}>Sign out</button>
        </>
      ) : (
        <>
          <p>Not signed in.</p>
          <Link href="/users/sign_in">Sign in</Link>
          {/* Registrations still render ERB, so this must stay a plain anchor. */}
          <a href="/users/sign_up">Sign up</a>
        </>
      )}
    </div>
  )
}
