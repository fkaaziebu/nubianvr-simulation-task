export const getData = async (page: string = "1") => {
  const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const paginate = ({
  current,
  max,
}: {
  current: number;
  max: number;
}) => {
  if (!current || !max) return null;

  let prev = current === 1 ? null : current - 1,
    next = current === max ? null : current + 1,
    items: any = [1];

  if (current === 1 && max === 1) return { current, prev, next, items };
  if (current > 4) items.push("...");

  let r = 2,
    r1 = current - r,
    r2 = current + r;

  for (let i = r1 > 2 ? r1 : 2; i <= Math.min(max, r2); i++) items.push(i);

  if (r2 + 1 < max) items.push("...");
  if (r2 < max) items.push(max);

  return { current, prev, next, items };
};

export const getSingleData = async (id: string) => {
  const res = await fetch(`https://swapi.dev/api/people/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
