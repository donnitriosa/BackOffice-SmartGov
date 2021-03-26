<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="4">
          <CCardGroup>
            <CCard class="p-2">
              <CCardBody>
                <CForm>
                  <div class="text-center">
                    <h3>Selamat Datang!</h3>
                    <p class="text-muted">Silahkan login untuk dapat mengakses<br> Dashboard E-KTP ONLINE</p>
                  </div>
                  <div role="group" class="form-group was-validated">
                    <label for="uid-kydm88w3hv" class=""> Username </label>
                    <input id="uid-kydm88w3hv" type="email" autocomplete="email" placeholder="Masukkan Username Anda" required="required" class="form-control">
                    <!-- <small class="form-text text-muted w-100">Please enter your email.</small> -->
                  </div>
                  <div role="group" class="form-group was-validated">
                    <label for="uid-l9criebbqi" class=""> Password </label>
                    <input id="uid-l9criebbqi" type="password" autocomplete="current-password" placeholder="Masukkan Password Anda" required="required" class="form-control">
                    <!-- <small class="form-text text-muted w-100">Please enter your password.</small> -->
                  </div>

                  <CRow>
                    <CCol class="text-right">
                      <CButton color="link" class="px-0">Forgot password?</CButton>
                    </CCol>
                  </CRow>
                  <br><br><br>
                  <CRow>
                    <CCol>
                      <button type="button" class="btn btn-primary btn-lg btn-block px-4">Masuk</button>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>
