const removeEmpty = <T extends Record<string, any>>(obj: T): T | null => {
  const object = Object.entries(obj)
    .filter(([_, v]) => v != null)
    .reduce(
      (acc, [k, v]) => ({ ...acc, [k]: v === Object(v) ? removeEmpty(v) : v }),
      {} as T
    );
  return Object.keys(object).length ? object : null;
};

export default removeEmpty;
