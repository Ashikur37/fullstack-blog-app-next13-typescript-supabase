import './globals.css'
import SupabaseListener from '../components/supabase-listener'
import createClient from '../utils/supabase-server'
// export const revalidate = 60;
// export const dynamic='force-static';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SupabaseListener accessToken={session?.access_token} />
        {children}</body>
    </html>
  )
}
