import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
  CNavItem  // Import thêm CNavItem
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logo } from '../assets/brand/logo'
import { sygnet } from '../assets/brand/sygnet'

// sidebar nav config
import navigation from '../_nav'

import axiosInstance from '../api/axios';  // Import axios instance

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

    // State to hold categories from API
    const [categories, setCategories] = useState([]);

    // Function to fetch categories from API
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get('/categories');  // Thay bằng API endpoint đúng
        setCategories(response.data);  // Cập nhật danh mục vào state
      } catch (error) {
        console.error('Lỗi khi lấy danh mục:', error);
      }
    };
  
    // Fetch categories when component is mounted
    useEffect(() => {
      fetchCategories();
    }, []);
  
    // Update navigation with dynamic categories
    const updatedNavigation = navigation.map(item => {
      if (item.name === 'Category') {
        return {
          ...item,
          items: categories.map(category => ({
            component: CNavItem,
            name: category.name,  // Tên danh mục
            to: `/admin/category/${category.id}`,    // Link đến trang chi tiết của danh mục
          })),
        };
      }
      return item;
    });

  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand to="/">
          <CIcon customClassName="sidebar-brand-full" icon={logo} height={32} />
          <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: 'set', sidebarShow: false })}
        />
      </CSidebarHeader>
      <AppSidebarNav items={updatedNavigation} />
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
