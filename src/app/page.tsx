import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-2 gap-10 col-auto justify-center items-center">
        <h1> CHATEAU D&lsquo;ASTORIA </h1>
        <Image src='/chateau.jpg' alt="chateau d'astoria logo" width={500} height={500}></Image>
      </div>
    </main>
  );
}
