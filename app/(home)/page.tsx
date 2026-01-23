import { ClientComponent } from "@/src/global.componentes/testcomponent";

export default async function Page() {
  return (
    <>
      <ClientComponent />
      <pre>{JSON.stringify("sdfa", null, 2)}</pre>
    </>
  );
}
