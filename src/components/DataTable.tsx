import { ReactNode } from "react";

interface Column<T> {
  key: string;
  header: string;
  render: (item: T, index: number) => ReactNode;
  align?: "left" | "right" | "center";
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyExtractor: (item: T) => string;
  emptyMessage?: string;
  animated?: boolean;
}

export function DataTable<T>({
  columns,
  data,
  keyExtractor,
  emptyMessage = "No data available",
  animated = true,
}: DataTableProps<T>) {
  if (data.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="border-b border-border bg-muted/30">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={`py-4 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider ${
                  column.align === "right"
                    ? "text-right"
                    : column.align === "center"
                    ? "text-center"
                    : "text-left"
                }`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {data.map((item, index) => (
            <tr
              key={keyExtractor(item)}
              className={`hover:bg-muted/20 transition-colors ${
                animated ? "animate-fade-in" : ""
              }`}
              style={animated ? { animationDelay: `${index * 50}ms` } : undefined}
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={`py-4 px-4 ${
                    column.align === "right"
                      ? "text-right"
                      : column.align === "center"
                      ? "text-center"
                      : "text-left"
                  }`}
                >
                  {column.render(item, index)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
