import CharacterCreator from "@/components/CharacterCreator";
import React from "react";

export default function Page() {
  return (
    <div className="container mx-auto">
      <div className="py-24">
        <CharacterCreator></CharacterCreator>
      </div>
    </div>
  );
}
