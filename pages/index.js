import React from "react";
import Layout from '../components/layout/Layout'
import Hero from '../components/layout/Hero'
import Features from '../components/layout/Features'
import HowWeWork from "../components/layout/HowWeWork";
import PorqueRutas from '../components/layout/PorqueRutas'
import Flota from '../components/layout/Flota'

function Index() {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowWeWork />
      <Flota />
      <PorqueRutas />
    </Layout>
  );
}

export default Index;
