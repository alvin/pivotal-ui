import '../spec_helper';
import {BackToTop} from '../../../src/react/back-to-top';
import ScrollTop from '../../../src/react/back-to-top/scroll-top';

describe('BackToTop', () => {
  let scrollTop;

  function triggerScroll() {
    const event = document.createEvent('Event');
    event.initEvent('scroll', false, false);
    window.dispatchEvent(event);
  }

  beforeEach(() => {
    scrollTop = 0;
    spyOn(ScrollTop, 'getScrollTop').and.callFake(() => scrollTop || 0);
    spyOn(ScrollTop, 'setScrollTop').and.callFake(value => scrollTop = value);
  });

  describe('without scrollableId', () => {
    beforeEach(done => {
      ReactDOM.render(<BackToTop className="foo" id="bar" style={{fontSize: '200px'}}/>, root);

      jasmine.clock().uninstall();
      setTimeout(() => {
        jasmine.clock().install();
        ScrollTop.setScrollTop(500);
        triggerScroll();
        done();
      }, 0);
    });

    it('passes down the className, id, and style properties', () => {
      expect('.back-to-top').toHaveClass('foo');
      expect('.back-to-top').toHaveProp('id', 'bar');
      expect('.back-to-top').toHaveCss({'font-size': '200px'});
    });

    it('renders a back to top link that is visible', () => {
      expect('.back-to-top').toExist();
    });

    it('renders a arrow upward icon', () => {
      expect('svg.icon-arrow_upward').toExist();
    });

    it('fades in the button', () => {
      expect('.back-to-top').toHaveCss({opacity: '0'});
      MockNow.tick(BackToTop.FADE_DURATION / 2);
      MockRaf.next();
      expect('.back-to-top').toHaveCss({opacity: '0.5'});
      MockNow.tick(BackToTop.FADE_DURATION / 2);
      MockRaf.next();
      expect('.back-to-top').toHaveCss({opacity: '1'});
    });

    describe('when the scroll top is less than 400', () => {
      beforeEach(function () {
        MockNow.tick(BackToTop.FADE_DURATION);
        MockRaf.next();
        expect('.back-to-top').toHaveCss({opacity: '1'});

        ScrollTop.setScrollTop(0);
        triggerScroll();
      });

      it('fades out the button', () => {
        expect('.back-to-top').toHaveCss({opacity: '1'});
        MockNow.tick(BackToTop.FADE_DURATION / 2);
        MockRaf.next();
        expect('.back-to-top').toHaveCss({opacity: '0.5'});
        MockNow.tick(BackToTop.FADE_DURATION / 2);
        MockRaf.next();
        expect('.back-to-top').toHaveCss({opacity: '0'});
      });
    });

    describe('when the back to top link is clicked', () => {
      let element;

      beforeEach(() => {
        const isFirefox = () => navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
        element = isFirefox() ? document.documentElement : document.body;
        $('.back-to-top').simulate('click');
      });

      it('animates the body scroll to the top', () => {
        expect(ScrollTop.getScrollTop()).toEqual(500);
        MockNow.tick(BackToTop.SCROLL_DURATION / 2);
        MockRaf.next();
        expect(ScrollTop.getScrollTop()).toEqual(62.5);
        MockNow.tick(BackToTop.SCROLL_DURATION / 2);
        MockRaf.next();
        expect(ScrollTop.getScrollTop()).toEqual(0);
      });

      it('calls getScrollTop', () => {
        expect(ScrollTop.getScrollTop).toHaveBeenCalledWith(element);
      });

      it('calls setScrollTop', () => {
        expect(ScrollTop.setScrollTop).toHaveBeenCalledWith(500, element);
        MockNow.tick(BackToTop.SCROLL_DURATION / 2);
        MockRaf.next();
        expect(ScrollTop.setScrollTop).toHaveBeenCalledWith(62.5, element);
        MockNow.tick(BackToTop.SCROLL_DURATION / 2);
        MockRaf.next();
        expect(ScrollTop.setScrollTop).toHaveBeenCalledWith(0, element);
      });
    });
  });

  describe('with a scrollableId', () => {
    let scrollableId;

    beforeEach(done => {
      scrollableId = 'scrollable';
      ReactDOM.render(<div id={scrollableId} style={{height: '100px', maxHeight: '100px', overflowY: 'scroll'}}>
        <div {...{height: '500px'}}/>
        <BackToTop {...{className: 'foo', id: 'bar', style: {fontSize: '500px'}, scrollableId}}/>
      </div>, root);

      jasmine.clock().uninstall();
      setTimeout(() => {
        jasmine.clock().install();
        ScrollTop.setScrollTop(100, scrollableId);
        triggerScroll();
        done();
      }, 0);
    });

    describe('when the back to top link is clicked', () => {
      beforeEach(() => {
        $('.back-to-top').simulate('click');
      });

      it('calls getScrollTop', () => {
        expect(ScrollTop.getScrollTop).toHaveBeenCalledWith(window.scrollable);
      });

      it('calls setScrollTop', () => {
        expect(ScrollTop.setScrollTop).toHaveBeenCalledWith(100, window.scrollable);
        MockNow.tick(BackToTop.SCROLL_DURATION / 2);
        MockRaf.next();
        expect(ScrollTop.setScrollTop).toHaveBeenCalledWith(12.5, window.scrollable);
        MockNow.tick(BackToTop.SCROLL_DURATION / 2);
        MockRaf.next();
        expect(ScrollTop.setScrollTop).toHaveBeenCalledWith(0, window.scrollable);
      });

      it('animates the body scroll to the top', () => {
        expect(scrollTop).toEqual(100);
        MockNow.tick(BackToTop.SCROLL_DURATION / 2);
        MockRaf.next();
        expect(scrollTop).toEqual(12.5);
        MockNow.tick(BackToTop.SCROLL_DURATION / 2);
        MockRaf.next();
        expect(scrollTop).toEqual(0);
      });
    });
  });
});
