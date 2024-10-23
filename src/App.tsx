import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Leads from "./pages/leads";
import Analytics from "./pages/analytics";
import Report from "./pages/report";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./components/ui/dialog";

const router = createBrowserRouter([
 {
    element: <Dashboard/>,
    path: "/",
  },
  {
    element: <Leads/>,
    path: "/leads",
  },
  {
    element: <Analytics/>,
    path: "/analytics",
  },
  {
    element:<Report/>,
    path: "/report",
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppSidebar />
        <Dialog>
        <main className="w-full grid grid-cols-4 h-fit gap-4 p-4">
         
          <RouterProvider router={router} />
          
        </main>
        <DialogContent>
    <DialogHeader>
      <DialogTitle>Customize your widget</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
        </Dialog>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
