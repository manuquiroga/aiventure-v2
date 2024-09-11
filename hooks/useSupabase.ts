// hooks/useSupabase.ts
import { useEffect, useState } from "react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { useSession } from "@clerk/nextjs";

export function useSupabase() {
  const { session } = useSession();
  const [client, setClient] = useState<SupabaseClient | null>(null);

  useEffect(() => {
    if (!session) return;

    function createClerkSupabaseClient() {
      return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
        global: {
          // Get the custom Supabase token from Clerk
          fetch: async (url, options = {}) => {
            const clerkToken = await session?.getToken({
              template: "supabase",
            });

            // Insert the Clerk Supabase token into the headers
            const headers = new Headers(options?.headers);
            headers.set("Authorization", `Bearer ${clerkToken}`);

            // Now call the default fetch
            return fetch(url, {
              ...options,
              headers,
            });
          },
        },
      });
    }

    if (!client) {
      setClient(createClerkSupabaseClient());
    }
  }, [session, client]);

  return client;
}
