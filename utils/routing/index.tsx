export const links = [
  {
    id: 1,
    name: "Trade",
    link: "/trade",
  },
  {
    id: 2,
    name: "Governance",
    link: "/governance",
  },
  {
    id: 3,
    name: "Docs",
    link: "/docs",
  },
  {
    id: 4,
    name: "Jobs",
    link: "/jobs",
  },
  {
    id: 5,
    name: "Discord",
    link: "/discord",
  },
];

export const anchor: string = "left";

export const toggleDrawer =
  (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    return open;
  };
