export function InlineCodeBlock({ children }: { children: string }) {
  return (
    <code className="bg-[#1E1E2E] text-paper rounded px-1.5 pt-1 font-mono font-medium">
      {children}
    </code>
  );
}