<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <b-link class="navbar-brand" to="#">
        <img class="navbar-brand-full" src="~@/assets/foamtec.png" width="100" height="25" alt="Foamtec Logo">
        <img class="navbar-brand-minimized" src="~@/assets/logo.jpg" width="30" height="30" alt="Foamtec Logo">
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg" />
      <b-navbar-nav class="ml-auto">
        <DefaultHeaderUser/>
      </b-navbar-nav>
      <AsideToggler class="d-none d-lg-block" />
      <!--<AsideToggler class="d-lg-none" mobile />-->
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </AppSidebar>
      <main class="main">
        <Breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <DefaultAside/>
      </AppAside>
    </div>
    <TheFooter>
      <!--footer-->
      <div>
        <a href="#">TheSeek</a>
        <span class="ml-1">&copy; 2018 creative.</span>
      </div>
      <div class="ml-auto">
        <span class="mr-1">Powered by</span>
        <a href="https://coreui.io">TheSeek Team</a>
      </div>
    </TheFooter>
  </div>
</template>

<script>
import nav from '@/menu'
import { Header as AppHeader, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
import DefaultHeaderUser from './DefaultHeaderUser'
import DefaultAside from './DefaultAside'

export default {
  name: 'full',
  components: {
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    Breadcrumb,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer,
    DefaultHeaderUser,
    DefaultAside
  },
  data () {
    return {
      nav: nav.items
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label)
    }
  }
}
</script>
