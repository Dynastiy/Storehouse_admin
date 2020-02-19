<template>
  <div>
     <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary">
    <a href="index3.html" class="brand-link">
      <img src="dist/img/logo_stretch.svg" width="60%">
    </a>
   
    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pt-4" style="color:#ffb20f; font-weight:bold">
        <div class="info">
          <p href="#" class="">Michael, Emmanuel</p>
          <p href="#" class="">ADMIN</p>
          <p href="#" class="">TOTAL REVENUE: 3,000</p>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          
          <li class="nav-item">
            <router-link to='/' class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Overview
              </p>
            </router-link>
          </li>
          <li class="nav-item has-treeview">
            <router-link to="/transactionMetrics" href="#" class="nav-link">
              <i class="nav-icon fas fa-copy"></i>
              <p>
                Analytics
                <i class="fas fa-angle-left right"></i>
              </p>
            </router-link>
          </li>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/layout/top-nav.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Top Navigation</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/layout/boxed.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Boxed</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/layout/fixed-sidebar.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Fixed Sidebar</p>
                </a>
              </li>
            </ul>
            
            <li class="nav-item">
            <router-link to='/vendorVerification' class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Vendor Verification
              </p>
            </router-link>
            </li>

            <li class="nav-item">
            <router-link to='/subscriptionActivation' class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Subscription Activation
              </p>
            </router-link>
            </li>

            <li class="nav-item">
            <router-link to='/vendorsList' class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Vendors List
              </p>
            </router-link>
            </li>

            <li class="nav-item">
            <router-link to='/customerList' class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Customer List
              </p>
            </router-link>
            </li>

            <li class="nav-item">
            <router-link to='/superUser' class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Super User
              </p>
            </router-link>
            </li>

            <!-- <li class="nav-item">
            <router-link to='/' class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Overview
              </p>
            </router-link>
            </li> -->
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
    </div>
</template>

<script>

export default {
  name: 'sideBar',
  props: {
    
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>

</style>
