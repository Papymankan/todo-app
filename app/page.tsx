import AnimatedButton from "@/components/animated-button";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen p-6">
        <h1 className="text-5xl font-extrabold mb-6 text-blue">
          Simplify your to-dos, amplify your results.
        </h1>
        <p className="mb-10 text-lg max-w-xl text-center text-gray-700">
          Take control of your day with a sleek and intuitive task manager.
        </p>
        <AnimatedButton />
      </main>
    </>
  );
}
