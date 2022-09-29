import React, { useState } from "react";
import Layout from "../components/Layout/Layout"

const Admin = () => {
  return (
    <Layout>
      <div>
        <h1>PDxF</h1>
        <p>
          PDxF is <strong>CDX Framework</strong> fuck bitch
        </p>
        <div>
          <a href="signup">Start</a>
        </div>
      </div>
    </Layout> 
  );
};

export default Admin;

/*
<div>
      <section class="section section bg-soft pb-5 overflow-hidden z-2">
        <div class="container z-2">
          <div class="row justify-content-center text-center pt-6">
            <div class="col-lg-8 col-xl-8">
              <h1 class="display-2 mb-3">PDxF</h1>
              <p class="lead px-md-6 mb-5">
                PDxF is <strong>CDX Framework</strong> that will help you
                participate in Cyber Defense Exercise.
              </p>
              <div class="d-flex flex-column flex-wrap flex-md-row justify-content-md-center mb-5">
                <a
                  href=""
                  target="_blank"
                  class="btn btn-primary mb-3 mb-lg-0 mr-3"
                >
                  <i class="fas fa-cloud-download-alt mr-2"></i> Start
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section section-lg">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-4">
              <div class="icon-box text-center mb-5 mb-md-0">
                <div class="icon icon-shape icon-lg bg-soft shadow-soft border border-light rounded-circle mb-3">
                  <span class="fas fa-box-open"></span>
                </div>
                <h2 class="h5 my-3">Make your Scenario</h2>
                <p class="px-lg-4">Windows/Linux</p>
              </div>
            </div>
            <div class="col-12 col-md-4 mb-5 mb-md-0">
              <div class="icon-box text-center">
                <div class="icon icon-shape icon-lg bg-soft shadow-soft border border-light rounded-circle mb-3">
                  <span class="fas fa-pager"></span>
                </div>
                <h2 class="h5 my-3">Make your Agent</h2>
                <p class="px-lg-4">Create Virtual Red Team</p>
              </div>
            </div>
            <div class="col-12 col-md-4 mb-5 mb-md-0">
              <div class="icon-box text-center">
                <div class="icon icon-shape icon-lg bg-soft shadow-soft border border-light rounded-circle mb-3">
                  <span class="far fa-file-alt"></span>
                </div>
                <h2 class="h5 my-3">Make your CDX</h2>
                <p class="px-lg-4">play CDX</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section section-lg bg-soft">
        <div class="container">
          <div class="row justify-content-center text-center text-dark mb-5">
            <div class="col-lg-9 col-xl-8">
              <h2 class="h1 font-weight-light mb-3">
                Less <span class="font-weight-bold">work</span>, more{" "}
                <span class="font-weight-bold">Play</span>.
              </h2>
              <p class="lead">Boost productivity with PDxF.</p>
            </div>
          </div>
          <div class="row justify-content-center mb-6">
            <div class="col-md-10 col-xl-9">
              <div class="position-relative">
                <div class="rounded shadow-soft border border-light bg-soft p-4 mb-2">
                  <div class="mb-3">
                    <div class="font-weight-normal">&gt; $ hi</div>
                    <div class="text-muted">Everything’s installed!</div>
                  </div>
                  <div class="mb-3">
                    <div class="font-weight-normal">&gt; $ hi</div>
                    <div class="text-muted">Make CDX</div>
                  </div>
                  <div>
                    <div class="font-weight-normal">&gt; $ hi</div>
                    <div class="text-muted">It's that simple!</div>
                  </div>
                </div>
              </div>
              <div class="alert alert-dark shadow-soft position-relative mt-4">
                <span class="fas fa-question-circle mr-2"></span> Looks
                unfamiliar? Don’t worry! Our{" "}
                <a
                  class="text-dark font-weight-bold text-underline"
                  href=""
                  target="_blank"
                >
                  documentation
                </a>{" "}
                has got you covered.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
*/