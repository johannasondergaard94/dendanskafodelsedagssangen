import React from "react";

export function Text({ name, sex }) {
  if (!name) return null;

  const pronoun = sex === "Han" ? "han" : "hun";

  return (
    <p id="birthdaytext">
      I dag er det {name}s fødselsdag<br />
      Hurra, hurra, hurra!<br />
      {pronoun} sikkert sig en gave får<br />
      som {pronoun} har ønsket sig i år<br />
      med dejlig chokolade og kager til.<br />
      < br />
      Hvor smiler {pronoun} hvor er {pronoun} glad<br />
      Hurra, hurra, hurra!<br />
      men denne dag er også rar<br />
      for hjemme venter mor og far<br />
      med dejlig chokolade og kager til.<br />
      <br />
      Og når {pronoun} hjem fra skole går<br />
      Hurra, hurra, hurra!<br />
      så skal {pronoun} hjem og holde fest<br />
      og dem, som kommer med som gæst<br />
      får dejlig chokolade og kager til.<br />
      <br />
      Til slut/sidst vi råber højt i kor:<br />
      Hurra, hurra, hurra!<br />
      Gid {name} længe leve må<br />
      og sine ønsker opfyldt få<br />
      med dejlig chokolade og kager til.
    </p>
  );
}
