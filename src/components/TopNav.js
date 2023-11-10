function TopNav() {
    // {
    //     window.onscroll = function() {myFunction()};
           
    //        var navbar = document.getElementById("top-nav");
    //        var sticky = navbar.offsetTop;
           
    //        function myFunction() {
    //          if (window.scrollY >= sticky) {
    //            navbar.classList.add("sticky")
    //          } else {
    //            navbar.classList.remove("sticky");
    //          }
    //        }
    //     }
  return (
    
    <nav id = "top-nav" >
        <div class="left-nav">
            <div class="logo">
                <img src="./images/lm-logo.png" alt="" srcset="" />
            </div>
            <div class="nav-buttons">
                <p id="hello-text">Hello Abhishek</p>
            </div>
        </div>
        <div class="right-nav">
                <div class="search-bar">
                    <img src="./images/search-icon.png" alt="" srcset=""/>
                    <p>Search anything</p>
                </div>
    </div>
    </nav>
  );
}

export default TopNav