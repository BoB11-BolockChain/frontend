import React from "react"

function SignIn() {
    return (
        <form action="/" method="POST" class="mt-4">
            <div class="form-group">
                <label for="exampleInputIcon3">Your Id</label>
                <div class="input-group mb-4">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><span class="fas fa-envelope"></span></span>
                    </div>
                    <input name="id" class="form-control" id="exampleInputIcon3" placeholder="Id" type="text" aria-label="Id" />
                </div>
            </div>
            <div class="form-group">
                <div class="form-group">
                    <label for="exampleInputPassword6">Password</label>
                    <div class="input-group mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><span class="fas fa-unlock-alt"></span></span>
                        </div>
                        <input name="pw" class="form-control" id="exampleInputPassword6" placeholder="Password" type="password" aria-label="Password" required />
                    </div>
                </div>
                <div class="d-block d-sm-flex justify-content-between align-items-center mb-4">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck5" />
                        <label class="form-check-label" for="defaultCheck5">
                        Remember me
                        </label>
                    </div>
                    <div><a href="#" class="small text-right">Lost password?</a></div>
                </div>
            </div>
            <button type="submit" class="btn btn-block btn-primary">Sign in</button>
        </form>
    )
}

export default SignIn
// =========================================================
// * Neumorphism UI - v1.0.0
// =========================================================
// * Product Page: https://themesberg.com/product/ui-kits/neumorphism-ui
// * Copyright 2020 Themesberg MIT LICENSE (https://www.themesberg.com/licensing#mit)
// * Coded by https://themesberg.com
// =========================================================
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
{/* <head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Neumorphism UI - Sign in</title>
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="title" content="Neumorphism UI - Sign in">
<meta name="author" content="PDxF-Soojeong">

<link type="text/css" href="../../vendor/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet">
<link type="text/css" href="../css/neumorphism.css" rel="stylesheet">
</head> */}
{/* <script src="../vendor/jquery/dist/jquery.min.js"></script>
<script src="../vendor/popper.js/dist/umd/popper.min.js"></script>
<script src="../vendor/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="../vendor/headroom.js/dist/headroom.min.js"></script> -->
<!-- Vendor JS -->
<script src="../vendor/onscreen/dist/on-screen.umd.min.js"></script>
<script src="../vendor/nouislider/distribute/nouislider.min.js"></script>
<script src="../vendor/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>
<script src="../vendor/waypoints/lib/jquery.waypoints.min.js"></script>
<script src="../vendor/jarallax/dist/jarallax.min.js"></script>
<script src="../vendor/jquery.counterup/jquery.counterup.min.js"></script>
<script src="../vendor/jquery-countdown/dist/jquery.countdown.min.js"></script>
<script src="../vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js"></script>
<script src="../vendor/prismjs/prism.js"></script>
<script async defer src="https://buttons.github.io/buttons.js"></script> */}
{/* <script src="../css/neumorphism.js"></script> */}
{/* <main>
            <section class="min-vh-100 d-flex bg-primary align-items-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-8 col-lg-6 justify-content-center">
                            <div class="card bg-primary shadow-soft border-light p-4">
                                <div class="card-header text-center pb-0">
                                    <h2 class="h4">Sign in to our platform</h2>  
                                </div>
                                <div class="card-body">
                                    <form action="./signin_chk.php" method="POST" class="mt-4">
                                    
                                        <div class="form-group">
                                            <label for="exampleInputIcon3">Your Id</label>
                                            <div class="input-group mb-4">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><span class="fas fa-envelope"></span></span>
                                                </div>
                                                <input name="id" class="form-control" id="exampleInputIcon3" placeholder="Id" type="text" aria-label="Id" />
                                            </div>
                                        </div>

                                        <div class="form-group">

                                            <div class="form-group">
                                                <label for="exampleInputPassword6">Password</label>
                                                <div class="input-group mb-4">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><span class="fas fa-unlock-alt"></span></span>
                                                    </div>
                                                    <input name="pw" class="form-control" id="exampleInputPassword6" placeholder="Password" type="password" aria-label="Password" required />
                                                </div>
                                            </div>

                                            <div class="d-block d-sm-flex justify-content-between align-items-center mb-4">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck5" />
                                                    <label class="form-check-label" for="defaultCheck5">
                                                    Remember me
                                                    </label>
                                                </div>
                                                <div><a href="#" class="small text-right">Lost password?</a></div>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-block btn-primary">Sign in</button>
                                    </form>
                                    
                                    <div class="d-block d-sm-flex justify-content-center align-items-center mt-4">
                                        <span class="font-weight-normal">
                                            Not registered?
                                            <a href="./signup.php" class="font-weight-bold">Create account</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main> */}