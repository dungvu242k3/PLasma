/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { HumanResources } from './pages/HumanResources';
import { Logistics } from './pages/Logistics';
import { System } from './pages/System';
import { RecruitmentList } from './pages/human-resources/RecruitmentList';
import { Finance } from './pages/Finance';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';
import { AIAssistant } from './pages/AIAssistant';
import { DanhSachVanDon } from './pages/logistics/DanhSachVanDon';
import { MainMenu } from './pages/MainMenu';
import { Customer } from './pages/Customer';
import { Partner } from './pages/Partner';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="ho-so-ca-nhan" element={<Profile />} />
          <Route path="nhan-su" element={<HumanResources />} />
          <Route path="nhan-su/ho-so" element={<RecruitmentList />} />
          <Route path="kho-van" element={<Logistics />} />
          <Route path="kho-van/danh-sach-van-don" element={<DanhSachVanDon />} />
          <Route path="he-thong" element={<System />} />
          <Route path="tai-chinh" element={<Finance />} />
          <Route path="tro-ly-ai" element={<AIAssistant />} />
          <Route path="settings" element={<Settings />} />
          <Route path="menu" element={<MainMenu />} />
          <Route path="khach-hang" element={<Customer />} />
          <Route path="doi-tac" element={<Partner />} />
          {/* Placeholder routes for other paths to avoid 404s inside the layout */}
          <Route path="*" element={<Dashboard />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
