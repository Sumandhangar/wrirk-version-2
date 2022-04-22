import React, { useEffect } from 'react'
import Image from 'next/image'
import $ from "jquery"
import jQuery from 'jquery'
const Wheel = () => {

  useEffect(() => {

    let i = 2;

    $(document).ready(function () {
      var radius = 200;
      var fields = $('.itemDot');
      var container = $('.dotCircle');
      var width = container.width();
      radius = width / 2.5;

      var height = container.height();
      var angle = 0,
        step = (2 * Math.PI) / fields.length;
      fields.each(function () {
        var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
        var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);
        if (window.console) {
          console.log($(this).text(), x, y);
        }

        $(this).css({
          left: x + 'px',
          top: y + 'px'
        });
        angle += step;
      });


      $('.itemDot').click(function () {

        var dataTab = $(this).data("tab");
        $('.itemDot').removeClass('active');
        $(this).addClass('active');
        $('.CirItem').removeClass('active');
        $('.CirItem' + dataTab).addClass('active');
        i = dataTab;

        $('.dotCircle').css({
          "transform": "rotate(" + (360 - (i - 1) * 36) + "deg)",
          "transition": "2s"
        });
        $('.itemDot').css({
          "transform": "rotate(" + ((i - 1) * 36) + "deg)",
          "transition": "1s"
        });


      });

      setInterval(function () {
        var dataTab = $('.itemDot.active').data("tab");
        if (dataTab > 6 || i > 6) {
          dataTab = 1;
          i = 1;
        }
        $('.itemDot').removeClass('active');
        $('[data-tab="' + i + '"]').addClass('active');
        $('.CirItem').removeClass('active');
        $('.CirItem' + i).addClass('active');
        i++;


        $('.dotCircle').css({
          "transform": "rotate(" + (360 - (i - 2) * 36) + "deg)",
          "transition": "2s"
        });
        $('.itemDot').css({
          "transform": "rotate(" + ((i - 2) * 36) + "deg)",
          "transition": "1s"
        });

      }, 5000);

    });


    (function ($) {
      'use strict';
      $(window).on('load', function () {
        var wheel_icon, wheel_cap, wheel_interval, wheel_interval_again, interval = 0;
        wheel_icon = $('body').find('.wheel-icon');
        wheel_cap = $('body').find('.wheel-icon-cap-wrap');
        wheel_interval_again = () => {
          if (wheel_icon.length >= 1 && wheel_cap.length >= 1 && wheel_cap.length == wheel_icon.length) {
            wheel_interval = setInterval(() => {
              if (interval !== wheel_icon.length) {
                wheel_cap.removeClass('active');
                wheel_icon.removeClass('active');
                $(wheel_cap[interval]).addClass('active');
                $(wheel_icon[interval]).addClass('active');
              } else {
                interval = -1;
              }
              interval++;
            }, 3000);
          }
        }
        wheel_interval_again();
        $('.wheel-icon').on('mouseover', function () {
          $('.wheel-icon').removeClass('active');
          $('.wheel-icon-cap-wrap').removeClass('active');

          $(this).addClass('active');
          $(this).next('.wheel-icon-cap-wrap').addClass('active');

          clearInterval(wheel_interval);
        });
        $('.wheel-icon').on('mouseleave', function () {
          wheel_interval_again();
        });

        jQuery("#preloader").fadeOut(300);
      });
    })(jQuery);
  }, [])

  return (
    <div className="wheel-section section pb-5 pt-5">
      <div className="container">
        <div className="row">

          <div className="col-lg-6 d-flex align-items-center">
            <div className="section-heading">
              <h4 style={{ fontSize: "40px" }}>Common Challenges in PhD <br /> <em style={{ color: "#268fa7" }}>Are You... ?</em> </h4>
              {/* <Image src="images/heading-line-dec.png" alt="asds" /> */}
              <h4 style={{ paddingTop: "30px", fontSize: "23px", lineHeight: "1.6" }}>Get Counselling <br /> Experienced Research Writter</h4>
              <button className="request-button shadow mb-4" style={{ background: "#f8cc08" }} data-toggle="modal" data-target="#requestTopic">Get Assistance</button>
              <p className='' style={{color:"#000"}}>Nearly 57 percent of those who begin a doctoral degree, who are the best and brightest that higher
                education has to offer, complete it in three years. If you do not want to suffer similar difficulties, you
                must first comprehend the challenges that lie ahead and then devise a strategy for overcoming them.</p>
            </div>

          </div>
          <div className="col-lg-6 col-sm-12 ">
            <div className="wheel-icon-wrap position-relative w-100" data-speed="3000">
              <div className="wheel-icon-inner position-absolute">
                <div className="wheel-icon active" data-trigger="1">
                  <div className="wheel-icon-svg">
                    <svg className="svg_shape" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M54.8,1.3l35.5,20.3c3,1.7,4.8,4.8,4.8,8.2v40.6c0,3.4-1.8,6.5-4.8,8.2L54.8,98.7c-3,1.7-6.6,1.7-9.5,0 L9.8,78.5c-3-1.7-4.8-4.8-4.8-8.2V29.7c0-3.4,1.8-6.5,4.8-8.2L45.2,1.3C48.2-0.4,51.8-0.4,54.8,1.3z">
                        </path>
                      </g>
                    </svg>
                    <i className="fas fa-trophy icon" ></i>
                  </div>
                </div>
                <section className="wheel-icon-cap-wrap active d-flex flex-wrap justify-content-center align-items-center"
                  data-id="1">
                  <div className="wheel-icon-cap-inner">
                    {/* <p className="subtext">INCREASE</p> */}
                    <h4 className="heading2" style={{ color: "#268fa7" }}>Career Concern</h4>
                    {/* <p className="mb-0 circle-para">Vestibulum porttitor felis a est eleifend, sagittis ante feugiat, maecenas elementum sem vitae porttitor scelerisque.</p> */}
                  </div>
                </section>
                <div className="wheel-icon" data-trigger="2">
                  <div className="wheel-icon-svg">
                    <svg className="svg_shape" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M54.8,1.3l35.5,20.3c3,1.7,4.8,4.8,4.8,8.2v40.6c0,3.4-1.8,6.5-4.8,8.2L54.8,98.7c-3,1.7-6.6,1.7-9.5,0 L9.8,78.5c-3-1.7-4.8-4.8-4.8-8.2V29.7c0-3.4,1.8-6.5,4.8-8.2L45.2,1.3C48.2-0.4,51.8-0.4,54.8,1.3z">
                        </path>
                      </g>
                    </svg>
                    <i className="fas fa-hand-holding icon" ></i>
                  </div>
                </div>
                <section className="wheel-icon-cap-wrap d-flex flex-wrap justify-content-center align-items-center"
                  data-id="2">
                  <div className="wheel-icon-cap-inner">
                    {/* <p className="subtext">INCREASE</p> */}
                    <h4 className="heading2" style={{ color: "#268fa7" }}>Work/life balance</h4>
                    {/* <p className="mb-0 circle-para">Vestibulum porttitor felis a est eleifend, sagittis ante feugiat, maecenas elementum sem vitae porttitor scelerisque.</p> */}
                  </div>
                </section>
                <div className="wheel-icon" data-trigger="3">
                  <div className="wheel-icon-svg">
                    <svg className="svg_shape" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M54.8,1.3l35.5,20.3c3,1.7,4.8,4.8,4.8,8.2v40.6c0,3.4-1.8,6.5-4.8,8.2L54.8,98.7c-3,1.7-6.6,1.7-9.5,0 L9.8,78.5c-3-1.7-4.8-4.8-4.8-8.2V29.7c0-3.4,1.8-6.5,4.8-8.2L45.2,1.3C48.2-0.4,51.8-0.4,54.8,1.3z">
                        </path>
                      </g>
                    </svg>
                    <i className="fas fa-video icon" ></i>
                  </div>
                </div>
                <section className="wheel-icon-cap-wrap d-flex flex-wrap justify-content-center align-items-center"
                  data-id="3">
                  <div className="wheel-icon-cap-inner">
                    {/* <p className="subtext">INCREASE</p> */}
                    <h4 className="heading2" style={{ color: "#268fa7" }}>Isolation</h4>
                    {/* <p className="mb-0 circle-para">Vestibulum porttitor felis a est eleifend, sagittis ante feugiat, maecenas elementum sem vitae porttitor scelerisque.</p> */}
                  </div>
                </section>
                <div className="wheel-icon" data-trigger="4">
                  <div className="wheel-icon-svg">
                    <svg className="svg_shape" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M54.8,1.3l35.5,20.3c3,1.7,4.8,4.8,4.8,8.2v40.6c0,3.4-1.8,6.5-4.8,8.2L54.8,98.7c-3,1.7-6.6,1.7-9.5,0 L9.8,78.5c-3-1.7-4.8-4.8-4.8-8.2V29.7c0-3.4,1.8-6.5,4.8-8.2L45.2,1.3C48.2-0.4,51.8-0.4,54.8,1.3z">
                        </path>
                      </g>
                    </svg>
                    <i className="fas fa-hourglass-start icon" ></i>
                  </div>
                </div>
                <section className="wheel-icon-cap-wrap d-flex flex-wrap justify-content-center align-items-center"
                  data-id="4">
                  <div className="wheel-icon-cap-inner">
                    {/* <p className="subtext">INCREASE</p> */}
                    <h4 className="heading2" style={{ color: "#268fa7" }}>Time Management</h4>
                    {/* <p className="mb-0 circle-para">Vestibulum porttitor felis a est eleifend, sagittis ante feugiat, maecenas elementum sem vitae porttitor scelerisque.</p> */}
                  </div>
                </section>
                <div className="wheel-icon" data-trigger="5">
                  <div className="wheel-icon-svg">
                    <svg className="svg_shape" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M54.8,1.3l35.5,20.3c3,1.7,4.8,4.8,4.8,8.2v40.6c0,3.4-1.8,6.5-4.8,8.2L54.8,98.7c-3,1.7-6.6,1.7-9.5,0 L9.8,78.5c-3-1.7-4.8-4.8-4.8-8.2V29.7c0-3.4,1.8-6.5,4.8-8.2L45.2,1.3C48.2-0.4,51.8-0.4,54.8,1.3z">
                        </path>
                      </g>
                    </svg>
                    <i className="fab fa-searchengin icon" ></i>
                  </div>
                </div>
                <section className="wheel-icon-cap-wrap d-flex flex-wrap justify-content-center align-items-center"
                  data-id="5">
                  <div className="wheel-icon-cap-inner">
                    {/* <p className="subtext">INCREASE</p> */}
                    <h4 className="heading2" style={{ color: "#268fa7" }}>Challenges in PhD Research</h4>
                    {/* <p className="mb-0 circle-para">Vestibulum porttitor felis a est eleifend, sagittis ante feugiat, maecenas elementum sem vitae porttitor scelerisque.</p> */}
                  </div>
                </section>
                <div className="wheel-icon" data-trigger="6">
                  <div className="wheel-icon-svg">
                    <svg className="svg_shape" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M54.8,1.3l35.5,20.3c3,1.7,4.8,4.8,4.8,8.2v40.6c0,3.4-1.8,6.5-4.8,8.2L54.8,98.7c-3,1.7-6.6,1.7-9.5,0 L9.8,78.5c-3-1.7-4.8-4.8-4.8-8.2V29.7c0-3.4,1.8-6.5,4.8-8.2L45.2,1.3C48.2-0.4,51.8-0.4,54.8,1.3z">
                        </path>
                      </g>
                    </svg>
                    <i className="fas fa-headset icon" ></i>
                  </div>
                </div>
                <section className="wheel-icon-cap-wrap d-flex flex-wrap justify-content-center align-items-center"
                  data-id="6">
                  <div className="wheel-icon-cap-inner">
                    {/* <p className="subtext">INCREASE</p> */}
                    <h4 className="heading2" style={{ color: "#268fa7" }}>Lack of Institutional support</h4>
                    {/* <p className="mb-0 circle-para">Vestibulum porttitor felis a est eleifend, sagittis ante feugiat, maecenas elementum sem vitae porttitor scelerisque.</p> */}
                  </div>
                </section>
              </div>
              <div className="circle_wrapper rounded-circle"></div>
            </div>

          </div>

        </div>
      </div>

      
    </div>
  )
}

export default Wheel