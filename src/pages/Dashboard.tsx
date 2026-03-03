import {
  Award,
  Building2,
  CalendarCheck,
  ClipboardList,
  Cpu,
  Database,
  DollarSign,
  Gift,
  ListTodo,
  Package,
  Receipt,
  ShoppingCart,
  Sparkles,
  Target,
  Truck,
  UserPlus,
  Users,
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

// Menu items organized in 5 rows
const menuRows = [
  // Hàng 1: Khách hàng (2 items)
  [
    {
      title: 'Danh sách đơn hàng',
      description: 'Theo dõi, quản lý và xử lý các đơn hàng của hệ thống.',
      icon: ShoppingCart,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      path: 'https://plasma-vn.vercel.app/danh-sach-don-hang'
    },
    {
      title: 'Danh sách khách hàng',
      description: 'Quản lý dữ liệu người liên hệ và theo dõi tài sản, máy móc phân bổ.',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      path: 'https://plasma-vn.vercel.app/khach-hang'
    }
  ],
  // Hàng 2: Kho vận (4 items)
  [
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
  ],
  // Hàng 3: Đối tác (3 items)
  [
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
  ],
  // Hàng 4: Nhân sự (8 items)
  [
    {
      title: 'Bảng tin nội bộ',
      description: 'Mở ứng dụng',
      icon: Users,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      path: '/nhan-su/bang-tin'
    },
    {
      title: 'Hồ sơ nhân sự',
      description: 'Mở ứng dụng',
      icon: ClipboardList,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      path: '/nhan-su/ho-so'
    },
    {
      title: 'Tuyển dụng',
      description: 'Mở ứng dụng',
      icon: UserPlus,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      path: '/nhan-su/tuyen-dung'
    },
    {
      title: 'Bậc lương & thăng tiến',
      description: 'Mở ứng dụng',
      icon: DollarSign,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      path: '/nhan-su/luong-thuong'
    },
    {
      title: 'Năng lực nhân sự',
      description: 'Mở ứng dụng',
      icon: Award,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      path: '/nhan-su/nang-luc'
    },
    {
      title: 'KPI',
      description: 'Mở ứng dụng',
      icon: Target,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      path: '/nhan-su/kpi'
    },
    {
      title: 'Giao việc',
      description: 'Mở ứng dụng',
      icon: ListTodo,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      path: '/nhan-su/giao-viec'
    },
    {
      title: 'Chấm công & lương',
      description: 'Mở ứng dụng',
      icon: CalendarCheck,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      path: '/nhan-su/cham-cong'
    }
  ],
  // Hàng 5: Bán hàng (2 items)
  [
    {
      title: 'Danh sách Khuyến mãi',
      description: 'Quản lý mã khuyến mãi, khấu trừ bình cho khách hàng và đại lý.',
      icon: Gift,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      path: 'https://plasma-vn.vercel.app/danh-sach-khuyen-mai'
    },
    {
      title: 'Tạo mã khuyến mãi',
      description: 'Thiết lập chương trình khuyến mãi bình mới cho khách hàng.',
      icon: Sparkles,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      path: 'https://plasma-vn.vercel.app/tao-khuyen-mai'
    }
  ]
];

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Menu Hệ Thống</h1>
      </div>

      {/* Render each row */}
      {menuRows.map((row, rowIndex) => {
        const rowTitles = ['Khách hàng', 'Kho vận', 'Đối tác', 'Nhân sự', 'Bán hàng'];
        return (
          <div key={rowIndex} className="space-y-4">
            <div className="flex items-center gap-2 border-l-4 border-red-600 pl-3">
              <h2 className="text-sm font-bold text-red-600 uppercase tracking-wide">
                {rowTitles[rowIndex]}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {row.map((item, itemIndex) => (
                <MenuCard
                  key={`${rowIndex}-${itemIndex}`}
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
      })}
    </div>
  );
}
