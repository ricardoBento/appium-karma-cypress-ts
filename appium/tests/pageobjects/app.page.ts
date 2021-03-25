class AppPage {
  constructor() {

  }
  get leftMenu(): WebdriverIO.Element {
    return $('.menu-side-start') as any;
  }
  get rightMenu(): WebdriverIO.Element {
    return $('.menu-side-end') as any;
  }
  get appHome(): WebdriverIO.Element {
    return $('app-home.ion-page') as any;
  }
  get appHomeButton(): WebdriverIO.Element {
    return $('#showHideButton') as any;
  }
  open(path): any {
    let brow: WebdriverIO.Browser;
    return brow.url(path);
  }
}

export default new AppPage();
