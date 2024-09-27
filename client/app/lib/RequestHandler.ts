export enum CacheEnum {
  NO_STORE = "no-store",
  NO_CACHE = "no-cache",
  FORCE_CACHE = "force-cache",
  ONLY_IF_CACHED = "only-if-cached",
  RELOAD = "reload",
  DEFAULT = "default",
}

export class FetchHandler<T extends Object> {
  private isAuthorized: boolean;
  private cache: CacheEnum;
  public tokenIdentifier: string = "access";

  constructor(isAuthorized: boolean, cache: CacheEnum = CacheEnum.NO_STORE) {
    this.isAuthorized = isAuthorized;
    this.cache = cache;
  }

  async getRequest(url: string): Promise<any> {
    const cache = this.cache;
    const requestObject = {
      method: "GET",
      cache,
    };
    if (this.isAuthorized) {
      const accessToken = localStorage.getItem(this.tokenIdentifier);
      const authorizedResponseObject = {
        ...requestObject,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await fetch(url, authorizedResponseObject);
      return await response.json();
    } else {
      const response = await fetch(url, requestObject);
      return await response.json();
    }
  }

  async postRequest(url: string, data: T): Promise<any> {
    const formData = new FormData();
    for (let [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }
    const cache = this.cache;
    const requestObject = {
      method: "POST",
      body: formData,
      cache,
    };
    if (this.isAuthorized) {
      const accessToken = localStorage.getItem(this.tokenIdentifier);
      const authorizedResponseObject = {
        ...requestObject,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await fetch(url, authorizedResponseObject);
      return await response.json();
    } else {
      const response = await fetch(url, requestObject);
      return await response.json();
    }
  }
}
