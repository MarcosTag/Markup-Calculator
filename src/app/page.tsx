"use client";
import { Buttons } from "@/components/Buttons";
import { Inputs } from "@/components/Inputs";

export default function Home() {
  return (
    <>
      <div>
        <h1>Markup Calculator</h1>
      </div>

      <Inputs
        type="text"
        typeFunction="currency"
        legend="Final Cost Price"
        id="cost-price"
        prefix="R$"
      />

      <Inputs
        type="text"
        typeFunction="int"
        legend="Desired Margin"
        id="markup"
        prefix="%"
      />

      <Buttons />
    </>
  );
}
