import {
  Building2,
  Receipt,
  Truck
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
  const props = path ? (isExternal ? { href: path } : { to: path }) : {};

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

const partnerMenuItems = [
  {
    title: 'Đơn vị vận chuyển',
    description: 'Quản lý danh sách các nhà xe nội bộ và đơn vị thuê ngoài.',
    icon: Truck,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    path: 'https://plasma-vn.vercel.app/danh-sach-dvvc'
  },
  {
    title: 'Danh sách nhà cung cấp',
    description: 'Quản lý danh sách các đối tác cung cấp vật tư và vỏ bình.',
    icon: Building2,
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
    path: 'https://plasma-vn.vercel.app/nha-cung-cap'
  },
  {
    title: 'Nhập hàng từ NCC',
    description: 'Quản lý phiếu nhập hàng hóa từ nhà cung cấp vào kho công ty.',
    icon: Receipt,
    color: 'text-lime-600',
    bgColor: 'bg-lime-50',
    path: 'https://plasma-vn.vercel.app/nhap-hang'
  }
];

export function Partner() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Đối tác</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {partnerMenuItems.map((item, index) => (
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
