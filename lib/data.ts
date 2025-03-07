import { Extra } from "@/models/story";

export const randomNames: string[] = [
  "Aragorn",
  "Luna",
  "Eldon",
  "Nyx",
  "Aeris",
  "Thorn",
  "Rowan",
  "Mira",
  "Ash",
  "Zephyr",
  "Kai",
  "Riven",
  "Sol",
  "Ember",
  "Sage",
  "Lyric",
  "Phoenix",
  "Ren",
  "Toti",
  "Quinn",
  "Nova",
  "Taryn",
  "Avery",
  "Ellis",
  "Cypress",
  "Blaise",
  "Rory",
  "Darian",
  "Kieran",
  "Sora",
  "Morgan",
  "Vesper",
  "Eden",
  "Vale",
  "Finn",
  "River",
  "Arden",
  "Shiloh",
  "Indigo",
  "Lior",
  "Aspen",
];

export const genders: string[] = ["male", "female"];
export const classes: string[] = ["human", "orc", "elf", "fairy"];
export const roles: string[] = ["warrior", "mage", "assasin", "hunter", "doctor"];

export const types: string[] = ["adventure", "fantasy", "mystery", "romance"];

export const places: string[] = [
  "magical dark forest",
  "busy medieval market",
  "fishing village",
  "battlefield",
  "capital city",
  "adventurers guild headquarters",
  "tabern",
  "ancient ruins",
  "dungeon",
  "magical school",
  "mysterious ancient cemetery",
];

export const tags: string[] = [
  "Medieval",
  "Fear",
  "Greed",
  "Crime",
  "Politics",
  "Superpowers",
  "Royalty",
  "Theft",
  "Vengeance",
  "Rebellion",
  "Survival",
  "Magical Artifacts",
  "Friendship",
  "Betrayal",
  "War",
  "Exploration",
  "Monster Hunting",
  "Dark Magic",
  "Religion",
  "Mythology",
  "Apocalypse",
  "Amnesia",
  "Conspiracy",
  "Immortality",
  "Resistance",
  "Family Relationships",
  "Advanced Technology",
  "Dystopian Society",
  "Epic Quest",
  "Heroic Journey",
  "Sorcery",
  "Legendary Beasts",
  "Enchanted Forests",
  "Ancient Prophecy",
  "Chosen One",
  "Mythical Creatures",
  "Hidden Realms",
  "Realm Wars",
];

export const predefinedExtras: Extra[] = [
  {
    name: "Elandor",
    gender: "Male",
    class: "Elf",
    role: "Mage",
    description:
      "A wise elven mage who wields ancient arcane powers. His knowledge of forgotten spells is only matched by his quiet, brooding demeanor.",
    alignment: "enemy",
  },
  {
    name: "Kaela",
    gender: "Female",
    class: "Human",
    role: "Rogue",
    description:
      "A cunning rogue with a dark past. She moves swiftly in the shadows, stealing from the rich and occasionally the poor, but always with a purpose only she understands.",
    alignment: "neutral",
  },
  {
    name: "Throrak",
    gender: "Male",
    class: "Dwarf",
    role: "Warrior",
    description:
      "A battle-hardened dwarf with a mighty warhammer. Throrak is loyal to his friends but quick to anger, especially when his honor is challenged.",
    alignment: "ally",
  },
  {
    name: "Lysara",
    gender: "Female",
    class: "Elf",
    role: "Ranger",
    description:
      "An expert archer and tracker from the northern forests. She prefers the company of animals to people, and her quiet nature hides a tragic backstory.",
    alignment: "neutral",
  },
  {
    name: "Gorath",
    gender: "Male",
    class: "Orc",
    role: "Berserker",
    description:
      "A fierce orcish warrior who fights with unrelenting rage. Gorath seeks glory on the battlefield, but his uncontrollable fury can make him unpredictable.",
    alignment: "enemy",
  },
  {
    name: "Seraphina",
    gender: "Female",
    class: "Human",
    role: "Cleric",
    description:
      "A devout cleric dedicated to healing and protecting the weak. Her faith in the divine light guides her every action, though she struggles with doubt.",
    alignment: "ally",
  },
  {
    name: "Karnok",
    gender: "Male",
    class: "Tiefling",
    role: "Warlock",
    description:
      "A mysterious warlock who made a pact with dark forces in exchange for power. His motives are unknown, but his abilities are feared.",
    alignment: "neutral",
  },
  {
    name: "Nyx",
    gender: "Female",
    class: "Gnome",
    role: "Alchemist",
    description:
      "A brilliant gnome alchemist, obsessed with uncovering the secrets of the universe. They are always tinkering with dangerous potions and experiments.",
    alignment: "neutral",
  },
  {
    name: "Arissa",
    gender: "Female",
    class: "Half-Elf",
    role: "Bard",
    description:
      "A charming half-elf bard who can inspire armies or bring peace with her music. She travels the lands, seeking stories to immortalize in song.",
    alignment: "ally",
  },
  {
    name: "Drakthar",
    gender: "Male",
    class: "Dragonborn",
    role: "Paladin",
    description:
      "A dragonborn paladin, sworn to uphold justice. Drakthar is a symbol of hope for the downtrodden, though his rigid code can make him inflexible.",
    alignment: "neutral",
  },
  {
    name: "Zara",
    gender: "Female",
    class: "Halfling",
    role: "Sorcerer",
    description:
      "A prodigious halfling sorcerer with an innate connection to wild magic. Her spells are unpredictable, as is her mischievous personality.",
    alignment: "enemy",
  },
  {
    name: "Morthak",
    gender: "Male",
    class: "Orc",
    role: "Shaman",
    description: "An ancient orc shaman who communes with the spirits of his ancestors. He seeks balance between the material and spiritual worlds.",
    alignment: "enemy",
  },
  {
    name: "Viviana",
    gender: "Female",
    class: "Human",
    role: "Assassin",
    description: "A deadly assassin known for her precision and cold demeanor. Viviana has no loyalty except to those who can pay the highest price.",
    alignment: "neutral",
  },
  {
    name: "Tirion",
    gender: "Male",
    class: "Elf",
    role: "Druid",
    description:
      "A reclusive elven druid who protects the forests. Tirion is a master of shapeshifting and calls upon the forces of nature in times of need.",
    alignment: "ally",
  },
  {
    name: "Belarion",
    gender: "Male",
    class: "Human",
    role: "Knight",
    description:
      "A fallen knight who wanders the land seeking redemption for a sin committed long ago. His sense of duty is his only remaining guide.",
    alignment: "neutral",
  },
];

export const predefinedMainQuests: string[] = [
  "Retrieve the lost artifact of power",
  "Defeat the dark lord and save the kingdom",
  "Uncover the truth behind a mysterious curse",
  "Find the legendary city of gold",
  "Rescue the kidnapped prince/princess",
  "Stop the ancient evil from awakening",
  "Discover the lost civilization of the ancients",
  "Steal the king's secret weapon.",
  "Rescue the princess from the dark tower.",
  "Find the lost treasure of the ancients.",
  "Stop the war between elves and dwarves.",
  "Destroy the cursed amulet of shadows.",
  "Uncover the hidden spy in the royal court.",
  "Retrieve the sacred gem from the dragon's lair.",
  "Seal the portal to the underworld.",
  "Assassinate the corrupt warlord.",
  "Save the village from the bandit raid.",
  "Protect the ancient tree of life.",
  "Escort the merchant through the dangerous forest.",
  "Recover the stolen magical artifact.",
  "Defend the castle from an invading army.",
  "Overthrow the king and take the throne.",
  "Burn the village to the ground to send a message.",
  "Steal the magical artifact and plunge the world into darkness.",
  "Corrupt the sacred temple and twist its power for evil.",
  "Assassinate the hero before they can complete their quest.",
  "Raise an army of the undead to conquer the kingdom.",
  "Kidnap the princess and demand a ransom.",
  "Poison the city's water supply and watch it fall into chaos.",
  "Unleash the imprisoned demon to wreak havoc on the realm.",
  "Sabotage the peace treaty and ignite a war between nations.",
  "Spread a deadly plague across the land to weaken your enemies.",
  "Destroy the hero's village as a warning to all who oppose you.",
  "Turn the royal court against the king through deception.",
  "Enslave the local population to build your dark empire.",
];
