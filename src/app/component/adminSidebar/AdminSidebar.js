"use client";
import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu, menuClasses } from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink } from 'react-icons/fa';
import { SidebarHeader } from '../sidebarComponent/SidebarHeader';
import { Typography } from '../sidebarComponent/Typography';
import { Badge } from '../sidebarComponent/Badge';
import { SidebarFooter } from '../sidebarComponent/SidebarFooter';
import { Switch } from '../sidebarComponent/Switch';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const themes = {
  light: {
    sidebar: {
      backgroundColor: "#ffffff",
      color: "#607489"
    },
    menu: {
      menuContent: "#fbfcfd",
      icon: "#0098e5",
      hover: {
        backgroundColor: "#c5e4ff",
        color: "#44596e"
      },
      disabled: {
        color: "#9fb6cf"
      }
    }
  },
  dark: {
    sidebar: {
      backgroundColor: "#0b2948",
      color: "#8ba1b7"
    },
    menu: {
      menuContent: "#082440",
      icon: "#59d0ff",
      hover: {
        backgroundColor: "#00458b",
        color: "#b6c8d9"
      },
      disabled: {
        color: "#3e5e7e"
      }
    }
  }
}

// hex to rgba converter
const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [toggled, setToggled] = useState(false)
  const [broken, setBroken] = useState(false)
  const [rtl, setRtl] = useState(false)
  const [hasImage, setHasImage] = useState(false)
  const [theme, setTheme] = useState("dark")
  const pathname = usePathname()
  const router = useRouter();
  const menuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 400
    },
    icon: {
      color: themes[theme].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color
      }
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9"
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(
            themes[theme].menu.menuContent,
            hasImage && !collapsed ? 0.4 : 1
          )
          : "transparent"
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color
      },
      "&:hover": {
        backgroundColor: hexToRgba(
          themes[theme].menu.hover.backgroundColor,
          hasImage ? 0.8 : 1
        ),
        color: themes[theme].menu.hover.color
      }
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined
    })
  }


  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        direction: rtl ? "rtl" : "ltr"
      }}
    >
      <Sidebar
        collapsed={collapsed}
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        onBreakPoint={setBroken}
        image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
        rtl={rtl}
        breakPoint="md"
        backgroundColor={hexToRgba(
          themes[theme].sidebar.backgroundColor,
          hasImage ? 0.9 : 1
        )}
        rootStyles={{
          color: themes[theme].sidebar.color
        }}
        transitionDuration={1000}
      >
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <main>
            <div style={{ padding: "20px 24px 0px 24px", color: "#44596e" }}>
              <div style={{ marginBottom: "5px" }}>

                <Switch
                  id="collapse"
                  checked={collapsed}
                  onChange={() => setCollapsed(!collapsed)}
                />
              </div>


            </div>
          </main>
          <SidebarHeader
            rtl={rtl}
            style={{ marginBottom: "24px", marginTop: "5px" }}
          />

          <div style={{ flex: 1, marginBottom: "32px" }}>
            <div style={{ padding: "0 24px", marginBottom: "8px" }}>
              <Typography
                variant="body2"
                fontWeight={600}
                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: "0.5px" }}
              >
                General
              </Typography>
            </div>
            <Menu className='sidebar-menu' menuItemStyles={menuItemStyles}>
              {/* <SubMenu
                label="Charts"
                icon={<FaGithub />}
                suffix={
                  <Badge variant="danger" shape="circle">
                    6
                  </Badge>
                }
              >
                <MenuItem> Pie charts</MenuItem>
                <MenuItem> Line charts</MenuItem>
                <MenuItem> Bar charts</MenuItem>
              </SubMenu> */}
              <MenuItem
                onClick={() => router.push('/admin/banner')}
                className={pathname.includes('admin/banner') ? 'menu-active fs-6' : "fs-6"}
                icon={<i className="las la-sliders-h fs-5"></i>}
              >
                Banner
              </MenuItem>


              <SubMenu label="Theme" icon={<FaGithub />}>
                <MenuItem> Dark</MenuItem>
                <MenuItem> Light</MenuItem>
              </SubMenu>
              <SubMenu label="Components" icon={<FaGithub />}>
                <MenuItem> Grid</MenuItem>
                <MenuItem> Layout</MenuItem>
                <SubMenu label="Forms">
                  <MenuItem> Input</MenuItem>
                  <MenuItem> Select</MenuItem>
                  <SubMenu label="More">
                    <MenuItem> CheckBox</MenuItem>
                    <MenuItem> Radio</MenuItem>
                  </SubMenu>
                </SubMenu>
              </SubMenu>
              <SubMenu label="E-commerce" icon={<FaGithub />}>
                <MenuItem> Product</MenuItem>
                <MenuItem> Orders</MenuItem>
                <MenuItem> Credit card</MenuItem>
              </SubMenu>
            </Menu>

            <div
              style={{
                padding: "0 24px",
                marginBottom: "8px",
                marginTop: "32px"
              }}
            >
              <Typography
                variant="body2"
                fontWeight={600}
                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: "0.5px" }}
              >
                Extra
              </Typography>
            </div>

            <Menu menuItemStyles={menuItemStyles}>
              <MenuItem
                icon={<FaGithub />}
                suffix={<Badge variant="success">New</Badge>}
              >
                Calendar
              </MenuItem>
              <MenuItem icon={<FaGithub />}>Documentation</MenuItem>
              <MenuItem disabled icon={<FaGithub />}>
                Examples
              </MenuItem>
            </Menu>
          </div>
          <SidebarFooter collapsed={collapsed} />
        </div>
      </Sidebar>
      <main className='toggle-position'>
        <div style={{ padding: "16px 24px", color: "#44596e" }}>
          <div style={{ marginBottom: "16px" }}>
            {broken &&
              <>
                <div onClick={() => setToggled(!toggled)}>
                  <i style={{ fontSize: "48px" }} className="las la-bars "></i>
                </div>
              </>

            }
          </div>


        </div>
      </main>

    </div>
  )
}
export default AdminSidebar;