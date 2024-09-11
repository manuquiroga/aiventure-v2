"use client";

import { useState } from "react";
import { randomNames, genders, classes, roles } from "@/lib/data";
import { Character } from "@/models/character";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RotateCcw, Dices } from "lucide-react";

import { useSupabase } from "@/hooks/useSupabase";
import { useUser, RedirectToSignIn } from "@clerk/nextjs";

// TODO: add image url (database too)
export default function Component() {
  const [character, setCharacter] = useState({
    name: "",
    gender: "",
    class: "",
    role: "",
  });

  const supabase = useSupabase();
  const { user } = useUser();
  if (!user) return <RedirectToSignIn />;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacter({ ...character, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: keyof Character, value: string) => {
    setCharacter({ ...character, [name]: value });
  };

  const randomizeCharacter = () => {
    setCharacter({
      name: randomNames[Math.floor(Math.random() * randomNames.length)],
      gender: genders[Math.floor(Math.random() * genders.length)],
      class: classes[Math.floor(Math.random() * classes.length)],
      role: roles[Math.floor(Math.random() * roles.length)],
    });
  };

  const createCharacter = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!supabase || !user) return;

    const { error } = await supabase.from("characters").insert({
      ...character,
      user_id: user.id,
    });

    if (error) {
      console.error("Error creating character:", error);
    } else {
      console.log("Character created successfully: ", character);

      // Redirect to character page
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full p-6 sm:p-10 bg-dark3 backdrop-blur-md rounded-sm ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-between">
            <h1 className="text-4xl font-bold text-accent font-heading">Create Your Hero</h1>
            <p className="text-bone font-body">Customize your character&apos;s attributes to embark on an epic adventure.</p>

            <form onSubmit={createCharacter} className="space-y-4">
              <div className="flex items-end gap-2">
                <div className="flex-grow">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={character.name}
                    onChange={handleInputChange}
                    placeholder="Enter your character's name"
                    required
                  />
                </div>
                <Button type="button" onClick={randomizeCharacter} variant="secondary" className="flex-shrink px-2 rounded-sm">
                  <Dices />
                </Button>
              </div>
              <div>
                <Label htmlFor="gender">Gender</Label>
                <Select value={character.gender} onValueChange={(value) => handleSelectChange("gender", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    {genders.map((gender) => (
                      <SelectItem key={gender} value={gender}>
                        {gender.charAt(0).toUpperCase() + gender.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="class">Class</Label>
                <Select value={character.class} onValueChange={(value) => handleSelectChange("class", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    {classes.map((className) => (
                      <SelectItem key={className} value={className}>
                        {className.charAt(0).toUpperCase() + className.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="role">Role</Label>
                <Select value={character.role} onValueChange={(value) => handleSelectChange("role", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role} value={role}>
                        {role.charAt(0).toUpperCase() + role.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full bg-orange text-dark hover:text-accent">
                Create Character
              </Button>
            </form>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[450px] h-[500px] bg-[url('/placeholder1.jpeg')] bg-cover bg-center rounded-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl" />
              <div className="absolute top-4 right-4">
                <RotateCcw />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
