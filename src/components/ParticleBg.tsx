import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tspaticles";

export default function ParticleBg() {
  async function loadParticles(main) {
    await loadFull(main);
  }
  return <Particles id="tsparticles" init={loadParticles} options={} />;
}
