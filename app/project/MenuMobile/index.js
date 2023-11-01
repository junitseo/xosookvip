import React, { useState } from 'react';
import { Menu } from 'antd';
import { listMenu } from 'data/menu';
import Link from 'next/link';
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = listMenu.map(item => {
  const bool = item.menuChildren.length === 0;
  return  getItem(bool?<Link href={item.slug}>{item.name}</Link>:item.name,item.slug, item.icon, 
  bool ? null : item.menuChildren.map(children =>  getItem(<Link href={children.slug}>{children.name}</Link>, children.slug , item.iconChildren)))
})
const MenuMobile = () => {
  const [mode] = useState('inline');
  const [theme] = useState('light');
  return (
    <>
      <Menu
        style={{
          width: "100%",
          background: '#f8f8f8',
        }}
        className='menu-mobi'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={mode}
        theme={theme}
        items={items}
      />
    </>
  );
};
export default MenuMobile;