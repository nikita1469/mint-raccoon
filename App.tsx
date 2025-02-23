import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./shared/api/mintRaccoonApi";
import AppContent from "./app/AppContent";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}
