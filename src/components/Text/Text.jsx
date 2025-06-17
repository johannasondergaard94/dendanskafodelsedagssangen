import React from "react";

export function Text({ name }) {
  if (!name) return null;

  return (
    <p>
      I dag er det {name}s fødselsdag<br />
      Hurra, hurra, hurra!<br />
      han/hun sikkert sig en gave får<br />
      som han/hun har ønsket sig i år<br />
      med dejlig chokolade og kager til.<br />
      Hvor smiler han/hun hvor er han/hun glad<br />
      Hurra, hurra, hurra!<br />
      men denne dag er også rar<br />
      for hjemme venter mor og far<br />
      med dejlig chokolade og kager til.<br />
      Og når han/hun hjem fra skole(/arbejde) går<br />
      Hurra, hurra, hurra!<br />
      så skal han/hun hjem og holde fest<br />
      og dem, som kommer med som gæst<br />
      får dejlig chokolade og kager til.<br />
      Til slut/sidst vi råber højt i kor:<br />
      Hurra, hurra, hurra!<br />
      Gid {name} længe leve må<br />
      og sine ønsker opfyldt få<br />
      med dejlig chokolade og kager til.
    </p>
  );
}
