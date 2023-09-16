import './App.css'
import Creatures from './creatures/components/creatures'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient()

function App() {
  return (
    
    <QueryClientProvider client={queryClient}>
      <Creatures />
    </QueryClientProvider>
  )
}

export default App
