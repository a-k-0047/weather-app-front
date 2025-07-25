// /utils/fetcher.ts
export async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`APIリクエストに失敗しました（${res.status}）`);
  }

  const data = await res.json();
  return data as T;
}
