import {
  Cpu,
  Database,
  Package,
  Warehouse
} from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

interface MenuItemProps {
  key?: React.Key;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  path?: string;
}

function MenuCard({ title, description, icon: Icon, color, bgColor, path }: MenuItemProps) {
  const isExternal = path?.startsWith('http');
  const CardWrapper = path ? (isExternal ? 'a' : Link) : 'div';
  const props = path ? (isExternal ? { href: path, target: "_blank", rel: "noopener noreferrer" } : { to: path }) : {};

  return (
    // @ts-ignore
    <CardWrapper {...props} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group flex items-start gap-4 relative h-full w-full text-left">
      <div className={`${bgColor} ${color} w-12 h-12 rounded-xl flex items-center justify-center shrink-0`}>
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-slate-800 text-sm group-hover:text-red-600 transition-colors">
          {title}
        </h3>
        <p className="text-xs text-slate-500 mt-1 line-clamp-2">
          {description}
        </p>
      </div>
    </CardWrapper>
  );
}

const logisticsModules = [
  {
    title: 'Danh sách máy',
    description: 'Theo dõi trạng thái, vị trí và lịch sử cấp phát máy.',
    icon: Cpu,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    path: 'https://plasma-vn.vercel.app/danh-sach-may'
  },
  {
    title: 'Danh sách bình',
    description: 'Quản lý RFID, thể tích và theo dõi vị trí vỏ bình.',
    icon: Package,
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
    path: 'https://plasma-vn.vercel.app/danh-sach-binh'
  },
  {
    title: 'Danh sách Kho',
    description: 'Quản lý sức chứa, vị trí và tồn kho của từng điểm tập kết.',
    icon: Warehouse,
    color: 'text-slate-600',
    bgColor: 'bg-slate-100',
    path: 'https://plasma-vn.vercel.app/danh-sach-kho'
  },
  {
    title: 'Danh sách nguồn vật tư',
    description: 'Lưu trữ các danh mục cấu kiện cơ bản phục vụ lắp ráp hệ thống (Bình khí, Máy Plasma).',
    icon: Database,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    path: 'https://plasma-vn.vercel.app/thong-tin-vat-tu'
  }
];

export function Logistics() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Kho vận</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {logisticsModules.map((item, index) => (
          <MenuCard
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
            color={item.color}
            bgColor={item.bgColor}
            path={item.path}
          />
        ))}
      </div>
    </div>
  );
}
