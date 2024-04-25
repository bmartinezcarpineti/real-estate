<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand ms-3" href="#"><img src="https://i.ibb.co/PmswgyD/united3.png" alt="company logo" id="united-logo-navbar"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav ms-2">
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/">Home</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/properties">Properties</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/search">Search</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    name: 'Navbar',
}
</script>


<style>
.navbar{
  font-family: 'Nunito'
}

#united-logo-navbar{
  max-width:100px;
}

.nav-item{
    font-size: 21px; 
}
</style>