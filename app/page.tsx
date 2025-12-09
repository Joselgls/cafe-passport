// app/passport/page.tsx

import PassportApp from "@/app/PassportApp";

export default function Passport() {
  return <PassportApp />;
}

//export default function PassportPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "2rem",
        background: "#f3f1e7",
      }}
    >
      <h1>Flat-White Passport</h1>
      <p>Esta será la página del pasaporte con todos los cafés.</p>
    </main>
  );
}
