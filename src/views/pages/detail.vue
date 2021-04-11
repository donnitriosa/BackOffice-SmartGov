<template>
  <div>
    <div class="card">
      <div class="card-body">
          <div class="text-center">
            <h3 class="text-center font-weight-bold">Data KTP</h3>
          </div>
        <!-- </div> -->
        <div class="row">
          <div class="w-63 marginsatu">
            
              <p class="paragraf">Nama lengkap sesuai ktp</p>
              <h4 class="font-weight-bold">Jajang Nurjaman</h4>
              <hr class="garis">

              <p class="paragraf">Alamat Lengkap</p>
              <h4 class="font-weight-bold">Jl. Cempaka Putih Timur 24</h4>
              <hr class="garis">

              <p class="paragraf">Provinsi</p>
              <h4 class="font-weight-bold">DKI Jakarta</h4>
              <hr class="garis">

              <p class="paragraf">Kota</p>
              <h4 class="font-weight-bold">Jakarta Pusat</h4>
              <hr class="garis">

              <p class="paragraf">Kecamatan</p>
              <h4 class="font-weight-bold">Cempaka Putih Timur</h4>
              <hr class="garis">

              <p class="paragraf">Kelurahan</p>
              <h4 class="font-weight-bold">Cempaka Putih Timur</h4>
              <hr class="garis">
              
              <p class="paragraf">Tempat lahir</p>
              <h4 class="font-weight-bold">Jakarta</h4>
              <hr class="garis">

              <p class="paragraf">Tanggal lahir</p>
              <h4 class="font-weight-bold">23-03-1965</h4>
              <hr class="garis">

              <p class="paragraf">Jenis Kelamin</p>
              <h4 class="font-weight-bold">Laki-laki</h4>
              <hr class="garis">

              <p class="paragraf">Agama</p>
              <h4 class="font-weight-bold">Islam</h4>
              <hr class="garis">

              <p class="paragraf">Status Perkawinan</p>
              <h4 class="font-weight-bold">Cerai Mati</h4>
              <hr class="garis">

              <p class="paragraf">Pekerjaan</p>
              <h4 class="font-weight-bold">wiraswasta</h4>
              <hr class="garis">

              <p class="paragraf">Kewarganegaraan</p>
              <h4 class="font-weight-bold">Indonesia</h4>
              <hr class="garis">
            
          </div>
          <div class="w-25 margindua">
            <div class="card rounded-top">
              <div class="card-header rounded-top text-white">
                <h4>Photo Diri</h4>
              </div>
              <div class="card-body">
                <p class="paragraf">photo 2x3</p>
                <img src="/img/foto/paspoto.jpeg" width="240" alt="paspoto">
              </div>
            </div>
            <div class="card rounded-top">
              <div class="card-header rounded-top text-white">
                <h4>Dokumen Pendukung</h4>
              </div>
              <div class="card-body">
                <p class="paragraf">kartu Keluarga</p>
                <img src="/img/foto/kk.jpeg" width="240" alt="kk">
                <hr>
                <p class="paragraf">Surat Pengantar RT/RW</p>
                <img src="/img/foto/gambar.png" width="100" alt="kk">
              </div>
            </div>
            <div class="card rounded-top">
              <div class="card-header rounded-top text-white">
                <h4>Verifikasi</h4>
              </div>
              <div class="card-body">
                <p class="paragraf">TTD</p>
                <img src="/img/foto/gambar.png" width="100" alt="kk">
                <hr>
                <p class="paragraf">Finger Print</p>
                <img src="/img/foto/gambar.png" width="100" alt="kk">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Forms from '../../../../dashboard-admin/src/views/base/Forms.vue'
import Alerts from '../../../../dashboard-admin/src/views/notifications/Alerts.vue'
export default {
  components: { Alerts },
  name: 'detail',
  Forms: 'ktp'
}
</script>
