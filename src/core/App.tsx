import AppQueryClient from "./providers/AppQueryClientProvider";
import AppRouteProvider from "./providers/AppRouteProvider";
import "./configs/configure-zod.ts";

function App() {
  return (
    <AppQueryClient>
      <AppRouteProvider />
    </AppQueryClient>
  );
}

export default App;
