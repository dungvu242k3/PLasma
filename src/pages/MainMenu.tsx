import {
  Building2,
  Cpu,
  Database,
  FileText,
  Gift,
  Package,
  PackagePlus,
  Plus,
  Receipt,
  Shield,
  ShoppingCart,
  Sparkles,
  Store,
  Truck,
  UserCog,
  UserPlus,
  UserPlus as UserPlusIcon,
  Users,
  Warehouse
} from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

interface MenuItemProps {
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

// Menu items organized in 5 rows
const menuRows = [
  // Hàng 1: 5 items
  [
    {
      title: 'Danh sách đơn hàng',
      description: 'Theo dõi, quản lý và xử lý các đơn hàng của hệ thống.',
      icon: ShoppingCart,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      path: 'https://tableplasma.vercel.app/danh-sach-don-hang'
    },
    {
      title: 'Thêm đơn hàng',
      description: 'Tạo mới đơn hàng nhanh chóng với các mẫu thông tin có sẵn.',
      icon: Plus,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      path: '/them-don-hang'
    },
    {
      title: 'Danh sách khách hàng',
      description: 'Quản lý dữ liệu người liên hệ và theo dõi tài sản, máy móc phân bổ.',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      path: 'https://tableplasma.vercel.app/khach-hang'
    },
    {
      title: 'Thêm khách hàng',
      description: 'Tạo hồ sơ khách hàng, đối tác mới vào cơ sở dữ liệu.',
      icon: UserPlus,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      path: '/them-khach-hang'
    },
    {
      title: 'Danh sách máy',
      description: 'Theo dõi trạng thái, vị trí và lịch sử cấp phát máy.',
      icon: Cpu,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      path: 'https://tableplasma.vercel.app/danh-sach-may'
    }
  ],
  // Hàng 2: 5 items
  [
    {
      title: 'Thêm máy mới',
      description: 'Khai báo serial, bluetooth và cấu hình máy mới vào kho.',
      icon: Plus,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      path: '/them-may-moi'
    },
    {
      title: 'Danh sách bình',
      description: 'Quản lý RFID, thể tích và theo dõi vị trí vỏ bình.',
      icon: Package,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      path: 'https://tableplasma.vercel.app/danh-sach-binh'
    },
    {
      title: 'Thêm bình mới',
      description: 'Nhập vỏ bình mới vào hệ thống thông qua mã quét RFID.',
      icon: PackagePlus,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      path: '/them-binh-moi'
    },
    {
      title: 'Danh sách Kho',
      description: 'Quản lý sức chứa, vị trí và tồn kho của từng điểm tập kết.',
      icon: Warehouse,
      color: 'text-slate-600',
      bgColor: 'bg-slate-100',
      path: 'https://tableplasma.vercel.app/danh-sach-kho'
    },
    {
      title: 'Thêm kho mới',
      description: 'Thêm địa điểm lưu trữ mới vào mạng lưới phân phối.',
      icon: Store,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      path: '/them-kho-moi'
    }
  ],
  // Hàng 3: 5 items
  [
    {
      title: 'Đơn vị vận chuyển',
      description: 'Quản lý danh sách các nhà xe nội bộ và đơn vị thuê ngoài.',
      icon: Truck,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      path: 'https://tableplasma.vercel.app/danh-sach-dvvc'
    },
    {
      title: 'Thêm ĐVVC mới',
      description: 'Tạo hồ sơ công ty và người quản lý vận chuyển mới.',
      icon: Plus,
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
      path: '/them-dvvc-moi'
    },
    {
      title: 'Danh sách nhà cung cấp',
      description: 'Quản lý danh sách các đối tác cung cấp vật tư và vỏ bình.',
      icon: Building2,
      color: 'text-violet-600',
      bgColor: 'bg-violet-50',
      path: 'https://tableplasma.vercel.app/nha-cung-cap'
    },
    {
      title: 'Thêm nhà cung cấp',
      description: 'Khai báo thông tin đối tác cung cấp mới vào hệ thống.',
      icon: Plus,
      color: 'text-fuchsia-600',
      bgColor: 'bg-fuchsia-50',
      path: '/them-nha-cung-cap'
    },
    {
      title: 'Nhập hàng từ NCC',
      description: 'Quản lý phiếu nhập hàng hóa từ nhà cung cấp vào kho công ty.',
      icon: Receipt,
      color: 'text-lime-600',
      bgColor: 'bg-lime-50',
      path: 'https://tableplasma.vercel.app/nhap-hang'
    }
  ],
  // Hàng 4: 5 items
  [
    {
      title: 'Tạo phiếu nhập kho',
      description: 'Lập phiếu nhập mới: Chọn NCC, kho nhận, khai báo hàng hóa chi tiết.',
      icon: FileText,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      path: '/tao-phieu-nhap-kho'
    },
    {
      title: 'Danh sách nguồn vật tư',
      description: 'Lưu trữ các danh mục cấu kiện cơ bản phục vụ lắp ráp hệ thống (Bình khí, Máy Plasma).',
      icon: Database,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      path: 'https://tableplasma.vercel.app/thong-tin-vat-tu'
    },
    {
      title: 'Thêm mới vật tư',
      description: 'Khai báo thông số cấu kiện mới vào từ điển chung.',
      icon: Plus,
      color: 'text-sky-600',
      bgColor: 'bg-sky-50',
      path: '/them-moi-vat-tu'
    },
    {
      title: 'Quản lý người dùng',
      description: 'Quản lý tài khoản, phân quyền tự động và theo dõi lịch sử truy cập.',
      icon: UserCog,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      path: '/quan-ly-nguoi-dung'
    },
    {
      title: 'Thêm người dùng',
      description: 'Cấp tài khoản mới cho nhân viên hoặc người quản lý trên hệ thống.',
      icon: UserPlusIcon,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      path: '/them-nguoi-dung'
    }
  ],
  // Hàng 5: 3 items
  [
    {
      title: 'Phân quyền chi tiết',
      description: 'Thiết lập quyền truy cập và chức năng cho từng nhóm người dùng.',
      icon: Shield,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      path: '/phan-quyen-chi-tiet'
    },
    {
      title: 'Danh sách Khuyến mãi',
      description: 'Quản lý mã khuyến mãi, khấu trừ bình cho khách hàng và đại lý.',
      icon: Gift,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      path: 'https://tableplasma.vercel.app/danh-sach-khuyen-mai'
    },
    {
      title: 'Tạo mã khuyến mãi',
      description: 'Thiết lập chương trình khuyến mãi bình mới cho khách hàng.',
      icon: Sparkles,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      path: 'https://tableplasma.vercel.app/tao-khuyen-mai'
    }
  ]
];

export function MainMenu() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Menu Hệ Thống</h1>
      </div>

      {/* Render each row */}
      {menuRows.map((row, rowIndex) => (
        <div key={rowIndex} className="space-y-4">
          <div className="flex items-center gap-2 border-l-4 border-red-600 pl-3">
            <h2 className="text-sm font-bold text-red-600 uppercase tracking-wide">
              Hàng {rowIndex + 1}
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
      ))}
    </div>
  );
}
