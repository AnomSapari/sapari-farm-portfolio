export function groupByWeek(data: any[]) {
  const map: Record<string, any[]> = {};

  data.forEach((item) => {
    const week = `Minggu ${Math.ceil(
      new Date(item.date).getDate() / 7
    )}`;
    map[week] = map[week] || [];
    map[week].push(item);
  });

  return map;
}
