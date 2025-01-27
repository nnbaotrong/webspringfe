import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

const Category = () => {
  const { id } = useParams();  // Lấy categoryId từ URL
  const [products, setProducts] = useState([]);  // Danh sách sản phẩm
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  // Lấy sản phẩm của category khi component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Lấy danh sách sản phẩm theo categoryId từ API
        const productsResponse = await axios.get(`/products/category/${id}`);
        console.log("productsResponse :", productsResponse);
        setProducts(productsResponse.data);

        setLoading(false);
      } catch (err) {
        setError('Error fetching products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);  // Dependency array includes `id` to trigger when `id` changes

  // Xử lý trạng thái loading và lỗi
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Render danh sách sản phẩm
  return (
    <><div>
      <h1>Products in this category:</h1>

    </div><CTable align="middle" className="mb-0 border" hover responsive>
        <CTableHead className="text-nowrap">
          <CTableRow>
            <CTableHeaderCell className="bg-body-tertiary text-center">
              <CIcon icon={cilPeople} />
            </CTableHeaderCell>
            <CTableHeaderCell className="bg-body-tertiary">Name</CTableHeaderCell>
            <CTableHeaderCell className="bg-body-tertiary text-center">
              Description
            </CTableHeaderCell>
            <CTableHeaderCell className="bg-body-tertiary">price</CTableHeaderCell>
            <CTableHeaderCell className="bg-body-tertiary text-center">
              quantity
            </CTableHeaderCell>
            <CTableHeaderCell className="bg-body-tertiary">Supplier</CTableHeaderCell>
            <CTableHeaderCell className="bg-body-tertiary text-center">
              Expiry Date
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {products.map((product) => (
            <CTableRow v-for="item in tableItems" key={product.id}>
              <CTableDataCell className="text-center">
                <CAvatar size="md"  />
              </CTableDataCell>
              <CTableDataCell>
                <div>{product.name}</div>
                <div className="small text-body-secondary text-nowrap">
                  <span>{product.description}</span>
                </div>
              </CTableDataCell>
              <CTableDataCell>
              <div className="d-flex justify-content-between text-nowrap">
                  <div className="fw-semibold">{product.description}</div>
                </div>
              </CTableDataCell>
              <CTableDataCell className="text-center">
                <div className="d-flex justify-content-between text-nowrap">
                  <div className="fw-semibold">{product.price}</div>
                </div>
              </CTableDataCell>
              <CTableDataCell>
              <div className="d-flex justify-content-between text-nowrap">
                  <div className="fw-semibold">{product.quantity} {product.unit}</div>
                </div>
        
              </CTableDataCell>
              <CTableDataCell className="text-center">
              <div className="d-flex justify-content-between text-nowrap">
                  <div className="fw-semibold">{product.supplier}</div>
                </div>
              </CTableDataCell>
              <CTableDataCell>
                <div className="small text-body-secondary text-nowrap">Last Date</div>
                <div className="fw-semibold text-nowrap">{product.expiryDate}</div>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable></>
  );
};

export default Category;
