import { AngularMusicPlayerPage } from './app.po';

describe('angular-music-player App', () => {
  let page: AngularMusicPlayerPage;

  beforeEach(() => {
    page = new AngularMusicPlayerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
