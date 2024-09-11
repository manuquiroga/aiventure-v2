"use client";

import { useEffect, useState } from "react";
import { useUser, RedirectToSignIn } from "@clerk/nextjs";
import { useSupabase } from "@/hooks/useSupabase";
import { Character } from "@/models/character";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function CharacterMenu() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { user, isLoaded: userLoaded } = useUser();
  const supabase = useSupabase();

  useEffect(() => {
    async function loadCharacters() {
      setLoading(true);
      setError(null);

      try {
        if (!userLoaded || !user || !supabase) return;
        const { data, error } = await supabase.from("characters").select("*").eq("user_id", user.id);

        if (error) throw error;

        setCharacters(data || []);
      } catch (err) {
        console.error("Error loading characters:", err);
        setError("Failed to load characters. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    loadCharacters();
  }, [user, userLoaded, supabase]);

  if (!userLoaded) {
    return <div>Loading user...</div>;
  }

  if (!user) {
    return <RedirectToSignIn />;
  }

  const play = () => {
    // Redirect to the game page
  };

  return (
    <div className="container mx-auto py-24">
      <h1 className="text-2xl font-bold mb-4">Your Characters</h1>

      {loading && <p>Loading characters...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && characters.length === 0 && <p>You haven&apos;t created any characters yet.</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map((character) => (
          <Card key={character.id}>
            <CardHeader>
              <CardTitle>{character.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Class: {character.class}</p>
              <p>Role: {character.role}</p>
              <p>Gender: {character.gender}</p>
              <Button onClick={play}> Play </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Link href="/creation">
        <Button className="mt-4">Create New Character</Button>
      </Link>
    </div>
  );
}
