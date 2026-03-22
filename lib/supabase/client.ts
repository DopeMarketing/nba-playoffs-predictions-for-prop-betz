import { createClientComponentClient } from '@supabase/ssr'

export const createClient = () => {
  return createClientComponentClient()
}

export const supabase = createClient()