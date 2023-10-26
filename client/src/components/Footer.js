import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      {/* Top Section */}
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Connect with us on social media:</span>
        </div>
        {/* Social Icons */}
        <div className='social-link'>
          <a href='/' className='text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='/' className='text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='/' className='text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='/' className='text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='/' className='text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='/' className='text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      {/* Footer Content */}
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            {/* Company Info */}
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Opulent Living
              </h6>
              <p>
              NEWSLETTER - EXCLUSIVE OFFERS STRAIGHT TO YOUR INBOX<br></br>
              Be the first to know when new products drop and get behind-the-scenes content straight from Gareth, Opulent Living's owner..
              </p>
            </MDBCol>
            {/* Products */}
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='/' className='text-reset'>
                  Sofas
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  Tables
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  Chairs
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  Beds
                </a>
              </p>
            </MDBCol>
            {/* Useful Links */}
            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful Links</h6>
              <p>
                <a href='/' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  Blog
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  Materials
                </a>
              </p>
            </MDBCol>
            {/* Contact */}
            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, USA
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@opulentliving.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +1 123 456 7890
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +1 123 456 7891
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Bottom Section */}
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {new Date().getFullYear()} Opulent Living. All rights reserved.
        <a className='text-reset fw-bold' href='https://www.autumnoak.com/' onClick={() => {}}>
          www.opulentliving.com</a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
