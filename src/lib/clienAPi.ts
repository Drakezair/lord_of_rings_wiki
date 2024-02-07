export default class ClientApi {
  headers: HeadersInit = { "Content-Type": "application/json" };
  api = "";

  constructor({ api, headers }: { api: string; headers: HeadersInit }) {
    this.api = api;
    this.headers = headers;
  }

  private async request(path: string) {
    const response = await fetch(`${this.api}${path}`, {
      headers: this.headers,
    });
    return response.json();
  }

  get(path: string) {
    return this.request(path);
  }

  post(path: string, data: any) {
    return fetch(`${this.api}${path}`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    });
  }

  put(path: string, data: any) {
    return fetch(`${this.api}${path}`, {
      method: "PUT",
      headers: this.headers,
      body: JSON.stringify(data),
    });
  }

  delete(path: string) {
    return fetch(`${this.api}${path}`, {
      method: "DELETE",
      headers: this.headers,
    });
  }

  patch(path: string, data: any) {
    return fetch(`${this.api}${path}`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(data),
    });
  }
}
