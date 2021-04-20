import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-padding">
        <div className="row3 footer__row">
          <div className="c px-5">
            <h4 className="footer__h4">help &amp; suppor</h4>
            <p className="fa">support</p>
          </div>
          <div className="c px-5">
            <h4 className="footer__h4">Get in touch</h4>
            Any question or feedback?
            <Link to="#" className="fa">
              &nbsp;Reach Us
            </Link>
            <div className="social__medi">
              <a
                href="https://api.whatsapp.com/send?phone=+2347086477047"
                target="_blank"
                title="whatsapp"
              >
                <i className="fa fa-whatsapp mr-3"></i>
              </a>
              <a
                href="https://www.instagram.com/lawal_la_baba/"
                target="_blank"
                title="instagram"
              >
                <i className="fa fa-instagram mr-3"></i>
              </a>
              <a
                href="https://twitter.com/lawal_akande5"
                target="_blank"
                title="twitter"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="c px-5">
            <h4 className="footer__h4">Newsletter</h4>
            <form action="">
              <input
                type="text"
                required
                size="30"
                placeholder="youremail@example.com"
              />
              <br />
              <input
                type="submit"
                value="stay in touch"
                className="footer__btn"
              />
            </form>
          </div>
        </div>
        <div className="text-center pb-4">
          Copyright &#169; <span>{currentYear}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
