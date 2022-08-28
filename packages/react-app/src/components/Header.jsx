import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/pkauppi54/scaffold-eth" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="Funky DEX"
        subTitle="Funky DEX to shoot prices to the moon!"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
