import './App.css';
import './App.scss';
import React, { useEffect } from 'react';
import Wrapper from './components/Wrapper/Wrapper';
import About_us from './components/about_us/About_us';
import Roadmap from './components/Roadmap/Roadmap';
import Footer from './components/footer/footer';
import ScrollBar from 'smooth-scrollbar';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollContainer, useGlobalState, FixedElement, GellyElement, HorizontalSection, ParallaxImage, SequenceSection } from 'react-nice-scroll';
import 'react-nice-scroll/dist/styles.css';
import Witch from './images/witch.png';
import anime from 'animejs';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const App = () => {
  const [timeoutID, setTimeoutID] = React.useState<any>();
  const WitchEl = document.querySelector('.Witch');
  const [stateForWitchMAX, setStateForWitchMIN] = React.useState<any>(0)
  let check: any;
  let check2: any;

  // let check2: any;

  var observer = new MutationObserver(function (mutations) {
    try {
      mutations.forEach(function (mutationRecord) {
        // if (timeoutID) { clearTimeout(timeoutID) }
        // const st = setTimeout(function () {
        var matrix = new WebKitCSSMatrix((mutationRecord.target as HTMLElement).style.transform);
        // if (matrix.f % 100 === 0 || matrix.f < -10 && matrix.f > 10) {
        // console.log(matrix.f);
        // check2 = matrix.f;
        // }
        // console.log('matrix.f');
        // console.log(matrix.f);
        // console.log('check');
        // console.log(check);
        // const el1 = document.querySelector('.HorizontalSectionDIV');
        // const el2 = document.querySelector('.footer');

        // console.log(-(document.querySelector('.HorizontalSectionDIV') as HTMLElement).offsetTop)
        // console.log(-(document.querySelector('.footer') as HTMLElement).offsetTop + window.innerHeight)
        // console.log(-(document.querySelector('.footer') as HTMLElement).offsetTop)
        // console.log((document.querySelector('.footer') as HTMLElement).offsetTop - ((document.querySelector('.HorizontalSectionDIV') as HTMLElement).offsetTop))

        if (matrix.f < -(document.querySelector('.HorizontalSectionDIV') as HTMLElement).offsetTop && matrix.f > -(document.querySelector('.Footer') as HTMLElement).offsetTop + window.innerHeight) {
          if (matrix.f <= -1 && (document.querySelector('.Witch') as HTMLElement).style.transform.toString() !== 'rotate(0deg) scale(-1, 1)' && ((document.querySelector('.Witch') as HTMLElement).style.transform.toString() === 'rotate(-25deg) scale(-1, 1)') || (document.querySelector('.Witch') as HTMLElement).style.transform.toString() === 'rotate(25deg) scale(-1, 1)') {
            (document.querySelector('.Witch') as HTMLElement).style.transform = 'rotate(0deg) scale(-1,1)';
          }
        }
        else if (matrix.f <= -(document.querySelector('.Footer') as HTMLElement).offsetTop) {
          if (matrix.f <= -1 && (document.querySelector('.Witch') as HTMLElement).style.transform.toString() !== 'rotate(0deg) scale(-1, 1)' && ((document.querySelector('.Witch') as HTMLElement).style.transform.toString() === 'rotate(-25deg) scale(-1, 1)') || (document.querySelector('.Witch') as HTMLElement).style.transform.toString() === 'rotate(25deg) scale(-1, 1)') {
            (document.querySelector('.Witch') as HTMLElement).style.transform = 'rotate(0deg) scale(-1,1)';
          }
        }
        else if (matrix.f > check) {
          if (matrix.f <= -1 && ((document.querySelector('.Witch') as HTMLElement).style.transform.toString() !== 'rotate(-25deg) scale(-1, 1)')) {
            (document.querySelector('.Witch') as HTMLElement).style.transform = 'rotate(-25deg) scale(-1,1)';
            // console.log('totop')
          }
          // else if ((matrix.f > -1995 && matrix.f < 4000) && ((document.querySelector('.Witch') as HTMLElement).style.transform.toString() !== 'rotate(0deg) scale(-1, 1)')) {
          //   (document.querySelector('.Witch') as HTMLElement).style.transform = 'rotate(0deg) scale(-1,1)';
          // }
          else if (matrix.f > -1 && ((document.querySelector('.Witch') as HTMLElement).style.transform.toString() !== 'rotate(0deg) scale(-1, 1)')) {
            (document.querySelector('.Witch') as HTMLElement).style.transform = 'rotate(0deg) scale(-1,1)';
            // console.log('top')
          }
          // else if (((document.querySelector('.Witch') as HTMLElement).style.transform.toString() !== 'rotate(0deg) scale(-1, 1)')) {
          //   (document.querySelector('.Witch') as HTMLElement).style.transform = 'rotate(0deg) scale(-1,1)';
          //   console.log('top')
          // }
          // else if (matrix.f === 0 || ((document.querySelector('.Witch') as HTMLElement).style.transform.toString() !== 'rotate(25deg) scale(-1, 1)' && ((document.querySelector('.Witch') as HTMLElement).style.transform.toString() !== 'rotate(0deg) scale(-1, 1)'))) {
          //   (document.querySelector('.Witch') as HTMLElement).style.transform = 'rotate(-25deg) scale(-1,1)';
          //   console.log('totop')
          // }
          // else {
          //   if (((document.querySelector('.Witch') as HTMLElement).style.transform.toString() !== 'rotate(-25deg) scale(-1, 1)')) {
          //     (document.querySelector('.Witch') as HTMLElement).style.transform = 'rotate(-25deg) scale(-1,1)';
          //     console.log('totop')
          //   }
          // }
        }
        else if ((matrix.f !== check)) {
          if (((document.querySelector('.Witch') as HTMLElement).style.transform.toString() !== 'rotate(25deg) scale(-1, 1)')) {
            (document.querySelector('.Witch') as HTMLElement).style.transform = 'rotate(25deg) scale(-1,1)';
            // console.log('tobottom')
          }
          // if ((matrix.f <= -1995 && matrix.f >= 4000) && ((document.querySelector('.Witch') as HTMLElement).style.transform.toString() !== 'rotate(0deg) scale(-1, 1)')) {
          //   (document.querySelector('.Witch') as HTMLElement).style.transform = 'rotate(0deg) scale(-1,1)';
          // }
        }
        check = matrix.f;
      });
    }
    catch (e) { }
  });

  useEffect(() => {

    // el.addEventListener('scroll', function () {
    //   console.log(1)
    // })
    if (!isMobile) {
      const el = document.querySelector('.scroll-content');
      if (el !== null) {
        observer.observe(el, { attributes: true, attributeFilter: ['style'] });
      }
    }

    if (isMobile) {
      document.addEventListener('scroll', function () {
        if (check2 !== window.scrollY) {
          // console.log(window.scrollY)
          // console.log('check2 - ' + check2)
          // console.log((document.querySelector('.HorizontalSectionDIV') as HTMLElement).offsetTop)

          if (check2 !== undefined) {
            if (window.pageYOffset > (document.querySelector('.HorizontalSectionDIV') as HTMLElement).offsetTop && window.pageYOffset < (document.querySelector('.Footer') as HTMLElement).offsetTop - window.innerHeight) {
              if (window.pageYOffset > 1 && (document.querySelector('.Witch') as HTMLElement).style.transform.toString() !== 'rotate(0deg) scale(-1, 1)' && ((document.querySelector('.Witch') as HTMLElement).style.transform.toString() === 'rotate(-25deg) scale(-1, 1)') || (document.querySelector('.Witch') as HTMLElement).style.transform.toString() === 'rotate(25deg) scale(-1, 1)') {
                (document.querySelector('.Witch') as HTMLElement).style.transform = 'rotate(0deg) scale(-1,1)';
              }
              console.log(1)
            }
            else if (window.pageYOffset >= (document.querySelector('.Footer') as HTMLElement).offsetTop) {
              if (window.pageYOffset >= 1 && (document.querySelector('.Witch') as HTMLElement).style.transform.toString() !== 'rotate(0deg) scale(-1, 1)' && ((document.querySelector('.Witch') as HTMLElement).style.transform.toString() === 'rotate(-25deg) scale(-1, 1)') || (document.querySelector('.Witch') as HTMLElement).style.transform.toString() === 'rotate(25deg) scale(-1, 1)') {
                (document.querySelector('.Witch') as HTMLElement).style.transform = 'rotate(0deg) scale(-1,1)';
              }
            }
            else if (window.pageYOffset < check2) {
              if (window.pageYOffset >= 1 && ((document.querySelector('.Witch') as HTMLElement).style.transform.toString() !== 'rotate(-25deg) scale(-1, 1)')) {
                (document.querySelector('.Witch') as HTMLElement).style.transform = 'rotate(-25deg) scale(-1,1)';
              }
              else if (window.pageYOffset < 1 && ((document.querySelector('.Witch') as HTMLElement).style.transform.toString() !== 'rotate(0deg) scale(-1, 1)')) {
                (document.querySelector('.Witch') as HTMLElement).style.transform = 'rotate(0deg) scale(-1,1)';
              }
            }
            else if ((window.pageYOffset !== check2)) {
              if (((document.querySelector('.Witch') as HTMLElement).style.transform.toString() !== 'rotate(25deg) scale(-1, 1)')) {
                (document.querySelector('.Witch') as HTMLElement).style.transform = 'rotate(25deg) scale(-1,1)';
              }
            }
          }
          check2 = window.pageYOffset;
        }
      })
    }
    //ns-container
  }, []);

  const [smoothScrollBar] = useGlobalState('smoothScrollBar');
  const [allowScroll, setAllowScroll] = useGlobalState('allowScroll');

  const handleAllowScroll = () => {
    if (smoothScrollBar) {
      smoothScrollBar.updatePluginOptions('allowScroll', { allow: !allowScroll });
      setAllowScroll(!allowScroll);
    }
  };
  return (
    // <div className="App">
    //   <div className='VerticalScrollContent'>
    //     <Wrapper />
    //     <About_us />
    //   </div>
    //   <Roadmap />
    //   <Footer />
    // </div>
    <ScrollContainer damping={0.075} disableSmoothScroll={false}>
      <div className='backgroundFIXED'>
        {/* <FixedElement><div className='backgroundBlock'></div></FixedElement> */}
        <FixedElement><div className='backgroundBlock2'></div></FixedElement>
      </div>
      <div className='navbarFIXED'>
        <FixedElement>
          <div className='navbar'>
            <div className='navbar_left'><div>logo</div></div>
            <div className='navbar_right'>
              <div className='navbar_right_discord'>discord</div>
              <div className='navbar_right_twitter'>twitter</div>
            </div>
          </div>
        </FixedElement>
      </div>
      <div className='WitchFixed'>
        <FixedElement>
          <div className='WitchBlock'>
            <img src={Witch} alt="" className='Witch' style={{ transform: 'rotate(0deg) scale(-1,1)', transition: 'all 0.5s ease-in-out' }} />
          </div>
        </FixedElement>
      </div>
      {/* <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Hello World!</h1>
      </section> */}
      <Wrapper />
      <About_us />
      <div className='HorizontalSectionDIV'>
        <HorizontalSection>
          <div className="ns-horizontal-section__item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui ligula, commodo quis quam in, accumsan
            finibus dolor. Nunc ac finibus purus. Vivamus ac risus euismod, pellentesque nunc id, auctor urna. Duis eu
            imperdiet arcu. Suspendisse eu nibh felis. Sed eros nibh, lobortis eget turpis eget, iaculis condimentum
            lacus.
          </div>
          <div className="ns-horizontal-section__item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui ligula, commodo quis quam in, accumsan
            finibus dolor. Nunc ac finibus purus. Vivamus ac risus euismod, pellentesque nunc id, auctor urna. Duis eu
            imperdiet arcu. Suspendisse eu nibh felis. Sed eros nibh, lobortis eget turpis eget, iaculis condimentum
            lacus.
          </div>
          <div className="ns-horizontal-section__item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui ligula, commodo quis quam in, accumsan
            finibus dolor. Nunc ac finibus purus. Vivamus ac risus euismod, pellentesque nunc id, auctor urna. Duis eu
            imperdiet arcu. Suspendisse eu nibh felis. Sed eros nibh, lobortis eget turpis eget, iaculis condimentum
            lacus.
          </div>
        </HorizontalSection>
      </div>
      <Footer />
    </ScrollContainer>
  );
}

export default App;