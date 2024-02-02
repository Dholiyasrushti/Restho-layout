import './App.css';
// import banner_img1 from './image/h2_banner-img3.png'
import about_s_1 from './image/h2-about1.svg';
import about_s_2 from './image/h2-about2.svg';
import shape_1 from './image/shape_1.svg'
import shape_2 from './image/shape_2.svg'
import logoimg from './image/logo.svg';
import logoimg1 from './image/logo1.svg';
import { BsEnvelope } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { FaFacebookF, FaInstagram ,FaLinkedinIn,FaTwitter  } from "react-icons/fa";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
function App(){
  return(
    <div>
      <header>
        {/* ===========================top header====================== */}
        <div className='top_h'> 
          <div className='container'>
            <div className='flex sapce-between'>
              <div className='Left_info'>
                <p>Opening Hour :<span>9.00 am to 10.00 pm</span></p>
              </div>
              <div className='flex right_info'> 
                <div className='padding-left'>
                  <BsEnvelope className='h_p'></BsEnvelope><span>info@gamil.com</span>
                </div>
                <div className='padding-left'><IoLocationOutline></IoLocationOutline><span>Road-01, Block-B, West London City</span></div>
              </div>
            </div>
          </div>
        </div>
        {/* ==============================main header========================== */}
       <div className='bg_black'>
       <div className='container'>
          <div className='main_h flex sapce-between align-items'>
            <div>
              <img src={logoimg} alt=''></img>
            </div>
            <div>
              <ul className='flex mainmenu align-items'> 
                <li><a>Home<span><FaAngleDown></FaAngleDown></span></a></li>
                <li><a>About</a></li>
                <li><a>Menu<span><FaAngleDown></FaAngleDown></span></a></li>
                <li><a>Pages<span><FaAngleDown></FaAngleDown></span></a></li>
                <li><a>Blog<span><FaAngleDown></FaAngleDown></span></a></li>
                <li><a>Contact</a></li>
              </ul>
              </div>
              <div className='btn'><span>Find Resevation</span></div>
            
          </div>
        </div>
       </div>
      </header>
      <main>
        {/* =======================================banner=========================================== */}
        <div className='banner_back'>
          <div><img src={shape_1}></img></div>
        </div>
        <div className='flex banner'>
          <div className='banner_left'>
            <div><img src={shape_2}></img><span>Welcome To Restho</span><img src={shape_2}></img></div>
            <div><h1>Find Your Best Healthy & Tasty Food</h1></div>
            <div><p>It is a long established fact that a reader will be distracted by the readable content of a page.</p></div>
            <div>
            <div className='btn2'><span><BsArrowUpRightCircle></BsArrowUpRightCircle>Discover More</span></div>
            </div>
          </div>
          <div className='banner_right'>
                <div className='flex banner_img'>
                  <img src={require(`./image/h2-banner-img3.png`)}></img>
                  <img src={require(`./image/h2-banner-img33.png`)}></img>
                </div>
                <div className='img11'>
                  <img src={require(`./image/h2-banner-img11.png`)}></img>
                </div>
                <div className='img4'>
                  <img src={require(`./image/h2-banner-img4.png`)}></img>
                </div>
          </div>
        </div>
{/* ========================================================section 1============================================================ */}
        <div className='spacer'>
          <div className='container'>
            <div className='section1 flex'>
              <div className='flex sec_1'>
                <div className='product_img pro_1'>
                  <img src={require(`./image/h2-product-1.png`)}></img>
                </div>
                <div className='pro_detail justify-content align-items'> 
                  <h2>Sea Food</h2>
                  <p>Lorem ipsum dolor sit amet consecter.</p>
                </div>
              </div>
              <div className='flex sec_1'>
                <div className='product_img pro_2'>
                  <img src={require(`./image/h2-product-2.png`)}></img>
                </div>
                <div className='pro_detail justify-content align-items'> 
                  <h2>Meat Masala</h2>
                  <p>Lorem ipsum dolor sit amet consecter.</p>
                </div>
              </div>
              <div className='flex sec_1'>
                <div className='product_img pro_3'>
                  <img src={require(`./image/h2-product-3.png`)}></img>
                </div>
                <div className='pro_detail justify-content align-items'> 
                  <h2>Vegetarian</h2>
                  <p>Lorem ipsum dolor sit amet consecter.</p>
                </div>
              </div>
              <div className='flex sec_1'>
                <div className='product_img pro_4'>
                  <img src={require(`./image/h2-product-4.png`)}></img>
                </div>
                <div className='pro_detail justify-content align-items'> 
                  <h2>Thai Soup</h2>
                  <p>Lorem ipsum dolor sit amet consecter.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* ============================================================section 2============================================================== */}
        <div className='spacer'>
          <div className='container'>
            <div className='section2 flex'>
              <div>
                <img src={require(`./image/h2-about-img-full.png`)}></img>
              </div>
              <div className='aboutus'>
                <div><p><img src={shape_2}></img><span>About to Restho</span><img src={shape_2}></img></p></div>
                <div><h1>Come to Our Restaurant, Ready Your Food.</h1></div>
                <div><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
                <div className='about_icon'>
                  <div className='flex about'>
                    <div className='flex about_i_img'>
                     <div> <img src={about_s_1}></img></div>
                      <div><h2>Pure Fresh Food.</h2>
                          <p>We are serve different type of fresh food.</p>
                      </div>
                    </div>
                    <div className='flex about_i_img'>
                    <div> <img src={about_s_2}></img></div>
                      <div><h2>Experties Chef.</h2>
                          <p>We are serve different type of fresh food.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='about_btn'>
                  <div className='btn2'><span><BsArrowUpRightCircle></BsArrowUpRightCircle>Discover More</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* ==============================================================section 3================================================================= */}
      <div className='background'>
        <div className='spacer'>
          <div className='container'>
            <div className='section3'>
              <div>
                <div><p><img src={shape_2}></img><span>Our New Item</span><img src={shape_2}></img></p></div>
                <div><h1>Restho New Item List</h1></div>
                <div><p>Various versions have evolved over the years, sometimes on purpose.</p></div>
                <div className='flex'>
                  <div className='sec_3'>
                    <div className='img'>
                      <img src={require(`./image/h2-regular-items12.png`)}></img>
                    </div>
                    <div className='price price1'>
                      <h4>$32</h4>
                    </div>
                    <div>
                      <h2>Prawn Fried</h2>
                      <p>It is a long established fact thhat a reader will be distracted.</p>  
                    </div>
                  </div>
                  <div className='sec_3'>
                    <div className='img'>
                      <img src={require(`./image/h2-regular-items13.png`)}></img>
                    </div>
                    <div className='price price2'>
                      <h4>$32</h4>
                    </div>
                    <div>
                      <h2>Prawn With Noodles</h2>
                      <p>It is a long established fact thhat a reader will be distracted.</p>  
                    </div>
                  </div>
                  <div className='sec_3'>
                    <div className='img'>
                      <img src={require(`./image/h2-regular-items11.png`)}></img>
                    </div>
                    <div className='price price3'>
                      <h4>$32</h4>
                    </div>
                    <div>
                      <h2>Soup With Egg</h2>
                      <p>It is a long established fact thhat a reader will be distracted.</p>  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* ============================================================sectoin 4==================================================================*/}
        <div className='spacer'>
          <div className='container'>
            <div className='section4'>
              <div className='flex sapce-between'>
                <div>
                  <div><p><img src={shape_2}></img><span>Menu List</span><img src={shape_2}></img></p></div>
                  <div><h1>Find Your Food Item</h1></div>
                </div>
                <div>
                  <div className='btn2'><span><BsArrowUpRightCircle></BsArrowUpRightCircle>View More</span></div>
                </div>
              </div>
              <div className='flex'>
                <div className='food_item'>
                  <div>
                    <div><img src={require(`./image/h2-food-item-1.png`)}></img></div>
                  </div>
                  <div>
                    <div><h2>Prawn with Noodles</h2></div>
                    <div><p>It is a long established fact that a reader will be distracted.</p></div>
                  </div>
                </div>
                <div className='food_item'>
                  <div>
                    <div><img src={require(`./image/h2-food-item-2.png`)}></img></div>
                  </div>
                  <div>
                    <div><h2>Chicken Leg Fry</h2></div>
                    <div><p>It is a long established fact that a reader will be distracted.</p></div>
                  </div>
                </div>
                <div className='food_item'>
                  <div>
                    <div><img src={require(`./image/h2-food-item-3.png`)}></img></div>
                  </div>
                  <div>
                    <div><h2>Golden Coffee</h2></div>
                    <div><p>It is a long established fact that a reader will be distracted.</p></div>
                  </div>
                </div>
              </div>
              <div className='flex'>
                <div className='food_item'>
                  <div>
                    <div><img src={require(`./image/h2-food-item-4.png`)}></img></div>
                  </div>
                  <div>
                    <div><h2>Full Chicken</h2></div>
                    <div><p>It is a long established fact that a reader will be distracted.</p></div>
                  </div>
                </div>
                <div className='food_item'>
                  <div>
                    <div><img src={require(`./image/h2-food-item-5.png`)}></img></div>
                  </div>
                  <div>
                    <div><h2>Mutton Kabab</h2></div>
                    <div><p>It is a long established fact that a reader will be distracted.</p></div>
                  </div>
                </div>
                <div className='food_item'>
                  <div>
                    <div><img src={require(`./image/h2-food-item-6.png`)}></img></div>
                  </div>
                  <div>
                    <div><h2>Burger with Drinks</h2></div>
                    <div><p>It is a long established fact that a reader will be distracted.</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* ===========================================================section 5===================================================================*/}
      <div className='spacer'>
        <div className='section5'>
            <div>
              <div><p><img src={shape_2}></img><span>Gallery Store</span><img src={shape_2}></img></p></div>
              <div><h1>Our Special Gallery</h1></div>
            </div>
            <div className='flex gallery'>
              <div className='gallery_img'><img src={require(`./image/2col-gallery-01.png`)}></img></div>
              <div><img src={require(`./image/2col-gallery-02.png`)}></img></div>
              <div className='gallery_img'><img src={require(`./image/2col-gallery-03.png`)}></img></div>
              <div><img src={require(`./image/2col-gallery-04.png`)}></img></div>
              <div className='gallery_img'><img src={require(`./image/2col-gallery-05.png`)}></img></div>
            </div>
          </div>
        </div>
{/* ==============================================================section 6==============================================================*/}
        <div className='spacer'>
          <div className='container'>
            <div className='section6'>
              <div>
                <div><p><img src={shape_2}></img><span>Our Experties</span><img src={shape_2}></img></p></div>
                <div><h1>Restho's Best Chef</h1></div>
              </div>
              <div className='flex'>
              <div className='chef'>
                  <div >
                    <div className='img_item'><img src={require(`./image/chef-kitchen1.png`)}></img></div>
                  </div>
                  <div>
                    <div><h2>Mr. Willium Jhon</h2></div>
                    <div><p>Chef of Head</p></div>
                    <div className='flex icon'>
                        <div className='flex justify-content align-items'><div></div><FaFacebookF></FaFacebookF></div>
                        <div className='flex justify-content align-items'><div></div><FaInstagram></FaInstagram></div>
                        <div className='flex justify-content align-items'><div></div><FaLinkedinIn></FaLinkedinIn></div>
                        <div className='flex justify-content align-items'><div></div><FaTwitter></FaTwitter></div>
                    </div>
                  </div>
              </div>
              <div className='chef'>
                  <div>
                    <div className='img_item'><img src={require(`./image/chef-kitchen2.png`)}></img></div>
                  </div>
                  <div>
                    <div><h2>Mile Woatson</h2></div>
                    <div><p>Chef of Head</p></div>
                    <div className='flex icon'>
                        <div className='flex justify-content align-items'><div></div><FaFacebookF></FaFacebookF></div>
                        <div className='flex justify-content align-items'><div></div><FaInstagram></FaInstagram></div>
                        <div className='flex justify-content align-items'><div></div><FaLinkedinIn></FaLinkedinIn></div>
                        <div className='flex justify-content align-items'><div></div><FaTwitter></FaTwitter></div>
                    </div>
                  </div>
              </div>
              <div className='chef'>
                  <div>
                    <div className='img_item'><img src={require(`./image/chef-kitchen3.png`)}></img></div>
                  </div>
                  <div>
                    <div><h2>Mr. Robert Jhon</h2></div>
                    <div><p>Chef of Head</p></div>
                    <div className='flex icon'>
                        <div className='flex justify-content align-items'><div></div><FaFacebookF></FaFacebookF></div>
                        <div className='flex justify-content align-items'><div></div><FaInstagram></FaInstagram></div>
                        <div className='flex justify-content align-items'><div></div><FaLinkedinIn></FaLinkedinIn></div>
                        <div className='flex justify-content align-items'><div></div><FaTwitter></FaTwitter></div>
                    </div>
                  </div>
              </div>
             </div>
            </div>
          </div>
        </div>
{/* ==============================================================section 7================================================================== */}
      <div className='sec_7_back'>
        <div className='spacer'>
          <div className='container'>
            <div className='section7'>
              <div>
                <div><p><img src={shape_2}></img><span>Our Experties</span><img src={shape_2}></img></p></div>
                <div><h1>For Online Reservation</h1></div>
              </div>
              <div className='flex sec_7'>
                <div>Name*</div>
                <div>Phone*</div>
              </div>
              <div className='flex sec_7'>
                <div>People</div>
                <div>Check In</div>
              </div>
              <div className='flex sec_7'>
                <div>08 : 00 am</div>
                <div>Email</div>
              </div>
              <div className='btn_3'>
                <div className='btn3'><span>Reserve Now</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* ===========================================================section 8 ================================================================*/}
      <div className='spacer'>
        <div className='container'>
          <div className='section8'>
            <div>
              <div><p><img src={shape_2}></img><span>Our Blog</span><img src={shape_2}></img></p></div>
              <div><h1>Our Latest Blog</h1></div>
            </div>
              <div className='flex sec_8'>
                <div className='sec_blog'>
                  <div><img src={require(`./image/h2-blog1.png`)} className='img1'></img></div>
                  <div className='blog'>
                    <div className='blog_1 flex'>
                      <div className='line'></div>
                      <div><p>By Clone Watson</p></div>
                    </div>
                    <div><h2>To Make Good Health Take Nutrition Food.</h2></div>
                    <div className='btn4'><FaArrowRightLong></FaArrowRightLong></div>
                  </div>
                </div>
                <div className='sec_blog'>
                  <div><img src={require(`./image/h2-blog2.png`)} className='img3'></img></div>
                  <div className='blog'>
                    <div className='blog_1 flex'>
                      <div className='line'></div>
                      <div><p>By Hilary Watson</p></div>
                    </div>
                    <div><h2>Eat at Some Nutition Food & Happy Leadlife.</h2></div>
                    <div className='btn4'><FaArrowRightLong></FaArrowRightLong></div>
                  </div>
                </div>
                <div className='sec_blog'>
                  <div><img src={require(`./image/h2-blog3.png`)} className='img2'></img></div>
                  <div className='blog'>
                    <div className='blog_1 flex'>
                      <div className='line'></div>
                      <div><p>By Clone Watson</p></div>
                    </div>
                    <div><h2>Esay To Make Some Special Food In Home.</h2></div>
                    <div className='btn4'><FaArrowRightLong></FaArrowRightLong></div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      </main>
      <footer>
        <div className='spacer'>
          <div className='container'>
            <div className='flex'>
              <div className='foot'>
                <div><h2>Our Facilities</h2></div>
                <div className='flex'>
                  <div>
                    <div><p>Indian Menu</p></div>
                    <div><p>Menu Item</p></div>
                    <div><p>Private Event</p></div>
                    <div><p>Italian Menu</p></div>
                    <div><p>Best Offer</p></div>
                  </div>
                  <div>
                    <div><p>Popular Item</p></div>
                    <div><p>Regular Menu</p></div>
                    <div><p>New Food</p></div>
                    <div><p>Special Offer</p></div>

                  </div>
                </div>
              </div>
              <div className='foot'>
                <div className='logo_footer'>
                  <img src={logoimg1}></img>
                  <div><p>Established . 2022</p></div>
                  <div className='flex'><p className='line1'></p><img src={shape_2}></img><p className='line1'></p></div>
                  <div className='flex foot_icon'>
                    <div><FaFacebookF></FaFacebookF></div>
                    <div><FaInstagram></FaInstagram></div>
                    <div><FaLinkedinIn></FaLinkedinIn></div>
                    <div><FaTwitter></FaTwitter></div>
                  </div>
                </div>
              </div>
              <div className='foot'>
                <div><h2>Address Info</h2></div>
                <div><p>Phone :<span>+880-1776-766-767</span></p></div>
                <div><p>Email :<span> info@example.com</span></p></div>
                <div><p>Fax Id :<span> +99-75667-786</span></p></div>
                <div><p>Location :<span>Mirpur DOHS,House-167/170,Road-02 Avenue-01. </span></p></div>

              </div>
            </div>
            
          </div>
        </div>
        <div className='container'>
        <div className='last_footer flex sapce-between'>
              <div>@Copyright by Egenslab-2023, All Right Reserved.</div>
              <div>Privacy & Policy | Terms and Conditions</div>
            </div>
        </div>
      </footer>
    </div>
  )

}
export default App;