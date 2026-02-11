export function exportCSV(data: any[]) {
  if (!data.length) return;

  const header = Object.keys(data[0]).join(",");
  const rows = data.map(row =>
    Object.values(row).join(",")
  );

  const csv = [header, ...rows].join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "jurnal-farming.csv";
  a.click();
}
