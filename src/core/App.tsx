import AppQueryClient from "./providers/AppQueryClientProvider";
import AppRouteProvider from "./providers/AppRouteProvider";
import "./configs/configure-zod.ts";
import RootFullScreenLoader from "./components/FullScreenLoader/index..tsx";
import AppToastProvider from "./providers/AppToastProvider.tsx";

function App() {
  return (
    <AppQueryClient>
      <AppRouteProvider />
      <RootFullScreenLoader />
      <AppToastProvider />
    </AppQueryClient>
  );
}

export default App;
