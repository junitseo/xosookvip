import Link from "next/link";
import React, { useEffect, useState } from "react";
import stylesCss from "../../../../styles/MenuCSS/MenuLeft.module.css";
import { FaChevronDown, FaChevronLeft } from 'react-icons/fa';
import Router, { useRouter } from "next/router";
import { listMenu } from "data/menu";

const MenuLeftPC = () => {
    const router = useRouter();
    const [menuName, setMenuName] = useState(router.pathname.replace('/',''));

    const handleShowMenuItem = (event) => {
        setMenuName(event);
    }

    useEffect(() => {
        setMenuName(router.pathname.replace('/',''));
    }, [router.pathname]);
    
    return (
        <>
            <div>
                <ul className={stylesCss["nav-in"]}>
                    {
                        listMenu?.map((item, index) => {
                            return (
                                <>
                                    <li index={index} className={stylesCss["menu-item"]} style={menuName === item?.slug ? { backgroundColor: '#eeeeee' } : { backgroundColor: '#ffffff' }}>
                                        <div className={stylesCss["menu-item-content"]}>
                                            {item?.icon}
                                            <Link href={`/${item?.slug}`} className={stylesCss["menu-item-text"]}>
                                                {item?.name}
                                            </Link>
                                            {
                                                item.iconChildren ?
                                                <>
                                                    {menuName === item.slug ?
                                                        <FaChevronDown onClick={() => handleShowMenuItem("#")} className={stylesCss["icon-right-up"]} />
                                                        :
                                                        <FaChevronLeft onClick={() => handleShowMenuItem(item.slug)} className={stylesCss["icon-right-up"]} />
                                                    }
                                                </>
                                                :
                                                <></>
                                            }
                                        </div>
                                        {
                                            item.menuChildren && item.menuChildren.length > 0 ? 
                                            <ul style={menuName === item.slug ? { display: 'block' } : { display: 'none' }} className={stylesCss["nav-second-level"]}>
                                                {
                                                    item.menuChildren?.map((menuItem, indexItem)=>{
                                                        return (
                                                            <li key={indexItem} className={stylesCss["menu-item-item"]} style={menuName === menuItem.slug ? { backgroundColor: '#eee' } : { backgroundColor: '#f8f8f8' }}>
                                                                <div className={stylesCss["menu-item-content"]}>
                                                                    <Link href={`${menuItem?.slug}`} className={stylesCss["menu-item-text"]}>
                                                                        {menuItem?.name}
                                                                    </Link>
                                                                </div>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            :
                                            <></>
                                        }
                                    </li>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    );
};

export default MenuLeftPC;