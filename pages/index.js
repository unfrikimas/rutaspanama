import React from "react";
import Layout from '../components/layout/Layout'
import Hero from '../components/layout/Hero'
import Features from '../components/layout/Features'
import HowWeWork from "../components/layout/HowWeWork";
import PorqueRutas from '../components/layout/PorqueRutas'

function Index() {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowWeWork />
      <PorqueRutas />
    </Layout>
  );
}

export default Index;
