"use client";
import { Buttons } from "@/components/Buttons";
import { Inputs } from "@/components/Inputs";

const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};

export default function Home() {
  return (
    <>
      <div>
        <h1>Markup Calculator</h1>
      </div>

      <Inputs
        type="text"
        legend="Final Cost Price"
        id="cost-price"
        prefix="R$"
        onChange={inputChange}
      />

      <Inputs type="number" legend="Desired Margin" id="markup" prefix="%" />

      <Buttons />
    </>
  );
}
