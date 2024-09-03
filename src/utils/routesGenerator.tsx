/* eslint-disable @typescript-eslint/no-explicit-any */
export const routeGenerator = (items: any) => {
  const routes = items.reduce((acc: any, item: any) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    if (item.children) {
      item.children.forEach((child: any) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }

    return acc;
  }, []);

  return routes;
};
