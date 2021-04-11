<template>
  <div>
    <h3 class="text-bold">Resume</h3>
    <div class="row">
      <!-- <div> -->
        <div class="card w-kotak marginkiri card-pertama">
          <div class="card-body">
            <div class="row">
              <div class="col-md-7 align-self-center">
                <small class="h5 text-uppercase font-weight-bold">KTP Hilang</small>
              </div>
              <div class="col-md-5 align-self-center">
                <div class="h4 mb-0 font-weight-bold">150</div>
              </div>
            </div>            
          </div>
        </div>
        <div class="card w-kotak margintengah card-kedua">
          <div class="card-body">
            <div class="row">
              <div class="col-md-8 align-self-center">
                <small class="h5 text-uppercase font-weight-bold">Update Alamat</small>
              </div>
              <div class="col-md-4 align-self-center">
                <div class="h4 mb-0 font-weight-bold">20</div>
              </div>
            </div>            
          </div>
        </div>
        <div class="card w-kotak margintengah card-ketiga">
          <div class="card-body">
            <div class="row">
              <div class="col-md-8 align-self-center">
                <small class="h6 text-uppercase font-weight-bold">Update Pernikahan</small>
              </div>
              <div class="col-md-4 align-self-center">
                <div class="h4 mb-0 font-weight-bold">20</div>
              </div>
            </div>            
          </div>
        </div>
        <div class="card w-kotak margintengah card-keempat">
          <div class="card-body">
            <div class="row">
              <div class="col-md-8 align-self-center">
                <small class="h6 text-uppercase font-weight-bold">Update Pekerjaan</small>
              </div>
              <div class="col-md-4 align-self-center">
                <div class="h4 mb-0 font-weight-bold">20</div>
              </div>
            </div>            
          </div>
        </div>
        <div class="card w-kotak margintengah card-kelima">
          <div class="card-body">
            <div class="row">
              <div class="col-md-8 align-self-center">
                <small class="h5 text-uppercase font-weight-bold">KTP Diproses</small>
              </div>
              <div class="col-md-4 align-self-center">
                <div class="h4 mb-0 font-weight-bold">20</div>
              </div>
            </div>            
          </div>
        </div>
      <!-- </div> -->
    </div>

    <h3 class="text-bold">Permintaan KTP Baru</h3>
    <div class="card rounded-top">
      <div class="card-header rounded-top">
        <table class="table text-white table-borderless">
          <thead>
            <tr>
              <th width="350">Nama</th>
              <th width="150" >Status</th>
              <th width="180">Date</th>
              <th width="200">Disetujui oleh</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>  
      </div>

      <div class="card-body">
        <table class="table table-hover">
          <tbody>
            <tr v-for="data in getData()">
              <td width="350">{{data.nama}}</td>
              <td width="150">
                <CAlert v-if="data.status=='Diproses'" color="warning">{{data.status}}</CAlert>
                <CAlert v-else-if="data.status=='Ditolak'" color="danger">{{data.status}}</CAlert>
                <CAlert v-else-if="data.status=='Selesai'" color="success">{{data.status}}</CAlert>
                <CAlert v-else-if="data.status=='Diverifikasi'" color="info">{{data.status}}</CAlert>
                <CAlert v-else color="secondary">{{data.status}}</CAlert>
                </td>
              <td width="180">{{data.Date}}</td>
              <td width="200">{{data.petugas}}</td>
              <td class="input-group">
                <button type="button" class="btn btn-info" @click="detail(data)">
                  Lihat Data
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Forms from '../../../../dashboard-admin/src/views/base/Forms.vue'
import Alerts from '../../../../dashboard-admin/src/views/notifications/Alerts.vue'
import CTableWrapper from '../base/Table.vue'
import usersData from '../users/UsersData'

export default {
  components: { Alerts, CTableWrapper},
  name: 'ktp',
  Forms: 'ktp',
  methods: {
    getData (){
      return usersData.slice(0)
    },
    detail (data){
      if (data.nik == "1357912345") {
         this.$router.push('/detail')
      } else {
        alert("halaman selanjutnya coming soon!")
      }
    }
  }
}
</script>
