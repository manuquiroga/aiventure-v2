import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Extra } from "@/models/story";
import { Button } from "@/components/ui/button";
import { RefreshCw, Dices } from "lucide-react";

interface AddExtraProps {
  extra: {
    name: string;
    team: string;
    gender: string;
    class: string;
    role: string;
    backgroundStory: string;
  };
  setExtra: (extra: any) => void;
  onReset: () => void;
  onRandomize: () => void;
}

const AddExtra: React.FC<AddExtraProps> = ({ extra, setExtra, onReset, onRandomize }) => {
  // Función para manejar cambios en los inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-dark2 w-full grid place-items-center">
      <div className="max-w-3xl w-full bg-dark3 backdrop-blur-md rounded-sm ">
        <div className="flex justify-between items-center mb-4">
          <Label className="">Add Extra</Label>
          <div className="flex gap-2">
            {/* reset */}
            <Button type="button" onClick={onReset} variant="outline" className="px-3">
              <RefreshCw className="h-4 w-4" />
            </Button>
            {/* random */}
            <Button type="button" onClick={onRandomize} variant="outline" className="px-3">
              <Dices className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Input name="name" value={extra.name} onChange={handleInputChange} placeholder="Extra name" className="mt-4" />
        <Input name="team" value={extra.team} onChange={handleInputChange} placeholder="Team (ally/enemy/neutral)" className="mt-4" />
        <Input name="class" value={extra.class} onChange={handleInputChange} placeholder="Class (warrior, mage, etc.)" className="mt-4" />
        <Input name="role" value={extra.role} onChange={handleInputChange} placeholder="Role (tank, DPS, etc.)" className="mt-4" />
        <Input name="backgroundStory" value={extra.backgroundStory} onChange={handleInputChange} placeholder="Background story" className="mt-4" />
      </div>
    </div>
  );
};

export default AddExtra;
