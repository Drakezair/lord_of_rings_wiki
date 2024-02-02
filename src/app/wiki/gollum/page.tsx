"use client";

import { getQouteById } from "@/actions/api";
import { Text, Title } from "@/components/atom";
import { GollumModel } from "@/components/atom";
import { CharacterDetail } from "@/components/compounds";
import { IQuote } from "@/types/api";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

const QOUTES_ID = ["5cd96e05de30eff6ebccec42", "5cd96e05de30eff6ebcce816"];

export default function GollumPage() {
  const [quotes, setQuotes] = useState<IQuote[]>([]);

  useEffect(() => {
    const fetchQoutes = async () => {
      const newQuotes = await Promise.all(
        QOUTES_ID.map(async (id) => {
          const res = await getQouteById({ id });
          return res.docs[0];
        })
      );
      setQuotes(newQuotes);
    };

    fetchQoutes();
  }, []);

  return (
    <CharacterDetail.Card className="flex justify-center my-5 p-10">
      <div>
        <Text className="text-center mt-5">&quot;{ quotes[0]?.dialog}&quot;</Text>
      </div>
      <div className="h-96">
        <Canvas>
          <GollumModel />
        </Canvas>
      </div>
      <div>
        <Text className="text-center mt-5">&quot;{quotes[1]?.dialog}&quot;</Text>
      </div>
    </CharacterDetail.Card>
  );
}

/*

Liskov Substitution Principle

In this example, the CharactersPage component is a subtype of the Page component.
To use Api, we need to use the getCharacterById and getQuoteByCharacterId functions.
And the component dont need to know how the functions work, just need to know how to use it.

============================================================================================

Parallel and Sequential Patterns

In this example, the CharactersPage component is a parallel pattern.
The getCharacterById and getQuoteByCharacterId functions are called in parallel.

*/
