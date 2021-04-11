const Data = [
  { nik: '1357912345', nama: 'Jajang Nurjaman', alamat: 'Jl. Cempaka Putih Timur 24,', provinsi: 'DKI Jakarta', kota: 'Jakarta Pusat', kecamatan: 'Cempaka Putih', kelurahan: 'Cempaka Putih Timur', tempatlahir: 'Jakarta', tanggallahir:'23-03-1965', jeniskelamin : 'laki-laki', agama: 'Islam', kawin: 'Cerai Mati', pekerjaan: 'wiraswasta', kewarganegaraan: 'Indonesia', Date: '15 Maret 2021', petugas:'-', status:'Diproses' },
  { nik: '1357912346', nama: 'Siti Aminah', alamat: 'Jl. Merdeka, No. 19', provinsi: 'Banten', kota: 'Serang', kecamatan: '', kelurahan: '', tempatlahir: '', jeniskelamin : '', agama: '', kawin: '', pekerjaan: '', kewarganegaraan: '', Date: '15 Maret 2021', petugas:'-', status:'Diproses' },
  { nik: '1357912357', nama: 'Udin Saefudin', alamat: 'Jl. Duku, No. 28', provinsi: 'Jawa Timur', kota: 'Surabaya', kecamatan: '', kelurahan: '', tempatlahir: '', jeniskelamin : '', agama: '', kawin: '', pekerjaan: '', kewarganegaraan: '', Date: '15 Maret 2021', petugas:'-', status:'Diproses' },
  { nik: '1357912358', nama: 'Wida Rahmawati', alamat: 'Jl. Pramuka, No. 38', provinsi: 'Jawa Tengah', kota: 'Solo', kecamatan: '', kelurahan: '', tempatlahir: '', jeniskelamin : '', agama: '', kawin: '', pekerjaan: '', kewarganegaraan: '', Date: '15 Maret 2021', petugas:'-', status:'Ditolak' },
  { nik: '1357912359', nama: 'Muhammad Soleh', alamat: 'Jl. Anggrek, No. 47', provinsi: 'Jawa Barat', kota: 'Bandung', kecamatan: '', kelurahan: '', tempatlahir: '', jeniskelamin : '', agama: '', kawin: '', pekerjaan: '', kewarganegaraan: '', Date: '15 Maret 2021', petugas:'-', status:'Diverifikasi' },
  { nik: '1357912364', nama: 'Amalia Ariani', alamat: 'Jl. J. Sudirman, No. 56', provinsi: 'Banten', kota: 'Tangerang', kecamatan: '', kelurahan: '', tempatlahir: '', jeniskelamin : '', agama: '', kawin: '', pekerjaan: '', kewarganegaraan: '', Date: '15 Maret 2021', petugas:'M Dadang', status:'Divalidasi' },
  { nik: '1357912363', nama: 'Anggita Sukma', alamat: 'Jl. Ksatria, No. 65', provinsi: 'Jawa Barat', kota: 'Bandung', kecamatan: '', kelurahan: '', tempatlahir: '', jeniskelamin : '', agama: '', kawin: '', pekerjaan: '', kewarganegaraan: '', Date: '15 Maret 2021', petugas:'Ahmad Awaludin', status:'Selesai' },
  { nik: '1357912372', nama: 'Rahma Amanda', alamat: 'Jl. Setiabudi, No. 74', provinsi: 'Jawa Barat', kota: 'Cimahi', kecamatan: '', kelurahan: '', tempatlahir: '', jeniskelamin : '', agama: '', kawin: '', pekerjaan: '', kewarganegaraan: '', Date: '15 Maret 2021', petugas:'M Dadang', status:'Selesai' },
  { nik: '1357912371', nama: 'Maman Rahmawan', alamat: 'Jl. Mawar, No. 63', provinsi: 'Banten', kota: 'Cilegon', kecamatan: '', kelurahan: '', tempatlahir: '', jeniskelamin : '', agama: '', kawin: '', pekerjaan: '', kewarganegaraan: '', Date: '15 Maret 2021', petugas:'Heri Prasetya', status:'Selesai' },
  { nik: '1357912380', nama: 'M Rizki Smith', alamat: 'Jl. Makmur, No. 52', provinsi: 'DKI Jakarta', kota: 'Jakarta Pusat', kecamatan: '', kelurahan: '', tempatlahir: '', jeniskelamin : '', agama: '', kawin: '', pekerjaan: '', kewarganegaraan: '', Date: '15 Maret 2021', petugas:'Heri Prasetya', status:'Selesai'}
]
export default Data
// const usersData = [
//   { username: 'Samppa Nori', registered: '2012/01/01', role: 'Member', status: 'Active'},
//   { username: 'Estavan Lykos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
//   { username: 'Chetan Mohamed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
//   { username: 'Derick Maximinus', registered: '2012/03/01', role: 'Member', status: 'Pending'},
//   { username: 'Friderik Dávid', registered: '2012/01/21', role: 'Staff', status: 'Active'},
//   { username: 'Yiorgos Avraamu', registered: '2012/01/01', role: 'Member', status: 'Active'},
//   { username: 'Avram Tarasios', registered: '2012/02/01', role: 'Staff', status: 'Banned', _classes: 'table-success'},
//   { username: 'Quintin Ed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
//   { username: 'Enéas Kwadwo', registered: '2012/03/01', role: 'Member', status: 'Pending'},
//   { username: 'Agapetus Tadeáš', registered: '2012/01/21', role: 'Staff', status: 'Active'},
//   { username: 'Carwyn Fachtna', registered: '2012/01/01', role: 'Member', status: 'Active', _classes: 'table-success'},
//   { username: 'Nehemiah Tatius', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
//   { username: 'Ebbe Gemariah', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
//   { username: 'Eustorgios Amulius', registered: '2012/03/01', role: 'Member', status: 'Pending'},
//   { username: 'Leopold Gáspár', registered: '2012/01/21', role: 'Staff', status: 'Active'},
//   { username: 'Pompeius René', registered: '2012/01/01', role: 'Member', status: 'Active'},
//   { username: 'Paĉjo Jadon', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
//   { username: 'Micheal Mercurius', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
//   { username: 'Ganesha Dubhghall', registered: '2012/03/01', role: 'Member', status: 'Pending'},
//   { username: 'Hiroto Šimun', registered: '2012/01/21', role: 'Staff', status: 'Active'},
//   { username: 'Vishnu Serghei', registered: '2012/01/01', role: 'Member', status: 'Active'},
//   { username: 'Zbyněk Phoibos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
//   { username: 'Einar Randall', registered: '2012/02/01', role: 'Admin', status: 'Inactive', _classes: 'table-danger'},
//   { username: 'Félix Troels', registered: '2012/03/21', role: 'Staff', status: 'Active'},
//   { username: 'Aulus Agmundr', registered: '2012/01/01', role: 'Member', status: 'Pending'}
// ]

// // export default usersData


