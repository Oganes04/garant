$(function(){

  const scroll = new SimpleBar(document.getElementById('scroll'));

  scroll

  function whyNum() {

    $('.why__num').each(function() {

      const whyPos = $(this).offset().top + scroll.getScrollElement().scrollTop
      const $this = $(this).find('span')

      if (scroll.getScrollElement().scrollTop >= whyPos - $(window).height() + 50) {

        const whyNum = $(this).attr('data-num');
        let w = 0;

        if ($(this).find('span').text().trim() == 0) {
    
          let why = setInterval(() => {
    
            if (w < whyNum) {

              if (whyNum < 500) {

                w++;
    
              } else if (2000 > whyNum) {

                if (whyNum > 500) {

                  if (Number(whyNum - $this.text()) < 100) {

                    w+=1;

                  } else {

                    w+=10;

                  }

                }

              } else if (whyNum > 2000) {

                if (Number(whyNum - $this.text()) < 100) {

                  w+=1;

                } else {

                  w+=100;

                }

              }
    
              $this.text(w)
    
            } else {
    
              clearInterval(why);
    
            }
    
          }, 10);

        }
    
      }

    });

  }

  scroll.getScrollElement().addEventListener('scroll', function() {

    whyNum()

  });

  $('.form__label--city').on('click', function() {

    $(this).toggleClass('form__label--city-active');
    $(this).closest('.form__city').find('.form__city-box').slideToggle();
    $(this).closest('.form__city').find('.form__city-box').toggleClass('form__city-box--main-active');

  });

  $('.form .form__city-item').on('click', function() {

    $('.form__city-box').slideUp();
    $('.form__label--city').removeClass('form__label--city-active');
    $('.form__city-box').removeClass('form__city-box--main-active');

  });

  $('.form__city--main .form__city-item:not(:last-child)').on('click', function() {

    $(this).closest('.form__city').find('.form__input-text').text($(this).text().trim())

  });

  $('.popup .form__city-item').on('click', function() {

    $(this).closest('.form__city').find('.form__input-text').text($(this).text().trim())

  });

  $('.form__city--main .form__city-item:last-child').on('click', function() {

    $('.popup--two').addClass('popup--active');

  });

  if (localStorage.city) {

    $('.form__city--main .form__input-text').text(localStorage.city);

  }
  
  if ($('#tel-one').length > 0) {

    const element = document.getElementById('tel-one');

    const maskOptions = {
      
      mask: '+{7} (000) 000-00-00'

    };

    const mask = IMask(element, maskOptions);

  }

  if ($('#tel-two').length > 0) {

    const element = document.getElementById('tel-two');

    const maskOptions = {
      
      mask: '+{7} (000) 000-00-00'

    };

    const mask = IMask(element, maskOptions);

  }

  $('.users__link').hover(
    
    function() {
      
      setTimeout(() => {

        $(this).addClass('users__link--svg');

      }, 200);

    }, function() {

      $(this).removeClass('users__link--svg');

      setTimeout(() => {

        $(this).removeClass('users__link--svg');

      }, 200);

    }

  );

  if ($('.clients').length) {

    const clientsMarquee = $("#clients__line-inner");
    const clientsWidth = $('.clients__items--one').outerWidth();

    const clientsMarqueeTwo = $("#clients__line-inner-two");
    const clientsWidthTwo = $('.clients__items--two').outerWidth();

    let clientsI = 0
    let clientsITwo = 0
    let interval
    let intervalTwo

    $('#clients__line').css('-webkit-transform', `translateX(${-clientsWidth}px)`);
    $('#clients__line').css('-ms-transform', `translateX(${-clientsWidth}px)`);
    $('#clients__line').css('transform', `translateX(${-clientsWidth}px)`);

    $('#clients__line-two').css('-webkit-transform', `translateX(${-clientsWidthTwo}px)`);
    $('#clients__line-two').css('-ms-transform', `translateX(${-clientsWidthTwo}px)`);
    $('#clients__line-two').css('transform', `translateX(${-clientsWidthTwo}px)`);

    clientsMarquee.append(clientsMarquee.find("ul").clone());
    clientsMarquee.append(clientsMarquee.find("ul").clone());

    clientsMarqueeTwo.append(clientsMarqueeTwo.find("ul").clone());
    clientsMarqueeTwo.append(clientsMarqueeTwo.find("ul").clone());

    function reset() {

      clientsI = clientsI  - 0.8;

      $('#clients__line-inner').css('-webkit-transform', `translateX(${clientsI}px)`);
      $('#clients__line-inner').css('-ms-transform', `translateX(${clientsI}px)`);
      $('#clients__line-inner').css('transform', `translateX(${clientsI}px)`);

      if (clientsI <= -clientsWidth) {

        clientsI = 0
        clientsI = clientsI - 0.8;

      }

    }

    function resetTwo() {

      clientsITwo = clientsI  - 0.8;

      $('#clients__line-inner-two').css('-webkit-transform', `translateX(${-clientsI}px)`);
      $('#clients__line-inner-two').css('-ms-transform', `translateX(${-clientsI}px)`);
      $('#clients__line-inner-two').css('transform', `translateX(${-clientsI}px)`);

      if (clientsITwo <= -clientsWidthTwo) {

        clientsITwo = 0
        clientsITwo = clientsITwo - 0.8;

      }

    }

    interval = setInterval(reset, 15);
    intervalTwo = setInterval(resetTwo, 15);

  }

  $('.footer__button').on('click', function(e) {

    e.preventDefault();

    const id = $(this).attr('href'),
    topPage = $(id).offset().top - 80,
    top = topPage + scroll.getScrollElement().scrollTop;
    
    scroll.getScrollElement().scrollTo({ top: top, behavior: "smooth" });

  });

  if (scroll.getScrollElement().scrollTop > 104) {

    $('.header').addClass('header--active');

  } else {

    $('.header').removeClass('header--active');

  }

  scroll.getScrollElement().addEventListener('scroll', function() {

    if (scroll.getScrollElement().scrollTop > 104) {

      $('.header').addClass('header--active');

    } else {

      $('.header').removeClass('header--active');

    }

  });

  $('.city').on('click', function() {

    $('.city__box').slideToggle();
    $(this).toggleClass('city--active');

  });

  $('.city__item').on('click', function() {

    $('.city__box').slideUp();
    $('.city').removeClass('city--active');

  });

  $(document).click(function(e){
  
    const list = $('.city, .city__box, .form__city, .form__city-box');
    const popupList = $('.popup__wrapper, .header__bnt-box, .top__btns, .users__bottom-btn-box, .city__btn-box, .city-region__box, .popup-city__box, .popup__text-btn-box, .popup-exit__right, .legal-top__box, .legal-new__content, .legal-services__btn-box, .legal-tariff__btn-box, .legal-as__content, .support-top__inner box, .about-work__bottom, .about-top--encyclopedia, .encyclopedia__wrapper, .kits__item--popup');

    if (e.target!=list[0]&&!list.has(e.target).length){ 

      $('.city__box').slideUp();
      $('.form__city-box').slideUp();

      $('.form__label--city').removeClass('form__label--city-active');
      $('.city').removeClass('city--active');

      $('.form__city-box').removeClass('.form__city-box--main-active');
        
    }

    if (e.target!=popupList[0]&&!popupList.has(e.target).length){ 

      $(e.target).removeClass('popup--active');
        
    }
    
  });

  $('.header__btn, .top__btn--popup-one, .popup__text-btn, .legal-top__btn--one, .legal-new__btn, .legal-tariff--main .legal-tariff__btn, .about-top__btn--encyclopedia, .encyclopedia__btn').on('click', function() {

    $('.popup--one').addClass('popup--active');
    $('.popup--five').removeClass('popup--active');

    $('.popup__input-title').val('Получите полный доступ к системе ГАРАНТ в подарок на 3 дня');

    $('.popup__title').html('Получите полный доступ к системе ГАРАНТ <span class="title--color">в подарок на 3 дня</span>');

  });

  $('.top__btn--popup-two, .popup-exit__btn, .legal-top__btn--two').on('click', function() {

    $('.popup--one').addClass('popup--active');
    $('.popup--seven').removeClass('popup--active');

    $('.popup__input-title').val('Оставьте заявку и мы подберем для вас индивидуальное решение');

    $('.popup__title').html('Оставьте заявку и мы подберем <br> для вас <span class="title--color">индивидуальное решение</span>');

  });

  $('.users__bottom-btn-box').on('click', function() {

    $('.popup--one').addClass('popup--active');

    $('.popup__input-title').val('Оставьте свои контактные данные мы направим вам прайс-лист');

    $('.popup__title').html('Оставьте свои контактные данные мы <span class="title--color">направим вам прайс-лист</span>');

  });

  $('.legal-services__btn, .kits__item--popup .kits__btn').on('click', function(e) {

    e.preventDefault();

    $('.popup--one').addClass('popup--active');

    $('.popup__input-title').val('Наш менеджер свяжемся с вами для предоставления информации');

    $('.popup__title').html('Наш менеджер свяжемся с вами <br> для <span class="title--color">предоставления информации</span>');

  });

  $('.legal-as__btn').on('click', function() {

    $('.popup--five').addClass('popup--active');

    $('.popup__title').text($(this).closest('.legal-as__content').find('.legal-as__title').text())

    $('.popup__text').html($(this).closest('.legal-as__content').find('.legal-as__popup-text').html())

  });

  $('.popup__text-btn--text').on('click', function() {

    $('.popup--one').addClass('popup--active');
    $('.popup--five').removeClass('popup--active');

    $('.popup__input-title').val('Получите полный доступ к системе ГАРАНТ в подарок на 3 дня');

    $('.popup__title').html('Получите полный доступ к системе ГАРАНТ <span class="title--color">в подарок на 3 дня</span>');

  });

  $('.support-top__btn').on('click', function() {

    $('.popup--three').addClass('popup--active');

  });

  $('.city__btn, .city-region__btn--two').on('click', function() {

    $('.popup--two').addClass('popup--active');

  });

  $('.about-work__btn').on('click', function() {

    $('.popup--four').addClass('popup--active');

  });

  $('.close').on('click', function() {

    $(this).closest('.popup').removeClass('popup--active');

  });

  $.getJSON("../cities/cities.json", function( data ) {

    let regions = [];

    for (let i = 0; i < data.length; i++) {

      for (let q = 0; q < data[i].areas.length; q++) {

        for (let r = 0; r < data[i].areas[q].areas.length; r++) {

          if (!regions.includes(data[i].areas[q].name) && data[i].areas[q].name != 'область') {

            regions.push(data[i].areas[q].name);

          }

        }            

      }

    }

    function find(arr, find) {

      return arr.filter(function (value) {

         return (value.toLowerCase() + "").indexOf(find.toLowerCase()) != -1;

      });

    };

    $('.popup-city__search').on('input', function() { 

      let search = $(this).val();
      let citiesSearch = find(regions, search);

      if (search.length > 0) {

        $('.popup--two .form__city-items .form__city-item').remove();

        $('.popup--two .form__city-items').empty();
        
        for (let i = 0; i < citiesSearch.length; i++) {

          if (i < 30) { 

            setTimeout(() => {
              
            
              $('.popup-city__box').slideDown();

            }, 10);


            $('.popup--two .form__city-items').append(`<li class="form__city-item">${citiesSearch[i]}</li>`);

          } 
      
        }

        $('.popup--two .form__city-items .form__city-item').on('click', function() {

          setTimeout(() => {
            
            $('.popup--two .form__city-items .form__city-item').remove();

          }, 10);

          $('.popup-city__search').val($(this).text().trim());

          $('.popup-city__box').slideUp();
      
        });

      } else {

        $('.popup--two .form__city-items .form__city-item').remove();

        $('.popup-city__box').slideUp();

      }

    });

    $('.popup-city__btn').on('click', function() {

      $('.popup-city__search').css('border', '1px solid red');

      for (let i = 0; i < regions.length; i++) {

        if ($('.popup-city__search').val().toLowerCase() === regions[i].toLowerCase()) {

          $('.popup-city__subtitle').text($('.popup-city__search').val());
          $('.city__region').text($('.popup-city__search').val());
          $('.city-region__region span').text($('.popup-city__search').val());

          $('.form__city--main .form__input-text').each(function() {

            $(this).text($('.popup-city__search').val());
      
          });

          $('.popup--two').removeClass('popup--active');

          localStorage.display = 'none';
          localStorage.city = $('.popup-city__search').val();
      
          $('.city-region').slideUp();

          $('.popup-city__search').val('');

          $('.popup-city__search').css('border', 'none');

        }
    
      }
  
    });

    var ip = '';
    var XMLHttp = new XMLHttpRequest();

    XMLHttp.onreadystatechange = function() {

      if (this.readyState == 4 && this.status == 200) {

        var ipwhois = JSON.parse(this.responseText);

        if (!localStorage.city) {

          for (let g = 0; g < citiesUk.length; g++) {

            $('.popup-city__subtitle').text(ipwhois.region);
            $('.city__region').text(ipwhois.region);
            $('.city-region__region span').text(ipwhois.region);

          }

          $('.popup-city__item').each(function() {

            let cityActive = $('.header__city-text').text().trim();
        
            if ($(this).text().trim() === cityActive) {
        
              $(this).addClass('popup-city__item--active');
        
            }
        
          });
      
        }

      }

    };

    XMLHttp.open('GET', 'https://ipwho.is?lang=ru' + ip, true);
    XMLHttp.send();

  });

  $('.popup-city__item').on('click', function() {

    const $this = $(this);

    $('.popup-city__item').removeClass('popup-city__item--active')

    $(this).addClass('popup-city__item--active');

    $('.popup-city__subtitle').text($(this).text().trim());
    $('.city__region').text($(this).text().trim());
    $('.city-region__region span').text($(this).text().trim());

    localStorage.city = $(this).text().trim();

    localStorage.display = 'none';
      
    $('.city-region').slideUp();

    $('.popup--two').removeClass('popup--active');

    $('.form__city--main .form__input-text').each(function() {

      $(this).text($this.text().trim());

    });

  });

  $('.city__item').on('click', function() {

    const $this = $(this);

    $('.popup-city__subtitle').text($(this).find('.city__item-text').text().trim());
    $('.city__region').text($(this).find('.city__item-text').text().trim());
    $('.city-region__region span').text($(this).find('.city__item-text').text().trim());

    localStorage.display = 'none';

    $('.city-region').slideUp();

    localStorage.city = $(this).find('.city__item-text').text().trim();

    $('.form__city--main .form__input-text').each(function() {

      $(this).text($this.find('.city__item-text').text().trim());

    });

  });

  if (localStorage.city) {

    $('.popup-city__subtitle').text(localStorage.city);
    $('.city__region').text(localStorage.city);
    $('.city-region__region span').text(localStorage.city);

  }

  $('.popup-city__item').each(function() {

    let cityActive = $('.city__region').text().trim();

    if ($(this).text().trim() === cityActive) {

      $(this).addClass('popup-city__item--active');

    }

  });

  if (localStorage.getItem('display') === null) {

    $('.city-region').slideDown();

  } else {

    $('.city-region').css('display', localStorage.display);

  }

  $('.city-region__btn--one').on('click', function() {

    $('.city-region').slideUp();

    localStorage.display = 'none';

  });

  if ($('.main').length) {

    if (!sessionStorage.getItem('visited')) {

      sessionStorage.setItem('visited', 'true');

      $('.load').removeClass('load--hidden');
      $('.header').addClass('header--padding')

      $('.main, .footer').css({

        'opacity': '0',
        'visibility': 'hidden',
        'position': 'absolute'

      });

      $('.top-info').css({

        'opacity': '0',
        'visibility': 'hidden'

      });

      const mediaFile = $('img, video');
      let i = 0;
      let q = 0;

      const loadNum = setInterval(() => {

        if (i < 100) {

          i++;

          $('.load__num').text(i + '%');
          $('.load__circle-svg svg').css('stroke-dashoffset', -(i * 3) + '%');

          if (i === 100) {

            $('.load__num').addClass('load__num--active');

            clearInterval(loadNum);

            mediaFile.each(function(val, key) {

              mediaFile.ready(function() {

                q++;

                if (q === mediaFile.length) {

                  $('.load__circle-svg svg').css({

                    'stroke-dashoffset': '0',
                    'opacity': '0',
                    'stroke': '#0054A2'
        
                  });

                  setTimeout(() => {
                    
                    $('.load__img').css('opacity', '0');
                    $('.load__circle-svg').addClass('load__circle-svg--svg');
                    $('.load__num').css('opacity', '0');
                    $('.load__finish svg').css('stroke-dashoffset', '0');

                    setTimeout(() => {
                    
                      $('.load').fadeOut();         

                      setTimeout(() => {
    
                        $('.header').css({

                          'margin-top': '0',
                          'padding-top': '0'
      
                        });
    
                        $('.main, .footer, .top-info').css({
    
                          'opacity': '1',
                          'visibility': 'visible',
                          'position': 'inherit'
    
                        });

                        $('.load').addClass('load--hidden');
      
                      }, 500);
    
                    }, 1000);

                  }, 450);
                  
                }

              });

            });

          }

        }

      }, 20);
      
    } else {

      $('.header').css('padding-top', '0');

    }

    let headerPos = -$('.top-info').outerHeight();
    let headerHeight = $('.header').outerHeight();

    if (!$('.load').hasClass('load--hidden')) {

      $('.header').css('margin-top', headerPos);
      $('.load').css('--height-header', headerHeight + 'px');

    }

    $(window).on('resize', function() {

      if (!$('.load').hasClass('load--hidden')) {

        headerPos = -$('.top-info').outerHeight()
        headerHeight = $('.header').outerHeight();

        $('.header').css('margin-top', headerPos);
        $('.load').css('--height-header', headerHeight + 'px');

      }

    });

  } else {

    $('.header').css('padding-top', '0');

  }

  $('.kits__item').each(function() {

    if ($(this).find('.kits__img').outerWidth() >= 500) {

      $(this).find('.kits__img').css({

        'max-width': $(this).find('.kits__img').outerWidth() / 2,
        'width': '100%'
  
      });

    } else {

      $(this).find('.kits__img').css({

        'max-width': $(this).find('.kits__img').outerWidth(),
        'width': '100%'
  
      });

    }

    if ($(this).find('.kits__content').length >= 2) {

      $(this).addClass('kits__item--two');

    }

    if ($(this).prev().find('.kits__content').length >= 2 && $(this).find('.kits__content').length <= 1) {

      $(this).addClass('kits__item--small');

    }

    if ($(this).find('.kits__img').outerWidth() > 400) {

      $(this).addClass('kits__item--edges');

    }

  });

  const clamp = (min, max, value) => Math.max(min, Math.min(max, value));
  const lerp = (min, max, value) => (1 - value) * min + value * max;
  const easeInOutSine = x => -(Math.cos(Math.PI * x) - 1) / 2;

  const createCircleBar = (width, height, progress) => {

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    [canvas.width, canvas.height] = [width, height];
    
    const offset = -Math.PI / -1.2;
    const lineWidth = $('.legal-studies__radius').outerWidth();
    const radius = Math.min(width / 2, height / 2) - 10;
    const duration = 600;

    let inProgress = false;
    let isDrawed = false;
    
    const reset = () => {

      context.clearRect(0, 0, width, height);
      isDrawed = false;

    };
    
    const draw = progress => {

      const angle = Math.PI / 50 * progress;
      context.clearRect(0, 0, width, height);
      context.lineWidth = lineWidth;
      context.lineCap = 'round';
    
      context.beginPath();
      context.arc((width / 2), (height / 2), radius - lineWidth / 2, offset, angle + offset);
      context.stroke();
      context.closePath();

      const startPointX = width / 2;
      const startPointY = height / 2;
      const endPointX = width / 2 + $('.legal-studies__circle').height() + (radius - lineWidth / 2) * Math.cos(angle + offset);
      const endPointY = height / 2 + $('.legal-studies__radius').height() + (radius - lineWidth / 2) * Math.sin(angle + offset);

      const gradient = context.createLinearGradient(startPointX, startPointY, endPointX, endPointY);
      gradient.addColorStop(0, '#191559');
      gradient.addColorStop(0.5, '#164ec4');
      gradient.addColorStop(1, '#88f0ff');

      context.strokeStyle = gradient;

      context.fillStyle = "#0081D1";
      context.beginPath();
      context.arc(endPointX, endPointY, $('.legal-studies__circle').outerWidth(), 0, 2 * Math.PI);
      context.fill();
      context.closePath();

    };
    
    const animate = () => {

      if (inProgress || isDrawed) {

        return;

      }
      
      const start = performance.now();
      inProgress = true;
      
      const step = () => {

        const diff = performance.now() - start;
        const current = clamp(0, progress, lerp(0, progress, easeInOutSine(diff / duration)));
        draw(current);
        
        if (diff <= duration) {

          requestAnimationFrame(step);

        } else {

          inProgress = false;
          isDrawed = true;

        }
        
      };
        
      requestAnimationFrame(step);

    };
    
    return {

      canvas,
      draw,
      animate,
      reset

    };

  };

  let circleBars = new WeakMap();

  const observer = new IntersectionObserver(entries => entries.forEach(entry => {

    if (entry.intersectionRatio === 0) {
      
      circleBars.get(entry.target)?.reset();

    } else if (entry.intersectionRatio >= 0.2) {

      circleBars.get(entry.target)?.animate();

    }

  }), { threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] });

  

  $(window).on("resize", function() {

    $('.legal-studies__line').find('canvas').remove();

    document.querySelectorAll('.legal-studies__line').forEach(element => {

      const { progress } = element.dataset;
      const circleBar = createCircleBar($('.legal-studies__item-bg').outerWidth(), $('.legal-studies__item-bg').outerWidth(), parseFloat(progress || '0'));
      
      circleBars.set(circleBar.canvas, circleBar);
      observer.observe(circleBar.canvas);
      element.prepend(circleBar.canvas);
  
    });

  });

  if ($('.legal-studies__items').length != 0) {

    let legalFlag = true;

    function animPercetn() {

      const percentPos = $('.legal-studies__items').offset().top + scroll.getScrollElement().scrollTop

      if (scroll.getScrollElement().scrollTop >= percentPos - $(window).height() + 180) {

        if (legalFlag) {

          document.querySelectorAll('.legal-studies__line').forEach(element => {

            const { progress } = element.dataset;
            const circleBar = createCircleBar($('.legal-studies__item-bg').outerWidth(), $('.legal-studies__item-bg').outerWidth(), parseFloat(progress || '0'));
            
            circleBars.set(circleBar.canvas, circleBar);
            observer.observe(circleBar.canvas);
            element.prepend(circleBar.canvas);
        
          });

          $('.legal-studies__num').each(function() {

            const percent = $(this).attr('data-percent');
            let p = 0;

            legalFlag = false;
      
            let legal = setInterval(() => {
      
              if (p < percent) {
      
                p++;
      
                $(this).text(p + '%')
      
              } else {
      
                clearInterval(legal);
      
              }
      
            }, (1000 / percent) / 2);
          
      
          });

        }

      }

    }

    scroll.getScrollElement().addEventListener('scroll', function() {

      animPercetn();

    });

    animPercetn();

  }

  if ($('.legal-tariff__items').length > 0) {
    
    let maxHeight = 0;
    let maxItems = 0;

    $('.legal-tariff__item').each(function() {

      const thisHeight = $(this).outerHeight();
      const thisItems = $(this).find('.legal-tariff__item-text').outerHeight();

      if (thisHeight > maxHeight) {

        maxHeight = thisHeight;
        maxItems = thisItems;

      }

    });

    $('.legal-tariff__items').css('height', maxHeight);
    $('.legal-tariff--support .legal-tariff__item-text').css('min-height', maxItems);

    $(window).on('resize', function() {

      let maxHeight = 0;
      let maxItems = 0;

      $('.legal-tariff__item').each(function() {

        const thisHeight = $(this).outerHeight();
        const thisItems = $(this).find('.legal-tariff__item-text').outerHeight();

        if (thisHeight > maxHeight) {

          maxHeight = thisHeight;
          maxItems = thisItems;

        }

      });

      $('.legal-tariff__items').css('height', maxHeight);
      $('.legal-tariff--support .legal-tariff__item-text').css('min-height', maxItems);

    });

  }

  const swiper = new Swiper(".swiper-about-certificates", {

    slidesPerView: 'auto',

    freeMode: true,

    scrollbar: {

      el: ".about-certificates__pagination",

    },

  });

  $('.about-work__box').on('click', function() {

    $(this).closest('.about-work__item').find('.about-work__bottom').slideToggle();
    $(this).closest('.about-work__item').toggleClass('about-work__item--active');

  });

  if ($('#map').length > 0) {

    function init() {

      const lat = $('.about-contacts__map').attr('data-lat');
      const lng = $('.about-contacts__map').attr('data-lng');

      let map = new ymaps.Map('map', {

        center: [lat,lng],
        zoom: 12

      });

      let placemark = new ymaps.Placemark([lat,lng], {}, {});

      map.controls.remove('geolocationControl');
      map.controls.remove('searchControl');
      map.controls.remove('trafficControl');
      map.controls.remove('typeSelector');
      map.controls.remove('fullscreenControl');
      map.controls.remove('zoomControl');
      map.controls.remove('rulerControl');

      map.geoObjects.add(placemark);

    }

    ymaps.ready(init);

  }

  if ($('.encyclopedia__wrapper').length) {

    $('.encyclopedia__wrapper').css('top', $('.header').outerHeight() + 20)

  }

  if ($('.main-encyclopedia').length) {

    let $thisLength = 0;

    $('.encyclopedia__content-item').each(function(key, val) {

      const $this = $(this).find('.encyclopedia__title');

      $thisLength += $(this).prev().find('.encyclopedia__item').length;

      $this.attr('id', '1-' + key);
  
      let navThemeHtml = `<li class="encyclopedia__nav-theme">
      <h4 class="encyclopedia__nav-title">
        ${$this.text().trim()}
      </h4>
      <ul class="encyclopedia__nav-items">`;
  
      $(this).find('.encyclopedia__item').each(function(index) {

        const $thisTwo = $(this).find('.encyclopedia__item-title');

        const num = index + $thisLength;
         
        $thisTwo.attr('id', '2-' + num);
  
        navThemeHtml += `<li class="encyclopedia__nav-item">
          <a class="encyclopedia__nav-link" href="#${$thisTwo.attr('id')}">${$thisTwo.text().trim()}</a>
        </li>`;

      });
  
      navThemeHtml += '</ul></li>';
  
      $('.encyclopedia__nav-list').append(navThemeHtml);

    });

    $('.encyclopedia__nav-link').on('click', function(e) {

      e.preventDefault();

      const id = $(this).attr('href'),
      topPage = $(id).offset().top - 200,
      top = topPage + scroll.getScrollElement().scrollTop;
      
      scroll.getScrollElement().scrollTo({ top: top, behavior: "smooth" });

    });

    const scrollEl = scroll.getScrollElement().scrollTop;
      
    $('.encyclopedia__item-title').each(function() {
  
      if (scrollEl >= $(this).offset().top + scroll.getScrollElement().scrollTop - 400) {
  
        $('.encyclopedia__nav-link').removeClass('encyclopedia__nav-link--active');
        $('.encyclopedia__nav-items').find('a[href="#'+$(this).attr('id')+'"]').addClass('encyclopedia__nav-link--active');
  
      } else {
  
        $('.encyclopedia__nav-items').find('a[href="#'+$(this).attr('id')+'"]').removeClass('encyclopedia__nav-link--active');
  
      }
  
    });

    let scrollFlag = false;

    scroll.getScrollElement().addEventListener('scroll', function() {
      
      const scrollEl = scroll.getScrollElement().scrollTop;
      
      if (!scrollFlag) {
  
        $('.encyclopedia__item-title').each(function() {
  
          if (scrollEl >= $(this).offset().top + scroll.getScrollElement().scrollTop - 400) {
  
            $('.encyclopedia__nav-link').removeClass('encyclopedia__nav-link--active');
            $('.encyclopedia__nav-items').find('a[href="#'+$(this).attr('id')+'"]').addClass('encyclopedia__nav-link--active');
  
          } else {
  
            $('.encyclopedia__nav-items').find('a[href="#'+$(this).attr('id')+'"]').removeClass('encyclopedia__nav-link--active');
  
          }
  
        });
  
      }
  
    });

    $('.encyclopedia__nav-link').on('click', function() {

      $('.encyclopedia__nav-link').removeClass('encyclopedia__nav-link--active');
  
      $(this).addClass('encyclopedia__nav-link--active');
  
      scrollFlag = true;
  
      setTimeout(() => {
  
        scrollFlag = false;
  
      }, 1000);
  
    });

  }
  
  const $listItems = $('.support-theme__item');
  const $listItemsNum = $('.support-theme__item').length / 2;

  const firstHalf = $listItems.slice(0, $listItemsNum);
  const secondHalf = $listItems.slice($listItemsNum);

  firstHalf.wrapAll('<div class="support-theme__item-box"></div>');

  secondHalf.wrapAll('<div class="support-theme__item-box"></div>');

  $('.support-theme__item').each(function() {

    const elementHeight = $(this).outerHeight();
    const lineHeight = parseFloat($(this).css("line-height"));
    const neCount = Math.ceil(elementHeight / lineHeight); 

    console.log(neCount)

    if (neCount >= 3) {

      $(this).closest('.support-theme__item-box').css('width', '120%');

    }

  });
  
});