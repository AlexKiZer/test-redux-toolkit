const fetchCount = (amount = 1) => {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500),
  );
};

export const counterService = {
  fetchCount,
};