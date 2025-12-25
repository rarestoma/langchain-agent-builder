import Workflow from "./components/workflow/workflow";

export default function Home() {
  return (
    <div className="h-screen">
      <h1 className="text-center p-3">Langchain Agent Builder</h1>
      <Workflow />
    </div>
  );
}
