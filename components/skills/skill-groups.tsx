import Chip from "@/components/ui/chip";
import { SkillGroupInterface } from "@/config/profile";

interface SkillGroupsProps {
  groups: SkillGroupInterface[];
}

export default function SkillGroups({ groups }: SkillGroupsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => (
        <div key={group.title} className="rounded-xl border bg-card p-5">
          <h3 className="mb-3 text-sm font-semibold">{group.title}</h3>
          <div className="flex flex-wrap gap-1.5">
            {group.items.map((item) => (
              <Chip key={item} content={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
