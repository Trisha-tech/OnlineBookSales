import React from "react";
import "./testimonial.css";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCol,
  MDBIcon,
  MDBTypography,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Testimonial() {
  return (
    <MDBContainer className="py-5">
      <MDBCarousel showControls dark>
        <MDBCarouselInner>
          <MDBCarouselItem className="active">
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Anna Deynah</h5>
                  <h6 className="text-primary mb-3">UX Designer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">John Doe</h5>
                  <h6 className="text-primary mb-3">Web Developer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star-half-alt"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Maria Kate</h5>
                  <h6 className="text-primary mb-3">Photographer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        far
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">John Doe</h5>
                  <h6 className="text-primary mb-3">UX Designer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Alex Rey</h5>
                  <h6 className="text-primary mb-3">Web Developer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star-half-alt"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Maria Kate</h5>
                  <h6 className="text-primary mb-3">Photographer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        far
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Anna Deynah</h5>
                  <h6 className="text-primary mb-3">UX Designer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">John Doe</h5>
                  <h6 className="text-primary mb-3">Web Developer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star-half-alt"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Maria Kate</h5>
                  <h6 className="text-primary mb-3">Photographer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDBIcon
                        far
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}
