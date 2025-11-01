"use client";
import { useState } from "react";
import { Buttons } from "@/components/Buttons";
import { Inputs } from "@/components/Inputs";

export default function Home() {
  const [costPrice, setCostPrice] = useState("");
  const [margin, setMargin] = useState("");
  const [finalPrice, setFinalPrice] = useState<string | null>(null);

  const parseCurrency = (raw: string): number => {
    if (!raw) return 0;
    if (raw.length <= 2) return parseFloat(`0.${raw.padStart(2, "0")}`);
    return parseFloat(`${raw.slice(0, -2)}.${raw.slice(-2)}`);
  };

  const parseMargin = (raw: string): number => {
    return parseInt(raw, 10) || 0;
  };

  const getMarkup = (marginPercent: number): number => {
    if (marginPercent >= 100) return 0;
    const marginDecimal = marginPercent / 100;
    return 1 - marginDecimal;
  };

  const getFinalPrice = (cost: number, markupDivisor: number): number => {
    if (markupDivisor <= 0) return cost;
    return cost / markupDivisor;
  };

  const handleCalculate = () => {
    const cost = parseCurrency(costPrice);
    const marginPercent = parseMargin(margin);

    const markupDivisor = getMarkup(marginPercent);
    const price = getFinalPrice(cost, markupDivisor);

    setFinalPrice(
      price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }),
    );
  };

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
          value={costPrice}
          onValueChange={setCostPrice}
        />

        <Inputs
          type="text"
          typeFunction="int"
          legend="Desired Margin"
          id="markup"
          prefix="%"
          locale="pt-BR"
          value={margin}
          onValueChange={setMargin}
        />
      </div>

      <Buttons onClick={handleCalculate} />

      {finalPrice && (
        <div className="mt-6 p-4 bg-lime-100 border border-lime-500 rounded-md text-center w-63">
          <h2 className="text-lg font-semibold text-lime-900">
            Preço Final de Venda:
          </h2>
          <p className="text-3xl font-bold text-lime-800">{finalPrice}</p>
        </div>
      )}
    </main>
  );
}