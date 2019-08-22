export const setCookie = (
  name: string,
  value: string,
  days: number = 7,
  path: string = "/"
): void => {
  if (typeof document === "undefined") {
    return;
  }

  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  const encodedValue = encodeURIComponent(value);
  document.cookie = `${name}=${encodedValue}; expires=${expires}; path=${path}`;
};

export function getCookie(name: string): string {
  if (typeof document === "undefined") {
    return "";
  }
  return document.cookie.split("; ").reduce((r, v) => {
    const parts = v.split("=");
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, "");
}

export function deleteCookie(name: string, path: string): void {
  setCookie(name, "", -1, path);
}
