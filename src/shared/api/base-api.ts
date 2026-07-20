export abstract class BaseApi {
  protected baseUrl = 'https://6a58e91b68601fc330e981b2.mockapi.io/api/v1';

  protected async request<T>(path: string, options?: RequestInit): Promise<T> {
    const res = await fetch(`${this.baseUrl}/${path}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });
    if (!res.ok) throw new Error(`Failed to fetch ${path}`);
    return res.json();
  }
}
