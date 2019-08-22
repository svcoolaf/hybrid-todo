interface Page {
  page: string;
  title: string;
  hide?: boolean;
}

export const PAGES_MAP: {
  [key in "home" | "todo"]: Page;
} = {
  home: {
    page: "",
    title: "home"
  },
  todo: {
    page: "/todo",
    title: "todo"
  }
};

export const PAGES: Page[] = Object.values(PAGES_MAP);
