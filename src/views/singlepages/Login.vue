<template>
  <div id="intro" class="c-app flex-row align-items-center bg-image shadow-2-strong">
    <div class="container">
      <!-- <div class="position-relative">
       <img class="bg obj-fit-cover" src="/img/bg.png" alt="bg">

      </div> -->
      <div class="row align-items-center">
        <div class="col-md-3 text-right">
          <img src="/logo/dashboard/dash.png" height="100" alt="logo">
          <br><br><br><br><br><br><br><br><br><br><br><br><br>
        </div>
        <div class="col-md-5">  
          <div class="row text-white">
            <h1>DASHBOARD</h1>
          </div>
          <div class="row text-white">
            <h4>Cepat, Mudah, & Transparant</h4>
          </div>
          <br><br><br><br><br><br><br>
          <div class="row text-white">
            powered by
          </div>
          <div class="row">
            <br>
          </div>
          <div class="row align-self-end">
            <div class="col-sm-">
              <img src="/img/logo.png" height="60" alt="logo">
            </div>
            <div class="col-sm-7">
              <h5 class="text-white">Kementerian Dalam Negeri </h5>
              <h6 class="text-warning">Republik Indonesia</h6>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          
          <div class="card-group">
            <div class="card">
              <div class="card-body">
                
                <form action="" v-on:keyup.enter="login">
                  <div class="text-center">
                    <h3>Selamat Datang!</h3>
                    <p class="text-muted">Silahkan login untuk dapat mengakses<br> Dashboard E-KTP ONLINE</p>
                  </div>
                  <div class="row">
                    <br>
                  </div>
                  
                  <div role="group" class="form-group">
                    <label class=""> Username </label>
                    <input :invalid="true" type="email" name="email" placeholder="Masukkan Username Anda" v-model="email" v-validate="'required|email'" :class="{'form-control': true, 'is-invalid': errors.has('email') }" required autofocus>
                    <span v-show="errors.has('email')" class="help invalid-feedback">{{ errors.first('email') }}</span>
                  </div>
                  
                  <div role="group" class="form-group">
                    <label for="uid-l9criebbqi" class=""> Password </label>
                     <input type="password" name="password" placeholder="Masukkan Password Anda" v-model="password" v-validate="'required'" :class="{'form-control': true, 'is-invalid': errors.has('password') }" required>
                    <span v-show="errors.has('password')" class="help invalid-feedback">{{ errors.first('password') }}</span>
                  </div>

                  <div class="row">
                    <div class="col text-right text-warning">
                      <a color="link" class="px-0">Forgot password?</a>
                    </div>
                  </div>
                  
                  <div class="row">
                    <br><br>
                  </div>

                  <div class="row">
                    <div class="col">
                      <button type="button" class="btn btn-primary btn-lg btn-block px-4" @click="login">Masuk</button>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  components: {
  },
  data: function () {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login () {
      let that = this
      that.$validator.validateAll().then(result => {
        if (result) {
          that.isSubmit = true
          console.log(that.email)
          console.log(that.password)
          if (that.email == "admin@satuid.id" && that.password== "Admin@5atuID") {
            localStorage.setItem('email', that.email)
            localStorage.setItem('username', 'Admin')
            this.$router.push('/dashboard')
          } else {
            alert ("Email dan Password Anda Salah!")
            that.isSubmit = false
          }
        } else {
          alert ("Silahkan Masukkan Email dan Password Anda!")
          that.isSubmit = false
        }
      })
    },
  }
}
</script>
