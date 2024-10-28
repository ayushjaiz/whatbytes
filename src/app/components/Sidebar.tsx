import { MdLeaderboard } from "react-icons/md";
import { TfiMedallAlt } from "react-icons/tfi";
import { MdOutlineEventNote } from "react-icons/md";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-r-md border-r">
      <nav className="p-4">
        <ul className="space-y-2">
          <DashboardItem icon={MdLeaderboard} label="Dashboard" selected={false} />
          <DashboardItem icon={TfiMedallAlt} label="Skill Test" selected={true} />
          <DashboardItem icon={MdOutlineEventNote} label="Internship" selected={false} />
        </ul>
      </nav>
    </aside>
  );
};

interface DashboardItemProps {
  icon: React.ElementType;
  label: string;
  href?: string;
  selected?: boolean;
}

const DashboardItem = ({ icon: Icon, label, href = "#", selected = false }: DashboardItemProps) => {
    return (
      <li className={`${selected ? "bg-blue-100" : "hover:bg-gray-100"} rounded`}>
        <Link href={href}>
          <div className="flex items-center gap-x-3 p-2">
            <Icon className={`${selected ? "text-blue-500" : "text-gray-600"} text-lg`} />
            <span className={`${selected ? "text-blue-600" : "text-gray-800"} font-semibold`}>
              {label}
            </span>
          </div>
        </Link>
      </li>
    );
  };