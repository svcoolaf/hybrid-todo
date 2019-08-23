interface Page {
  page: string;
  title: string;
  hide?: boolean;
}

export const PAGES_MAP: {
  [key in "home"]: Page;
} = {
  home: {
    page: "",
    title: "home"
  }
};

export const PAGES: Page[] = Object.values(PAGES_MAP);
