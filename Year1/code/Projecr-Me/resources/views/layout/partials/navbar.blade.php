<nav  style="width: 100%; min-height: 12vh;z-index: 999; background-color: rgba(27, 111, 220, 0.849);box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;"
    class="container-fluid d-flex align-items-center justify-content-center position-fixed"  >
    <div class=" container  d-flex align-items-center justify-content-center  m-0 p-0  w-100"
        style="min-height: 12vh">
        <div class="row w-100 m-0 p-0" style="min-height: 12vh">
            <div
                class="logo col-md-3 col-lg-3 col-sm-3 col-3 d-flex align-items-center justify-content-center m-0 p-0 position-relative">
                <a href="#" class="txt-logo  d-flex align-items-center justify-content-start position-absolute ms-3"
                    style="min-height: 100%;width: 100%;">
                    <h2 class="text-white">MengHong</h2>
                </a>
            </div>
            <div
                class="nav-menu  col-lg-9 col-9   d-flex align-items-center justify-content-center position-relative m-0 p-0 ">
                <ul class="d-flex align-items-center justify-content-center m-0 p-0 position-absolute"
                    style="min-height: 100%;width: 100%;">
                    <li class="li"><a class="nav-a" href="{{asset('#')}}">Home</a></li>
                    <li class="li"><a class="nav-a" href="{{asset('#about')}}">About</a></li>
                    <li class="li"><a class="nav-a" href="{{asset('#team')}}">Team</a></li>
                    <li class="li4"><a class="nav-a" href="{{asset('#service')}}">Service</a></li>
                    <li class="li5"><a class="nav-a" href="{{asset('#contact')}}">Contact</a></li>
                    <li class="li5"><a class="nav-a" href="{{asset('#Gallery')}}">Gallery</a></li>
                    <li class="li5"><a class="nav-a" href="{{asset('#contact')}}">Get Start</a></li>
                </ul>
                <div class="content-icon d-flex align-items-center justify-content-end m-0 p-0 "
                    style="min-height: 100%;width: 100%; ">
                    <a class="position-relative" href=""type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
                        aria-controls="offcanvasScrolling"><i class="fa-solid fa-bars icon-bars"></i></a>
                </div>
                <div class="offcanvas offcanvas-start bg-secondary " data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" style="width: 50%;height: 100vh;">
                    <div class="offcanvas-body bg-white d-flex align-items-start justify-content-start position-relative m-0 p-0"   style="width: 100%;min-height: 100%">
                        <ul class="slider-menu m-0 p-0  mt-4" style="width: 100%;min-height: 50vh" >
                            <li class="li-slider d-flex align-items-center justify-content-start"><a class="a-slider m-3 mt-2 ms-4" href="">Home</a></li>
                            <li class="li-slider d-flex align-items-center justify-content-start"><a class="a-slider m-3 mt-2 ms-4" href="{{asset('#about')}}">About</a></li>
                            <li class="li-slider d-flex align-items-center justify-content-start"><a class="a-slider m-3 mt-2 ms-4" href="{{asset('#team')}}">Team</a></li>
                            <li class="li-slider d-flex align-items-center justify-content-start"><a class="a-slider m-3 mt-2 ms-4" href="{{asset('#service')}}">Service</a></li>
                            <li class="li-slider d-flex align-items-center justify-content-start"><a class="a-slider m-3 mt-2 ms-4" href="{{asset('#contact')}}">Contact</a></li>
                            <li class="li-slider d-flex align-items-center justify-content-start"><a class="a-slider m-3 mt-2 ms-4" href="{{asset('#Gallery')}}">Gallery</a></li>
                            <li class="li-slider d-flex align-items-center justify-content-start"><a class="a-slider m-3 mt-2 ms-4" href="{{asset('#GetStart')}}">Get Start</a></li>
                        </ul>
                    </div>
                    <a href=""  style="position: absolute;right: 0; margin: 1.5rem;"><i
                            class="fa-solid fa-xmark mt" aria-label="Close" data-bs-dismiss="offcanvas"></i></a>
                </div>
            </div>
        </div>
</nav>
