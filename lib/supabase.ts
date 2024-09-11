/*
const [characters, setCharacters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");

  const { user } = useUser();

  const { session } = useSession();

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

  const client = createClerkSupabaseClient();

  useEffect(() => {
    if (!user) return;

    async function loadCharacters() {
      setLoading(true);
      const { data, error } = await client.from("characters").select();
      if (!error) setCharacters(data);
      setLoading(false);
    }

    loadCharacters();
  }, [user]);

  async function createCharacter(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Insert task into the "tasks" database
    await client.from("characters").insert({
      name,
      role,
      gender,
    });
    window.location.reload();
  }

  return (
    <div>
      {loading && <p>Loading...</p>}

      {!loading && characters.length > 0 && characters.map((character: any) => <p key={character}>{characters.name}</p>)}

      {!loading && characters.length === 0 && <p>No tasks found</p>}

      <form onSubmit={createCharacter} className="space-y-4 p-4 max-w-lg mx-auto bg-white rounded shadow-md">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Character Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter character name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">
            Character Role
          </label>
          <input
            id="role"
            type="text"
            name="role"
            placeholder="Enter character role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
            Character Gender
          </label>
          <input
            id="gender"
            type="text"
            name="gender"
            placeholder="Enter character gender"
            onChange={(e) => setGender(e.target.value)}
            value={gender}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add Character
        </button>
      </form>
    </div>
*/
