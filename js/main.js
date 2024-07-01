$(function(){

  const scroll = new SimpleBar(document.getElementById('scroll'));

  scroll

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

    const clientsBox = document.getElementById('clients__line');
    const clientsMarquee = $("#clients__line-inner");
    const clientsMarq = document.getElementById('clients__line-inner');
    const clientsWidth = $('.clients__items--one').outerWidth();

    const clientsBoxTwo = document.getElementById('clients__line-two');
    const clientsMarqueeTwo = $("#clients__line-inner-two");
    const clientsMarqTwo = document.getElementById('clients__line-inner-two');
    const clientsWidthTwo = $('.clients__items--two').outerWidth();

    let clientsI = 0
    let clientsITwo = 0
    let interval
    let intervalTwo

    clientsBox.style.transform = 'translateX(' + -clientsWidth + 'px)';
    clientsBoxTwo.style.transform = 'translateX(' + -clientsWidth + 'px)';

    clientsMarquee.append(clientsMarquee.find("ul").clone());
    clientsMarquee.append(clientsMarquee.find("ul").clone());

    clientsMarqueeTwo.append(clientsMarqueeTwo.find("ul").clone());
    clientsMarqueeTwo.append(clientsMarqueeTwo.find("ul").clone());

    function reset() {

      clientsI = clientsI  - 0.8;

      clientsMarq.style.transform = 'translateX(' + clientsI + 'px)';

      if (clientsI <= -clientsWidth) {

        clientsI = 0
        clientsI = clientsI - 0.8;

      }

    }

    function resetTwo() {

      clientsITwo = clientsI  - 0.8;

      clientsMarqTwo.style.transform = 'translateX(' + -clientsI + 'px)';

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
    const popupList = $('.popup__wrapper, .header__bnt-box, .top__btns, .users__bottom-btn-box, .city__btn-box, .city-region__box, .popup-city__box, .popup__text-btn-box, .popup-exit__right, .legal-top__box');

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

  $('.header__btn, .top__btn--popup-one, .popup__text-btn, .legal-top__btn--one').on('click', function() {

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

  $('.city__btn, .city-region__btn--two').on('click', function() {

    $('.popup--two').addClass('popup--active');

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

    $(this).find('.kits__img').css({

      'max-width': $(this).find('.kits__img').outerWidth(),
      'width': '100%'

    });

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
  
});