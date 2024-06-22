import AppQueryClient from "./providers/AppQueryClientProvider";
import AppRouteProvider from "./providers/AppRouteProvider";
import "./configs/configure-zod.ts";
import RootFullScreenLoader from "./components/FullScreenLoader/index..tsx";

function App() {
  return (
    <AppQueryClient>
      <AppRouteProvider />
      <RootFullScreenLoader />
    </AppQueryClient>
  );
}

export default App;
