import React, { useEffect, useState } from "react";
let data = [];

function Jumbutron() {
  return (
    <>
      <header>
        <h1>
          Balkan Style <br /> <span>[ Portfolio Gallery ]</span>
        </h1>
      </header>

      <div id='top'></div>
      <section class='gallery'>
        <div class='row'>
          <ul>
            <li>
              {data.map((a, b) => (
                <div key={a.id}>
                  <img src={a.url} alt={a.title} />
                </div>
              ))}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
export default Jumbutron;
