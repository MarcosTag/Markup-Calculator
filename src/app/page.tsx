"use client";
import { Buttons } from "@/components/Buttons";
import { Inputs } from "@/components/Inputs";

export default function Home() {
  return (
    <main className="flex flex-col items-center mt-40">
      <div>
        <h1 className="text-3xl mb-5 font-semibold uppercase">
          Markup Calculator
        </h1>
      </div>

      <div className="">
        <Inputs
          type="text"
          typeFunction="currency"
          legend="Final Cost Price"
          id="cost-price"
          prefix="R$"
          locale="pt-BR"
        />

        <Inputs
          type="text"
          typeFunction="int"
          legend="Desired Margin"
          id="markup"
          prefix="%"
          locale="pt-BR"
        />
      </div>

      <Buttons />
    </main>
  );
}
