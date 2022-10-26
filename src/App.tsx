import './App.css';
import './App.scss';
import { useEffect } from 'react';
import Wrapper from './components/Wrapper/Wrapper';
import About_us from './components/about_us/About_us';
import Roadmap from './components/Roadmap/Roadmap';
import Footer from './components/footer/footer';
import ScrollBar from 'smooth-scrollbar';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollContainer, useGlobalState, FixedElement, GellyElement, HorizontalSection, ParallaxImage, SequenceSection } from 'react-nice-scroll';
import 'react-nice-scroll/dist/styles.css';
import Witch from './images/witch.jpg';

const App = () => {

  useEffect(() => {
  }, [])
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
    <ScrollContainer>
      <FixedElement>
        <div className='navbar'>
          <div className='navbar_left'><div>logo</div></div>
          <div className='navbar_right'>
            <div className='navbar_right_discord'>discord</div>
            <div className='navbar_right_twitter'>twitter</div>
          </div>
        </div>
      </FixedElement>
      <div className='WitchFixed'>
      <FixedElement>
        <div className='WitchBlock'>
          <img src={Witch} alt="" className='Witch' />
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
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, backgroundColor: '#ffffff98' }}>
        <h1>Hello World!!</h1>
      </section>
    </ScrollContainer>
  );
}

export default App;