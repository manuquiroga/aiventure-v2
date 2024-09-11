"use client";
import React, { useState } from "react";
import { useUser, RedirectToSignIn } from "@clerk/nextjs";
import { useSupabase } from "@/hooks/useSupabase";
import { Character } from "@/models/character";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { PlusCircle, MinusCircle } from "lucide-react";
import { div } from "framer-motion/client";
import { Textarea } from "@/components/ui/textarea";
import AddExtra from "./components/AddExtra";

const StoryForm = () => {
  const [story, setStory] = useState({
    id: "",
    type: "",
    place: "",
    tags: [],
    mainQuest: "",
    extras: [],
    inputCount: 0,
    title: "",
    text: "",
  });

  const [extra1, setExtra1] = useState({
    name: "",
    team: "neutral",
    gender: "",
    class: "",
    role: "",
    backgroundStory: "",
  });

  const [extra2, setExtra2] = useState({
    name: "",
    team: "neutral",
    gender: "",
    class: "",
    role: "",
    backgroundStory: "",
  });

  const resetExtra1 = () => {
    setExtra1({
      name: "",
      team: "neutral",
      gender: "",
      class: "",
      role: "",
      backgroundStory: "",
    });
  };

  // Función de reset para extra2
  const resetExtra2 = () => {
    setExtra2({
      name: "",
      team: "neutral",
      gender: "",
      class: "",
      role: "",
      backgroundStory: "",
    });
  };

  // Función para randomizar extra1
  const randomizeExtra1 = () => {
    setExtra1({
      name: "Tharok",
      team: "ally",
      gender: "male",
      class: "warrior",
      role: "tank",
      backgroundStory: "A fierce warrior from the northern tribes.",
    });
  };

  // Función para randomizar extra2
  const randomizeExtra2 = () => {
    setExtra2({
      name: "Zyra",
      team: "enemy",
      gender: "female",
      class: "mage",
      role: "villain",
      backgroundStory: "A powerful sorceress seeking revenge.",
    });
  };

  // Randomizar ambos extras desde el StoryForm
  const randomizeBothExtras = () => {
    randomizeExtra1();
    randomizeExtra2();
  };

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="max-w-7xl w-full p-6 sm:p-10 bg-dark3 backdrop-blur-md rounded-sm ">
        <div className="flex flex-col justify-between">
          <h1 className="text-4xl font-bold text-accent font-heading">Create Your Story</h1>
          <p className="text-bone font-body mt-1">Customize your story&apos;s settings to embark on an epic adventure.</p>
        </div>
      </div>
      <form className="w-full max-w-7xl px-6 pb-6 sm:pb-10 sm:px-10 bg-dark3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          <div className="w-full">
            <Label htmlFor="genre">Genre</Label>
            <Select id="genre" name="genre">
              <SelectTrigger>
                <SelectValue placeholder="Select genre" />
              </SelectTrigger>
              <SelectContent></SelectContent>
            </Select>
          </div>
          <div className="w-full">
            <Label htmlFor="place">Role</Label>
            <Select id="place" name="place">
              <SelectTrigger>
                <SelectValue placeholder="Select place" />
              </SelectTrigger>
              <SelectContent></SelectContent>
            </Select>
          </div>
          <div className="w-full">
            <Label htmlFor="mainq">Main quest (Optional)</Label>
            <Input id="mainq" name="mainq" placeholder="Steal the king's secret weapon..." />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-accent font-heading py-6">Advanced Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          <AddExtra extra={extra1} setExtra={setExtra1} onReset={resetExtra1} onRandomize={randomizeExtra1} />
          <AddExtra extra={extra2} setExtra={setExtra2} onReset={resetExtra2} onRandomize={randomizeExtra2} />
        </div>

        <button type="button" className="mt-6 w-full bg-orange text-dark hover:text-accent p-4" onClick={randomizeBothExtras}>
          Randomize Extras
        </button>
      </form>
    </div>
  );
};

export default StoryForm;
