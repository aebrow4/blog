export const ASSET_HOST = 'http://localhost:8080';

class Base {
  constructor() {
    this.ASSET_HOST = 'http://localhost:8080'
  }
}

export class Development extends Base{};
export class Production extends Base {
  constructor() {
    super();
    this.ASSET_HOST = 'http://localhost'
  }
}

