<template>
  <div>
      <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">

        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Vendors List</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><router-link to="/" href="#">Home</router-link></li>
              <li class="breadcrumb-item active">Vendors List</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->
 <!-- Main content -->  
    <section class="content">
      <div class="container-fluid">
<ul v-if="data && data.length">
    <li v-for="post of data" :key="post">
      <p><strong>{{post.business_name}}</strong></p>
      <p>{{post.business_address}}</p>
    </li>
  </ul>

        <div class="row" >
            <div class="col-md-3 col-sm-6 col-12 text-center" >
              <div class="info">
                <img class="vendorLogo mb-2" src="dist/img/logo.svg" width="40%">
                
                <h5 style="font-weight:bold; margin: 0px 0px 0px 0px !important;"></h5>
              <p style="margin: 0px 0px 0px 0px !important; font-size: 0.85rem">Town Campus, University of Uyo</p>
              <p style="margin: 0px 0px 0px 0px !important; font-size: 0.85rem">Akwa-Ibom State</p>
              </div>
            </div>
        </div>

        
      </div>
    </section>
    </div>


    </div>
</template>

<script>

import axios from "axios";

export default {
  
  data() {
    return {
      data: [],
      
    }
  },

  // Fetches data when the component is created.
  created() {
    axios.get(`https://admin.storehouse.ng/api/vendors`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.data = response.data
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
